import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]); 
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({} as Candidate); 

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const data = await searchGithub(); // Call the searchGithub function
        setCandidates(data);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchCandidates();
  }, []);

    useEffect(() => {
      if (candidates.length > 0 && currentIndex < candidates.length) {
        setCurrentCandidate(candidates[currentIndex]);
      }
    }, [candidates, currentIndex]);

  const handleSave = () => {
    setCurrentIndex((prev) => prev + 1);
    const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    savedCandidates.push(currentCandidate);
    localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
  };

  const handleSkip = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  if (candidates.length === 0) { // Check if the candidates array is empty
    return <div>Loading candidates...</div>; // Display a loading message
  }

  if (currentIndex >= candidates.length) { // Check if the currentIndex is greater than or equal to the candidates array length
    return <div>No more candidates available.</div>; // Display a message indicating no more candidates
  }

  return (
    <div>
      <h1>Candidate Search</h1>
      <CandidateCard candidate={currentCandidate} handleSave={handleSave} handleSkip={handleSkip} />
    </div>
  );
};

export default CandidateSearch;
