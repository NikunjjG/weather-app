import axios from "axios";
import Cookies from "js-cookie";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export async function fetchWeatherData(setWeatherData){
    try {
      const city = "New Delhi";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      setWeatherData(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

export async function fetchLocationData(setWeatherData, location){
    let response; 
    try {
        if(Cookies.get(location) != null){
            setWeatherData(JSON.parse(Cookies.get(location)))
            console.log('From cookies')
        } else {
            response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
            );
            setWeatherData(response.data);

            const inTenMin = 1/144;
            const serializedData = JSON.stringify({
                name: response.data.name,
                main:{
                    temp: response.data.main.temp,
                    feels_like: response.data.main.feels_like,
                    humidity: response.data.main.humidity,
                    pressure: response.data.main.pressure,
                },  
                weather: [{main: response.data.weather[0].main}],
                wind: {
                    speed:response.data.wind.speed
                },
            });

            Cookies.set(response.data.name, serializedData, { expires: inTenMin });
        }
    } catch (err) {
        console.log(err.message);
    }
};
