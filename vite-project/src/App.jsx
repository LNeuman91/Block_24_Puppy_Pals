import { useState } from 'react';
import { puppyList } from './data.js'; // Import the puppyList from data.js
import './App.css';

function App() {
  // State to manage the list of puppies and the selected puppy
  const [puppies, setPuppies] = useState(puppyList);
  const [selectedPuppy, setSelectedPuppy] = useState(null);

  // Function to handle when a puppy name is clicked
  const handlePuppyClick = (puppy) => {
    setSelectedPuppy(puppy);
  };

  return (
    <div className="app-container">
      <h1>Puppy Pals</h1>
      <div className="puppy-list">
        {puppies.map((puppy) => (
          <p key={puppy.id} onClick={() => handlePuppyClick(puppy)}>
            {puppy.name}
          </p>
        ))}
      </div>

      {/* Display the details of the selected puppy */}
      {selectedPuppy && (
        <div className="featured-puppy">
          <h2>Featured Puppy: {selectedPuppy.name}</h2>
          <p><strong>Email:</strong> {selectedPuppy.email}</p>
          <p><strong>Age:</strong> {selectedPuppy.age} years</p>
          <p><strong>Tricks:</strong> {selectedPuppy.tricks.length > 0 ? selectedPuppy.tricks.map(trick => trick.title).join(', ') : 'No tricks yet'}</p>
        </div>
      )}
    </div>
  );
}

export default App;