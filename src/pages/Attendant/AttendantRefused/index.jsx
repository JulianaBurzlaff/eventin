import AttendantHeader from "../../../components/AttendantHeader";
import ErrorIcon from "../../../assets/error.svg";
import Button from "../../../components/Button";
import * as S from "./styles";

function AttendantValidated() {
  return (
    <S.Container>
      <AttendantHeader />
      <S.ErrorIcon src={ErrorIcon} />
      <S.Phrase>
        This QR Code is invalid or
        <br /> has already been used.
      </S.Phrase>
      <Button width="200px" height="50px">
        Try again
      </Button>
    </S.Container>
  );
}

export default AttendantValidated;
