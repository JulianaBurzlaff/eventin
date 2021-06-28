import AttendantHeader from "../../../components/AttendantHeader";
import CropFreeIcon from "@material-ui/icons/CropFree";
import AttendantLayout from "../../../components/AttendantLayout";
import Button from "../../../components/Button";
import { useAuth } from "../../../Hooks/useAuth";
import * as S from "./styles";

function AttendantHome() {
  const { logout } = useAuth();
  return (
    <AttendantLayout>
      <S.Container>
        <AttendantHeader />
        <S.Main>
          <CropFreeIcon fontSize="inherit" />
          <S.Phrase>Click to read the QR Code</S.Phrase>
        </S.Main>
        <Button width="200px" height="50px" onClick={logout}>
          Logout
        </Button>
      </S.Container>
    </AttendantLayout>
  );
}

export default AttendantHome;
