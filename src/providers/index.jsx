import React from "react";

import { AdminProvider } from "./AdminProvider";
import { UserProvider } from "./UserProvider";
import { EventProvider } from "./EventProvider";
import { AttendantProvider } from "./AttendantProvider";
import { AuthProvider } from "./AuthProvider";

function AppProvider(props) {
  return (
    <AuthProvider>
      <AdminProvider>
        <EventProvider>
          <UserProvider>
            <AttendantProvider>{props.children}</AttendantProvider>
          </UserProvider>
        </EventProvider>
      </AdminProvider>
    </AuthProvider>
  );
}

export default AppProvider;
