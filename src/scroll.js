import React from 'react';
const Scroll = (props)=> {
    return(
        <div style={{overflow :'Scroll'
        ,border:'1px solid black'
        ,height :'1000px'}}>

        { props.children}
        </div>
    );
};
export default Scroll;