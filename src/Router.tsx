import { Route, Routes } from 'react-router-dom'
import { ListRepositories } from './pages/ListRepositories'
import { RepositoryDetail } from './pages/RepositoryDetail'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<ListRepositories />} />
      <Route path='/details' element={<RepositoryDetail />} />
    </Routes>
  )
}