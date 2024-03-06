# weather_app
weather app using custom hand-drawn assets and weatherstack api

## API
I'm going to use the open-meteo API which gives free forcasts for personal use, then to find the user city name I will use the google maps API. 
In order for the user to get weather at locations other than their current location I will use the google maps API to get the desired coordinates.

To update the forcast elements in the html doc, I will use a JS class to that takes the forcast data and returns a string, to use for the inner HTML.
