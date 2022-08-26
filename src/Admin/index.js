import * as React from "react";
import {  Route } from 'react-router-dom';
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import theme from "../theme";
import { AdminLayout } from "../Layout/AdminLayout";
import { CustomRoutes } from "react-admin";
import Users from "../Layout/icap";
import InvestmentSumarry from "../Layout/InvestmentSummary";
import ModalPage from "../Layout/modalPage";
import FormPage from "../Layout/formPage";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const AdminApp = () => (
  <Admin layout={AdminLayout} theme={theme} dataProvider={dataProvider}>
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
        <CustomRoutes>
            <Route path="/users" element={<Users />} />
            <Route path="/investmentsumarry" element={<InvestmentSumarry />} />
            <Route path="/modalpage" element={<ModalPage/>} />
            <Route path="/formpage" element={<FormPage/>} />
        </CustomRoutes>
  </Admin>
);

export default AdminApp;