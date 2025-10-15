import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen bg-[#F5F5DC] flex flex-col items-center pt-32">
      <Input />
    </div>
      
    </>
  )
}

export default App
