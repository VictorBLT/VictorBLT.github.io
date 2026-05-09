export default function Title({ children }) {
    return (
        <h1>
            <span className="accent">{'//'}</span>
            {children}
        </h1>
    );
}
