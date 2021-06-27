import * as S from "./styles";

function ListDetail({ className, row }) {
  console.log(row);

  return (
    <S.ListDetail>
      {row.map(({ value, size }) => (
        <span style={{ width: size, display: "flex" }}>{value}</span>
      ))}
    </S.ListDetail>
  );
}

export default ListDetail;
