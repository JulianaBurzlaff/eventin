import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home";

import UserList from "../pages/Admin/UserList";
import EventsList from "../pages/Admin/EventsList";
import AttendantsList from "../pages/Admin/AttendantsList";
import UserRegistration from "../pages/Admin/UserRegistration";
import AttendantRegistration from "../pages/Admin/AttendantRegistration";
import EventRegistration from "../pages/Admin/EventRegistration";

import AttendantHome from "../pages/Attendant/AttendantHome";
import AttendantValidation from "../pages/Attendant/AttendantValidation";
import AttendantValidated from "../pages/Attendant/AttendantValidated";

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
        <Route path="/admin/users" exact component={UserList} />
        <Route path="/admin/events" exact component={EventsList} />
        <Route path="/admin/attendants" exact component={AttendantsList} />
        <Route path="/admin/users/register" component={UserRegistration} />
        <Route path="/admin/events/register" component={EventRegistration} />
        <Route
          path="/admin/attendants/register"
          component={AttendantRegistration}
        />
        <Route path="/attendant" exact component={AttendantHome} />

        <Route
          path="/attendant/validated"
          exact
          component={AttendantValidated}
        />
        <Route
          path="/attendant/validation"
          exact
          component={AttendantValidation}
        />
        <Route path="/user/events-available" component={EventsAvailable} />
        <Route path="/user/event-detail/:event_name" component={EventDetail} />
        <Route path="/user/my-events" component={UserEvents} />
        <Route path="/user/my-ticket" component={UserTicket} />
      </Switch>
    </BrowserRouter>
  );
}
