import "../styles/GroceryList.css"
export function GroceryList({props}) {
    return (
        
        <div className="remItem">
            <span>{props.item}</span>
            <button onClick={() => {

            }}>Remove</button>
        </div>
    )

}