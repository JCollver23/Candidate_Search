import Candidate from "../interfaces/Candidate.interface";

interface SavedCandidateProps {
    candidate: Candidate;
    handleRemove: () => void;
}

export default function SavedCandidate({ candidate, handleRemove }: SavedCandidateProps) {
    return (
        <tr>
          {candidate ? (
            <>
              <td>
                <img
                  src={candidate.avatar_url || '/default-avatar.png'}
                  alt={candidate.login || 'Unknown User'}
                  width={100}
                />
              </td>
              <td>{candidate.login}</td>
              <td>{candidate.name || 'No name available'}</td>
              <td>{candidate.location || 'No location available'}</td>
              <td>{candidate.company || 'No company available'}</td>
              <td>{candidate.email || 'No email available'}</td>
              <td>
                <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </td>
              <td>
                <button onClick={handleRemove}>Reject</button>
              </td>
            </>
          ) : (
            <td colSpan={7}>Loading candidate...</td> // This spans all columns if the candidate is not loaded
          )}
        </tr>
    );
}
