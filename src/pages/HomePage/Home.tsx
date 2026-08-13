import Educacion from "../EducacionPage/Educacion"
import SobreMi from "../SobreMiPage/SobreMi"

function Home() {
    return (
        <>
            <div>
                <h1>Bienvenido a mi Portafolio</h1>
                <p>Explora mis proyectos y habilidades.</p>
            </div>

            <SobreMi />
            <Educacion />
        </>
    )
}

export default Home