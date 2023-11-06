import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Typed from "typed.js";
import UserNavbar from "./UserNavbar";
import bg from "../asset/bg2.jpg";

const Index = () => {
  const { state } = useLocation();
  const [userid, setuserid] = useState("");
  const [username, setusername] = useState("");
  const [loading, setLoading] = useState(true);
  const typingRef = useRef(null);
  const navigate = useNavigate();

  const authenticateUser = () => {
    if (state && Array.isArray(state) && state.length >= 2) {
      setuserid(state[0]);
      setusername(state[1]);
      setLoading(false);
      return true;
    } else {
      setuserid(""); // Set userid to empty if authentication fails
      setLoading(false);
      return false;
    }
  };

  useEffect(() => {
    const isAuthenticated = authenticateUser();
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      const options = {
        strings: ["", "Happy to see you here..."],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true,
      };

      if (typingRef.current) {
        const typing = new Typed(typingRef.current, options);

        return () => {
          typing.destroy();
        };
      }
    }
  }, [state, navigate,authenticateUser]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div>
            <UserNavbar userid={userid} username={username} />
          </div>
          <div
            style={{
              backgroundImage: `url(${bg})`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "90%",
              backgroundPositionY: "30px",
              paddingBottom: "120px",
            }}
          >
            <form method="GET">
              <div
                className="home-page"
                style={{ textAlign: "center", width: "100%", height: "100vh" }}
              >
                <div
                  className="home-div"
                  style={{ padding: "180px 120px", textAlign: "left" }}
                >
                  <p
                    style={{
                      fontFamily: "Copperplate, Papyrus, fantasy",
                      fontSize: "35px",
                      color: "black",
                    }}
                  >
                    Welcome to Qraise family,
                  </p>
                  <h1
                    style={{
                      fontFamily: "Acme",
                      fontSize: "55px",
                      color: "black",
                    }}
                  >
                    {username}
                  </h1>
                  <h2>
                    <div
                      className="text1"
                      style={{
                        fontFamily: "Courier New, monospace",
                        fontSize: "50px",
                        color: " #990099",
                      }}
                      ref={typingRef}
                    ></div>
                  </h2>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Index;
