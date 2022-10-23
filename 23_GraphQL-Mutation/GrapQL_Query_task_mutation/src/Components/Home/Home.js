import PassengerInput from "../Passenger/PassengerInput";
import ListPassenger from "../Passenger/ListPassenger";
import Header from "./Header";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_PASSENGERS } from "../../Apollo/mutation/CreateData";
import { GET_PASSENGERS } from "../../Apollo/query/GetAllData";
import { DELETE_PASSENGERS } from "../../Apollo/mutation/DeleteData";
import { UPDATE_PASSENGERS } from "../../Apollo/mutation/UpdateData";
import { useState } from "react";
import UpdatePassengers from "../Passenger/UpdatePassengers";

const Home = () => {
  const {
    data,
    loading: getLoading,
    error: getError,
  } = useQuery(GET_PASSENGERS);

  const [createData, { loading: createLoading }] = useMutation(
    CREATE_PASSENGERS,
    { refetchQueries: [GET_PASSENGERS] }
  );

  const [deleteData, { loading: deleteLoading }] = useMutation(
    DELETE_PASSENGERS,
    { refetchQueries: [GET_PASSENGERS] }
  );

  const [updateData, { loading: updateLoading }] = useMutation(
    UPDATE_PASSENGERS,
    { refetchQueries: [GET_PASSENGERS] }
  );

  const addPassenger = (newUser) => {
    createData({
      variables: {
        objects: {
          ...newUser,
        },
      },
    });
  };

  const hapusPengunjung = (id) => {
    deleteData({
      variables: {
        id: id,
      },
    });
  };

  const [edit, setEdit] = useState({
    id: "",
    name: "",
    age: "",
    gender: "",
  });

  const onClickEdit = (dataChoice) => {
    setEdit(dataChoice);
  };

  const editPassengers = (toUpdateData) => {
    updateData({ variables: toUpdateData });
  };

  return (
    <div>
      <Header />
      <ListPassenger
        loading={getLoading || deleteLoading}
        data={data}
        error={getError}
        hapusPengunjung={hapusPengunjung}
        onClickEdit={onClickEdit}
      />
      <PassengerInput addPassenger={addPassenger} loading={createLoading} />
      <UpdatePassengers
        edit={edit}
        editPassengers={editPassengers}
        loading={updateLoading}
      />
    </div>
  );
};

export default Home;
