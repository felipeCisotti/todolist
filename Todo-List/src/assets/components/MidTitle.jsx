export default function MidTitle({ title, subtitle, buttonText, onClick }) {
    return (
        <div className="mid-title">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            {buttonText && (
                <button onClick={onClick}>
                    {buttonText}
                </button>
            )}
        </div>
    )
}