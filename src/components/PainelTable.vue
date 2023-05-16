<template>
  <router-link to="/">
    <img src="@/assets/logo-abbr.png" alt="">
  </router-link>
  
  <main id="main">
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
    </table>
    
    <main id="scrollMain">
      <table>
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
  </main>
</template>

<script setup>
  import { onMounted } from 'vue';
  // import api from '@/services/api'
  import $ from 'jquery'

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
      prontuario: '123460',
      nome: 'Jonathan',
      atendimento: '123456',
      chegada: 'OK',
      atividade: 'Fisioterapia',
      convenio: 'Amil',
      aut: 'Verde',
      ss: 'ss'
    },
    {
      horario: '07:05',
      prontuario: '123461',
      nome: 'Jonathan',
      atendimento: '123456',
      chegada: 'OK',
      atividade: 'Fisioterapia',
      convenio: 'Amil',
      aut: 'Verde',
      ss: 'ss'
    },
    {
      horario: '07:05',
      prontuario: '123462',
      nome: 'Jonathan',
      atendimento: '123456',
      chegada: 'OK',
      atividade: 'Fisioterapia',
      convenio: 'Amil',
      aut: 'Verde',
      ss: 'ss'
    },
    {
      horario: '07:05',
      prontuario: '123463',
      nome: 'Jonathan',
      atendimento: '123456',
      chegada: 'OK',
      atividade: 'Fisioterapia',
      convenio: 'Amil',
      aut: 'Verde',
      ss: 'ss'
    },
    {
      horario: '07:05',
      prontuario: '123464',
      nome: 'Jonathan',
      atendimento: '123456',
      chegada: 'OK',
      atividade: 'Fisioterapia',
      convenio: 'Amil',
      aut: 'Verde',
      ss: 'ss'
    },
    {
      horario: '07:05',
      prontuario: '123465',
      nome: 'Jonathan',
      atendimento: '123456',
      chegada: 'OK',
      atividade: 'Fisioterapia',
      convenio: 'Amil',
      aut: 'Verde',
      ss: 'ss'
    },
    {
      horario: '07:05',
      prontuario: '123466',
      nome: 'Jonathan',
      atendimento: '123456',
      chegada: 'OK',
      atividade: 'Fisioterapia',
      convenio: 'Amil',
      aut: 'Verde',
      ss: 'ss'
    },

    
  ]

  onMounted(() => {
    var $el = $("#scrollMain");
    function anim() {
      var st = $el.scrollTop();
      var sb = $el.prop("scrollHeight")-$el.innerHeight();
      $el.animate({scrollTop: st<sb/2 ? sb : 0}, 5000, anim);
    }
    anim();
  })
</script>

<style lang="scss" scoped>
  img {
    display: none;
    width: 10rem;

    position: relative;
    left: 50%;
    transform: translateX(-50%);
    
    margin: 2rem 0;
  }
  #main {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 28rem;
    background-color: whitesmoke;
    margin: 5rem auto;
    padding: 2rem;
    border-radius: 6px;
    box-shadow: 0 0 15px 1px var(--abbr-blue-300);
    background-color: whitesmoke;

    table {
      border-spacing: 0;
      color: whitesmoke;
      th {
        background-color: var(--abbr-green-500);
        padding: 1px 0;
        width: 8rem;
        &:first-child {
          border-top-left-radius: 6px;
        }

        &:last-child {
          border-top-right-radius: 6px;
        }
      }
    }
  }
  #scrollMain {

    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    table {
      width: 100%;
      text-align: center;
      border-spacing: 0;
      color: white;
      font-size: 1.125rem;
      tr {
        color: var(--abbr-gray-900);

        &:nth-child(odd) {
            background-color: var(--abbr-blue-100);
          }
        td {
          padding: 1rem 0;
          width: 8rem;
          &:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
          }
          &:last-child {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
          }
        }
      }
    }
  }

  @media (display-mode: fullscreen) {
    img {
      display: inline-block;
    }
}
</style>