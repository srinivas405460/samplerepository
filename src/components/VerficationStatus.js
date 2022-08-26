import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    verifyContainer :{
        borderRadius: '3px',
    },
    fail:{
        border: `2px solid ${theme.palette.warning.light}`,
    },
    success:{
        border: `2px solid ${theme.palette.primary.main}`,
    },
    iconContainer : {
       display:'inline-flex',
       alignItems:'center',
       justifyContent:'center',
       color:'#ffffff',
       padding: '1em',
       marginLeft : '-1px',
       '& svg':{
            fontSize: '40px',
       },
       [theme.breakpoints.down('xs')] : {
         marginLeft : 0,
       },
    },
    successIcon:{
        background: theme.palette.primary.main
    },
    failIcon:{
        background: theme.palette.warning.main
    },
    contentContainer:{
        padding:'1em',
    },
    title:{
       fontSize: '24px',
       textAlign:'left',
       fontWeight:600,
       marginBottom: '10px',
    },
    successTitle:{
        color: theme.palette.primary.main,
    },
    failTitle:{
        color: theme.palette.warning.main
    },
    text:{
        textAlign:'left',
        lineHeight: '28px',
    }
}))

const VerficationStatus = ({type,title,text}) => {
    const classes = useStyles();
    return(
        <Grid container className={clsx(classes.verifyContainer,`${ type === 'success' ? classes.success : classes.fail }`)} >
            <Grid item sm={1} xs={12} className={clsx(classes.iconContainer, `${ type === 'success' ? classes.successIcon : classes.failIcon }`)}>
                {
                    type === "success" ?  <CheckSharpIcon /> :  <WarningAmberIcon />
                }
            </Grid>
            <Grid item sm={11} xs={12} className={classes.contentContainer}>
                <Typography variant='h4' className={clsx(classes.title, `${ type === 'success' ? classes.successTitle : classes.failTitle }`)}>{title}</Typography>
                <Typography variant='body1' className={classes.text}>{text}</Typography>
            </Grid>
        </Grid>
    )
}

export default VerficationStatus;