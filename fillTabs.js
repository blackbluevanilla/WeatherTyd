import { TAB_NOW, TAB_DETAILS } from "./constants.js";

export function fillTabNow(cityName, cityWeatherData) {
  const currentTempValue = cityWeatherData.main.temp;
  TAB_NOW.CURRENT_CITY_NAME.textContent = cityName;
  TAB_NOW.CURRENT_TEMPERATURE.textContent = `${Math.trunc(currentTempValue)}°`;
  TAB_NOW.IMG_LIKE.src = "Shape.svg";

  if (cityName === "Vaskelovo" || cityName === "Васкелово") {
    TAB_NOW.CLOUD.src = "kgl3N5t7YyI.jpg";
  } else if (cityName === "Кингисепп" || cityName === "Ивановское") {
    TAB_NOW.CLOUD.src = "wlTyS8J-K_Q.jpg";
  } else if (
    cityName === "Гагра" ||
    cityName === "Гагры" ||
    cityName === "Пицунда"
  ) {
    TAB_NOW.CLOUD.src = "b3EP48Ie3pE.jpg";
  } else {
    const cloudIcon = cityWeatherData.weather[0].icon;
    TAB_NOW.CLOUD.src = `https://openweathermap.org/img/wn/${cloudIcon}@4x.png`;
  }
}

export function fillTabDetails(cityName, cityWeatherData) {
  const currentTempValue = cityWeatherData.main.temp;
  const feelsLikeValue = cityWeatherData.main.feels_like;
  const weatherCloudsValue = cityWeatherData.weather[0].description;
  const sunriseValue = new Date(cityWeatherData.sys.sunrise * 1000);
  const sunsetValue = new Date(cityWeatherData.sys.sunset * 1000);

  TAB_DETAILS.CITY_NAME.textContent = cityName;

  switch (cityName) {
    case "Васкелово":
      TAB_DETAILS.WEATHER_CLOUDS.textContent = `Погода: Злой ветер`;
      TAB_DETAILS.TEMPERATURE.textContent = `Температура: ${Math.trunc(
        currentTempValue
      )}° люстр`;
      break;
    case "Кингисепп":
      TAB_DETAILS.WEATHER_CLOUDS.textContent = `Погода: Потный туман`;
      TAB_DETAILS.TEMPERATURE.textContent = `Температура: ${Math.trunc(
        currentTempValue
      )}° водка с веником`;
      break;
    case "Гагра":
    case "Пицунда":
      TAB_DETAILS.WEATHER_CLOUDS.textContent = `Погода: Пивной дождь`;
      TAB_DETAILS.TEMPERATURE.textContent = `Температура: ${Math.trunc(
        currentTempValue
      )}° банок пива`;
      break;
    default:
      TAB_DETAILS.WEATHER_CLOUDS.textContent = `Weather:  ${
        weatherCloudsValue[0].toUpperCase() + weatherCloudsValue.slice(1)
      }`;
      TAB_DETAILS.TEMPERATURE.textContent = `Температура: ${Math.trunc(
        currentTempValue
      )}°`;
  }

  TAB_DETAILS.FEELS_LIKE.textContent = `Ощущается как:  ${Math.trunc(
    feelsLikeValue
  )}°`;

  TAB_DETAILS.SUNRISE.textContent = `Восход: ${correctTime(sunriseValue)}`;
  TAB_DETAILS.SUNSET.textContent = `Закат:  ${correctTime(sunsetValue)}`;
}

function correctTime(timeValue) {
  const hours = timeValue.getHours();
  const minutes = timeValue.getMinutes();
  const hourValue = hours < 10 ? "0" + hours : hours;
  const minutesValue = minutes < 10 ? "0" + minutes : minutes;
  return `${hourValue}:${minutesValue}`;
}
