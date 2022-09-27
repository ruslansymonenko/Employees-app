import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

function App () {

    const data = [
        {name: "Ruslan S.", salary: 8000, bonus: true, promotion: false, id: 1},
        {name: "Olga T.", salary: 3000, bonus: false, promotion: false, id: 2},
        {name: "Roman M.", salary: 5000, bonus: false, promotion: false, id: 3},
    ]

    return (
        <div className="app">
            <AppInfo/>

            <div className="search_panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;