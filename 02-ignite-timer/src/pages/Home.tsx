import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StyledButton,
  TaskInput,
} from '../styles/HomePage.styles'

export function Home() {
  const { register, handleSubmit, watch } = useForm()

  function handleNewCycle(data: any) {
    console.log(data)
  }

  const isButtonDisabled = !watch('task') || !watch('minutesAmount')

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>

          <TaskInput
            id="task"
            list="task-suggestion"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestion">
            <option value="Estudar" />
            <option value="Programar" />
            <option value="Trabalhar" />
          </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StyledButton type="submit" disabled={isButtonDisabled}>
          <Play size={24} />
          Começar
        </StyledButton>
      </form>
    </HomeContainer>
  )
}
