import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useUsers } from "../../../Hooks/useUsers";
import { useAuth } from "../../../Hooks/useAuth";
import Header from "../../../components/Header";
import ListDetail from "../../../components/ListDetail";
import Button from "../../../components/Button";
import AdminLayout from "../../../components/AdminLayout";
import DeleteIcon from "@material-ui/icons/Delete";
import * as S from "./styles";

function UserList() {
  const history = useHistory();
  const { user } = useAuth();
  const { users = [], fetchUsers } = useUsers();

  const onDelete = (user) => {
    alert(`delete ${user.fullname}`);
  };

  const newUser = () => {
    history.push(`/admin/users/register`);
  };

  useEffect(() => {
    if (user) {
      fetchUsers(user.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const rows = users.map((user) => [
    { value: user.id, size: "10%" },
    { value: user.fullname, size: "40%" },
    { value: user.username, size: "40%" },
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
          <S.ID>ID</S.ID>
          <S.Fullname>Full name</S.Fullname>
          <S.Username>Username</S.Username>
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
