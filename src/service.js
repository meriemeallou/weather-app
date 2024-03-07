import axios from 'axios';


export default {
    async getWeather(city){
        return  await axios.get(`http://api.weatherapi.com/v1/search.json?key=6d2a1df86b854703940141701240703&q=${city}`)
    }
}