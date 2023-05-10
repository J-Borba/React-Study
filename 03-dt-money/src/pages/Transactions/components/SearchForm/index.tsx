import { MagnifyingGlass } from "phosphor-react";
import { SearchFormStyled } from "./styles";
import { useForm } from "react-hook-form";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../../../contexts/TransactionContext";

const searchFormSchema = zod.object({
  query: zod.string()
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {

  const { getTransactions } = useContext(TransactionsContext)

  const {register, handleSubmit, formState: {isSubmitting}} = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchForm(data: SearchFormInputs) {
    
    await getTransactions(data.query)
    
  }

  return (
    <SearchFormStyled onSubmit={handleSubmit(handleSearchForm)}>

      <input
        type="text"
        placeholder="Busque por transações" 
        {...register('query')} 
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20}/>
        Buscar
      </button>

    </SearchFormStyled>
  )
}