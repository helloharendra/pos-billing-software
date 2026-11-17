import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Billing from './pages/Billing'
import Dashboard from './pages/Dashboard'
import Bills from './pages/Bills'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Billing />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="bills" element={<Bills />} />
        <Route path="*" element={<Billing />} />
      </Route>
    </Routes>
  )
}
