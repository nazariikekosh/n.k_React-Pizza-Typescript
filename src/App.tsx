import React, { FC, useState } from 'react';
import AddPizzaForm from './components/AddPizzaForm';
import Pizza from './models/Pizza';
import './App.css';


const App: FC = () => {
    const [pizzaList, setPizzaList] = useState<Pizza[]>([]);

    const addPizza = (newPizza: Pizza) => {
      setPizzaList([...pizzaList, newPizza])
    }

    console.log('pizzaList >>>>>', pizzaList);
    
  return (
    <div className="App">
      <div className='wrap'>
        <span className='heading'>Наша піцерія</span>
        <AddPizzaForm
          addPizza={addPizza}  
        />
      </div>
    </div>
  );
}

export default App;
