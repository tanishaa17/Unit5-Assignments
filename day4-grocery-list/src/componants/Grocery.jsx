import { useState } from "react"
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { nanoid } from "nanoid";

export const Grocery = () => {
    const [grocery, setGrocery] = useState([]);
    const addItems = (data) => {
        const itemDetails = {
            id: nanoid(),
            item: data,
            status: false
        }
        setGrocery([...grocery, itemDetails])
    }
    const Remove = (id) => {

    }

    return (
        <>
            <GroceryInput addItems={addItems} />
            {
                grocery.map((e) => (
                    <GroceryList props={e} key = {e.id} />
                ))
            }
        </>
    )
}