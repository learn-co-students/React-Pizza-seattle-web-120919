import React from "react"
import Pizza from "./Pizza"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={
                props.currentPizza ? props.currentPizza.topping : null
              } onChange={(e)=>props.changePizza(e.target.value, "topping")}/>
        </div>
        <div className="col">
          <select value={props.currentPizza ? props.currentPizza.size : null} onChange={(e)=>props.changePizza(e.target.value, "size")} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" onChange={(e)=>props.changePizza(e.target.value, "vegetarian")} checked={props.currentPizza ? props.currentPizza.vegetarian : null}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" onChange={(e)=>props.changePizza(!e.target.value, "vegetarian")}  checked={props.currentPizza ? !props.currentPizza.vegetarian : null}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={()=>props.submitEdit()}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
