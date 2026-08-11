import { useState, useRef, useEffect } from "react";
import Caracteristics from "./Caracteristics";
import Adventure from "./Adventure";

function Body() {
    const buttonstyle="m-[5px] border-[1px] p-[2px] bg-gray-400 hover:bg-gray-300 rounded-[10px]"
    //setCaracteristicas es el nombre que le estamos dando al segundo parametro que nos da useState que es un funcion
    //usamos useState para hacer el re-rendering de la pagina (nuestro html)automaticamente con los valores cambiados
    const [caracteristicas, setCaracteristicas] = useState([]);
    const [adventures, setAdventure] = useState("");
    const adventureSection = useRef(null);

    useEffect(() => {
    if(adventures !== "" && adventureSection.current !== null) {
    adventureSection.current.scrollIntoView({ behavior: "smooth" });
    }
    }, [adventures]);


    function añadirCaracteristica(formData) {
       //Ya no hace falta hacer un prevent default porque usamos un action
       //guardamos el input y luego lo vaciamos
       const comentario = formData.get("comentario");
       const nuevaCaracteristica = formData.get("caracteristica");
        if(nuevaCaracteristica.trim() || comentario.trim()){
            const completeInfo = comentario !== "" ? `${nuevaCaracteristica} Comentario: ${comentario}` : nuevaCaracteristica; 
            setCaracteristicas(p => [...p, completeInfo]);

        }
        
    }

    function quitarCaracteristica(index) {
        //filtramos el array de caracteristicas y solo imprimimos los distintos al index que queremos borrar
        setCaracteristicas(caracteristicas.filter((_,i) => i !== index));
    };

    async function getAdventure(){
        const data = await fetch("http://localhost:3313/api/user/adventure");
        const json = await data.json();
        const adventure = json.adventure;
        setAdventure(adventure);
    };


    return(
        <>
        <form className=" flex flex-col border-[1px]" action={añadirCaracteristica}>
            <div className="flex items-center gap-2 mb-4 ml-2">
                <label htmlFor="caracteristica">Caracteristica: </label>
                <input name="caracteristica" className="border-[1px] m-[5px] ml-[10px] mr-[10px] grow" type="text" placeholder="Peligroso"></input>
                <button className={buttonstyle}>+ Añadir</button> 
            </div>
            <div className="flex items-center gap-2 mb-4 ml-2">
                <label htmlFor="comentario">Comentario: </label>
                <textarea name="comentario" className="border-[1px] m-[5px] ml-[20px] mr-[10px] grow"placeholder="Tengo vertigo"></textarea>
                <button className={buttonstyle}>+ Añadir</button> 
            </div>
            
            
        </form>
        { caracteristicas.length > 0  ?  
            <Caracteristics 
                caracteristicas={caracteristicas} 
                quitarCaracteristica={quitarCaracteristica} 
                getAdventure={getAdventure} 
                adventure={adventures}
                adventureSection={adventureSection}
                />
                                            
        : null} 
        

        </>
    );

}

export default Body;