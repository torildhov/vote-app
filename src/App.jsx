import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TotalVotes from './components/TotalVotes'
import CandidateControls from './components/CandidateControls'
import CandidateList from './components/CandidateList'
import VoteHistory from './components/VoteHistory'
import NeatBackground from './components/AnimatedBackground'

function App() {
  const [candidates, setCandidates] = useState([])
  const [voteHistory, setVoteHistory] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const addCandidate = (name) => {
    setCandidates([...candidates, { id: Date.now(), name, votes: 0 }])
  }

  const deleteCandidate = (id) => {
    setCandidates(candidates.filter(candidate => candidate.id !== id))
    setVoteHistory(voteHistory.filter(record => record.candidateId !== id))
  }

  const updateCandidateName = (id, newName) => {
    setCandidates(candidates.map(candidate => 
      candidate.id === id ? { ...candidate, name: newName } : candidate
    ))
    
    setVoteHistory(voteHistory.map(record => 
      record.candidateId === id ? { ...record, candidateName: newName } : record
    ))
  }
  

  const handleVote = (id, increment) => {
    setCandidates(candidates.map(candidate => {
      if (candidate.id === id) {
        const newVotes = candidate.votes + increment
        if (newVotes < 0) return candidate
        return { ...candidate, votes: newVotes }
      }
      return candidate
    }))

    const candidate = candidates.find(c => c.id === id)
    if (!(candidate.votes === 0 && increment === -1)) {
      setVoteHistory([...voteHistory, {
        id: Date.now(),
        candidateId: id,
        candidateName: candidate.name,
        change: increment
      }])
    }
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <NeatBackground />
      <main className="container">
        <Header />
        <TotalVotes candidates={candidates} />
        <CandidateControls 
          onAddCandidate={addCandidate} 
          onSearch={handleSearch}
          searchTerm={searchTerm}
        />
        <CandidateList 
          candidates={filteredCandidates}
          onVote={handleVote}
          onDelete={deleteCandidate}
          onUpdateName={updateCandidateName}
        />
        <VoteHistory history={voteHistory} />
      </main>
    </>
  )
}

export default App
