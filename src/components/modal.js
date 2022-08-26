import React from "react";
import Modal from '@material-ui/core/Modal';
import { makeStyles } from "@material-ui/core";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    modal : {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: theme.typography.fontFamily,
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      textAlign:'center',
      margin: '1em',
      width: 350,
      borderRadius:2,
    },
    icon:{
      width: '60px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto',
      borderRadius: '50%',
      color: 'white',
      marginTop: '-47px',
      marginBottom: '20px',
    },
    text: {
      color: theme.palette.info.dark,
    }
}))
const ModalComponent = ({open,handleClose,color,title,text,icon}) => {
    const classes = useStyles();
    return(
      <Modal
      open={open}
      className={classes.modal}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <div className={classes.icon} style={{background:`${color}`}}>
          {icon}
        </div>
          <Typography variant="h5" style={{color:`${color}`}}>
            {title} 
          </Typography>
          <Typography variant="body2" className={classes.text}>
            {text}
          </Typography>
      </div>
    </Modal>  
    )
}

export default ModalComponent;