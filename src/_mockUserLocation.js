import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: -43.18649816275125 + increment * tenMetersWithDegrees,
            latitude: -22.952161204911867 + increment * tenMetersWithDegrees
        }
    }
};

let counter = 0;  

setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchID: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000);