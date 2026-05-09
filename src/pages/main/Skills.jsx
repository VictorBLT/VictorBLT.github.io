import './skills.css';

import { useTranslation } from 'react-i18next';

import Chip from '../../components/chip/Chip.jsx';
import Title from './Title.jsx';

export default function Skills() {
    const { t } = useTranslation();
    const data = t('skills.categories', { returnObjects: true });

    return (
        <section id="skills">
            <Title>{t('skills.title.long')}</Title>
            <div className="skills-categories-container">
                {data.map((category, index) => (
                    <div key={index} className="skill-category">
                        <h2>{category.name}</h2>
                        <div className="chips-container">
                            {category.items.map((skill, sIndex) => (
                                <Chip key={sIndex} skill={skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
