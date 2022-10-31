import PassengerInput from "../Passenger/PassengerInput";
import ListPassenger from "../Passenger/ListPassenger";
import Header from "./Header";
import { useMutation, useQuery, useSubscription } from "@apollo/client";
import {
  CREATE_PASSENGERS,
  GET_PASSENGERS,
  DELETE_PASSENGERS,
  UPDATE_PASSENGERS,
  GET_SUBSCRIPTION,
} from "../../Apollo";
import { useState } from "react";
import UpdatePassengers from "../Passenger/UpdatePassengers";

const Home = () => {
  // UseQuery
  // const {
  //   data,
  //   loading: getLoading,
  //   error: getError,
  // } = useQuery(GET_PASSENGERS);

  // UseSubscription
  const {
    data,
    loading: subsLoading,
    error: subsError,
  } = useSubscription(GET_SUBSCRIPTION);

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
        loading={subsLoading || deleteLoading}
        data={data}
        error={subsError}
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
