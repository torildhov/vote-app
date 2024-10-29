import { useState } from 'react'

const CandidateControls = ({ onAddCandidate, onSearch, searchTerm }) => {
  const [newName, setNewName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newName.trim()) {
      onAddCandidate(newName.trim())
      setNewName('')
    }
  }

  return (
    <section className="candidate-controls">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter candidate name..."
          autoComplete="on"
          name="firstName"
        />
        <button type="submit">Add Candidate</button>
      </form>
      <div className="search">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search candidates..."
        />
      </div>
    </section>
  )
}

export default CandidateControls
