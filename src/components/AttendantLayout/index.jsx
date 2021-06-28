import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";

function AttendantLayout({ children }) {
  const { user, isAdmin, isUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (user) {
      if (isAdmin) {
        history.replace("/admin/users");
      } else if (isUser) {
        history.replace("/user/events-available");
      }
    } else {
      history.replace("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return user ? children : null;
}

export default AttendantLayout;
