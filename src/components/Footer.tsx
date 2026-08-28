import "../css/footer-style.css";

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Portafolio. All rights reserved.</p>
        </footer>
    )
}

export default Footer