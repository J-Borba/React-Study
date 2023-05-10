import { useContext } from "react";
import { SearchForm } from "../SearchForm";
import { PriceHighlight, TableContainer, TableStyled, TdStyled } from "./styles";
import { TransactionsContext } from "../../../../contexts/TransactionContext";
import { dateFormatter, priceFormatter } from "../../../../utils/formatter";

export function Table () {

  const { transactions } = useContext(TransactionsContext)
  
  return (
    
    <TableContainer>

      <SearchForm />

      <TableStyled>
        <tbody>
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>

                <TdStyled>
                  {transaction.description}
                </TdStyled>

                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>

                <td>{transaction.category}</td>

                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>

              </tr>
                )
            })}

        </tbody>
    </TableStyled>

</TableContainer>
  )
}