export default function CardInicial() {
    return (
        <div className="card-inicial">
            <div className="card-header">
                <h1>Tasks</h1>
                <p>Thursday, Feb 26</p>
            </div>
            <div className="divider"></div>
            <div className="tasks-container">
                <input type="text" placeholder="Add a new task" />
                <button>+</button>
            </div>
            <div className="divider"></div>
            <div className="empty-state">
                <h2>✨</h2>
                <h3>All caught up!</h3>
                <p>Enjoy your day or add a new task.</p>
            </div>
        </div>
    )
}