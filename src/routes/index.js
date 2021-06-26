import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import UserList from "../pages/Admin/UserList";
import EventsList from "../pages/Admin/EventsList";
import AttendantsList from "../pages/Admin/AttendantsList";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact to="/home" from="/" />
        <Route path="/home" component={Home} />
        <Route path="/admin/users" component={UserList} />
        <Route path="/admin/events" component={EventsList} />
        <Route path="/admin/attendants" component={AttendantsList} />
      </Switch>
    </BrowserRouter>
  );
}
