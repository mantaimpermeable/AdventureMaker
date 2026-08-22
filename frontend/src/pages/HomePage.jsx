import Header from "../components/Header";

function HomePage(){
    const alt = "Imagen aventurera";
    const header = "Homepage";
    const direction = "/auth";
    const buttonShow = "Login";
    return (
        <>
        <Header 
        image="NO_internet_right_now"
        altImage={alt}
        header={header}
        direction={direction}
        buttonShow={buttonShow} 
        />
        <img></img>
        </>
    );
}

export default HomePage; 