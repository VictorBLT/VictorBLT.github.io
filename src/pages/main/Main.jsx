import './main.css';

import MainLayout from '../../layouts/main/MainLayout.jsx';
import About from './About.jsx';
import Education from './Education.jsx';
import Experiences from './Experiences.jsx';
import Portfolio from './Portfolio.jsx';
import Skills from './Skills.jsx';

export default function Main() {
    return (
        <MainLayout>
            <About />
            <Experiences />
            <Skills />
            <Education />
            <Portfolio />
        </MainLayout>
    );
}
