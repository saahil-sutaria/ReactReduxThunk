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
                          <p><img width="30px" height="30px" alt="icon1" src="data:image/png;base64,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" />
                              &nbsp;
                              OVERVIEW
                          </p>
                          <p style={{marginLeft:"5px", color: "black"}}><img width="20px" alt="icon2" height="19px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8AAAD09PQeHh78/PylpaXY2Nh9fX0sLCysrKxTU1MyMjK+vr5WVlaSkpIZGRnd3d1DQ0OZmZlNTU23t7fQ0NCMjIyhoaEjIyPFxcUaGhpmZmY9PT3sHW0AAAABVklEQVR4nO3d3U6DQBCAUSxWoVVBqRV/3v85vcdkNs2awJDzXQ+TPZdLQmgaSZIkSZIkSZIkSUra2J3DXg9rn7C2h7u4YffClnDzERJuP0LC7UdIuP0ICet7Oz1HTZfK/esLHwsnOFbuJySsj5CwFCFhfYSEpQgJ6yMkLEVIWB8hYSlCwvoICUsREtZHSFgqn/D9+hK2nM8n7Avz0+6FJ0JCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQsLdCPtj2MeYXjgXNj6lF54JCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQnDbv+3+jR3UcPnYv7ahvNf/WL+MoTz8/difoz3dz+3f0N6H7e1+b8PSJIkSdJ/VLqMpK8pXJnzR5g/wvwR5o8wf4T5I8wfYf6adu81h7239isGSZIkScrRL2jzbmecpl5fAAAAAElFTkSuQmCC" />
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
