import React from 'react'
import './App.css'

import portrait from './img/portrait.jpg'

function App() {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    fetch('/api/project')
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>

        <h1>Hi! I'm Victoria Trac.</h1>

        <img src={portrait} alt='me smiling against a wall of colorful artwork' className='portrait'/> 

        <p>
          I created this Linktree-style page specifically for the Denver Startup Week 2022 job fair. It uses React, Express, and a serverless Node API. Hosted on Vercel.
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

export default App;
