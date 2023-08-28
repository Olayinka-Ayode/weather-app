import logo from './assets/cloud.svg'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
      <div className="App flex items-center justify-center flex-col relative">
      <img src={logo} alt="weather logo with sun and clouds" />
      <h2 className='font-Kadwa text-4xl font-bold'>Weather</h2>
      <button className='button absolute bottom-10 text-white font-bold text-2xl font-Kadwa px-10 py-5 cursor-pointer overflow-hidden hover:text-black hover:bg-skyBlue'>
        <Link to='/list'>Start</Link>
      </button>
    </div>
    );
}
 
export default Home;