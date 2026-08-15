import { Link } from 'react-router-dom';
import dora from '../assets/image.png'

function Header() {
    return(
        <>
        <div>
            <div className="flex items-center justify-center h-[80px] border-[1px]">
                <img className="w-[50px]" src={dora} alt="Dora la exploradora"></img>
                <h1 className="text-[2.5em] ml-[20px]">Adventure Cooker</h1>
                <Link to="/user" className="ml-auto mr-[20px] bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                    Inicio
                </Link>
            </div>
        </div>
        </>
    );
}

export default Header;