import { useHistory } from "react-router-dom";
import Header from "../../../components/Header";
import ListDetail from "../../../components/ListDetail";
import Button from "../../../components/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import * as S from "./styles";

const attendants = [
  {
    fullname: "Fulano",
    username: "fulado.ciclano",
    password: 12345,
    event: "Scrum Day",
  },
  {
    fullname: "Fulano",
    username: "fulado.ciclano",
    password: 12345,
    event: "Scrum Day",
  },
  {
    fullname: "Fulano",
    username: "fulado.ciclano",
    password: 12345,
    event: "Scrum Day",
  },
];

function AttendantsList() {
  const history = useHistory();
  const onDelete = (attendant) => {
    alert(`delete ${attendant.fullname}`);
  };

  const newAttendant = () => {
    history.push(`/admin/events/register`);
  };

  const rows = attendants.map((attendant) => [
    { value: attendant.fullname, size: "22%" },
    { value: attendant.username, size: "22%" },
    { value: attendant.password, size: "22%" },
    { value: attendant.event, size: "22%" },
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
    <>
      <Header type="admin" />
      <S.Container>
        <S.ListHeader>
          <S.Fullname>Full name</S.Fullname>
          <S.Username>Username</S.Username>
          <S.Password>Password</S.Password>
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
    </>
  );
}

export default AttendantsList;
