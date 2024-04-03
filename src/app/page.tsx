'use client'
import { SetStateAction, useState } from "react"

export default function Home() {
  var [input, setInput] = useState("")
  var [message, setMessage] = useState("your name:")

  const doChange = (event: { target: { value: SetStateAction<string> } }) => {
    setInput(event.target.value)
  }

  const doClick = () => {
    setMessage("Hello, " + input + "!!")
    setInput("")
  }

  return (
    <main>
      <h1 className="text-2xl m-5">Next.js sample</h1>
      <p className="text-lg m-5">{message}</p>
      <input type="text" onChange={doChange} value={input} className="p-1 border-solid border-2 border-gray-400" />
      <button onClick={doClick} className="px-7 py-2 mx-2 bg-blue-800 text-while rounded-lg">Click</button>
    </main>
  )
}