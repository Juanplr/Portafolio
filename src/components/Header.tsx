import NavBar from "./NavBar"

function Header() {

    return (
        <header className="header">
            <div>
                <h1 className="header__title">Juan Pablo</h1>
                <p className="header__subtitle">Full Stack Developer</p>
            </div>
            <div>
                <NavBar />
            </div>
            <img src="" alt="imagen de perfil" />
            <div>

            </div>
        </header>
    )

}

export default Header