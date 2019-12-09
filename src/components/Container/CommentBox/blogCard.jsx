import React, {Component} from "react";
import DotButton from "../../DotButton/DotButton.Component";
import DropDown from "../DropDown/DropDown.Component";
import Input from "../../Input/Input.Component";
import List from "../../List/List.Component"
import './blogCard.css';

class BlogCard extends Component {
  
      state = {
      inputValue: '',
      isEnter: false,
      showDropdown: false      
    };
  
    handleInputChange=(event) =>{
      console.log(event.keyCode);
      if(event.keyCode===13){
        this.setState({inputValue: event.target.value, isEnter: true});        
      } 
      
    }
    onClickHandle=(event) =>{
      if(this.state.showDropdown){
        this.setState({showDropdown: false}); 
      }
      else{
        this.setState({showDropdown: true});
      }            
    }        
  render(){
    const titleArray=['...','pin','mark as done','send to Trolle' ]
    return(
      <React.Fragment>
      <div className="blog-card">
        <div className="menu-right">                              
          <DotButton title={'...'} onClickHandle={this.onClickHandle} />
          {this.state.showDropdown && <DropDown titleArray={titleArray} onClickHandle={this.onClickHandle} /> }       
        </div>
        <Input name={"blogCardLabel"} title={"make blog as cards"} placeholder={"add comment..."}
          type={"input"} 
          handleInputChange={this.handleInputChange}
        />
        {this.state.isEnter && <List title ={this.state.inputValue}/>}          
      </div>
      </React.Fragment>
    );
  }
  
};

export default BlogCard;