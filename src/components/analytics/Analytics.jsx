import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Analytics() {
    const location = useLocation();

    useEffect(() => {
        if (typeof window.gtag !== 'undefined') {
            const pagePath = location.pathname + location.hash;
            const pageLocation = window.location.origin + window.location.pathname + pagePath;
            window.gtag('event', 'page_view', { page_path: pagePath, page_location: pageLocation });
        }
    }, [location]);

    return null;
}
