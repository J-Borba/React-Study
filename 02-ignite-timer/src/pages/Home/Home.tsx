import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './HomePage.styles'

import { HandPalm, Play } from 'phosphor-react'

import { Form } from '../components/Form/Form'
import { Countdown } from '../components/Countdown/Countdown'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

const newCycleValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

type NewCycleData = zod.infer<typeof newCycleValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const NewCycleForm = useForm<NewCycleData>({
    resolver: zodResolver(newCycleValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = NewCycleForm

  function handleCreateNewCycle(data: NewCycleData) {
    createNewCycle(data)
    reset()
  }

  const isButtonDisabled = !watch('task') || !watch('minutesAmount')

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...NewCycleForm}>
          <Form />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isButtonDisabled}>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
