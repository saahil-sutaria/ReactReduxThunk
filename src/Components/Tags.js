import React from 'react';
import '../Styles/ComponentsStyle.css'

/* Renders tags */
function Tags(props) {
  return (
    <div className="transbox">
       <p>{props.tag}</p>
    </div>
  );
}

export default Tags;
