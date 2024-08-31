let cityInput = document.getElementById('city_input'),
	searchBtn = document.getElementById('searchBtn'),
	api_key = '54d516cd460391fcc26c2c4fbef928d2';

function getCity() {
	let cityName = cityInput.value.trim();
	cityInput.value = '';
	if (!cityName) return;
	let GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${api_key}`;
	fetch(GEOCODING_API_URL)
		.then((res) => res.json())
		.then((data) => {
			let { name, lat, lon, country, state } = data[0];
			getWeatherDetails(name, lat, lon, country, state);
		})
		.catch(() => {
			alert(`Failed to fetch coordinates of ${cityName}`);
		});
}

searchBtn.addEventListener('click', getCity);
