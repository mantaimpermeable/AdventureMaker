import Header from "../components/Header";
import Body from "../components/Body";
import dora from '../assets/image.png'

function Generator() {
    const alt = "Dora la exploradora";
    const buttonShow = "Inicio ";
    const header = "Adventure Cooker";
    const direction = "/user";
    return(
        <>
        <Header 
        image={dora}
        altImage={alt}
        buttonShow={buttonShow}
        direction={direction}
        header={header}
        />
        <Body></Body>
        </>
    );
}

export default Generator;