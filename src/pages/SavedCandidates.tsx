import { useEffect, useState } from "react";
import Candidate from "../interfaces/Candidate.interface";
import SavedCandidate from "../components/SavedCandidate";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('savedCandidates') || '[]';  // Ensure a fallback of '[]' if null
    console.log('saved:', saved);
    setSavedCandidates(JSON.parse(saved));
  }, []);

  const handleRemove = (index: number) => {
    const newCandidates = savedCandidates.filter((_candidate, i) => i !== index);
    setSavedCandidates(newCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(newCandidates));
  };

  return (
    <>
      <h1>Potential Candidates</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Login</th>
            <th>Name</th>
            <th>Location</th>
            <th>Company</th>
            <th>Email</th>
            <th>Profile</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {savedCandidates.length === 0 ? (
            <tr>
              <td colSpan={8}>No saved candidates.</td>
            </tr>
          ) : (
            savedCandidates.map((candidate, index) => (
              <SavedCandidate 
                key={index} 
                candidate={candidate} 
                handleRemove={() => handleRemove(index)} 
              />
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
