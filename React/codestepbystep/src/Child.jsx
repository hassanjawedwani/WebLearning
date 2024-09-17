import { forwardRef } from "react"
function Child(props, ref) {
  {console.log("Child render")}

  return (
    <div>
      <input type="text" placeholder="Child Input" ref={ref} />
    </div>
  )
}

export default forwardRef(Child); //Child;