function Caracteristics(props) {
     
    const listaCaracteristicas = props.caracteristicas.map((caracteristica, index) => <li key={index} onClick={() => props.quitarCaracteristica(index)}>{index + 1} .{caracteristica}</li>);
    
    return(
        <>
        <section>
                <h1 className="text-center mt-4 text-[2em]">Caracteristicas del viaje:</h1>
                <ul className="text-center">{listaCaracteristicas}</ul>
                { props.caracteristicas.length > 3 ? 
                    <div className="flex border-[1px] rounded-[5px] m-4 p-3 items-center justify-between">
                        <div>
                            <h3 className="text-[1.125em]">Ya has terminado de planear?</h3> 
                            <p className="text-[0.875em]">Consigue tu viaje esperado</p>
                        </div>
                        <div>
                            <button className="border-[1px] bg-orange-500 hover:bg-orange-400 rounded-[5px]" onClick={props.isShown}>Generar</button>
                        </div>

                    </div>
                    : null}
            </section> 
        </>
     );
}

export default Caracteristics;