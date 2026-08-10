import ReactMarkdown from "react-markdown";

function Adventure(props) {

    return(
        <>
        <div className="flex border-[1px] rounded-[5px] m-4 p-3 items-center justify-between">
                        <div className="flex flex-col">
                            <h3 className="text-[1.125em]">Tu aventura generada:</h3>
                            <ReactMarkdown>{props.adventure}</ReactMarkdown>
                        </div>
                    </div>
        </>
    )
}
 
export default Adventure;