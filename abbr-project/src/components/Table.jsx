import '../styles/table.scss'

export function Table({ atendimentos }) {

  return (
    <main id='mainForTable'>
      <table className="abbr-atend-table">
        <thead>
          <tr>
            <th>Horário</th>
            <th>Prontuário</th>
            <th>Nome</th>
            <th>Atendimento</th>
            <th>Chegada</th>
            <th>Atividade</th>
            <th>Convênio</th>
            <th>Autorizado</th>
            <th>Tipo Sessão</th>
          </tr>
        </thead>
        <tbody>
          {atendimentos.map((atendimento) => {
            return (
              <tr key={atendimento.id}>
                <td>{atendimento.horario}</td>
                <td>{atendimento.prontuario}</td>
                <td>{atendimento.nome}</td>
                <td>{atendimento.atendimento}</td>
                <td>{atendimento.chegada && <div className='green-ball'></div>}</td>
                <td>{atendimento.atividade}</td>
                <td>{atendimento.convenio}</td>
                <td>{atendimento.aut}</td>
                <td>{atendimento.ss}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </main>

  )
}