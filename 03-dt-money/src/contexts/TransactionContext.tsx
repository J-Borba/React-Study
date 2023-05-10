import { createContext, useEffect, useState } from "react";
import { iPostTransactions, iTransactionContext, iTransactionProvider, iTransactions } from "../interfaces";
import { api } from "../lib/axios";

export const TransactionsContext = createContext({} as iTransactionContext)

export function TransactionsProvider({children}: iTransactionProvider) {
  const [transactions, setTransactions] = useState<iTransactions[]>([])

  async function getTransactions(query?: string) {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query
      }
    })

    setTransactions(response.data) 
  }

  async function postTransactions(data: iPostTransactions) {

    const response = await api.post('transactions', {
      ...data,
      createdAt: new Date()
    })

    setTransactions(state => [response.data, ...state])
  }
  
  useEffect(() => {
      getTransactions()
  }, [])

  return(
    <TransactionsContext.Provider value={ {transactions, getTransactions, postTransactions} }>
      {children}
    </TransactionsContext.Provider>
  )
}