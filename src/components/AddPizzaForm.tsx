import React, { FC, useState } from "react";
import './style.css';

const initState = {
    title: '',
    price: '',
    img: '',
}

const AddPizzaForm: FC = () => {
    const [newPizza, setNewPizza] = 
        useState <{title: string, price: string, img: string}> (initState)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handle change >>', e.target);
        
    }


    return (
        <form>
            <input
                name="title"
                type="text"
                placeholder="Назва"
                onChange={handleChange}
                value={newPizza.title}
            />
            <input
                name="price"
                type="text"
                placeholder="Ціна"
                onChange={handleChange}
                value={newPizza.price}
            />
            <input
                name="img"
                type="text"
                placeholder="Зображення"
                onChange={handleChange}
                value={newPizza.img}
            />
            <button type="submit">
                + Додати в меню
            </button>
        </form>
    )

}



export default AddPizzaForm;