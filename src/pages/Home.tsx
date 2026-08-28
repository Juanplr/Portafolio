import Contacto from "./Contacto"
import Educacion from "./Educacion"
import Habilidades from "./Habilidades"
import Proyectos from "./Proyectos"
import SobreMi from "./SobreMi"

import "../css/home-style.css"

function Home() {
    return (
        <>
            <div className="home-container">
                <div>
                    <h1>Juan Pablo Lazaro Ruiz</h1>
                    <h2>Desarrollador Full Stack</h2>
                </div>

                <div className="perfil-container">
                    <img src="perfil.jpg" alt="imagen de perfil" className="perfil-image" />
                </div>
            </div>

            <SobreMi />
            <Educacion />
            <Habilidades />
            <Proyectos />
            <Contacto />
        </>
    )
}

export default Home