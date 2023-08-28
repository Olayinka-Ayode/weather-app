import arrow from './assets/arrow-left.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const List = () => {
    return (
        <body>
            <div className="content-list">
                <Link to="/">
                    <div className="back-arrow flex items-center justify-start pl-10 pt-5 md:pt-0">
                        <img src={arrow} alt="arrow" className='flex mr-4 arrow' /> 
                        <p className='font-Kadwa font-semibold'>Home</p>
                    </div>
                </Link>
                <div className="input-box flex items-start justify-center pt-20">
                    <div className="input w-96 h-12 flex items-center justify-start rounded-3xl overflow-none">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='pl-10'/>
                        <input type="text" className='bg-transparent w-full outline-none px-10 text-lg font-semibold' />
                    </div>
                </div>
                <div className="weather-list flex flex-wrap justify-center">
                    <div className="mt-12 mx-10 flex items-center justify-between text-white weather-group py-8 px-3 rounded-2xl md:w-1/4 w-full">
                        <h1 className='font-Kadwa text-4xl font-bold'>Cairo</h1>
                        <p className='font-Kadwa text-4xl font-bold'>38&deg;</p>
                    </div>
                </div>
            </div>
        </body>
    );
}
 
export default List;