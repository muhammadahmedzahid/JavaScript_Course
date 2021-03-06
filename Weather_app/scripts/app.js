// Accu Weather API is the free API.

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();
// console.log(forecast);
const updateUI = (data) => {
    console.log(data);
    // const cityDets = data.cityDets;
    // const weather = data.weather;
    // De-structure: there is an new way to define the above two lines 
    // in a simpler way which has the same result.
    const { cityDebts, weather } = data;

    // update details template
    console.log('cityDebts...',cityDebts);
    details.innerHTML = `
    <h5 class="my-3">${data.cityDebts.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;

    // update the night/day & icon images

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // let timeSrc = null;
    // if(weather.IsDayTime){
    //     timeSrc = 'img/day.svg';
    // }else{
    //     timeSrc = 'img/night.svg';
    // }

    // The above if/else statement we can write also as Ternary Operator.
    // Ternary Operator works like if/else  it returns true or false.
    // const result = condition ? 'value 1' : 'value 2';
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    time.setAttribute('src', timeSrc);

    // remove the d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
}

// const updateCity = async (city) => {
//     const cityDets = await getCity(city);
//     const weather = await getWeather(cityDets.Key);

//     return {
//         cityDets: cityDets,
//         weather: weather
//     };

// };
// the above code we comment after learning of the OOP.


cityForm.addEventListener('submit' ,e => {

    // prevent default action

    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update the UI with new city
    
    forecast.updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

    // set local storage
    localStorage.setItem('city', city);
});

if(localStorage.getItem('city')){
    forecast.updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(err => console.log(err));
}