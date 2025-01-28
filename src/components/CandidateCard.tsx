import Candidate from "../interfaces/Candidate.interface";

interface CandidateCardProps {
    candidate: Candidate;
    handleSave: () => void;
    handleSkip: () => void;
}

export default function CandidateCard({ candidate, handleSave, handleSkip }: CandidateCardProps) {
    return (
        <div>
          {candidate ? (
            <div className="candidate-card">
              <img
                src={candidate.avatar_url || '/default-avatar.png'}
                alt={candidate.login || 'Unknown User'}
                width={100}
              />
              <h2>{candidate.login}</h2>
              <h3>{candidate.name || 'No name available'}</h3>
              <p>{candidate.location || 'No location available'}</p>
              <p>{candidate.company || 'No company available'}</p>
              <p>{candidate.email || 'No email available'}</p>
              <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
              <div>
                <button onClick={handleSave}>+</button>
                <button onClick={handleSkip}>-</button>
              </div>
            </div>
          ) : (
            <div>Loading candidate...</div>
          )}
        </div>
      );
    }