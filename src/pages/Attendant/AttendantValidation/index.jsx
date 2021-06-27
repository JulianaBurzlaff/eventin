import AttendantHeader from "../../../components/AttendantHeader";
import Button from "../../../components/Button";
import PersonIcon from "@material-ui/icons/Person";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import * as S from "./styles";

function AttendantValidation() {
  return (
    <S.Container>
      <AttendantHeader />
      <S.EventInfo>
        <h2>Event Name</h2>
        <S.EventDetails>
          <S.Date>
            <CalendarTodayIcon fontSize="inherit" />
            <h4>xx/xx/xxxx</h4>
          </S.Date>
          <S.Hour>
            <QueryBuilderIcon fontSize="inherit" />
            <h4>xx:xx</h4>
          </S.Hour>
          <S.Location>
            <LocationOnIcon fontSize="inherit" />
            <h4>Location</h4>
          </S.Location>
        </S.EventDetails>
      </S.EventInfo>
      <S.UserInfo>
        <PersonIcon fontSize="large" />
        <h2>User Name</h2>
      </S.UserInfo>
      <Button>Validate</Button>
    </S.Container>
  );
}

export default AttendantValidation;
