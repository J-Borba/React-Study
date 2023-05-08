export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  stoppedDate?: Date
  concludedDate?: Date
}

export interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export interface CreateCycleData {
  task: string
  minutesAmount: number
}
