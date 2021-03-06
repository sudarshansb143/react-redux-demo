import { useState, useEffect } from "react";

//hooks by react-redux
import { useSelector, useDispatch } from "react-redux";

//actions
const AllAction = require("../actions");

//component body
function BaseComponent() {
  //subscribee data from store
  const counter = useSelector((state) => state.counter);
  const currentUser = useSelector((state) => state.currentUser);

  //store dispatch to dispatch actions
  const dispatch = useDispatch();

  //custom internal state
  const [username, setUsername] = useState("");

  let defaultUser = { name: "Jack" }
  //login code
  useEffect(() => {
    dispatch(AllAction.loginAction(defaultUser));
  }, [dispatch]);

  function handleLogin() {
    if (!username.toString().trim()) return;
    console.log("uname", username);
    dispatch(AllAction.loginAction({ name: username }));
  }

  return (
    <>
      <div>
        {currentUser.loggedIn ? (
          <>
            <div className="alert alert-primary text-white text-center py-5">
              <h1 className=""> Hi {currentUser.user.name} ! Welcome Back </h1>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(AllAction.logoutAction())}
              >
                logout
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="alert alert-primary text-white text-center py-5">
              <h1>Please Login First !</h1>

              <label htmlFor=""> Enter Name : </label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                required
                className="form-control"
              />
              <button className="btn btn-primary" onClick={handleLogin}>
                {" "}
                Login{" "}
              </button>
            </div>
          </>
        )}
      </div>
      <div className="text-center bg-secondary py-3">
        <h1 className="text-white my-3"> Counter Value is {counter}</h1>
        <button
          className="btn btn-success text-white py-2"
          onClick={() => dispatch(AllAction.addCounter())}
        >
          Increment
        </button>
        &nbsp; &nbsp;
        <button
          className="btn btn-danger text-white py-2"
          onClick={() => dispatch(AllAction.substractCounter())}
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default BaseComponent;
