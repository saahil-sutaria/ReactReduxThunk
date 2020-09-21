import React from 'react';
import {Card} from 'react-bootstrap';

import '../Styles/ComponentsStyle.css'

/* renders top bar */
function Topbar() {
  return (
    <div className="top-bar">
        <Card style={{ width: '100vw' }}>
            <Card.Body style={{paddingLeft: "40px"}}>
                <img width = "15%" height="30%" alt="stack-icon" src='https://github.com/saahil-sutaria/StacklineReactRedux/blob/master/public/stackline.png?raw=true'/>
            </Card.Body>
        </Card>
    </div>
  );
}
export default Topbar;
