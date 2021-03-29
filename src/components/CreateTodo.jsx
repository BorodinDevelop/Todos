import React, {useState} from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Box, Container, IconButton, Toolbar, Typography, Checkbox, Paper, Grid, ButtonBase, Menu, MenuItem, Fab, Fade, Button, TextField  } from '@material-ui/core';
import {Link} from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: '32px auto',
      maxWidth: "300px",    
      overflow: "hidden",
      
    },
    
    
    boxCard: {
      position: "relative",
      marginTop: "104px",
      background: "white",
      width: "360px",
      minHeight: "200px",   
      padding: "24px 16px",
      
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    textTodo: {    
      maxWidth: "205px",
      overflow: "auto"    
    },
    inputCreate: {
      width: "100%",
      marginBottom: "42px"
    },
    checkBox: {
      top: '-10px'
    },
    inputBlock: {
      marginTop: "40px"
    },
    buttonMenu: {
      top: "-8px"
    },
    noTodoText: {
      margin: "50px auto"
    }
    
   
    
  }));
  /*
  function addTodoFunc( heading, title, date){
    setTodos(todos.concat([{
      heading,
      title,
      date,
      id: todos.length + 1,
      completed: false
    }]))
    }

    export const todosSlice = createSlice({
      name: 'sliceTodos',
      initialState: {
        todos: [
          {id:1, completed: false, title:'jnegfuyguhgjnegfuyguh', heading:'Первый', date:'2017-05-24T10:30'},
          {id:2, completed: false, title:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. ', heading:'Второй', date:'2017-05-24T10:30'},
          {id:3, completed: false, title:'kkhshngkkhshngkkhs hngkkhs hngkkhshngk khshngkk hshngkkhs hngkkhshngkkhshng', heading:'Третий', date:'2017-05-24T10:30'}
        ]
      },
      reducers: {
        increment: state => {
          // Redux Toolkit allows us to write "mutating" logic in reducers. It
          // doesn't actually mutate the state because it uses the Immer library,
          // which detects changes to a "draft state" and produces a brand new
          // immutable state based off those changes
          state.value += 1;
        },
        decrement: state => {
          state.value -= 1;
        },
        incrementByAmount: (state, action) => {
          state.value += action.payload;
        },
      },
    });



  */ 
  function CreateTodo({ onCreateValue }) {
    const classes = useStyles();

    /*
    
    */ 

    const [valueHead, setValueHead] = useState('')
    const [valueTitle, setValueTitle] = useState('')
    const [valueDate, setValueDate] = useState('')
    
    function submitHandler(event) {
      event.preventDefault()

      if (valueHead.trim() && valueTitle.trim() && valueDate) {
        
        onCreateValue(valueHead, valueTitle, valueDate)      
                
      }
      
    }
    
    return(
      <div className={classes.root}>      
        <Grid 
          container                  
          justify="center"
          alignItems="center" 
          
        > 
        <Typography variant="h5">Создать задачу</Typography>       
          <Grid
          direction= "column"
          justify="flex-start"          
          container item xs={12} spacing={3}
          className={classes.inputBlock}
          >
            <form className={classes.root} noValidate autoComplete="off" onSubmit={submitHandler}>              
              <TextField 
                id="outlined-basic" 
                label="Заголовок" 
                variant="outlined" 
                className={classes.inputCreate} 
                value={valueHead}
                onChange={event => setValueHead(event.target.value)}
              />
              <TextField
                className={classes.inputCreate}
                id="outlined-multiline-static"
                label="Описание"
                multiline
                rows={9}                
                variant="outlined"
                value={valueTitle}
                onChange={event => setValueTitle(event.target.value)}
               
              />              
              <TextField
                id="datetime-local"
                label="Крайний срок"
                type="datetime-local"                
                value={valueDate}
                onChange={event => setValueDate(event.target.value)}
                className={classes.inputCreate}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <Grid
              item
              container
              justify="space-between" 
              >
                <Fab color="primary" variant="extended" >
                  <CloseIcon className={classes.extendedIcon} />
                  <Link to="/"></Link>
                  Отмена
                </Fab>             
                <Fab color="primary" variant="extended" type="submit">
                  <SaveOutlinedIcon className={classes.extendedIcon} />
                  <Link to="/"></Link>
                  Сохранить
                </Fab>
              </Grid>
            </form>        
             
          </Grid>  
        </Grid>      
      </div>      
    );
  }

  export default CreateTodo 