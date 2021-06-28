import { useHistory } from "react-router-dom";
import Header from "../../../components/Header";
import ListDetail from "../../../components/ListDetail";
import Button from "../../../components/Button";
import AdminLayout from "../../../components/AdminLayout";
import DeleteIcon from "@material-ui/icons/Delete";
import * as S from "./styles";

const users = [
  {
    fullname: "Fulano",
    username: "fulado.ciclano",
    password: 12345,
  },
  {
    fullname: "Fulano",
    username: "fulado.ciclano",
    password: 12345,
  },
  {
    fullname: "Fulano",
    username: "fulado.ciclano",
    password: 12345,
  },
];

function UserList() {
  const history = useHistory();
  const onDelete = (user) => {
    alert(`delete ${user.fullname}`);
  };

  const newUser = () => {
    history.push(`/admin/users/register`);
  };

  const rows = users.map((user) => [
    { value: user.fullname, size: "30%" },
    { value: user.username, size: "30%" },
    { value: user.password, size: "30%" },
    {
      value: (
        <button onClick={() => onDelete(user)}>
          <DeleteIcon style={{ cursor: "pointer" }} />
        </button>
      ),
      size: "10%",
    },
  ]);

  return (
    <AdminLayout>
      <Header type="admin" />
      <S.Container>
        <S.ListHeader>
          <S.Fullname>Full name</S.Fullname>
          <S.Username>Username</S.Username>
          <S.Password>Password</S.Password>
          <S.Actions>Actions</S.Actions>
        </S.ListHeader>

        <S.List>
          {rows.map((row, index) => (
            <ListDetail row={row} key={index} />
          ))}
        </S.List>
        <S.Button>
          <Button width="200px" height="50px" onClick={newUser}>
            + Register new user
          </Button>
        </S.Button>
      </S.Container>
    </AdminLayout>
  );
}

export default UserList;
