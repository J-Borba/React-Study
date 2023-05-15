import api from '../api/api'
import { useState } from 'react'
import { useEffect } from 'react'
import { Header } from '../components/Header'
import { Table } from '../components/Table'
import '../styles/atendimentos.css'

function Atendimentos() {
  const [atendimentos, setAtendimentos] = useState([])

  async function getAtendimentos() {
    const response = await api.get('atendimentos')

    setAtendimentos(response.data)
  }

  useEffect(() => {

    getAtendimentos()

  }, [])
  
  return (
    <div className='PageContainer'>

      <Header />

      <div className="tableContainer">

        <Table atendimentos={atendimentos}/>

      </div>
    
  </div>
  )
}

export default Atendimentos