import qs from "qs";
import AttendantHeader from "../../../components/AttendantHeader";
import Button from "../../../components/Button";
import PersonIcon from "@material-ui/icons/Person";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import AttendantLayout from "../../../components/AttendantLayout";
import AttendantRefused from "../../../components/AttendantRefused";
import { useEvents } from "../../../Hooks/useEvents";
import { useLocation, useHistory } from "react-router-dom";
import * as S from "./styles";
import { useEffect } from "react";

function AttendantValidation() {
  const history = useHistory();
  const { ticket, getTicketData, updateTicket } = useEvents();
  const location = useLocation();
  const { token } = qs.parse(location.search, { ignoreQueryPrefix: true });

  useEffect(() => {
    (async () => {
      await getTicketData({ token });
    })();
  }, []);

  const validateTicket = () => {
    updateTicket(token);
    history.push("/attendant/validated");
  };

  return (
    <AttendantLayout>
      <S.Container>
        <AttendantHeader />
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
      </S.Container>
    </AttendantLayout>
  );
}

export default AttendantValidation;
