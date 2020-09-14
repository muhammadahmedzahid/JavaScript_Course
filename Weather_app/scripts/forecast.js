// // Whenever you use API then most of the time you first make an account that will return an API key.
// // Which is basically an identify for the API provider.
// // Then we have to look up on the functions which they are offering.
// // Query parameter: when we have an ? at the end of the URL it means we are 
// // adding query parameter with the request.

// const key = '2eCLW7UgN5T0lFWIAn4CNZ8AOdV5pGM7';

// // get weather information

// const getWeather = async (id) => {
//     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//     const query = `${id}?apikey=${key}`;

//     const response = await fetch(base + query);
//     const data = await response.json();

//     return data[0];
// }

// // get city information
// const getCity = async (city) => {

//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     // adding the further query
//     const query = `?apikey=${key}&q=${city}`;

//     const response = await fetch(base + query);
//     const data = await response.json();

//     return data[0];
// };

// // the below code we put in the app.js file.
// // getCity('daska').then(data => {
// //     return getWeather(data.Key);
// // }).then(data => {
// //     console.log(data);
// // }).catch(err => console.log(err));

// we comment out everything and we use the OOP which we later covered.

class Forecast{
    constructor(){
        this.key = '2eCLW7UgN5T0lFWIAn4CNZ8AOdV5pGM7';
        this.weatherURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityDebts = await this.getCity(city);
        const weather = await this.getWeather(cityDebts.Key);
        return {cityDebts, weather};
    };
    async getCity(city){

        // adding the further query
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURL + query);
        const data = await response.json();
        return data[0];
    };
    async getWeather(id) {
    const query = `${id}?apikey=${this.key}`;
    const response = await fetch(this.weatherURL + query);
    const data = await response.json();

    return data[0];
    };

}