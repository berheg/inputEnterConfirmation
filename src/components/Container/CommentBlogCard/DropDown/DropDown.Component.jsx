import React from "react";
import Button from "../../Button/Button.Component";

const DropDown = props => {
  const id = props.titleArray;
  return(
    <div class="dropdown-content" style={dropdownStyle}>
      { props.titleArray.map(title => <Button title={title} onClickHandle={props.onClickHandle.bind(this,id)}/> )}   
    </div> 
  )     
}
const dropdownStyle = {
  display: 'flex',
  zIndex: '4',
  marginTop: '25px'
}
export default DropDown;