// src/components/TodoItem.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function TodoItem({ task, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState(task.text)
  const [due, setDue] = useState(task.due || '')

  const save = () => {
    if (!text.trim()) return
    onEdit(task.id, text.trim(), due || null)
    setEditing(false)
  }

  return (
    <div className="flex items-center justify-between p-4 rounded-lg glass">
      <div className="flex items-start gap-3">
        {/* ✅ Checkbox toggles done state */}
        <input
          type="checkbox"
          checked={!!task.done}
          onChange={() => onToggle(task.id)}           // <-- important
          className="w-5 h-5 mt-1 accent-cyan-400"
        />

        <div>
          {editing ? (
            <div className="flex flex-col md:flex-row gap-2 items-center">
              <input value={text} onChange={e => setText(e.target.value)} className="px-3 py-2 rounded-md outline-none glass" />
              <input type="date" value={due} onChange={e => setDue(e.target.value)} className="px-3 py-2 rounded-md glass" />
              <div className="flex gap-2">
                <button onClick={save} className="px-3 py-2 rounded-md bg-green-600 text-white">Save</button>
                <button onClick={() => setEditing(false)} className="px-3 py-2 rounded-md glass">Cancel</button>
              </div>
            </div>
          ) : (
            <div>
              <div className={`text-sm ${task.done ? 'line-through text-slate-400' : 'text-slate-100'} font-medium`}>
                {task.text}
              </div>
              <div className="text-xs text-slate-300">{task.due ? 'Due: ' + task.due : 'No date'}</div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={() => setEditing(true)} className="px-3 py-2 rounded-md glass">Edit</button>
        <button onClick={() => onDelete(task.id)} className="px-3 py-2 rounded-md bg-red-600 text-white">Delete</button>
      </div>
    </div>
  )
}
