import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import UserList from "../pages/Admin/UserList";
import EventsList from "../pages/Admin/EventsList";
import AttendantsList from "../pages/Admin/AttendantsList";
import UserRegistration from "../pages/Admin/UserRegistration";

import EventsAvailable from "../pages/User/EventsAvailable";
import EventDetail from "../pages/User/EventDetail";
import UserEvents from "../pages/User/UserEvents";
import UserTicket from "../pages/User/UserTicket";



export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact to="/home" from="/" />
        <Route path="/home" component={Home} />
        <Route path="/admin/users" component={UserList} />
        <Route path="/admin/events" component={EventsList} />
        <Route path="/admin/attendants" component={AttendantsList} />
        <Route path="/admin/usersregister" component={UserRegistration} />

        <Route path="/user/events-available" component={EventsAvailable} />
        <Route path="/user/event-detail" component={EventDetail} />
        <Route path="/user/my-events" component={UserEvents} />
        <Route path="/user/my-ticket" component={UserTicket} />




      </Switch>
    </BrowserRouter>
  );
}
