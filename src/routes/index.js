import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import UserList from "../pages/Admin/UserList";
import EventsList from "../pages/Admin/EventsList";
import AttendantsList from "../pages/Admin/AttendantsList";
import UserRegistration from "../pages/Admin/UserRegistration";
import AttendantHome from "../pages/Attendant/AttendantHome";
import AttendantValidation from "../pages/Attendant/AttendantValidation";
import AttendantValidated from "../pages/Attendant/AttendantValidated";
import AttendantRefused from "../pages/Attendant/AttendantRefused";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact to="/home" from="/" />
        <Route path="/home" component={Home} />
        <Route path="/admin/users" exact component={UserList} />
        <Route path="/admin/events" component={EventsList} />
        <Route path="/admin/attendants" component={AttendantsList} />
        <Route path="/admin/users/register" component={UserRegistration} />
        <Route path="/attendant" exact component={AttendantHome} />
        <Route
          path="/attendant/validation"
          exact
          component={AttendantValidation}
        />
        <Route
          path="/attendant/validated"
          exact
          component={AttendantValidated}
        />
        <Route path="/attendant/refused" exact component={AttendantRefused} />
      </Switch>
    </BrowserRouter>
  );
}
