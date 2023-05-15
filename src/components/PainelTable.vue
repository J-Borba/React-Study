<template>
  <main>
    <table>
      <thead>
        <th>Horário</th>
        <th>Prontuário</th>
        <th>Nome</th>
        <th>Atendimento</th>
        <th>Chegada</th>
        <th>Atividade</th>
        <th>Convênio</th>
        <th>Aut</th>
        <th>SS</th>
      </thead>

      <tbody>
        <tr v-for="pac in data" :key="pac.prontuario" >
          <td>{{ pac.horario }}</td>
          <td>{{ pac.prontuario }}</td>
          <td>{{ pac.nome }}</td>
          <td>{{ pac.atendimento }}</td>
          <td>{{ pac.chegada }}</td>
          <td>{{ pac.atividade }}</td>
          <td>{{ pac.convenio }}</td>
          <td>{{ pac.aut }}</td>
          <td>{{ pac.ss }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script setup>
  const data = [
    {
      horario: '07:05',
      prontuario: '123456',
      nome: 'Joao',
      atendimento: '123456',
      chegada: 'OK',
      atividade: 'Fisioterapia',
      convenio: 'Amil',
      aut: 'Verde',
      ss: 'ss'
    },
    {
      horario: '07:05',
      prontuario: '123457',
      nome: 'Gabriel',
      atendimento: '123456',
      chegada: 'OK',
      atividade: 'Fisioterapia',
      convenio: 'Amil',
      aut: 'Verde',
      ss: 'ss'
    },
    {
      horario: '07:05',
      prontuario: '123458',
      nome: 'Douglas',
      atendimento: '123456',
      chegada: 'OK',
      atividade: 'Fisioterapia',
      convenio: 'Amil',
      aut: 'Verde',
      ss: 'ss'
    },
    {
      horario: '07:05',
      prontuario: '123459',
      nome: 'Jonathan',
      atendimento: '123456',
      chegada: 'OK',
      atividade: 'Fisioterapia',
      convenio: 'Amil',
      aut: 'Verde',
      ss: 'ss'
    },
  ]
</script>

<style lang="scss" scoped>
  main {
      display: flex;
      flex-direction: column;
      width: 80%;
      height: 28rem;
      background-color: whitesmoke;
      margin: 0 auto;
      padding: 2rem;
      border-radius: 6px;
      box-shadow: 0 0 15px 1px var(--abbr-blue-300)
    }
    table {
      width: 100%;
      text-align: center;
      border-spacing: 0;
      color: white;

      th {
        background-color: var(--abbr-green-500);

        &:first-child {
          border-top-left-radius: 6px;
        }
        &:last-child {
          border-top-right-radius: 6px;
        }
      }
    }
    tr {
      color: var(--abbr-gray-900);
    }
</style>