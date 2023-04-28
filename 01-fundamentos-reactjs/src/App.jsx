import { Post } from './Post';
import { Header } from './components/header';

import './css/global.css'

export function App() {
  return (
    
    <div>
      <Header />

      <Post author="João Borba" content="Olá, mundo!" />
      <Post author="Gabriel Bravim" content="Coe" />
    </div>

  )

}