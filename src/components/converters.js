const kelvinToCelsius = (temp) => `${(temp - 273.15).toFixed(0)}°C`;

const kelvinToFarenheit = (temp) => `${((temp - 273.15) * (9 / 5) + 32).toFixed(0)}°F`;

export { kelvinToCelsius, kelvinToFarenheit };
