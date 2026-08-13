import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <>
            <Header />
            <main>
                <div className="main-container">
                     <Outlet />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default MainLayout