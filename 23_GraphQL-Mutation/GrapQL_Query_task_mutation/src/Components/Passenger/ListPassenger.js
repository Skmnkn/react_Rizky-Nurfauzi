import ListItem from "./ListItem";
import LoadingAnimation from "../../LoadingAnimation";

const ListPassenger = (props) => {
  if (props.getLoading) {
    return <LoadingAnimation />;
  }

  if (props.getError) {
    console.log(props.getError);
    return null;
  }

  return (
    <div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead>
          <tr bgcolor="red">
            <td>ID</td>
            <td>Nama</td>
            <td>Umur</td>
            <td>Jenis Kelamin</td>
            <td bgcolor="white" className="removeBorder"></td>
          </tr>
          {props.data?.passengers.map((item) => (
            <ListItem
              key={item.id}
              data={item}
              hapusPengunjung={props.hapusPengunjung}
              onClickEdit={props.onClickEdit}
            />
          ))}
        </thead>
      </table>
    </div>
  );
};

export default ListPassenger;
