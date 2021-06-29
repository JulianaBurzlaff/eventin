import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAttendants } from "../../../Hooks/useAttendants";
import { useAuth } from "../../../Hooks/useAuth";
import Header from "../../../components/Header";
import ListDetail from "../../../components/ListDetail";
import Button from "../../../components/Button";
import AdminLayout from "../../../components/AdminLayout";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import * as S from "./styles";

function AttendantsList() {
  const history = useHistory();
  const { user } = useAuth();
  const { attendants = [], fetchAttendants } = useAttendants();

  const onDelete = (attendant) => {
    alert(`delete ${attendant.fullname}`);
  };

  const newAttendant = () => {
    history.push(`/admin/attendants/register`);
  };

  useEffect(() => {
    if (user) {
      fetchAttendants(user.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const rows = attendants.map((attendant) => [
    { value: attendant.id, size: "10%" },
    { value: attendant.fullname, size: "26%" },
    { value: attendant.username, size: "26%" },
    { value: attendant.event, size: "26%" },
    {
      value: (
        <button onClick={() => onDelete(attendant)}>
          <EditIcon style={{ cursor: "pointer" }} />
        </button>
      ),
      size: "6%",
    },
    {
      value: (
        <button onClick={() => onDelete(attendant)}>
          <DeleteIcon style={{ cursor: "pointer" }} />
        </button>
      ),
      size: "6%",
    },
  ]);

  return (
    <AdminLayout>
      <Header type="admin" />
      <S.Container>
        <S.ListHeader>
          <S.Id>ID</S.Id>
          <S.Fullname>Full name</S.Fullname>
          <S.Username>Username</S.Username>
          <S.Event>Event</S.Event>
          <S.Actions>Actions</S.Actions>
        </S.ListHeader>

        <S.List>
          {rows.map((row, index) => (
            <ListDetail row={row} key={index} />
          ))}
        </S.List>
        <S.Button>
          <Button width="250px" height="50px" onClick={newAttendant}>
            + Register new attendant
          </Button>
        </S.Button>
      </S.Container>
    </AdminLayout>
  );
}

export default AttendantsList;
