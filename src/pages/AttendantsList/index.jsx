import Header from "../../components/Header";
import ListDetail from "../../components/ListDetail";
import * as S from "./styles";

const attendants = [
  {
    fullname: "Fulano",
    username: "fulado.ciclano",
    password: 12345,
    event: "Scrum Day",
  },
  {
    fullname: "Fulano",
    username: "fulado.ciclano",
    password: 12345,
    event: "Scrum Day",
  },
  {
    fullname: "Fulano",
    username: "fulado.ciclano",
    password: 12345,
    event: "Scrum Day",
  },
];

function AttendantsList() {
  const onDelete = (attendant) => {
    alert(`delete ${attendant.fullname}`);
  };

  const rows = attendants.map((attendant) => [
    { value: attendant.fullname, size: "10%" },
    { value: attendant.username, size: "10%" },
    { value: attendant.password, size: "10%" },
    { value: attendant.event, size: "10%" },
    {
      value: <button onClick={() => onDelete(attendant)}>Test</button>,
      size: "10%",
    },
  ]);

  return (
    <>
      <Header type="admin" />
      <S.List>
        {rows.map((row, index) => (
          <ListDetail row={row} key={index} />
        ))}
      </S.List>
    </>
  );
}

export default AttendantsList;
