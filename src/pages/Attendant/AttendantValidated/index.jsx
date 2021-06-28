import AttendantHeader from "../../../components/AttendantHeader";
import SuccessfulIcon from "../../../assets/successful.svg";
import Button from "../../../components/Button";
import AttendantLayout from "../../../components/AttendantLayout";
import * as S from "./styles";

function AttendantValidated() {
  return (
    <AttendantLayout>
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
    </AttendantLayout>
  );
}

export default AttendantValidated;
