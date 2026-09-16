import './footer.css';

import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    const baseUrl = import.meta.env.BASE_URL;

    return (
        <footer>
            <div id="contact" className="socials">
                <a
                    className="button"
                    href={t('url', { link: t('linkedin') })}
                    target="_blank"
                    rel="noreferrer">
                    <span
                        className="svg-icon"
                        style={{
                            WebkitMaskImage: `url(${baseUrl}icons/linkedin.svg)`,
                            maskImage: `url(${baseUrl}icons/linkedin.svg)`,
                        }}
                    />
                </a>
                <a
                    className="button"
                    href={t('mailto', { email: t('email') })}
                    target="_blank"
                    rel="noreferrer">
                    <span
                        className="svg-icon"
                        style={{
                            WebkitMaskImage: `url(${baseUrl}icons/mail.svg)`,
                            maskImage: `url(${baseUrl}icons/mail.svg)`,
                        }}
                    />
                </a>
            </div>
            <p>
                {t('footer.copyright', {
                    year: dayjs().year(),
                    name: t('name'),
                })}
            </p>
        </footer>
    );
}
