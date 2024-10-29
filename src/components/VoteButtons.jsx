const VoteButtons = ({ onVote }) => {
    return (
        <div className="vote-buttons">
            <button onClick={() => onVote(1)}>+1 Vote</button>
            <button onClick={() => onVote(-1)}>-1 Vote</button>
        </div>
    )
}

export default VoteButtons