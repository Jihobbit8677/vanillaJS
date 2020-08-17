const weather = document.querySelector(".js-weather");

const API_KEY = "9def743457802334dff8a01bd2401f4d";
const COORDS = "coords";

getWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const temperature = json.main.temp;
      const place = json.name;
      console.log(json);
      weather.innerText = `${temperature} @ ${place}`;
    });
};

saveCoords = (coordsObj) => {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
};

handleGeoSuccess = (position) => {
  const latitude = position.coords.latitude; /*inside obj called coords*/
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude /* obj key & value same*/,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
};

handleGeoError = () => {
  console.log("Can't access geo location");
};

askForCoords = () => {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
};

loadCoords = () => {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
};

init = () => {
  loadCoords();
};

init();
