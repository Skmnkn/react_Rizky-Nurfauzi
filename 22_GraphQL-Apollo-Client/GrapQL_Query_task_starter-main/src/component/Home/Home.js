import PassengerInput from "../Passanger/PassengerInput";
import ListPassenger from "../Passanger/ListPassenger";
import Header from "./Header";

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
