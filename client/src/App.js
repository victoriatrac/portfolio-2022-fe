import React, { useEffect } from 'react'
import axios from 'axios'
import './App.css'

import portrait from './img/portrait.jpg'

function App() {
  const [data, setData] = React.useState(null)

  useEffect(() => {
    axios.get('http://localhost:1234/')
      .then(res => {
        console.log(res)
        setData(res.data.message)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>

        <h1>Hi! I'm Victoria Trac.</h1>

        <img src={portrait} alt='me smiling against a wall of colorful artwork' className='portrait'/> 

        <p>
          Work in progress. The front end is React and Express. The backend was created with Node, Knex, and SQLite3. Hosted on Vercel.
          <br /><a href='https://github.com/victoriatrac/portfolio-2022-fe'>GitHub - front end</a>
          <br /><a href='https://github.com/victoriatrac/portfolio-2022-be'>GitHub - back end</a>
        </p>

        <button>Button 1</button>
        <button>Button 1</button>
        <button>Button 1</button>

        <p>{ !data ? 'Loading...' : data }</p>

      </header>
    </div>
  );
}

export default App
