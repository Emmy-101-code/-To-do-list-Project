import React from 'react'

export default function Header(){
  return (
    <header className="flex items-center justify-between mb-6">

{/* TITTLE CENTERED */}
<div className="w-full flex justify-center">
  <h1 className="text-2xl font-semibold tracking-tight text-center">
    To-do-list Project
  </h1>
</div>

      <div>
        {/* <h1 className=" text-2xl font-semibold tracking-tight text-center">To-do-list Project</h1> */}
       
        {/* <p className="text-sm text-slate-300">Professional | Colorful | Vite · React · Tailwind</p> */}
      </div>
      <div className="flex items-center gap-3">
        {/* <div className="px-3 py-1 rounded-full text-sm glass">Blue–Purple</div> */}
      </div>
    </header>
  )
}
