import { useState } from 'react'
import VoteButtons from './VoteButtons'

const CandidateCard = ({ candidate, onVote, onDelete, onUpdateName }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editName, setEditName] = useState(candidate.name)

    const handleSave = () => {
        if (editName.trim()) {
            onUpdateName(candidate.id, editName.trim())
            setIsEditing(false)
        }
    }

    return (
        <div className="candidate-card">
          {isEditing ? (
            <div className="edit-name">
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          ) : (
            <>
              <h3>Candidate name: {candidate.name}</h3>
              <p>Votes: {candidate.votes}</p>
              <VoteButtons 
                onVote={(increment) => onVote(candidate.id, increment)} 
              />
              <button onClick={() => setIsEditing(true)}>Edit Name</button>
              <button onClick={() => onDelete(candidate.id)}>Delete</button>
            </>
          )}
        </div>
      )
}

export default CandidateCard