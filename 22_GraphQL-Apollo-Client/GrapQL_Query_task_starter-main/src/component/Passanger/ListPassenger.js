import ListItem from "./ListItem";
import LoadingAnimation from "../../LoadingAnimation";
import { useLazyQuery } from "@apollo/client";
import { GET_PASSENGERS_BY_ID } from "../../Apollo/query/GetDataById";
import { useState } from "react";

const ListPassenger = (props) => {
  const [
    getPassenger,
    { loading: loadingPassenger, error: errorPassenger, data },
  ] = useLazyQuery(GET_PASSENGERS_BY_ID);
  const [list, setList] = useState([]);
  const [passengerId, setPassengerId] = useState(0);

  if (loadingPassenger) {
    return <LoadingAnimation />;
  }

  if (errorPassenger) {
    console.log(errorPassenger);
    return null;
  }

  const onGetPassenger = () => {
    getPassenger({
      variables: {
        id: passengerId,
      },
    });
    setList(data?.passengers);
  };

  const onGetPassengerId = (e) => {
    if (e.target) {
      setPassengerId(e.target.value);
    }
  };

  return (
    <div>
      <input
        style={{ marginBottom: "20px" }}
        value={passengerId}
        onChange={onGetPassengerId}
      />
      <button onClick={onGetPassenger}>Get Passengers</button>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead>
          <tr bgcolor="red">
            <td>Nama</td>
            <td>Umur</td>
            <td>Jenis Kelamin</td>
            <td bgcolor="white" className="removeBorder"></td>
          </tr>
          {data?.passengers.map((item) => (
            <ListItem
              key={item.id}
              data={item}
              hapusPengunjung={props.hapusPengunjung}
            />
          ))}
        </thead>
      </table>
    </div>
  );
};

export default ListPassenger;
