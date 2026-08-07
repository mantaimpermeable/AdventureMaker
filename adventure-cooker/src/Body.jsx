import { useState } from "react";
function Body() {
    const buttonstyle="m-[5px] border-[1px] p-[2px] bg-gray-400 hover:bg-gray-300 rounded-[10px]"
    //setCaracteristicas es el nombre que le estamos dando al segundo parametro que nos da useState que es un funcion
    //usamos useState para hacer el re-rendering de la pagina (nuestro html)automaticamente con los valores cambiados
    const [caracteristicas, setCaracteristicas] = useState([]);

    function añadirCaracteristica(event) {
        event.preventDefault(); //Para evitar que la pagina se recargue
        //guardamos el input y luego lo vaciamos
        const nuevaCaracteristica = document.getElementById("caracteristica").value;
        document.getElementById("caracteristica").value="";
        setCaracteristicas(p => [...p, nuevaCaracteristica]);

    }

    function quitarCaracteristica(index) {
        //filtramos el array de caracteristicas y solo imprimimos los distintos al index que queremos borrar
        setCaracteristicas(caracteristicas.filter((_,i) => i !== index));
    }

    return(
        <>
        <form className=" flex border-[1px] items-center justify-center pb-[20px] pt-[20px]" onSubmit={añadirCaracteristica}>
            
            <input id="caracteristica" className="border-[1px] m-[5px] ml-[20px] mr-[10px] grow"aria-label="Añade caracteristica" type="text" placeholder="Peligroso"></input>
            <button className={buttonstyle}>+ Añadir</button>
            
        </form>
        <h1 className="text-center">Caracteristicas del viaje:</h1>
            <ul className="text-center">  
                {caracteristicas.map((caracteristica, index) => <li key={index} onClick={() => quitarCaracteristica(index)}>{caracteristica}</li>)}
            </ul>
        </>
    );

}

export default Body;