import React, { useEffect, useState } from 'react';
import useWordle from '../hooks/useWordle';
import Modal from './Modal';
// components
import Grid from '../components/grid'
import Keypad from '../components/keypad';
export default function Wordle({ solution }) {
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup, error } = useWordle(solution);
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    

    if (isCorrect || turn > 5) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener('keyup', handleKeyup);
    }

    return () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  useEffect(() => {
    if (error !== '') {
      setShowError(true);
      setErrorMessage(error);
    }
  },[error])
  const handleCloseError = () => {
    setShowError(false);
    setErrorMessage('');
  };

  return (
    <div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keypad usedKeys={usedKeys} />
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
      {showError && (
        <div className="error-container">
          <div className="error-content">
           <button className='close-btn' type="button" onClick={handleCloseError}>X</button>
            <h1 className='error-header'>Error!</h1>
            <p>{errorMessage}</p>
          </div>
        </div>
        
      )}
    </div>
  );
}
