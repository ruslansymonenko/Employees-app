import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bonus: false,
            promotion: false
        }
    }

    onBonus = () => {
        this.setState(({bonus}) => ({
            bonus: !bonus
        }))
    }

    onPromotion = () => {
        this.setState(({promotion}) => ({
            promotion: !promotion
        }))
    }

    render () {
        const {name, salary} = this.props;
        const {bonus} = this.state;
        const {promotion} = this.state;

        let classNamesLi = "list-group-item d-flex justify-content-between";
        if (bonus) {
            classNamesLi += ' increase';
        }
        if (promotion) {
            classNamesLi += ' like';
        }
    
        return (
            <li className={classNamesLi}>
                <span className="list-group-item-label" onClick={this.onPromotion}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onBonus}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                        className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
};

export default EmployeesListItem;