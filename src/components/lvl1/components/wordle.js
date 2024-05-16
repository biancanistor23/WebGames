import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Modal from './Modal'
// components
import Grid from './grid'
import Keypad from './keypad'

export default function Wordle({ solution }) {
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } = useWordle(solution)
  const [showModal, setShowModal] = React.useState(false)
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)
    if(isCorrect) {
        setTimeout(()=>setShowModal(true),2000)
        window.removeEventListener('keyup', handleKeyup)
    }
    if(turn > 5) {
        setTimeout(()=>setShowModal(true),2000)
        window.removeEventListener('keyup', handleKeyup)
    }
    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup,isCorrect])
  
  return (
    <div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keypad usedKeys={usedKeys} />
        {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
    </div>
  )
}