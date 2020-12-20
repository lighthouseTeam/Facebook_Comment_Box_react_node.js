import React from 'react';
import Comment from "./Comment"
const CommentList = ({data}) => {
    console.log(data);
    return (
        <div>
        {data.map((item)=>{
            return(
            
            <Comment author = {item.author} comment = {item.comment} key = {item._id} />
       )} )} 
     </div>)
    

        }   
      

export default CommentList
