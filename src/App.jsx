import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

export default function App(){
  const [tasks, setTasks] = useState(() => {
    try{
      const raw = localStorage.getItem('oao_tasks_v1')
      return raw ? JSON.parse(raw) : []
    }catch(e){ return [] }
  })

  useEffect(()=>{
    localStorage.setItem('oao_tasks_v1', JSON.stringify(tasks))
  },[tasks])

  const addTask = (task) => {
    setTasks(prev => [{ id: Date.now(), text: task.text, done: false, createdAt: new Date().toISOString(), due: task.due || null }, ...prev])
  }

  const toggleDone = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? {...t, done: !t.done} : t))
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  const editTask = (id, newText, newDue=null) => {
    setTasks(prev => prev.map(t => t.id === id ? {...t, text: newText, due: newDue} : t))
  }

  const clearCompleted = () => {
    setTasks(prev => prev.filter(t => !t.done))
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <div className="glass rounded-2xl p-6 shadow-xl" style={{background: 'linear-gradient(135deg, rgba(124,58,237,0.12), rgba(6,182,212,0.06))'}}>
          <Header />
          <TodoInput onAdd={addTask} />
          <TodoList tasks={tasks} onToggle={toggleDone} onDelete={deleteTask} onEdit={editTask} />
          <Footer count={tasks.length} clearCompleted={clearCompleted} />
        </div>
      </div>
    </div>
  )
}
