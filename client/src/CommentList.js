import React from 'react';

const CommentList = ({data}) => {
    console.log(data);
    return (
        <div>
        {data.map((item)=>{
            return(
            <div className="singleComment">
            <h3> Author : {item.author}</h3>
            <p> Comment : {item.comment} </p>
      </div> )} )} 
     </div>)
    

        }   
      

export default CommentList
