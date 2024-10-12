import  { useState } from 'react';

const Flashcard = () => {
  const [flashcards, setFlashcards] = useState([
    { question: 'What is React?', answer: 'A JavaScript library for building user interfaces' },
    { question: 'What is JSX?', answer: 'A syntax extension for JavaScript that looks similar to XML' },
  ]);
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    setIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setShowAnswer(false);
  };

  return (
    <div>
      <h1>Flashcards</h1>
      <div>
        <p>{flashcards[index].question}</p>
        {showAnswer && <p>{flashcards[index].answer}</p>}
        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </button>
        <button onClick={nextCard}>Next Card</button>
      </div>
    </div>
  );
};

export default Flashcard;
