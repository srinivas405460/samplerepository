import { Layout } from "react-admin";
import { MyAppBar } from './MyAppBar';
import { MyMenu } from './MyMenu';

export const AdminLayout = props => <Layout appBar={MyAppBar} {...props} menu={MyMenu} />;