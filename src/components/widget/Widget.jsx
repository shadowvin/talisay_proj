import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = () => {
  return(
    <div className="widget">
      <div className="left">
          <span className="title"> LOREM IPSUM </span>
          <span className="counter"> LOREM IPSUM </span>
      </div>
        <div className="right">
          <PersonOutlinedIcon classname="icon"/>
        </div>  
    </div>

  );
};

export default Widget;
