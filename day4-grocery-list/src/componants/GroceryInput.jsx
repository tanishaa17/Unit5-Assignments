import { useState } from "react"

export const GroceryInput = ({ addItems }) => {
    const [item, setItem] = useState(" ");
    return <div>

        <input type="text" placeholder="items" onChange={(e) => {
            setItem(e.target.value)
        }} />
        <button onClick={() => {
            addItems(item)
        }}>Add Item</button>
    </div>
}