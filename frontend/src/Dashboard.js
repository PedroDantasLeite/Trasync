import "./Dashboard.css";
import bell from "./assets/bell.png";
import juliana from "./assets/juliana.png";
import trasync from "./assets/trasync.png";
import dashboard from "./assets/dashboard.png";
import relatorios from "./assets/relatorios.png";
import artigos from "./assets/artigos.png";
import configuracoes from "./assets/configurações.png";
function Dashboard() {
  return (
    <>
      <header>
        <div className="flex">
          <div className="w-60 header-esquerda">
            <div className="border-b-2 border-gray-300">
              <img className="margin-auto w-40 p-4" src={trasync}></img>
            </div>
            <button className="h-14 w-60 gap-2 bg-blue-100">
              <div className=" flex gap-4">
                <img className="h-6 w-auto ml-2" src={dashboard} />
                Dashboard
              </div>
            </button>
            <button className="h-14 w-60 gap-2">
              <div className=" flex gap-4">
                <img className="h-min w-auto ml-2" src={relatorios} />
                Relatorios
              </div>
            </button>
            <button className="h-14 w-60 gap-2">
              <div className=" flex gap-4">
                <img className="h-min w-auto ml-2" src={artigos} />
                Artigos favoritos
              </div>
            </button>
            <button className="h-14 w-60 gap-2">
              <div className=" flex gap-4">
                <img className="h-min w-auto ml-2" src={configuracoes} />
                Configurações
              </div>
            </button>
            <button className="h-14 w-60 gap-2 pt-80">
              <div className=" flex gap-4">
                <img className="h-min w-auto ml-2" src={dashboard} />
                Sair
              </div>
            </button>
          </div>
          <div className="header-direita flex justify-between">
            <div className="title margin-auto-cima">
              <t1>Dashboard</t1>
            </div>
            <div className="perfil margin-auto-cima">
              <img src={bell}></img>
              <img src={juliana}></img>
              <div>
                <p className="name">Juliana Silva</p>
                <p className="email">juliana@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <body></body>
    </>
  );
}

export default Dashboard;
