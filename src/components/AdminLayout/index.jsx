import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";

function AdminLayout({ children }) {
  const { user, isAttendant, isUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (user) {
      if (isAttendant) {
        history.replace("/attendant");
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

export default AdminLayout;
