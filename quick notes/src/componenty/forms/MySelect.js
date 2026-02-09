import  PropTypes from "prop-types"
import React from "react";
const MySelect = props => {
    const {label, name,className,value,onChange ,options} = props;
    return(
        <div>
            <label htmlFor="{name}">{label}: </label>
            <select
                name={name}
                id={name}
                className={className}
                value={value}
                onChange={onChange}
            >
                {options.map((option,index)=>(
                    <option key={index} value={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    );
}
MySelect.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array
}
export default MySelect;