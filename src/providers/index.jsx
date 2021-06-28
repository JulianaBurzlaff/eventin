import React from "react";

import { AdminProvider } from "./AdminProvider";
import { UserProvider } from "./UserProvider";
import { EventProvider } from "./EventProvider";
import { AttendantProvider } from "./AttendantProvider";
import { LoginProvider } from "./LoginProvider";

function AppProvider(props) {
  return (
    <LoginProvider>
      <AdminProvider>
        <EventProvider>
          <UserProvider>
            <AttendantProvider>{props.children}</AttendantProvider>
          </UserProvider>
        </EventProvider>
      </AdminProvider>
    </LoginProvider>
  );
}

export default AppProvider;
