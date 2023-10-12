import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { Picker } from '@react-native-picker/picker';

import styles from './HomeScreenStyles'; 

const HomeScreen = ({ navigation }) => {
    const [currentLocation, setCurrentLocation] = useState('');
    const [destination, setDestination] = useState('');
    const [markers, setMarkers] = useState([]);
    const [directions, setDirections] = useState([]);
    const [timeEstimate, setTimeEstimate] = useState(null);
    const [region, setRegion] = useState({
        latitude: 39.1031,
        longitude: -84.5120,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [mode, setMode] = useState('driving');

    const decodePolyline = str => {
        let index = 0, lat = 0, lng = 0, coordinates = [], shift = 0, result = 0, byte = null, latitude_change, longitude_change, factor = Math.pow(10, 5);
        while (index < str.length) {
            byte = null;
            shift = 0;
            result = 0;
            do {
                byte = str.charCodeAt(index++) - 63;
                result |= (byte & 0x1F) << shift;
                shift += 5;
            } while (byte >= 0x20);
            latitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lat += latitude_change;

            shift = 0;
            result = 0;
            do {
                byte = str.charCodeAt(index++) - 63;
                result |= (byte & 0x1F) << shift;
                shift += 5;
            } while (byte >= 0x20);
            longitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lng += longitude_change;

            coordinates.push({ latitude: lat / factor, longitude: lng / factor });
        }
        return coordinates;
    };

    const fetchCoordinates = async address => {
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

    const fetchDirections = async (startLoc, destinationLoc) => {
        const startPoint = `${startLoc.latitude},${startLoc.longitude}`;
        const endPoint = `${destinationLoc.latitude},${destinationLoc.longitude}`;
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startPoint}&destination=${endPoint}&mode=${mode}&key=AIzaSyAMGkHTlQ9lIe-XVVwVLx21PXRdxLAEHB4`);
            const data = await response.json();
            if (data.routes.length) {
                const points = decodePolyline(data.routes[0].overview_polyline.points);
                setDirections(points);

                // Set the time estimate
                const duration = data.routes[0].legs[0].duration.text;
                setTimeEstimate(duration);
            }
        } catch (error) {
            console.error('Error fetching directions:', error);
        }
    };

    useEffect(() => {
        const handleLocationUpdate = async () => {
            if (currentLocation) {
                const currentCoords = await fetchCoordinates(currentLocation);
                if (currentCoords) {
                    setRegion({
                        ...region,
                        latitude: currentCoords.latitude,
                        longitude: currentCoords.longitude,
                    });
                }
            }
            
            if (currentLocation && destination) {
                const currentCoords = await fetchCoordinates(currentLocation);
                const destinationCoords = await fetchCoordinates(destination);
                if (currentCoords && destinationCoords) {
                    setMarkers([currentCoords, destinationCoords]);
                    fetchDirections(currentCoords, destinationCoords);
                }
            }
        };

        handleLocationUpdate();

        navigation.setOptions({
            headerRight: () => (
                <Icon 
                    name="gear" 
                    size={25} 
                    color="#000"
                    style={{ marginRight: 10 }}
                    onPress={() => navigation.navigate('Settings')}
                />
            ),
        });
    }, [currentLocation, destination, navigation, mode]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Nexus!</Text>
    
            <TextInput 
                style={[styles.input, { backgroundColor: 'white', color: 'black'}]}
                value={currentLocation}
                onChangeText={setCurrentLocation}
                placeholder="Current Location"
            />
    
            <TextInput
                style={[styles.input, { backgroundColor: 'white', color: 'black'}]}
                value={destination}
                onChangeText={setDestination}
                placeholder="Destination"
            />
    
            <View style={styles.modeSelector}>
                <Text style={styles.modeText}>Select Mode:</Text>
                <Picker
                    selectedValue={mode}
                    style={styles.smallModePicker}
                    onValueChange={(itemValue) => setMode(itemValue)}
                >
                    <Picker.Item label="Drive" value="driving" />
                    <Picker.Item label="Walk" value="walking" />
                    <Picker.Item label="Bike" value="bicycling" />
                    <Picker.Item label="Bus" value="transit" />
                </Picker>
            </View>
    
            <View style={styles.timeEstimateContainer}>
                <Text style={styles.timeEstimate}>Estimated time: {timeEstimate}</Text>
            </View>
    
            <MapView 
                style={styles.map} 
                region={region}
            >
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
            </MapView>
        </View>
    );
};

export default HomeScreen;
