import PassengerInput from "../Passengers/PassengerInput";
import ListPassenger from "../Passengers/ListPassenger";
import Header from "../Header";

const Home = () => {
  return (
    <div>
      <Header />
      <ListPassenger />
      <PassengerInput />
    </div>
  );
};

export default Home;
