import React from 'react'
import Background from './components/Background'
import Content from './components/content'

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-300'>
      <Background/>
      <Content/>
    </div>
  )
}

export default App
