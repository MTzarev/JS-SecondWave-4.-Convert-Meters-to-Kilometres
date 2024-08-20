function convertMtoKm(distance) {
    let distanceInKM = distance/1000;
    let distanceM = distanceInKM.toFixed(3);
    let miles = (distanceInKM * 0.6214).toFixed(2);
    console.log(`${distance} meters is equal to ${distanceM} kilometers.`);
    console.log(`${distanceM} kilometers is equal to ${miles} miles.`);

}
convertMtoKm(798);
