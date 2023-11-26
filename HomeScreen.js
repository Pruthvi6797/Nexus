import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { Picker } from '@react-native-picker/picker';
import { Image } from 'react-native';
import { StatusBar } from 'react-native';
import HomeScreenStyles from './HomeScreenStyles';



import styles from './HomeScreenStyles';

// Import the Scooter and Uber icons
import ScooterIcon from 'C:/Users/marsh/git/Nexus/assets/electric-scooter.png';
import UberIcon from 'C:/Users/marsh/git/Nexus/assets/car-placeholder.png';

const HomeScreen = ({ navigation }) => {
    const [currentLocation, setCurrentLocation] = useState('');
    const [destination, setDestination] = useState('');
    const [markers, setMarkers] = useState([]);
    const [directions, setDirections] = useState([]);
    const [distance, setDistance] = useState(0); // State for distance
    const [region, setRegion] = useState({
        latitude: 39.1031,
        longitude: -84.5120,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const [transportMode, setTransportMode] = useState('driving');
    const [estimatedCost, setEstimatedCost] = useState(null);
    const [estimatedDuration, setEstimatedDuration] = useState(null); // State for estimated duration
    const busFare = 2.50; // Flat fare for bus

    // Sample bus station data
    const [busStations, setBusStations] = useState([
        { name: "UC Main Campus", latitude: 39.1329, longitude: -84.5160 },
        { name: "Downtown Station 1", latitude: 39.1015, longitude: -84.5120 },
        { name: "UC Blue Ash", latitude: 39.2465, longitude: -84.3760 },
        // Add other stations similarly
    ]);

    const getPickerItemColor = (value) => {
        return transportMode === value ? "#FF0000" : "rgba(255, 0, 0, 0.3)"; // Red color for selected, transparent red for others
    };

    // Decoding function for polyline
    const decodePolyline = (encoded) => {
        if (!encoded) {
            return [];
        }
        let poly = [];
        let index = 0, len = encoded.length;
        let lat = 0, lng = 0;
        while (index < len) {
            let b, shift = 0, result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            let dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lat += dlat;
            shift = 0;
            result = 0;
            do {
                b = encoded.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            let dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lng += dlng;
            let p = { latitude: (lat / 1E5), longitude: (lng / 1E5) };
            poly.push(p);
        }
        return poly;
    };

    // Function to fetch coordinates from an address
    const fetchCoordinates = async (address) => {
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAMGkHTlQ9lIe-XVVwVLx21PXRdxLAEHB4`);
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                const location = data.results[0].geometry.location;
                return { latitude: location.lat, longitude: location.lng };
            }
        } catch (error) {
            console.error('Error fetching coordinates:', error);
        }
    };

    // Function to find the nearest bus station
    const findNearestBusStation = (location) => {
        // Implement logic to find the nearest bus station to the given location
        let nearestStation = null;
        let minDistance = Number.MAX_VALUE;
        for (const station of busStations) {
            const stationDistance = calculateDistance(location, station);
            if (stationDistance < minDistance) {
                minDistance = stationDistance;
                nearestStation = station;
            }
        }
        return nearestStation;
    };

    // Function to calculate distance between two coordinates (in kilometers)
    const calculateDistance = (coord1, coord2) => {
        const lat1 = coord1.latitude;
        const lon1 = coord1.longitude;
        const lat2 = coord2.latitude;
        const lon2 = coord2.longitude;
        const radlat1 = (Math.PI * lat1) / 180;
        const radlat2 = (Math.PI * lat2) / 180;
        const theta = lon1 - lon2;
        const radtheta = (Math.PI * theta) / 180;
        let distance = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        distance = Math.acos(distance);
        distance = (distance * 180) / Math.PI;
        distance = distance * 60 * 1.1515;
        distance = distance * 1.609344; // Convert to kilometers
        return distance;
    };

    // Function to fetch directions including bus stations as waypoints
    const fetchDirections = async (startLoc, destinationLoc) => {
        const startPoint = `${startLoc.latitude},${startLoc.longitude}`;
        const endPoint = `${destinationLoc.latitude},${destinationLoc.longitude}`;

        try {
            let waypoints = '';
            if (transportMode === 'transit') {
                const nearestBusStationStart = findNearestBusStation(startLoc);
                const nearestBusStationDestination = findNearestBusStation(destinationLoc);

                if (nearestBusStationStart && nearestBusStationDestination) {
                    waypoints = `${nearestBusStationStart.latitude},${nearestBusStationStart.longitude}|${nearestBusStationDestination.latitude},${nearestBusStationDestination.longitude}`;
                }
            }

            const response = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startPoint}&destination=${endPoint}&waypoints=optimize:true|${waypoints}&mode=${transportMode}&key=AIzaSyAMGkHTlQ9lIe-XVVwVLx21PXRdxLAEHB4`);
            const data = await response.json();
            if (data.routes.length) {
                const points = decodePolyline(data.routes[0].overview_polyline.points);
                setDirections(points);

                const distanceValue = data.routes[0].legs[0].distance.value; // distance in meters
                setDistance(distanceValue / 1000); // convert to kilometers

                // Set estimated duration
                if (data.routes[0].legs[0].duration && data.routes[0].legs[0].duration.text) {
                    setEstimatedDuration(data.routes[0].legs[0].duration.text);
                } else {
                    setEstimatedDuration(null); // clear estimated duration if not available
                }
            }
        } catch (error) {
            console.error('Error fetching directions:', error);
        }
    };

    // Function to generate scooter markers
    const generateScooterMarkers = () => {
        const scooterMarkers = [];
        for (let i = 0; i < 10; i++) { // Add 10 scooter markers (you can adjust the number)
            const latitude = region.latitude + (Math.random() - 0.5) * 0.2; // Adjust the range as needed
            const longitude = region.longitude + (Math.random() - 0.5) * 0.2; // Adjust the range as needed
            scooterMarkers.push({ latitude, longitude });
        }
        return scooterMarkers;
    };

    // Function to generate Uber marker
    const generateUberMarker = () => {
        if (markers.length >= 2) {
            const latitude = (markers[0].latitude + markers[1].latitude) / 2;
            const longitude = (markers[0].longitude + markers[1].longitude) / 2;
            return { latitude, longitude };
        }
        return null;
    };
    

    // State for scooter markers and Uber marker
    const [scooterMarkers, setScooterMarkers] = useState(generateScooterMarkers());
    const [uberMarker, setUberMarker] = useState(generateUberMarker());

    // Function to regenerate scooter markers (you can call this when needed)
    const regenerateScooterMarkers = () => {
        const newScooterMarkers = generateScooterMarkers();
        setScooterMarkers(newScooterMarkers);
    };

    useEffect(() => {
        const handleLocationUpdate = async () => {
            if (currentLocation && destination) {
                const currentCoords = await fetchCoordinates(currentLocation);
                const destinationCoords = await fetchCoordinates(destination);
                if (currentCoords && destinationCoords) {
                    setMarkers([currentCoords, destinationCoords]);
                    setUberMarker(generateUberMarker()); // Generate Uber marker when locations are set
                    await fetchDirections(currentCoords, destinationCoords);
                    handleEstimateCost();
                }
            }
        };

        // Generate scooter markers and Uber marker when the component mounts
        regenerateScooterMarkers();
        setUberMarker(generateUberMarker());

        handleLocationUpdate();

        navigation.setOptions({
            headerRight: () => (
                <Icon 
                    name="gear" 
                    size={25} 
                    color="#FF0000"
                    style={{ marginRight: 10 }}
                    onPress={() => navigation.navigate('Settings')}
                />
            ),
        });
    }, [currentLocation, destination, transportMode]);

    // Function to calculate Uber cost
    const calculateUberCost = () => {
        const baseRate = 5;
        const perMileRate = 2;
        const miles = distance * 0.621371; // convert kilometers to miles
        return baseRate + (perMileRate * miles);
    };

    // Function to calculate Scooter cost
    const calculateScooterCost = () => {
        const ratePerMile = 2.40; // Cost per mile for scooter
        const miles = distance * 0.621371; // Convert kilometers to miles
        return ratePerMile * miles;
    };

    // Function to handle estimating the cost
    const handleEstimateCost = () => {
        let cost = 0;
        switch (transportMode) {
            case 'uber':
                cost = calculateUberCost();
                break;
            case 'scooter':
                cost = calculateScooterCost();
                break;
            case 'transit':
                cost = busFare;
                break;
            // Handle other transport modes if necessary
        }
        setEstimatedCost(cost);
        
    };

    return (
        <View style={HomeScreenStyles.container}>
        <StatusBar backgroundColor="#000000" barStyle="light-content" />
        <TextInput
            style={HomeScreenStyles.input}
            placeholder="Current Location"
            placeholderTextColor="#FF0000" // Set placeholder text color to red
            onChangeText={text => setCurrentLocation(text)}
            value={currentLocation}
        />

        <TextInput
            style={HomeScreenStyles.input}
            placeholder="Destination"
            placeholderTextColor="#FF0000" // Set placeholder text color to red
            onChangeText={text => setDestination(text)}
            value={destination}
        />
            <View style={styles.modeSelector}>
                <Text style={styles.modeText}>Select Transport Mode:</Text>
                <Picker
                    selectedValue={transportMode}
                    style={styles.smallModePicker}
                    onValueChange={(itemValue) => setTransportMode(itemValue)}
                    itemStyle={{ color: transportMode ? "#FF0000" : "#000" }} // Red color for selected item
                >
                    <Picker.Item label="Drive" value="driving" color={getPickerItemColor("driving")} />
                    <Picker.Item label="Walk" value="walking" color={getPickerItemColor("walking")}/>
                    <Picker.Item label="Bike" value="bicycling" color={getPickerItemColor("bicycling")}/>
                    <Picker.Item label="Bus" value="transit" color={getPickerItemColor("transit")}/>
                    <Picker.Item label="Uber" value="uber" color={getPickerItemColor("uber")}/>
                    <Picker.Item label="Scooter" value="scooter" color={getPickerItemColor("scooter")}/>
                </Picker>
            </View>

            {estimatedCost !== null && (
                <Text style={styles.estimatedCost}>
                    Estimated Cost: ${estimatedCost.toFixed(2)}
                </Text>
            )}

            {estimatedDuration !== null && (
                <Text style={styles.estimatedDuration}>
                    Estimated Duration: {estimatedDuration}
                </Text>
            )}

            <MapView style={styles.map} region={region}>
                {markers.map((marker, index) => (
                    <Marker coordinate={marker} key={index} />
                ))}

                {directions.length > 0 && (
                    <Polyline
                        coordinates={directions}
                        strokeColor="#000"
                        strokeWidth={3}
                    />
                )}

                {transportMode === 'uber' && uberMarker && (
                    <Marker
                        coordinate={uberMarker}
                    >
                        <Image source={UberIcon} style={{ width: 30, height: 30 }} />
                    </Marker>
                )}

                {transportMode === 'scooter' && scooterMarkers.map((scooterMarker, index) => (
                    <Marker
                        key={index}
                        coordinate={scooterMarker}
                    >
                        <Image source={ScooterIcon} style={{ width: 30, height: 30 }} />
                    </Marker>
                ))}

                {transportMode === 'transit' && busStations.map((station, index) => (
                    <Marker
                        key={index}
                        coordinate={{ latitude: station.latitude, longitude: station.longitude }}
                        title={station.name}
                    >
                        <Image source={require('C:/Users/marsh/git/Nexus/assets/bus-stop.png')} style={{ width: 30, height: 30 }} />
                    </Marker>
                ))}
            </MapView>
        </View>
    );
};

export default HomeScreen;
