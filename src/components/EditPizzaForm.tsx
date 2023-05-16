import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import Pizza from "../models/Pizza";
import './styles.css';


interface EditPizzaFormProps{
    data: Pizza;
}


const EditPizzaForm: FC <EditPizzaFormProps> = ({data}) => {
    const [editPizza, setEditPizza] = 
        useState <Pizza>(data);

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditPizza({
            ...editPizza,
            [name]: value
        })

    } 

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {title, price, img} = editPizza;

        if (title && price && img) {
            console.log('edit pizza >>>', editPizza);
            
        }
        
    }
        console.log('edit pizza >>>>', editPizza);
        
    return (
        <form
        className="edit-form" 
            onSubmit={handleSubmit}>
            <input
                name="title"
                type="text"
                placeholder="Назва"
                onChange={handleChange}
                value={editPizza.title}
            />
            <input
                name="price"
                type="text"
                placeholder="Ціна"
                onChange={handleChange}
                value={editPizza.price}
            />
            <input
                name="img"
                type="text"
                placeholder="Зображення"
                onChange={handleChange}
                value={editPizza.img}
            />
            <button type="submit">
                Підтвердити
            </button>
        </form>
    )

}



export default EditPizzaForm;