import "./Dashboard.css";
import bell from "./assets/bell.png";
import juliana from "./assets/juliana.png";
import trasync from "./assets/trasync.png";
import dashboard from "./assets/dashboard.png";
import relatorios from "./assets/relatorios.png";
import artigos from "./assets/artigos.png";
import configuracoes from "./assets/configurações.png";
import info from "./assets/info.png";

function Dashboard() {
  return (
    <>
      <div className="flex">
        <div className="w-60 header-esquerda">
          <div className="border-b-2 border-gray-300">
            <img className="margin-auto w-32 p-4" src={trasync}></img>
          </div>
          <button className="h-14 w-60 gap-2 mt-4 bg-blue-100">
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
        <div className="header-direita">
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
          <div className="m-4">
            <div className="flex gap-2">
              <div className="quadradinhos rounded-md bg-gray-100 w-48 h-32">
                <div className="flex justify-between">
                  Artigos publicados
                  <img src={info} className="w h-min"></img>
                </div>
                22
                <div className="flex"></div>
              </div>
            </div>
            <div className="w-auto mt-4 h-40 border p-3">
              Produções X Tempo
              <img></img>
            </div>
            <div className="flex gap-4 mt-4">
              <div className="border h-60 w-80 p-3">asd</div>
            </div>
            <div className="border w-full mt-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
