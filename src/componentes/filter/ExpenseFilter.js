import React, {useState} from 'react';

import './ExpenseFilter.css';

function ExpensesFilter(props) {

    const ChangeHandle = (event) => {
        props.onInputFilter(event.target.value)
    }


  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.select} onChange={ChangeHandle}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter