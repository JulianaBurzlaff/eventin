import React from "react";

import { UserProvider } from "./UserProvider";

function AppProvider(props) {
  return <UserProvider>{props.children}</UserProvider>;
}

export default AppProvider;
