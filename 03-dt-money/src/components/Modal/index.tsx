import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionButton } from "../Header/styles";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as zod from 'zod'
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionContext";

const modalFormSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome']),
})

type ModalFormType = zod.infer<typeof modalFormSchema>

export function Modal() {

  const { postTransactions } = useContext(TransactionsContext)

  const { register, handleSubmit, formState: {isSubmitting}, control, reset} = useForm<ModalFormType>({
    resolver: zodResolver(modalFormSchema),
    defaultValues: {
      type: "income"
    }
  })

  async function handleNewModalTransaction(data: ModalFormType) {

    await postTransactions({...data})
    reset()
    
  }

  return (
    <Dialog.Root>
    <Dialog.Trigger asChild>
        <NewTransactionButton>Nova Transação</NewTransactionButton>
    </Dialog.Trigger>

    <Dialog.Portal>
      <Overlay />

        <Content>

            <Dialog.Title>
                Nova Transação
            </Dialog.Title>

            <CloseButton > 
              
              <X size={24}/> 

            </CloseButton>

            <form onSubmit={handleSubmit(handleNewModalTransaction)}>
              <input 
                type="text"
                placeholder ="Descrição"
                required
                {...register('description')}  
              />
              <input 
                type="number"
                placeholder ="Preço"
                required
                {...register('price', { valueAsNumber: true})}  
              />
              <input 
                type="text"
                placeholder ="Categoria"
                required
                {...register('category')}  
              />

              <Controller 
                control={control}
                name="type"
                render={({ field }) => {
                  return (
                    <TransactionType onValueChange={field.onChange} value={field.value}>
                      <TransactionTypeButton variant="income" value="income">
                        <ArrowCircleUp size={24}/>
                        Entrada
                      </TransactionTypeButton>
      
                      <TransactionTypeButton variant="outcome" value="outcome">
                        <ArrowCircleDown size={24}/>
                        Saída
                      </TransactionTypeButton>
                    </TransactionType>
                  )
                }}
              />

              <button type="submit" disabled={isSubmitting}>Cadastrar</button>
            </form>

        </Content>
    </Dialog.Portal>
</Dialog.Root>
  )
}