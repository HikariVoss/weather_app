const googleMapsAPIkey = 'AIzaSyAqVOj9jeMQY4bDQZd07NWb7TQQgoLVV-0';


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCity);
}
else {
    console.log("geolocation is not supported by this browser.")
}

function getCity(position){

    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapsAPIkey}`).then((response) => response.json()).then((data) => {
        const city = data.results[0].address_components.find((component) => component.types.includes("postal_town")).long_name;
        console.log(`Your city is ${city}.`);
        }).catch((mapError) => console.log(mapError));

        
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,showers,snowfall,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`).then(res => res.json()).then(data => {
        console.log(data)
    }).catch((error) => console.log(error));
}

class ForcastDiv {
    constructor(forcast) {
    }
    html() {
        string = ``
        return string
    }
}