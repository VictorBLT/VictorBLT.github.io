import './icon.css';

import Tooltip from '@mui/material/Tooltip';
import { useTranslation } from 'react-i18next';

export default function Icon({ skill }) {
    const { t } = useTranslation();

    return (
        <Tooltip title={skill.name} enterTouchDelay={0}>
            <div className="icon">
                <img src={skill.icon} alt={t('alt.logo', { name: skill.name })} draggable={false} />
            </div>
        </Tooltip>
    );
}
