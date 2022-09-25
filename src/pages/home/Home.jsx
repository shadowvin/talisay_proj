import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="lorem" />
          <Widget type="loremm" />
          <Widget type="loremmm" />
          <Widget type="loremmmm" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Users for past months" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
