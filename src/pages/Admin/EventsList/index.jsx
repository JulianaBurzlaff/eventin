import { useHistory } from "react-router-dom";
import Header from "../../../components/Header";
import ListDetail from "../../../components/ListDetail";
import Button from "../../../components/Button";
import AdminLayout from "../../../components/AdminLayout";
import DeleteIcon from "@material-ui/icons/Delete";
import * as S from "./styles";

const events = [
  {
    eventname: "Scrum Day",
    date: "07/02/2021",
    time: "08:00",
    location: "New York",
  },
  {
    eventname: "Scrum Day",
    date: "07/02/2021",
    time: "08:00",
    location: "New York",
  },
  {
    eventname: "Scrum Day",
    date: "07/02/2021",
    time: "08:00",
    location: "New York",
  },
];

function EventsList() {
  const history = useHistory();
  const onDelete = (event) => {
    alert(`delete ${event.eventname}`);
  };

  const newEvent = () => {
    history.push(`/admin/events/register`);
  };

  const rows = events.map((event) => [
    { value: event.eventname, size: "22%" },
    { value: event.date, size: "22%" },
    { value: event.time, size: "22%" },
    { value: event.location, size: "22%" },
    {
      value: (
        <button onClick={() => onDelete(event)}>
          <DeleteIcon style={{ cursor: "pointer" }} />
        </button>
      ),
      size: "12%",
    },
  ]);

  return (
    <AdminLayout>
      <Header type="admin" />
      <S.Container>
        <S.ListHeader>
          <S.EventName>Event name</S.EventName>
          <S.Date>Date</S.Date>
          <S.Time>Time</S.Time>
          <S.Location>Location</S.Location>
          <S.Actions>Actions</S.Actions>
        </S.ListHeader>

        <S.List>
          {rows.map((row, index) => (
            <ListDetail row={row} key={index} />
          ))}
        </S.List>
        <S.Button>
          <Button width="200px" height="50px" onClick={newEvent}>
            + Register new event
          </Button>
        </S.Button>
      </S.Container>
    </AdminLayout>
  );
}

export default EventsList;
