import AttendantHeader from "../../../components/AttendantHeader";
import Button from "../../../components/Button";
import PersonIcon from "@material-ui/icons/Person";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import AttendantLayout from "../../../components/AttendantLayout";
import { useUsers } from "../../../Hooks/useUsers";
import { useEvents } from "../../../Hooks/useEvents";
import { useParams } from "react-router-dom";
import * as S from "./styles";
import { useEffect } from "react";

function AttendantValidation() {
  const { getTicketData } = useEvents();
  const { userDataTicket, getUserDataFromTicket } = useUsers();
  const { eventDataTicket, getEventDataFromTicket } = useEvents();
  const { token } = useParams();

  useEffect(() => {
    (async () => {
      const ticket = await getTicketData(token);
      await getUserDataFromTicket(ticket.userId);
      await getEventDataFromTicket(ticket.eventId);
    })();
  }, []);

  const validateTicket = () => {
    //fazer put em tickets pra trocar validated pra true
    //verificar em algum lugar as situacao do validated
  };

  return (
    <AttendantLayout>
      <S.Container>
        <AttendantHeader />
        <S.EventInfo>
          <h2>{eventDataTicket.eventName}</h2>
          <S.EventDetails>
            <S.Date>
              <CalendarTodayIcon fontSize="inherit" />
              <h4>{eventDataTicket.date}</h4>
            </S.Date>
            <S.Hour>
              <QueryBuilderIcon fontSize="inherit" />
              <h4>{eventDataTicket.time}</h4>
            </S.Hour>
            <S.Location>
              <LocationOnIcon fontSize="inherit" />
              <h4>{eventDataTicket.location}</h4>
            </S.Location>
          </S.EventDetails>
        </S.EventInfo>
        <S.UserInfo>
          <PersonIcon fontSize="large" />
          <h2>{userDataTicket.fullname}</h2>
        </S.UserInfo>
        <Button width="200px" height="50px" onClick={validateTicket}>
          Validate
        </Button>
      </S.Container>
    </AttendantLayout>
  );
}

export default AttendantValidation;
