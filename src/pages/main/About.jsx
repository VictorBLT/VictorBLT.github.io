import './about.css';

import { PDFDownloadLink } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import profilePic from '../../../public/images/vic.png';
import Title from '../../components/title/Title.jsx';
import Resume from '../resume/Resume.jsx';

export default function About() {
    const { t } = useTranslation();

    return (
        <section id="about">
            <div className="horizontal-container">
                <div className="image-container">
                    <img
                        src={profilePic}
                        alt={t('about.picture', {
                            name: t('name'),
                            title: t('title'),
                        })}
                        draggable={false}
                    />
                </div>
                <div className="vertical-container">
                    <Title>{t('about.title.long')}</Title>
                    <p>{`${t('about.greetings', {
                        name: t('name'),
                        title: t('title'),
                    })} ${t('about.description')}`}</p>
                    <PDFDownloadLink
                        document={<Resume />}
                        fileName={`${t('resume.file', { name: t('name') })}.pdf`}
                        className="button">
                        {t('about.download')}
                    </PDFDownloadLink>
                </div>
            </div>
        </section>
    );
}
