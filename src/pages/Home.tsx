import Contacto from "./Contacto"
import Educacion from "./Educacion"
import Habilidades from "./Habilidades"
import Proyectos from "./Proyectos"
import SobreMi from "./SobreMi"

function Home() {
    return (
        <>
            <div>
                <h1>Bienvenido a mi Portafolio</h1>
                <p>Explora mis proyectos y habilidades.</p>
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