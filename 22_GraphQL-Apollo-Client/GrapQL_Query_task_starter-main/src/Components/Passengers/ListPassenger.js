import ListItem from "./ListItem";

const ListPassenger = (props) => {
  return (
    <>
      <div>
        <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
          <thead>
            <tr bgcolor="red">
              <td>Nama</td>
              <td>Umur</td>
              <td>Jenis Kelamin</td>
              <td bgcolor="white" className="removeBorder"></td>
            </tr>
            {props.data.map((item) => (
              <ListItem
                key={item.id}
                data={item}
                hapusPengunjung={props.hapusPengunjung}
              />
            ))}
          </thead>
        </table>
      </div>
    </>
  );
};

export default ListPassenger;
