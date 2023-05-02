import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { FixedComponentsContainer } from '../styles/FixedComponentsStyle'

export function FixedComponents() {
  return (
    <FixedComponentsContainer>
      <Header />
      <Outlet />
    </FixedComponentsContainer>
  )
}
