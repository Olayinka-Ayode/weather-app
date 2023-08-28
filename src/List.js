import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus, faCloud, faSun, faWind, faCloudBolt, faCloudShowersHeavy, faCloudRain, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const List = () => {
    const [search, setSearch] = useState("");
    const [weatherValue, setWeatherValue] = useState({});

    const api = {
        key: "ef6195f9d20651f17f1b1d6d8661e562",
        base: "https://api.openweathermap.org/data/2.5/"
    }

    let weatherDesc = "Siuu";
    let weatherIcon = "Siuu";

    
    // if(typeof weatherValue.weather === "undefined"){
        //    weatherDesc = "Undefined" 
    // }else{
    //     weatherDesc = weatherValue.weather[0].main
    // }
    
    typeof weatherValue.weather === "undefined" ? weatherDesc = "Undefined" : weatherDesc = weatherValue.weather[0].main;
    typeof weatherValue.weather === "undefined" ? weatherDesc = "Undefined" : weatherIcon = `https://openweathermap.org/img/wn/${weatherValue.weather[0].icon}@2x.png`;
    
    const searchPressed = () => {
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
            setWeatherValue(result);
        })
    }

    console.log(weatherValue)

    return (
            <div className="content-list">
                <div className="input-box flex items-start justify-center pt-20">
                    <div className="input w-96 h-12 flex items-center justify-start rounded-3xl overflow-none">
                        <button onClick={searchPressed} className='w-min h-min ml-10 cursor-pointer'>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </button>
                        <input type="text" className='bg-transparent w-full outline-none px-10 text-lg font-semibold' placeholder='Enter City Here . . . ' onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => e.key === "Enter" ? searchPressed() : ""}/>
                    </div>
                </div>

                {typeof weatherValue.main  != "undefined" && typeof weatherValue.weather != "undefined" ?
                <div className="weather-list flex flex-wrap justify-center md:mt-24">
                    <div className="mt-12 mx-10 flex items-center justify-between text-white weather-group px-4 rounded-2xl md:w-1/4 w-full">
                        <div className="text flex flex-col justify-center pt-8">
                            <h1 className='font-Kadwa text-4xl font-bold pr-3'>{weatherValue.name}</h1>
                            <img src={weatherIcon} alt="" />
                            <p className='font-Kadwa text-xl font-light opacity-70 pb-4'>{weatherDesc}</p>
                        </div>
                        <div className="img flex flex-col items-end justify-center">
                            <p className='font-Kadwa text-4xl font-bold p-2'>{weatherValue.main.temp}&deg;</p>
                            <FontAwesomeIcon icon={faPlus} className='text-black cursor-pointer font-bold pr-2' />
                        </div>
                    </div>
                </div>
                :
                ""
                }
            </div>
    );
}
 
export default List;