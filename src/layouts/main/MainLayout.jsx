import './mainLayout.css';

import { Footer } from './footer/Footer.jsx';
import Header from './header/Header.jsx';

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
