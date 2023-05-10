import { ReactNode } from "react";

export interface iTransactions {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

export interface iPostTransactions{
  description: string,
  price: number,
  category: string,
  type: 'income' | 'outcome'
}

export interface iTransactionContext {
  transactions: iTransactions[],
  getTransactions: (query: string) => Promise<void>
  postTransactions: (data: iPostTransactions) => Promise<void>
}

export interface iTransactionProvider {
  children: ReactNode
}
