<<<<<<< HEAD
import   { useState, useEffect } from 'react';

const generateCards = () => {
  const numbers = [...Array(8).keys()].flatMap((n) => [n, n]);
  return numbers.sort(() => Math.random() - 0.5);
};

const MemoryGame = () => {
  const [cards, setCards] = useState(generateCards());
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      if (cards[first] === cards[second]) {
        setMatched((prev) => [...prev, cards[first]]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  }, [flipped]);

  const handleClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(cards[index])) return;
    setFlipped((prev) => [...prev, index]);
  };

  return (
    <div>
      <h1>Memory Game</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 100px)', gap: '10px' }}>
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: flipped.includes(index) || matched.includes(card) ? '#fff' : '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '24px',
            }}
          >
            {(flipped.includes(index) || matched.includes(card)) && card}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
=======
import   { useState, useEffect } from 'react';

const generateCards = () => {
  const numbers = [...Array(8).keys()].flatMap((n) => [n, n]);
  return numbers.sort(() => Math.random() - 0.5);
};

const MemoryGame = () => {
  const [cards, setCards] = useState(generateCards());
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      if (cards[first] === cards[second]) {
        setMatched((prev) => [...prev, cards[first]]);
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  }, [flipped]);

  const handleClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(cards[index])) return;
    setFlipped((prev) => [...prev, index]);
  };

  return (
    <div>
      <h1>Memory Game</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 100px)', gap: '10px' }}>
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: flipped.includes(index) || matched.includes(card) ? '#fff' : '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '24px',
            }}
          >
            {(flipped.includes(index) || matched.includes(card)) && card}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
>>>>>>> 40d3f5c578858cb4d8da71bbb6a2db7ab3b0c574
