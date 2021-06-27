import AttendantHeader from "../../../components/AttendantHeader";
import CropFreeIcon from "@material-ui/icons/CropFree";
import * as S from "./styles";

function AttendantHome() {
  return (
    <S.Container>
      <AttendantHeader />
      <S.Main>
        <CropFreeIcon fontSize="inherit" />
        <S.Phrase>Click to read the QR Code</S.Phrase>
      </S.Main>
    </S.Container>
  );
}

export default AttendantHome;
