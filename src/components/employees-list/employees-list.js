import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name="Ruslan Sym" salary={800}/>
            <EmployeesListItem name="Olga Tal" salary={3000}/>
            <EmployeesListItem name="Roman Matv" salary={5000}/>
        </ul>
    )
};

export default EmployeesList;