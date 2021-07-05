import { useHistory } from "react-router-dom";
import ErrorIcon from "../../assets/error.svg";
import Button from "../Button";
import * as S from "./styles";

function AttendantRefused() {
  const history = useHistory();
  const onTryAgainClick = () => {
    history.push("/attendant");
  };

  return (
    <>
      <S.ErrorIcon src={ErrorIcon} />
      <S.Phrase>
        This QR Code is invalid or
        <br /> has already been used.
      </S.Phrase>
      <Button width="200px" height="50px" onClick={onTryAgainClick}>
        Try again
      </Button>
    </>
  );
}

export default AttendantRefused;
