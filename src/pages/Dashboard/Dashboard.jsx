import Sidebar from "../../components/SidebarComponent";
import Header from "../../components/HeaderComponent";
import SearchBar from "../../components/SearchBarComponent";
import Table from "../../components/TableComponent";
// import Paggination from "../../components/UiComponents/Paggination";

const Dashboard = () => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Header />
      </div>
      <div className="">
        <SearchBar />
        <div>
          <Table />
          {/* <Paggination /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
