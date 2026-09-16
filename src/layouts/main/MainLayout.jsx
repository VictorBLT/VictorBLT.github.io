import './mainLayout.css';

import { Outlet } from 'react-router-dom';

import Footer from './footer/Footer.jsx';
import Header from './header/Header.jsx';

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <main>
                <Outlet />
                {children}
            </main>
            <Footer />
        </>
    );
}
