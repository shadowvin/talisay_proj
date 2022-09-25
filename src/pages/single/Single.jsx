import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <div className="title">Information</div>
            <div className="item">
              <img
                src=""
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Lorem Ipsum</h1>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Talisay Camarines Norte</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <span className="itemValue">Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat 
                  felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante 
                  pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec
                   lobortis taciti, vehicula nisl litora tellus ligula porttitor metus. </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Google Link:</span>
                  <span className="itemValue">
                  glink: "https://goo.gl/maps/SduZUpD3qqUg2dwr5",
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Additional:</span>
                  <span className="itemValue">Lorem ipsum dolor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
