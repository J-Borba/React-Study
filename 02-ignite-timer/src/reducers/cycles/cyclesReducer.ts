import { produce } from 'immer'

import { CyclesState } from '../../interfaces/cyclesInterfaces'
import { ActionTypes } from './cyclesAction'

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      } else {
        return produce(state, (draft) => {
          draft.cycles[currentCycleIndex].stoppedDate = new Date()
          draft.activeCycleId = null
        })
      }
    }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_COMPLETED: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      } else {
        return produce(state, (draft) => {
          draft.cycles[currentCycleIndex].concludedDate = new Date()
          draft.activeCycleId = null
        })
      }
    }

    default:
      return state
  }
}
