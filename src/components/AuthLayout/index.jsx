import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";

function AuthLayout({ children }) {
  const { user, isAdmin, isAttendant, isUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (user) {
      if (isAttendant) {
        history.replace("/attendant");
      } else if (isUser) {
        history.replace("/user/events-available");
      } else if (isAdmin) {
        history.replace("/admin/users");
      }
    } else {
      history.replace("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return !user ? children : null;
}

export default AuthLayout;
