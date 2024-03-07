<template>
<div id="app" style="display:flex; flex-direction: column; justify-content: center; align-items: center; width: 100%; font-family: Arial, sans-serif;">
    <h1 style="color: #3498db; font-size: 20px; margin-bottom: 10px;margin-top: 10px;">Weather Search</h1>
    <div style="block">
        <input type="text" placeholder="Enter city name" style="padding: 10px; font-size: 16px; border-radius: 5px; border: 1px solid #ccc; margin-bottom: 10px; margin-right: 10px;" v-model="city">
        <button style="background-color: #3498db; color: #fff; padding: 8px 16px; font-size: 16px; border: none; border-radius: 5px; cursor: pointer;" @click="searchW">Search</button>
    </div>   
    <div style="margin-top: 20px;" v-if="weatherDate">
        <p>{{ weatherDate.location.name }}</p>
    </div>
</div>


</template>   
<script>
import service from '@/service';
export default{
    name:'HomePage',
    data(){
        return {
            city:'',
            weatherDate: null,
        };

    },
    methods:{
        searchW(){
            if (this.city){
                service.getWeather(this.city)
                .then(response => {
                    this.weatherDate=response.date
                }
                )
                .catch (error => {
                    console.log('error', error)
                }
                )
            }
        }
    }

}
</script>