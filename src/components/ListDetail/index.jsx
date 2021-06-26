// import * as S from "./styles";

function ListDetail({ className, row }) {
  console.log(row);

  return (
    <div className={className}>
      {row.map(({ value, size }) => (
        <span style={{ width: size, display: "inline-block" }}>{value}</span>
      ))}
    </div>
  );
}

export default ListDetail;
