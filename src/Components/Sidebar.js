import React from 'react';
import {Card} from 'react-bootstrap'

import Tags from './Tags';
import '../Styles/ComponentsStyle.css'

/* this renders sidebar component */ 
function Sidebar(props) {
  
  const tags = props.tags
  return (
    <div className="side-bar" >
        <Card style={{padding:"10px", height:"100vh"}}>
            <Card.Img src={props.image} alt="product"></Card.Img>
            <Card.Body style={{textAlign:"center"}}> 
                  <p><b>{props.title}</b></p>
                  <p>{props.subtitle}</p>
                  <hr/>
                  <div className ='product-tags'>            
                      {tags.map((key, i)=>{
                          return <Tags key={i} tag={key}/>
                      })} 
                  </div>
                  <hr/>
                  <div className = "side-options">
                          <p><img width="20%" height="30%" alt="icon1" src="https://github.com/saahil-sutaria/StacklineReactRedux/blob/master/public/overview.png?raw=true"/>
                              &nbsp;
                              OVERVIEW
                          </p>
                          <p style={{marginLeft:"9px", color: "black"}}>
                              <img width="12%"  height="18%" alt="icon2" src="https://github.com/saahil-sutaria/StacklineReactRedux/blob/master/public/sales.png?raw=true"/>
                              &nbsp;
                              &nbsp;
                              SALES
                          </p>
                  </div>
              </Card.Body>
          </Card>
      </div>
  );
}
export default Sidebar;
