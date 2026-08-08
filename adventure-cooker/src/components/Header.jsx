import dora from '../assets/image.png'

function Header() {
    return(
        <>
        <div>
            <div className="flex items-center justify-center h-[80px] border-[1px]">
                <img className="w-[50px]" src={dora} alt="Dora la exploradora"></img>
                <h1 className="text-[2.5em] ml-[20px]">Adventure Cooker</h1>
            </div>
        </div>
        </>
    );
}

export default Header;