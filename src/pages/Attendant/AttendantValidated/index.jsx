import AttendantHeader from "../../../components/AttendantHeader";
import SuccessfulIcon from "../../../assets/successful.svg";
import Button from "../../../components/Button";
import * as S from "./styles";

function AttendantValidated() {
  return (
    <S.Container>
      <AttendantHeader />
      <S.SuccessfulIcon src={SuccessfulIcon} />
      <S.Phrase>
        Successful validation!
        <br />
        Guest is allowed to enter.
      </S.Phrase>
      <Button width="200px" height="50px">
        Close
      </Button>
    </S.Container>
  );
}

export default AttendantValidated;
