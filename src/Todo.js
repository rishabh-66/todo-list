import React, { useState } from 'react'
import './Todo.css'
import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"
import DeleteIcon from "@material-ui/icons/DeleteForeverRounded";
import db from './firebase'
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles((theme)=>({
  paper:{
    position: 'relative',
    width:400,
    backgroundColor:theme.palette.background.paper,
    //border:'2px solid #000',
    boxShadow:theme.shadows[5],
    padding:theme.spacing(2,4,3)
  },
  button: {
    width: 150,
    // border: '2px solid #000',
    margin: "10px",
  }
}))



const Todo = (props) => {
  const classes = useStyles()
  const [open,setOpen] = useState(false)
  const [input,setInput] = useState()

  
  const updateTodo=()=>{
    db.collection('todos').doc(props.todo.id).set({
      todo:input
    },
    {merge:true})
    setOpen(false) 
  }

  return (
    <>
    <Modal
      open={open}
      onClose={(e)=>setOpen(false)}
    >
      <div className={classes.paper}>
        <h1>Update the Task</h1>
        <input 
        placeholder={props.todo.todo} 
        value={input} 
        onChange={event=>setInput(event.target.value)}
        />
        <Button 
        variant="contained"
        color="default"
        onClick={updateTodo}
        className={classes.button}
        >Update Todo</Button>
      </div>
    </Modal>
    <List className='todo_list'>
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.todo.todo} secondary="Uploaded Task"/>
      </ListItem>
      <Button
      color="secondary" 
      onClick={e=>setOpen(true)}
      >
      </Button>
      <DeleteIcon
        onClick={(Event) =>
          db.collection("todos").doc(props.todo.id).delete()
        }>
      </DeleteIcon>
      <Button
          variant="contained"
          color="primary"
          onClick={(e) => setOpen(true)}
          className={classes.button}
          endIcon={<EditIcon>send</EditIcon>}
        >Edit
        </Button>
    </List>
    </>
  )
}

export default Todo
