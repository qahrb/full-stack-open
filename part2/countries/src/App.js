import React , { useEffect, useState} from 'react';
import axios from 'axios';

const Input = ({ search, handleSearchChange }) => {
  return(
    <div>
      <label>find countries</label>
      <input 
        value={search}
        onChange={handleSearchChange}
      />
    </div>
  )
}

const Countries = ({countries, search, handlesShow, weather, setWeather}) => {
  const result = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
  const api_key = process.env.REACT_APP_API_KEY

  let capital = ''

  const hook = () => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
      .then(response => {
        setWeather(response.data)
      })
  }

  useEffect(hook, [search])

  try {
    capital = result[0].capital
  }
  catch{
    capital = ''
  }

  if(result.length > 10){
    return(
      <div>Too many matches, specify another filter</div>
    )
  }
  if(result.length === 1 && Object.keys(weather).includes("request")){

    

    return(
      <div>
        <h1>{result[0].name}</h1>
        <p>capital {result[0].capital}</p>
        <p>population {result[0].population}</p>
        <h3>Languages</h3>
        {result[0].languages.map((language) => <li>{language.name}</li>)}
        <br/>
        <img width="100px" alt="flag" src={result[0].flag}/>
        <h3>Weather in {result[0].capital}</h3>
        <p>temperature: {weather.current.temperature}</p>
        <img alt="weather icon" src={weather.current.weather_icons[0]}/>
        <p>Wind: {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
      </div>
    )
  }
  return(
    <div>
        {result.map((country) => {
          return(
          <div>
            <span>{country.name} {country.number}</span> 
            <button onClick={() => handlesShow(country.name)}>show</button>
          </div>
          )
        } )}
      </div>
  )

  }

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ search, setSearch ] = useState('')
  const [ weather, setWeather] = useState({})

  

  const hook = () =>{
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setCountries(response.data)
      })
  }
  
  useEffect(hook, [])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const handlesShow = (country) => {
    setSearch(country)
  }

  return (
    <div>
      <Input
        search = {search}
        handleSearchChange = {handleSearchChange}
      />
      <Countries 
        countries={countries}
        search = {search}
        handlesShow = {setSearch}
        weather = {weather}
        setWeather = {setWeather}
      />
    </div>
  );
}

export default App;
