import React from 'react'

export default function Footer({ count, clearCompleted }){
  return (
    <footer className="mt-6 flex items-center justify-between text-sm text-slate-300">
      <div>{count} total</div>
      <div className="flex gap-3">
        {/* <button onClick={clearCompleted} className="px-3 py-1 rounded glass">Clear completed</button> */}
        {/* <div className="text-xs">Built with Vite · React · Tailwind · Framer Motion</div> */}
   
      </div>
    </footer>
  )
}
