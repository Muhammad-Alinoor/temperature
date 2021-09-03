const api_key = `9af3c97dba8836758635aaf194d00fe9`;


const search = () => {
    const city = document.getElementById("inputted-city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}
const displayTemperature = temperature => {
    console.log(temperature)
}
