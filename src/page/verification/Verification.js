import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { verifyUser } from "../../components/admin-signup/adminAction";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Header } from "../../components/layout/Header";

export const Verification = () => {
  const [searchParam] = useSearchParams();
  const getC = searchParam.get("c");
  const getE = searchParam.get("e");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showSpinner, setShowSpinner] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setShowSpinner(true);
    const result = await dispatch(verifyUser({ email: getE, code: getC }));
    if (result?.status === "success") {
      navigate("/");
    } else {
      setShowSpinner(false);
    }
  };
  return (
    <>
      <Header />
      <div className="bg-secondary text-light w-50 text-center p-5 mt-5 m-auto">
        {!showSpinner ? (
          <>
            {" "}
            <h2>Verify Your Account</h2>
            <Button onClick={handleClick}>verify</Button>
          </>
        ) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </div>
    </>
  );
};
