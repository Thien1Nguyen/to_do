
const TodoDisplay = (props) => {

        const toggleComplete = (e, i) => {
            props.onCompleteUpdate(e.target.checked, i)
        }
        const toggleDelete = (e,i) =>{
            props.onDelete(e, i)
        }
        const randomColorGen = () =>{
            const colorList = ['red','navy','teal', 'ForestGreen','DeepPink','SeaGreen','MediumPurple', 'Indigo','SpringGreen', "plum", "cornflowerblue"]
            return colorList[Math.round(Math.random() * (colorList.length - 1))]
        }

    return (
        <div className="p-3 bg-white clear">
            <h1 className="mb-5 text-primary border-bottom border-1 border-dark">To Do List</h1>
            {
                props.todoList.map((task, i) => {
                    return (
                        <div key={i} className="border-bottom border-1 mb-3">
                            <input 
                            type="checkbox"
                            checked={task.isComplete} 
                            className="me-2"
                            onChange={(e) => toggleComplete(e, i)}
                            />

                            <span 
                            className="me-3"
                            style={task.isComplete ? {color: "grey",textDecorationLine:"line-through" } : {color: randomColorGen()}}
                            >{task.task}</span>

                            <button className="btn btn-dark"
                            onClick={(e) => toggleDelete(e, i)}
                            >Delete</button>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default TodoDisplay;