import { Outlet } from "react-router-dom";
import Herder from "../components/Header";
import Footer from "../components/Footer";
import FetchItems from "../components/fetchItems";
import Loading from "../components/Loading";
import { useSelector } from "react-redux";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>    
      <Herder />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <Loading /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
