import React, {useState} from 'react';
import useSelector from 'react-redux'
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Box, Container, IconButton, Toolbar, Typography, Checkbox, Paper, Grid, ButtonBase, Menu, MenuItem, Fab, Fade, Button, TextField  } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Moment from 'react-moment';
import moment from 'moment';

import {Link} from 'react-router-dom'

import CreateTodo from '../components/CreateTodo'



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
  
  
  
  
  
  
  //Основной компонент
  function MainTodos() {
    const classes = useStyles(); 
  
    /*
      const todos = useSelector(state => state.toolkit.todos)
    */
    const [todos, setTodos] = useState([
      {id:1, completed: false, title:'jnegfuyguhgjnegfuyguh', heading:'Первый', date:'2017-05-24T10:30'},
      {id:2, completed: false, title:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. ', heading:'Второй', date:'2017-05-24T10:30'},
      {id:3, completed: false, title:'kkhshngkkhshngkkhs hngkkhs hngkkhshngk khshngkk hshngkkhs hngkkhshngkkhshng', heading:'Третий', date:'2017-05-24T10:30'} 
    ])
      //чекбоксы
      function toggleTodo(id)  {
        setTodos(
          todos.map(todo => {
            if (todo.id === id) {
              todo.completed = !todo.completed            
            }
            return todo
          })
        )
        
      }; 
      function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
      }    
  
    //Оболочка для задач
    function Card(props) {
      //if no todos
      let ifNoTodos = props.todos
      let noTodos = [classes.noTodoText]
       if (ifNoTodos.length !== 0) {
        noTodos.push('onTodos')      
      } else {
         noTodos.push('noTodos')       
      }
      
      return (
        <React.Fragment>
          <Grid 
            container                  
            justify="center"
                               
          > 
          <Typography variant="h5">Ваш список задач</Typography>       
            <Grid
            direction= "column"
            justify="center"
            alignItems="center"          
            >         
              {props.todos.map(todo => {            
                    
                    return <CardOne todo={todo} key={todo.id} onChange={props.onToggle}/>                   
                                        
              })}              
              <Typography className={noTodos.join(' ')}>
                У вас ещё нет задач!
              </Typography>
            </Grid>
                      
            <Grid
                item
                container
                justify="flex-end" 
              > 
                        
                <Fab color="primary" variant="extended" href="./AddTodos">
                  <AddIcon className={classes.extendedIcon} />
                 <Link to='./AddTodos'></Link>
                 Создать 
                </Fab>
              </Grid>  
          </Grid>        
        </React.Fragment>
      );
    }
    //сами задачи
    function CardOne({todo, onChange}) {
      //console.log(todo)
      //Меню
      const [anchorEl, setAnchorEl] = useState(null);
      const open = Boolean(anchorEl);
  
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
  
      const handleClose = () => {      
        setAnchorEl(null);      
      }; 
      
      //спец класс для зачёркивания 
      const classTodo = []
      if(todo.completed) {
        classTodo.push('done')
      }
      //текущая дата пользователя
      const myDate = moment().format('YYYY-MM-DDTh:mm')   
      
      const classDate = []
      if(todo.date < myDate){
        classDate.push('expired')
      } 
  
        return (
          <div className={classes.root}>
            <Paper className={classes.paper}  elevation={3}>
              <Grid 
                container
                justify="space-between"
                alignItems="flex-start"            
              >
                <Grid item xs={2} >
                  <Checkbox
                    checked={todo.completed}                                    
                    onChange={() => onChange(todo.id)}                 
                    color="primary"
                    className={classes.checkBox}                 
                  />
                </Grid>
                <Grid item xs={9} sm container>
                  <Grid item xs container direction="column" spacing={2}  >
                    <Grid item>
                      <Typography  className={classTodo.join('')}>
                        {todo.heading}
                      </Typography>
                    </Grid>
                    <Grid item className={classes.textTodo}>
                      <Typography  className={classTodo.join('')}>
                        {todo.title}
                      </Typography>
                    </Grid>
                    <Grid item className={classTodo.join('')}>
                      Дедлайн:
                      <Typography className={ classDate }>
                        {todo.date.replace('T', ' ')}                      
                      </Typography>
                    </Grid>                                    
                  </Grid>                
                  <Grid item xs={2} >                
                    <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} className={classes.buttonMenu}>
                      <MoreVertIcon />
                    </Button>
                    <Menu
                      id="fade-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={open}
                      onClose={handleClose}
                      TransitionComponent={Fade}
                    >
                      <MenuItem onClick={handleClose}>Edit</MenuItem>
                      <MenuItem onClick={handleClose, removeTodo.bind(null,todo.id)}>Delete</MenuItem>
                      
                    </Menu>        
                    
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        );
    }
    
    //AddTodo
    
   
    function addTodoFunc( heading, title, date){
    setTodos(todos.concat([{
      heading,
      title,
      date,
      id: todos.length + 1,
      completed: false
    }]))
    }
  
  
    //разметка на странице
    return (
      <>
        <AppBar >
          <Container fixed >
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography >Page title</Typography>          
            </Toolbar>
          </Container>
        </AppBar>    
        
        <Container className={classes.boxCard}>        
          <Card todos={todos} onToggle={toggleTodo} />        
        </Container> 
        <Container className={classes.boxCard}>
          <CreateTodo  onCreateValue={addTodoFunc} />
        </Container>
         
      </>   
    );
  }
  //<Container className={classes.boxCard}>
  //  <AddTodo  onCreateValue={addTodoFunc} />
  //</Container>
  export default MainTodos;