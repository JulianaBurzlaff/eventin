import AttendantHeader from "../../../components/AttendantHeader";
import CropFreeIcon from "@material-ui/icons/CropFree";
import AttendantLayout from "../../../components/AttendantLayout";
import * as S from "./styles";

function AttendantHome() {
  return (
    <AttendantLayout>
      <S.Container>
        <AttendantHeader />
        <S.Main>
          <CropFreeIcon fontSize="inherit" />
          <S.Phrase>Click to read the QR Code</S.Phrase>
        </S.Main>
      </S.Container>
    </AttendantLayout>
  );
}

export default AttendantHome;
