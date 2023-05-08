import { differenceInSeconds } from 'date-fns'
import { CreateCycleData, Cycle } from '../interfaces/cyclesInterfaces'
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsCompletedAction,
} from '../reducers/cycles/cyclesAction'
import { cyclesReducer } from '../reducers/cycles/cyclesReducer'

import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsCompleted: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storedState = localStorage.getItem(
        '@Ignite-Timer: cycles-state-1.0.0',
      )

      if (storedState) {
        return JSON.parse(storedState)
      }

      return initialState
    },
  )

  useEffect(() => {
    const myJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@Ignite-Timer: cycles-state-1.0.0', myJSON)
  }, [cyclesState])

  const { activeCycleId, cycles } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }
    return 0
  })

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsCompleted() {
    dispatch(markCurrentCycleAsCompletedAction())
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))

    // setCycles((state) => [...state, newCycle])
    setAmountSecondsPassed(0)
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction())
    document.title = 'Ignite Timer'
  }
  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCurrentCycleAsCompleted,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
