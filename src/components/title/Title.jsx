import './title.css';

import slash from '../../../public/icons/slash.svg';

export default function Title({ children }) {
    return (
        <div className="title">
            <img src={slash} alt="logo" draggable={false} width={30} height={30} />
            <h1>{children}</h1>
        </div>
    );
}
