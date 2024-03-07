
## Namada wallet connector

#### You can use this library to work with the official namada extension and sending transactions will be easy. 

##### Install npm:
```
npm i namada-connect
```
##### install yarn:
```
yarn add namada-connect
```
# Example:

```bash
import { useState } from 'react'
import './App.css'
import InitNamada from 'namada-connect'

function App() {

  const namada = new InitNamada("shielded-expedition.b40d8e9055")
  const [accounts ,setAccounts] = useState<any>(null)
  const [amount, setamount] = useState(0)
  console.log(accounts)
  return (
    <div>
      <button onClick={() => namada.login().then((data) => setAccounts(data))}>Login</button>
        <div>
          <button onClick={() => namada.transfer("tnam1qpvz9gppxe9jzjzhfs90kmtea896s5sd6qag6ez4",amount)}>Transfer</button>
          <input value={amount} onChange={(e) => setamount(Number(e.target.value))} type="text" />
        </div>

        <div>
          <button onClick={() => namada.bond("tnam1qpvz9gppxe9jzjzhfs90kmtea896s5sd6qag6ez4",amount)}>Bond</button>
          <input value={amount} onChange={(e) => setamount(Number(e.target.value))} type="text" />
        </div>

        <div>
          <button onClick={() => namada.unBond("tnam1qpvz9gppxe9jzjzhfs90kmtea896s5sd6qag6ez4",amount)}>UnBond</button>
          <input value={amount} onChange={(e) => setamount(Number(e.target.value))} type="text" />
        </div>

        <div>
          <button onClick={() => namada.voteProposal(1,'yay')}>Vote Propoosal</button>
          <input value={amount} onChange={(e) => setamount(Number(e.target.value))} type="text" />
        </div>

        <div>
          <button onClick={() => namada.voteProposal(1,'yay')}>Vote Propoosal</button>
          <input value={amount} onChange={(e) => setamount(Number(e.target.value))} type="text" />
        </div>
    </div>
  )
}

export default App
```
