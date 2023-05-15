import '../styles/header.css'
import abbrLogo from '../assets/logo-abbr.png'


export function Header() {
  return(
    <header className="Header">
      <img src={abbrLogo} alt="" />
    </header>
  )
}