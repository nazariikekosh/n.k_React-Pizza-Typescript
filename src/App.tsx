import React, { FC, useState } from 'react';
import AddPizzaForm from './components/AddPizzaForm';
import DisplayPizzas from './components/DisplayPizzas';
import Pizza from './models/Pizza';
import './App.css';


const App: FC = () => {
    const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

    const addPizza = (newPizza: Pizza) => {
      setPizzasList([...pizzasList, newPizza])
    }

    console.log('pizzasList >>>>>', pizzasList);
    
  return (
    <div className="App">
      <div className='wrap'>
        <span className='heading'>Наша піцерія</span>
        <AddPizzaForm
          addPizza={addPizza}  
        />

        <DisplayPizzas
          pizzasList={pizzasList}
        />

      </div>
    </div>
  );
}

export default App;
