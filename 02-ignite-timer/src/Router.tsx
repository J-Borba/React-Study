import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { History } from './pages/History/History'
import { FixedComponents } from './components/FixedComponents'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<FixedComponents />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
