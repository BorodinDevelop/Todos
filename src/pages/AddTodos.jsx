import React, {useState} from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Box, Container, IconButton, Toolbar, Typography, Checkbox, Paper, Grid, ButtonBase, Menu, MenuItem, Fab, Fade, Button, TextField  } from '@material-ui/core';
import {Link} from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import MainTodos from './MainTodos'
import CreateTodo from '../components/CreateTodo'


const useStyles = makeStyles((theme) => ({   
    
    boxCard: {
      position: "relative",
      marginTop: "104px",
      background: "white",
      width: "360px",
      minHeight: "200px",   
      padding: "24px 16px",
      
    }  
    
  }));
  
  
  
  function AddTodo() {
    const classes = useStyles();
    return (
        <Container className={classes.boxCard}>
          <CreateTodo></CreateTodo>
        </Container> 
    )
  }

  export default AddTodo