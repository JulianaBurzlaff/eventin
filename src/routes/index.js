import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import UserList from "../pages/UserList";
import EventsList from "../pages/EventsList";
import AttendantsList from "../pages/AttendantsList";

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
