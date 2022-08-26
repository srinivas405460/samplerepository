import * as React from 'react';
import { Menu,Link } from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PeopleIcon from '@mui/icons-material/People';
import LabelIcon from '@mui/icons-material/Label';

export const MyMenu = () => (
    <div>
    <h1>Equity Slice</h1>
    <Link to="/icap">Icap</Link>
    <Menu>
        <Menu.DashboardItem />
        <Menu.Item to="/posts" primaryText="Posts" leftIcon={<BookIcon />}/>
        <Menu.Item to="/comments" primaryText="Comments" leftIcon={<ChatBubbleIcon />}/>
        <Menu.Item to="/users" primaryText="Users" leftIcon={<PeopleIcon />}/>
        <Menu.Item to="/investmentsumarry" primaryText="Investment Summary" leftIcon={<PeopleIcon />}/>
        <Menu.Item to="/modalpage" primaryText="Modal" leftIcon={<PeopleIcon />}/>
        <Menu.Item to="/formpage" primaryText="Form" leftIcon={<LabelIcon />}/>
    </Menu>
    </div>
);