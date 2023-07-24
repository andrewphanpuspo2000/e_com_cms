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
    <div className="side-bar bg-dark text-light p-3">
      <p className="mt-3 text-center"> Admin Panel</p>
      <hr />
      <nav>
        <ul className="list-unstyled side-bar-list">
          <li>
            <Link to="/dashboard" className="nav-link">
              <AiFillDashboard /> Dashboard
            </Link>
          </li>
          <li className="list-style-none">
            <Link to="/product" className="nav-link">
              <BsBox />
              Product
            </Link>
          </li>
          <li className="list-style-none">
            <Link to="/payment-option" className="nav-link">
              <AiFillCreditCard /> Payment Option
            </Link>
          </li>
          <li className="list-style-none">
            <Link to="/order" className="nav-link">
              <AiOutlineOrderedList /> Order
            </Link>
          </li>
          <li className="list-style-none">
            <Link to="/category" className="nav-link">
              <BiCategoryAlt />
              Category
            </Link>
          </li>
          <li className="list-style-none">
            <Link to="/customer" className="nav-link">
              <FaUserAlt />
              Customer
            </Link>
          </li>
          <li className="list-style-none">
            <Link to="/add-admin" className="nav-link">
              <RiAdminFill />
              Admin User
            </Link>
          </li>
          <hr />
          <li className="list-style-none">
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
