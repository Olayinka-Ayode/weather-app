import arrow from './assets/arrow-left.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';

const List = () => {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});

    const api = {
        key: "ef6195f9d20651f17f1b1d6d8661e562",
        base: "https://api.openweathermap.org/data/2.5/"
    }

    console.log(weather)

    const searchPressed = () => {
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
            setWeather(result);
        })
    }

    return (
            <div className="content-list">
                <Link to="/">
                    <div className="back-arrow flex items-center justify-start pl-10 pt-5 md:pt-0">
                        <img src={arrow} alt="arrow" className='flex mr-4 arrow' /> 
                        <p className='font-Kadwa font-semibold'>Home</p>
                    </div>
                </Link>
                <div className="input-box flex items-start justify-center pt-20">
                    <div className="input w-96 h-12 flex items-center justify-start rounded-3xl overflow-none">
                        <button onClick={searchPressed} className='w-min h-min ml-10 cursor-pointer'>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </button>
                        <input type="text" className='bg-transparent w-full outline-none px-10 text-lg font-semibold' placeholder='Enter City Here . . . ' onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => e.key === "Enter" ? searchPressed() : ""}/>
                    </div>
                </div>

                {typeof weather.main != "undefined" ?
                <div className="weather-list flex flex-wrap justify-center md:mt-24">
                    <div className="mt-12 mx-10 flex items-center justify-between text-white weather-group py-8 px-4 rounded-2xl md:w-1/4 w-full">
                        <h1 className='font-Kadwa text-4xl font-bold'>{weather.name}</h1>
                        <p className='font-Kadwa text-4xl font-bold'>{weather.main.temp}&deg;</p>
                    </div>
                </div>
                :
                ""
                }
            </div>
    );
}
 
export default List;