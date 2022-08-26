import * as React from 'react';
import { AppBar } from 'react-admin';
import logo from '../logo.svg';
import { Typography } from '@mui/material';

export const MyAppBar = (props) => (
    <AppBar
        sx={{
            "& .RaAppBar-title": {
                flex: 1,
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
            },
        }}
        {...props}
    >
        <Typography
            variant="h6"
            color="inherit"
            // className={classes.title}
            id="react-admin-title"
        />
        <img src={logo} alt="logo" width="100px"/>
        {/* <span className={classes.spacer} /> */}
    </AppBar>
)