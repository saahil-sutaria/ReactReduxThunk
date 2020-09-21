import React from 'react';
import './Styles/App.css';

import Topbar from './Components/Topbar';
import Sidebar from './Components/Sidebar';
import Graph from './Components/Graph';
import StatsTable from './Components/StatsTable'
import fetchProduct from './Actions/fetchProduct';

import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import {connect} from 'react-redux';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App(props) {
  const classes = useStyles();
  const { title, image, subtitle, tags, sales } = props.product[0];
  return (
    <div className="App">
      <Grid container spacing={5} >
            <Grid item xs={12} >
              <Topbar/>
            </Grid>
            <Grid item xs={12} spacing={3} container>
                <Grid item xs ={3} 
               style={{paddingLeft:"50px"}}>
                    <Sidebar title={title} 
                            subtitle = {subtitle} 
                            tags={tags}
                            image={image}
                            {...props}/>                    
                </Grid>
                <Grid item xs ={9} spacing={3} container direction="row"> 
                  <Grid item xs ={12}>
                    <Paper className={classes.paper}>
                      <Graph data={sales}/>
                    </Paper>
                  </Grid><Grid item xs ={12}>
                    <Paper className={classes.paper} >
                      <StatsTable data={sales}/>
                    </Paper>
                  </Grid>
                </Grid>  
            </Grid>
         </Grid>
        
    </div>
  );
}
const mapStateToProps = state => {
  return {
    product : state.product
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct : ()=> dispatch(fetchProduct())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

