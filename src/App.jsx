import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { div, p } from 'framer-motion/client';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await axios.get('https://randomuser.me/api/?results=10');

        setData(res.data.results);
        console.log(res.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchApi();
  }, []);

  return (
    <>
      <h1 className='text-3xl font-bold text-center'>Midterm 2</h1>

      {data.map((person) => (
        <div key={person.id} className='mb-5'>
          <p>Age: {person.registered.age}</p>
          <p>
            Name: {person.name.title} {person.name.first} {person.name.last}
          </p>
          <p>username: {person.login.username}</p>
          <p>city: {person.location.city}</p>
          <p>country: {person.location.country}</p>
          <p>postcode:{person.location.postcode}</p>
        </div>
      ))}
    </>
  );
}

export default App;
