import React, { useEffect, useState } from 'react';

function App() {
  const [inputWord, setInputWord] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setInputWord('');
  };

  return (
    <>
      <h1 className='text-3xl font-bold text-center'>Midterm 2</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type='text'
            placeholder='enter any word'
            value={inputWord}
            onChange={(e) => setInputWord(e.target.value)}
          />
        </label>
        <button
          type='submit'
          onClick={() => setData((prev) => [...prev, inputWord])}
        >
          Submit
        </button>
      </form>
      {data && data.map((word, i) => <p key={i}>{word}</p>)}
    </>
  );
}

export default App;
