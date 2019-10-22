import React from 'react';
import Post from './Post.js';

const PostsList=({humans}) => {
    const postcomponent = humans.map((user,i) => {
 return <Post key={i} id={humans[i].id} name={humans[i].name} post={humans[i].post}/>
    })

    return (
        <div>
            {postcomponent}
        </div>
    );
}
export default PostsList;