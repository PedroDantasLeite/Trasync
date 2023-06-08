import login from "./login.png";
import trasync from "./trasync.png";
import "./Login.css";
function Login() {
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
      <div className="flex">
        <img className="w-1/2" src={login} alt="login"></img>
        <div>
          <img className="h-min" src={trasync} alt="trasync"></img>
          <h1>Login</h1>
          <button className="rounded border border-gray-">
            Entrar com google
          </button>
          <div>
            <div>
              <input placeholder="usuario"></input>
            </div>
            <input placeholder="senha"></input>
          </div>
          esqueceu sua senha?
          <div>
            <button className="login-button">Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
