import qs from "qs";
import AttendantHeader from "../../../components/AttendantHeader";
import Button from "../../../components/Button";
import PersonIcon from "@material-ui/icons/Person";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import AttendantLayout from "../../../components/AttendantLayout";
<<<<<<< Updated upstream
import { useUsers } from "../../../Hooks/useUsers";
import { useEvents } from "../../../Hooks/useEvents";
import { useParams } from "react-router-dom";
=======
import AttendantRefused from "../../../components/AttendantRefused";
import { useEvents } from "../../../Hooks/useEvents";
import { useLocation, useHistory } from "react-router-dom";
>>>>>>> Stashed changes
import * as S from "./styles";
import { useEffect } from "react";

function AttendantValidation() {
<<<<<<< Updated upstream
  const { getTicketData } = useEvents();
  const { userDataTicket, getUserDataFromTicket } = useUsers();
  const { eventDataTicket, getEventDataFromTicket } = useEvents();
  const { token } = useParams();

  useEffect(() => {
    (async () => {
      const ticket = await getTicketData(token);
      await getUserDataFromTicket(ticket.userId);
      await getEventDataFromTicket(ticket.eventId);
=======
  const history = useHistory();
  const { ticket, getTicketData, updateTicket } = useEvents();
  const location = useLocation();
  const { token } = qs.parse(location.search, { ignoreQueryPrefix: true });

  useEffect(() => {
    (async () => {
      await getTicketData({ token });
>>>>>>> Stashed changes
    })();
  }, []);

  const validateTicket = () => {
<<<<<<< Updated upstream
    //fazer put em tickets pra trocar validated pra true
    //verificar em algum lugar as situacao do validated
=======
    updateTicket(token);
    history.push("/attendant/validated");
>>>>>>> Stashed changes
  };

  return (
    <AttendantLayout>
      <S.Container>
        <AttendantHeader />
<<<<<<< Updated upstream
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
=======
        {ticket?.ticket?.validated ? (
          <AttendantRefused />
        ) : (
          <>
            <S.EventInfo>
              <h2>{ticket?.event?.eventName}</h2>
              <S.EventDetails>
                <S.Date>
                  <CalendarTodayIcon fontSize="inherit" />
                  <h4>{ticket?.event?.date}</h4>
                </S.Date>
                <S.Hour>
                  <QueryBuilderIcon fontSize="inherit" />
                  <h4>{ticket?.event?.time}</h4>
                </S.Hour>
                <S.Location>
                  <LocationOnIcon fontSize="inherit" />
                  <h4>{ticket?.event?.location}</h4>
                </S.Location>
              </S.EventDetails>
            </S.EventInfo>
            <S.UserInfo>
              <PersonIcon fontSize="large" />
              <h2>{ticket?.user?.fullname}</h2>
            </S.UserInfo>
            <Button width="200px" height="50px" onClick={validateTicket}>
              Validate
            </Button>
          </>
        )}
>>>>>>> Stashed changes
      </S.Container>
    </AttendantLayout>
  );
}

export default AttendantValidation;
