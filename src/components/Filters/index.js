import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import './index.css'

const Filter = ({ title, options }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleTitleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const arrowElement = isExpanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />

  const handleOptionChange = (event) => {
    const { value } = event.target;
    if (event.target.checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter(option => option !== value));
    }
  };

    

  return (
    <div className="filter">
      <div className="title-container">
        <h3 className="filter-title">{title}</h3>
        <span className="arrow-icon" onClick={handleTitleClick}>{arrowElement}</span>
      </div>
      <p className="all-text">All</p>
      
      <ul className={`filter-list-options ${isExpanded ? 'expanded' : ''}`}>
      <p className="unselect-text">Unselect all</p>
        {options.map(option => (
          <li className="filter-item-options"> 
            <label key={option}>
            <input type="checkbox" value={option} onChange={handleOptionChange} />
            <span>{option}</span>
          </label>
          </li>
        ))}
      </ul>
      <hr className='horizontal-line' />
    </div>
  );
};

const Filters = props => {
    const {isShowFilter} = props
  const idealForOptions = ['Men', 'Women', 'Baby & Kids'];
  const occasionOptions = ['Work', 'Casual', 'Party'];
  // ... other options ...

  return (
    <div className={`filters-section ${isShowFilter ? 'show-filter-section' : ''}`} >
        <div className='customisable-container'>
            <input type="checkbox" id="filter-checkbox" className="filter-checkbox" />
            <label htmlFor="filter-checkbox" className="filter-label">Customisable</label>
        </div>
        <Filter title="IDEAL FOR" options={idealForOptions} />
        <Filter title="OCCASION" options={occasionOptions} />
        <Filter title="WORK" options={idealForOptions} />
        <Filter title="FABRIC" options={idealForOptions} />
        <Filter title="SEGMENT" options={idealForOptions} />
        <Filter title="SUITABLE FOR" options={idealForOptions} />
        <Filter title="RAW MEATERIAL" options={idealForOptions} />
        <Filter title="PATTERN" options={idealForOptions} />
      </div>
  );
};

export default Filters;