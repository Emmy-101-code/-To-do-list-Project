import React, { useState } from 'react'

export default function TodoInput({ onAdd }){
  const [text, setText] = useState('')
  const [due, setDue] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if(!text.trim()) return
    onAdd({ text: text.trim(), due: due || null })
    setText('')
    setDue('')
  }

  return (
    <form onSubmit={submit} className="flex flex-col md:flex-row gap-3 mb-6">
      <input value={text} onChange={e=>setText(e.target.value)} placeholder="Add a new task..." className="flex-1 px-4 py-3 rounded-lg glass outline-none placeholder:text-slate-400" />
      <input type="date" value={due} onChange={e=>setDue(e.target.value)} className="px-3 py-3 rounded-lg glass outline-none text-slate-200" />
      <button className="px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 transition font-semibold">Add Task</button>
    </form>
  )
}
