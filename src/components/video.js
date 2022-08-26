import React from 'react';
import { Player, ControlBar, PlayToggle } from 'video-react';
import '../../node_modules/video-react/dist/video-react.css'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    videoWrap : {
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        '& .video-react-big-play-button':{
            top:0,
            bottom:0,
            left:0,
            right:0,
            margin: 'auto',
            borderRadius:'50%',
            width:'60px',
            height:'60px',
            border:'2px solid white',
        },
        '& .video-react-big-play-button:before':{
           position:'unset',
        },
        '& .video-react-poster':{
            backgroundSize:'cover',
        },
    }
}))
const Video = ({poster,source}) => {
    const classes = useStyles();
    return(
        <div className={classes.videoWrap}>
            <Player
                poster={poster}
                src={source}
                >
                <ControlBar autoHide={true} disableDefaultControls={true} >
                    <PlayToggle />
                </ControlBar>
            </Player>
        </div>
    )
}

export default Video;