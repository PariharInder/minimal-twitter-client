import { useState } from 'react'
import '../styles/tailwind.css'

export default function Index() {
  return (
    <div className="bg-neutral-900 fixed inset-0 flex justify-center items-center h-full text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Minimal Twitter</h1>
        <p className="text-xl mb-6">A Twitter clone with a minimal design</p>
        <a href="/auth" className=" bg-red-800 hover:bg-red-500 text-white font-bold py-2 px-4 rounded transition-colors">Join the cult</a>
      </div>
    </div>
  )
}