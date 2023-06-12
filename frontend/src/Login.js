import login from "./assets/login.png";
import trasync from "./assets/trasync.png";
import google from "./assets/google.png";
import "./Login.css";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Quicksand:wght@500&family=Roboto:wght@500&display=swap"
        rel="stylesheet"
      ></link>
      <div className="flex justify-between">
        <img className="img-login" src={login} alt="login"></img>
        <div className="info-div">
          <img className="h-min margin-auto" src={trasync} alt="trasync"></img>
          <h1 className="text-center font-roboto mt-4 login-title">Login</h1>
          <button
            onClick={handleClick}
            className=" flex margin-auto mt-4 google-button"
          >
            <img src={google} width={24}></img>
            <div>Entrar com o google</div>
          </button>
          <h1 className="text-center mt-4">Ou</h1>
          <div>
            <input className="input-login" placeholder="E-mail"></input>
            <input
              className="margin-auto  block input-login"
              placeholder="Senha"
            ></input>
          </div>
          <div className="mt-4 forgot">Esqueceu sua senha?</div>
          <div>
            <button onClick={handleClick} className="mt-6 login-button">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
