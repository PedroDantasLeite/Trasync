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
      <div className="flex justify-between">
        <img className="img-login" src={login} alt="login"></img>
        <div className="info-div">
          <img className="h-min margin-auto" src={trasync} alt="trasync"></img>
          <h1 className="text-center font-roboto mt-4">Login</h1>
          <button className="block margin-auto rounded border border-gray mt-4">
            Entrar com google
          </button>
          <h1 className="text-center mt-4">Ou</h1>
          <div>
            <input
              className="margin-auto w-max h-8 mt-6 block rounded-sm"
              placeholder="E-mail"
            ></input>
            <input
              className="margin-auto mt-4 h-8 block rounded-sm"
              placeholder="Senha"
            ></input>
          </div>
          <div className="mt-4">Esqueceu sua senha?</div>
          <div>
            <button className="mt-6 login-button">Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
