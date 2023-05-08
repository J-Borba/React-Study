import { FormContainer, MinutesAmountInput, TaskInput } from './Form.styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../contexts/CyclesContext'
import { useFormContext } from 'react-hook-form'

export function Form() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>

      <TaskInput
        id="task"
        list="task-suggestion"
        placeholder="Dê um nome para o seu projeto"
        {...register('task')}
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
      />

      <span>minutos</span>
    </FormContainer>
  )
}
