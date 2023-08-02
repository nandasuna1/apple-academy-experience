import { Route, Routes } from 'react-router-dom'
import Hero from './sections/Hero'
import Works from './sections/Works'
import { Main } from './sections/Main'
import Beggining from './sections/Beggining'
import { Hobbies } from './sections/Hobbies'
import Career from './sections/Career'
import { Future } from './sections/Future'

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/main" element={<Main />} />

        <Route path="/main/beggining" element={<Beggining />} />
        <Route path="/main/hobbies" element={<Hobbies />} />
        <Route path="/main/career" element={<Career />} />
        <Route path="/main/future" element={<Future />} />
    </Routes>
  )
}