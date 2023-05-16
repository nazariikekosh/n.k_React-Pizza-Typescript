import React, {FC, useState} from 'react';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import EditPizzaForm from './EditPizzaForm';
import Pizza from '../models/Pizza';


interface SinglePizzaProps {
    pizza: Pizza;
}


const SinglePizza: FC<SinglePizzaProps> = ({pizza}) => {
    const [edit , setEdit] = useState <boolean>(false);

    return (
        <div className="pizza">
            <img src={`/images/${pizza.img}`} alt={pizza.title}/>
            <h2>{pizza.title}</h2>
            <span>{pizza.price} ₴</span>

            <div className="pizza-controls">
                <AiFillEdit/>
                <AiFillDelete/>
            </div>

            {edit
                ? <EditPizzaForm
                    data={pizza}
                />
                : null
            }
        </div>
    )
}


export default SinglePizza;