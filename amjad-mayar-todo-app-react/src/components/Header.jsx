import './styles/Header.css';

function Header({handleToggle}){
    return (
        <header>
            <h1>Tasks List</h1>
            <button className="createTask" 
            onClick={(e)=>handleToggle(e)}>Create Task</button>
        </header>
    )
}
export default Header;