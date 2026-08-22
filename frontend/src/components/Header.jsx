import { Link } from 'react-router-dom';

//number of parameters : 5
function Header(props) {
    return(
        <>
        <div>
            <div className="flex items-center justify-center h-[80px] border-[1px]">
                <img className="w-[50px]" src={props.image} alt={props.altImage}></img>
                <h1 className="text-[2.5em] ml-[20px]">{props.header}</h1>
                <Link to={props.direction} className="ml-auto mr-[20px] bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                    {props.buttonShow}
                </Link>
            </div>
        </div>
        </>
    );
}

export default Header;