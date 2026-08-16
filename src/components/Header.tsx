import NavBar from "./NavBar"
import "../css/header-style.css"

function Header() {

    return (
        <header className="header">
            <div className="nav-bar-container">
                <NavBar />
            </div>
        </header>
    )

}

export default Header