import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useEvents } from "../../../Hooks/useEvents";
import { useAuth } from "../../../Hooks/useAuth";
import Header from "../../../components/Header";
import ListDetail from "../../../components/ListDetail";
import Button from "../../../components/Button";
import AdminLayout from "../../../components/AdminLayout";
import DeleteIcon from "@material-ui/icons/Delete";
import * as S from "./styles";

function EventsList() {
  const history = useHistory();
  const { user } = useAuth();
  const { events = [], fetchEvents, deleteEvent } = useEvents();

  const onDelete = (event) => {
    if (
      window.confirm(`Are you sure that you want to delete ${event.eventName}?`)
    ) {
      deleteEvent(event.id);
    }
  };

  const newEvent = () => {
    history.push(`/admin/events/register`);
  };

  useEffect(() => {
    if (user) {
      fetchEvents(user.id);
      // setPages(Math.ceil(users.length / PAGE_LIMIT));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const rows = events.map((event) => [
    { value: event.eventName, size: "22%" },
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
