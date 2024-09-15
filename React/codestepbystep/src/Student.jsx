import './style.css';
import style from './custome.module.css';
function Student() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "goldenrod" }}>Hello World</h1>  {/* inline CSS */}
      <h1 className="red">Hello World</h1>
      <h1 className={style.green}>Hello World</h1>
    </div>
  )
}

export default Student;