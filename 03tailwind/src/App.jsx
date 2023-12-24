import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from '/components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-white p-4 rounded-xl mb-4'>TailWind Css</h1>
      {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/19370232/pexels-photo-19370232/free-photo-of-city-buildings-on-sea-coast-behind-circular-hole.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}
      <Card username="Deep" btnText="click me"/>
      <Card username="Mahi" btnText="visit me"/>

    </>
  )
}

export default App
