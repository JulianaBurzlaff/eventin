import React from "react";

import { AdminProvider } from "./AdminProvider";
import { UserProvider } from "./UserProvider";
import { EventProvider } from "./EventProvider";
import { AttendantProvider } from "./AttendantProvider";

function AppProvider(props) {
  return (
    <AdminProvider>
      <EventProvider>
        <UserProvider>
          <AttendantProvider>{props.children}</AttendantProvider>
        </UserProvider>
      </EventProvider>
    </AdminProvider>
  );
}

export default AppProvider;
