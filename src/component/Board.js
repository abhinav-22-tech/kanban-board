import Column from './Column';
import './styles/board.css'

const Board = ({ columns }) => {

    // Handle the task detail section 
    const handleDetailOfTask = () => {
        alert('Hello From task')
    }

    return (
        <div className='board'>
            {columns.map((column) => (
                <Column key={column.id} column={column} handleDetailOfTask={handleDetailOfTask} />
            ))}
        </div>
    )
}

export default Board;