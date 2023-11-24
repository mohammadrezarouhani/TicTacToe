import './styles/history.css'

export default function History({ hisories, jumpTo }) {
    const moves = hisories.map((item, index) => {
        const step = index === 0 ? "Go to first step" : "Go To step " + (index + 1)
        return (
            <li key={index} onClick={() => jumpTo(index)}>
                {step}
            </li>
        )
    })

    return (
        <div className='historyContainer'>  
            <p>History</p>
            <ol className="history">
                {moves}
            </ol>
        </div>
    )
}