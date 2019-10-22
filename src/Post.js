import React from 'react';
import './Post.css';

const Post = ({name,id ,post}) => {
  //const {name,id ,post}=props ;
  return (
  <div className ='bg-light-green dib br3 pa3 ma2 grow' >
  
   <div>
   <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
     <h2>{name}</h2>
     <p>{post}</p>
   </div>
  </div>
  );
}

export default Post;
