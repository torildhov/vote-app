const VoteHistory = ({ history }) => {
    return (
      <section className="vote-history">
        <h2>Vote History</h2>
        <ul className="vote-list">
          {history.map(record => (
            <li key={record.id}>
              {record.candidateName} received {record.change > 0 ? '+' : ''}{record.change} vote
            </li>
          ))}
        </ul>
      </section>
    )
  }
  
  export default VoteHistory
  