<<<<<<< HEAD
import  { useState, useEffect } from 'react';
import axios from 'axios';

const Trivia = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get('https://opentdb.com/api.php?amount=1');
        const data = response.data.results[0];
        setQuestion(data.question);
        setOptions([data.correct_answer, ...data.incorrect_answers].sort(() => Math.random() - 0.5));
        setAnswer(data.correct_answer);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestion();
  }, []);

  const handleAnswer = (option) => {
    if (option === answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(option);
  };

  return (
    <div>
      <h1>Trivia Quiz</h1>
      <div>
        <p>{question}</p>
        {options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
      {selectedAnswer && (
        <div>
          <p>{selectedAnswer === answer ? 'Correct!' : 'Wrong!'}</p>
          <p>Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default Trivia;
=======
import  { useState, useEffect } from 'react';
import axios from 'axios';

const Trivia = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get('https://opentdb.com/api.php?amount=1');
        const data = response.data.results[0];
        setQuestion(data.question);
        setOptions([data.correct_answer, ...data.incorrect_answers].sort(() => Math.random() - 0.5));
        setAnswer(data.correct_answer);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestion();
  }, []);

  const handleAnswer = (option) => {
    if (option === answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(option);
  };

  return (
    <div>
      <h1>Trivia Quiz</h1>
      <div>
        <p>{question}</p>
        {options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
      {selectedAnswer && (
        <div>
          <p>{selectedAnswer === answer ? 'Correct!' : 'Wrong!'}</p>
          <p>Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default Trivia;
>>>>>>> 40d3f5c578858cb4d8da71bbb6a2db7ab3b0c574
