import CandidateCard from './CandidateCard'

const CandidateList = ({ candidates, onVote, onDelete, onUpdateName }) => {
  return (
    <section className="candidate-list">
      {candidates.map(candidate => (
        <CandidateCard
          key={candidate.id}
          candidate={candidate}
          onVote={onVote}
          onDelete={onDelete}
          onUpdateName={onUpdateName}
        />
      ))}
    </section>
  )
}

export default CandidateList