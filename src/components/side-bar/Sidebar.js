import { Link } from "react-router-dom";
import {
  AiFillDashboard,
  AiFillCreditCard,
  AiOutlineOrderedList,
} from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { BsBox } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
export const Sidebar = () => {
  return (
    <div className="side-bar bg-primary text-light ">
      <p className="mt-3 text-center"> Admin Panel</p>
      <hr />
      <nav className="sidebar-collection">
        <ul className="list-unstyled side-bar-list">
          <li className="p-3">
            <Link to="/dashboard" className="nav-link">
              <AiFillDashboard /> Dashboard
            </Link>
          </li>
          <li className="list-style-none p-3">
            <Link to="/product" className="nav-link">
              <BsBox />
              Product
            </Link>
          </li>
          <li className="list-style-none p-3">
            <Link to="/payment-option" className="nav-link">
              <AiFillCreditCard /> Payment Option
            </Link>
          </li>
          <li className="list-style-none p-3">
            <Link to="/order" className="nav-link">
              <AiOutlineOrderedList /> Order
            </Link>
          </li>
          <li className="list-style-none p-3">
            <Link to="/category" className="nav-link">
              <BiCategoryAlt />
              Category
            </Link>
          </li>
          <li className="list-style-none p-3">
            <Link to="/customer" className="nav-link">
              <FaUserAlt />
              Customer
            </Link>
          </li>
          <li className="list-style-none p-3">
            <Link to="/add-admin" className="nav-link">
              <RiAdminFill />
              Admin User
            </Link>
          </li>
          <hr />
          <li className="list-style-none p-3">
            <Link to="/profile" className="nav-link">
              <CgProfile />
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
