import { Link } from "react-router-dom";
function HomePage() {
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Bienvenido a Adventure Cooker</h1>
            <p className="text-lg mb-8">Crea tu aventura personalizada con nuestras herramientas.</p>
            <Link to="/adventure" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300">
                Comenzar
            </Link>
        </div>
    );
}

export default HomePage;