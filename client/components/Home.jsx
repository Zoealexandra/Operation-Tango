import React from 'react'

import animals from '../data/animals.js'

const Home = () => {
  return (
    <div className='home'>
      {animals.map(animal => {
          return (
      <p key={animal.id}>{animal.name}</p>
        )
      })}
    </div>
  )
}

export default Home
