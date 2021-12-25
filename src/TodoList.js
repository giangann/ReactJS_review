import Checkbox from "antd/lib/checkbox/Checkbox"

function TodoList({item,handleCheck}){
    return(
        <div>
            
            {item.work}
            <Checkbox onChange={e=>{
                handleCheck(item.id,e.target.checked)
            }}
            defaultChecked = {item.isCompleted}></Checkbox>
        </div>
    )
}

export default TodoList