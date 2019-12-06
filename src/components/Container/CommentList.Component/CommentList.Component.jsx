import React from "react";
//import List from "../../List/List.Component";
import DotButton from "../../DotButton/DotButton.Component";
import DropDown from "../DropDown/DropDown.Component";
import CommentBlogCard from "../CommentBlogCard/CommentBlogCard.Component";

const CommentList = props => {
    
    return(
        <div >
            {props.inputValue.map(titleList =>
            <div className="blog-card">
                <div className="menu-right">                              
                    <DotButton title={props.title} onClickHandle={props.onClickHandle.bind(this,titleList.id)} />
                    {props.showDropdown && <DropDown titleArray={props.titleArray} onClickHandle={props.onClickHandle.bind(this,titleList.id)} 
                        showDropdown={props.showDropdown}/> }                     
                </div>                
                <CommentBlogCard name={"blogCardLabel"} className= "comment-list" title={titleList.comment} titleLabel ={"make blog as cards"}/>
            </div>)}
        </div>
    )     
}

export default CommentList;