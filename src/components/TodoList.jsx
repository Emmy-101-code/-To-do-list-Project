// src/components/TodoList.jsx
import React, { useState } from 'react'
import TodoItem from './TodoItem'
import { AnimatePresence, motion } from 'framer-motion'

export default function TodoList({ tasks, onToggle, onDelete, onEdit }) {
  const [filter, setFilter] = useState('all')

  const filtered = tasks.filter(t => {
    if (filter === 'active') return !t.done
    if (filter === 'completed') return t.done
    return true
  })

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <button onClick={() => setFilter('all')} className={`px-3 py-1 rounded ${filter === 'all' ? 'bg-white/6' : 'glass'}`}>All</button>
          <button onClick={() => setFilter('active')} className={`px-3 py-1 rounded ${filter === 'active' ? 'bg-white/6' : 'glass'}`}>Active</button>
          <button onClick={() => setFilter('completed')} className={`px-3 py-1 rounded ${filter === 'completed' ? 'bg-white/6' : 'glass'}`}>Completed</button>
        </div>
        <div className="text-sm text-slate-300">{tasks.filter(t => !t.done).length} active</div>
      </div>

      <div className="space-y-3">
        <AnimatePresence>
          {filtered.map(task => (
            <motion.div key={task.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} layout>
              <TodoItem task={task} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
