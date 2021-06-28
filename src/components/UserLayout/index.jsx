import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";

function UserLayout({ children }) {
  const { user, isAdmin, isAttendant } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (user) {
      if (isAdmin) {
        history.replace("/admin/users");
      } else if (isAttendant) {
        history.replace("/attendant");
      }
    } else {
      history.replace("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return user ? children : null;
}

export default UserLayout;
