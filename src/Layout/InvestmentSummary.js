import React from "react";
import { Grid, Typography } from "@mui/material";
import {styled } from "@mui/material";
import equitySlice from "../Images/equitySlice.svg";
import NumberFormat from 'react-number-format';
import videothumbnail from "../Images/videothumbnail.png";
import Video from "../components/video";

const useStyles = styled((theme) => ({
    root : {
        display: 'flex',
        width:'100%',
        position:'relative',
        overflow: 'hidden',
        padding:'20px',
    },
    gridItem:{
        display:'flex',
    },
    summaryContainer:{
        boxShadow: '0px 0px 5px #00000029',
        width: '100%',
        padding:'1em',
        '& .summaryHeading' : {
            textAlign: 'left',
            color: `${theme.palette.secondary.main}`,
            fontWeight:'bold',
            letterSpacing: 'normal',
        },
    },
    offeringItem : {
        display: 'flex',
        margin: '8px 0px',
        '& .key':{
            width:'35%',
            color: '#000',
            textAlign:'left',
            [theme.breakpoints.down('xs')]:{
                width: '40%',
                fontSize:'14px',
            }
        },
        '& .value':{
            width:'65%',
            fontSize:'15px',
            color: '#000',
            textAlign:'left',
            [theme.breakpoints.down('xs')]:{
                fontSize:'14px',
                width: '60%',
            }
        }
    },
    videoConatainer:{
        boxShadow: '0px 0px 5px #00000029',
        width: '100%',
        position: 'relative',
        padding:'1em',
    },
}))

const InvestmentSumarry = () => {
    const classes = useStyles();
    const formatImg = (img) => {
        return(
            <img src={img} alt="equitySlice"/>
        )
    }
    const formatText = (text) => {
        return(
            <Typography variant="body1" style={{fontWeight:'600'}}>{text}</Typography>
        )
    }
    const formatCurrency = (number, fix) => (
        <b>
            <NumberFormat
                fixedDecimalScale
                decimalScale={2}
                value={number}
                displayType={'text'}
                thousandSeparator={true}
                prefix={fix === '$' && fix}
                suffix={fix === '%' && fix}
            />
        </b>
    );

    const data = {
        "Offered By" : formatImg(equitySlice),
        "Issuer" : formatText("Icap Equity Investment"),
        "Offering Name": formatText("Vault"),
        "Offering Amount": formatCurrency(25000000,"$"),
        "Status":formatText("Open"),
        "Posting Date":formatText("Feb 02/2022"),
        "Offering Type": formatText("Prefered Equity"),
        "offering Summary":"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s."
    }
    
    return (
        <Grid container className = {classes.root} spacing={3}>
            <Grid item lg={5} sm={12} xs={12}  className={classes.gridItem}>
                <div className={classes.summaryContainer}>
                    <Typography variant='h3' className="summaryHeading">Summary of the Investment</Typography>
                    {
                        Object.entries(data).map(([key,value],i)=>{
                            return(
                                <div className={classes.offeringItem} key={i}>
                                    <Typography variant="body1" className="key">
                                        {key} :
                                    </Typography>
                                    <div className="value">
                                        {value}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Grid>
            <Grid item lg={7} sm={12} xs={12} className={classes.gridItem}>
                <div className={classes.videoConatainer} >
                    <Video
                     poster = {videothumbnail}
                     source = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    />
                </div>    
            </Grid>
        </Grid>
    )
}

export default InvestmentSumarry;
