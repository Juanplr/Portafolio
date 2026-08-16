import Contacto from "./Contacto"
import Educacion from "./Educacion"
import Habilidades from "./Habilidades"
import Proyectos from "./Proyectos"
import SobreMi from "./SobreMi"

function Home() {
    return (
        <>
            <div className="home-container">
                <div>
                    <h1>Juan Pablo Lazaro Ruiz</h1>
                    <h2>Desarrollador Full Stack</h2>
                </div>

                <div>
                    <img src="" alt="imagen de perfil" />
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