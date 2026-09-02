import './footer.css';

import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer>
            <div id="contact" className="socials">
                <a className="social-icon" href={t('url', { link: t('linkedin') })}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                </a>
                <a className="social-icon" href={t('mailto', { email: t('email') })}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g
                            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            stroke="none">
                            <path d="M681 4144 c-169 -45 -301 -180 -346 -351 -23 -87 -22 -2380 0 -2468 47 -178 197 -321 374 -355 73 -14 3627 -14 3702 0 183 34 344 195 379 379 14 74 14 2348 0 2422 -25 131 -124 266 -239 328 -123 65 9 61 -1996 60 -1556 0 -1828 -2 -1874 -15z m3725 -330 c51 -37 68 -70 72 -137 l4 -62 -961 -517 -960 -516 -961 516 -960 517 0 47 c0 55 13 94 43 127 49 53 -55 50 1889 48 l1807 -2 27 -21z m-3121 -908 c302 -163 553 -300 557 -304 6 -6 -1103 -794 -1189 -845 -11 -7 -13 118 -13 743 l0 750 48 -24 c26 -13 294 -157 597 -320z m3193 -780 l-3 -374 -598 418 c-329 230 -598 422 -599 426 0 5 269 153 598 331 l599 322 3 -374 c1 -206 1 -543 0 -749z m-2088 183 c166 -92 175 -91 392 28 l168 91 742 -520 c409 -285 749 -525 756 -532 17 -17 -14 -57 -62 -80 -31 -15 -192 -16 -1826 -16 -1634 0 -1795 1 -1826 16 -48 23 -79 63 -62 80 7 7 348 247 757 533 l744 520 51 -29 c28 -15 103 -56 166 -91z" />
                        </g>
                    </svg>
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
