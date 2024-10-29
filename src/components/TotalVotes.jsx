const TotalVotes = ({ candidates }) => {
    const totalVotes = candidates.reduce((sum, candidate) => sum + candidate.votes, 0);

    return(
        <div className="total-votes">
            <h2>Total Votes: {totalVotes}</h2>
        </div>
    )
}

export default TotalVotes;