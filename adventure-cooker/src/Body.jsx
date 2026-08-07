import { useState } from "react";
function Body() {
    const buttonstyle="m-[5px] border-[1px] p-[2px] bg-gray-400 hover:bg-gray-300 rounded-[10px]"
    //setCaracteristicas es el nombre que le estamos dando al segundo parametro que nos da useState que es un funcion
    //usamos useState para hacer el re-rendering de la pagina (nuestro html)automaticamente con los valores cambiados
    const [caracteristicas, setCaracteristicas] = useState([]);
    const [comentario, setcomentario] = useState([]);

    const listaCaracteristicas = caracteristicas.map((caracteristica, index) => <li key={index} onClick={() => quitarCaracteristica(index)}>{index + 1} .{caracteristica}</li>)

    function añadirCaracteristica(formData) {
       //Ya no hace falta hacer un prevent default porque usamos un action
        //guardamos el input y luego lo vaciamos
        const nuevaCaracteristica = formData.get("caracteristica");
        const comentario = formData.get("comentario");
        if(nuevaCaracteristica.trim() || comentario.trim()){
            const completeInfo = comentario !== "" ? `${nuevaCaracteristica} Comentario: ${comentario}` : nuevaCaracteristica; 
            setCaracteristicas(p => [...p, completeInfo]);

        }
        
    }

    function quitarCaracteristica(index) {
        //filtramos el array de caracteristicas y solo imprimimos los distintos al index que queremos borrar
        setCaracteristicas(caracteristicas.filter((_,i) => i !== index));
    }

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
        { caracteristicas.length > 0 ?
            <section>
                <h1 className="text-center mt-4 text-[2em]">Caracteristicas del viaje:</h1>
                <ul className="text-center">{listaCaracteristicas}</ul>
                { caracteristicas.length > 3 ? 
                    <div className="flex border-[1px] round-[5px] m-4">
                        <div>
                            <h3>Ya has terminado de planear?</h3>
                            <p>Consigue tu viaje esperado</p>
                        </div>
                        <div>
                            <button className="border-[1px] bg-orange-500 hover:bg-orange-400 rounded[5px]">Generar</button>
                        </div>

                    </div>
                    : null}
            </section> 
            : null} 
       
        </>
    );

}

export default Body;