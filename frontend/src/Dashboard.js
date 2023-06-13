import "./Dashboard.css";
import bell from "./assets/bell.png";
import juliana from "./assets/juliana.png";
import trasync from "./assets/trasync.png";
import dashboard from "./assets/dashboard.png";
import relatorios from "./assets/relatorios.png";
import artigos from "./assets/artigos.png";
import configuracoes from "./assets/configurações.png";
import info from "./assets/info.png";
import exit from "./assets/exit.png"
import upload from "./assets/upload.png"
import graph from "./assets/Line chart.png"
import frame from "./assets/Frame 3069.png"
import cima from './assets/cima.png'
import baixo from './assets/baixo.png'
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
          <button className="sair">
            <div className=" flex gap-4">
              <img className="h-min w-auto ml-2" src={exit} />
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
          <div className="body">
            <div className="inputs">
                <input className="search divider"
                  placeholder="Buscar por"
                />
                <button className="button-relatorio">
                  Gerar relatório
                  <img src={upload}></img>
                </button>
            </div>
            <div className="m-4">
              <div className="flex gap-12">
                <div className="quadrado rounded-md">
                  <div className="title-box">
                    Artigos publicados
                    <img src={info}></img>
                  </div>
                  <div className="number">
                    22
                  </div>
                  <div className="porcentagem">
                    <img src={cima}></img>
                    <p className="textin"><span className="cima">+3%</span> do mês anterior</p>
                  </div>
                </div>
                <div className="quadrado rounded-md">
                  <div className="title-box">
                    Prêmios recebidos
                    <img src={info} className=""></img>
                  </div>
                  <div className="number">
                    04
                  </div>
                  <div className="porcentagem">
                    <img src={baixo}></img>
                    <p className="textin"><span className="baixo">-5%</span> do mês anterior</p>
                  </div>
                </div>
                <div className="quadrado rounded-md">
                  <div className="title-box">
                    Orientações
                    <img src={info} className=""></img>
                  </div>
                  <div className="number">
                    11
                  </div>
                  <div className="porcentagem">
                    <img src={cima}></img>
                    <p className="textin"><span className="cima">+6%</span> do mês anterior</p>
                  </div>
                </div>
                <div className="quadrado rounded-md">
                  <div className="title-box">
                    Cursos
                    <img src={info} className=""></img>
                  </div>
                  <div className="number">
                    19
                  </div>
                  <div className="porcentagem">
                    <img src={baixo}></img>
                    <p className="textin"><span className="baixo">-9%</span> do mês anterior</p>
                  </div>
                </div>
              </div>

              <div className="container-graph">

                <h4 className="title-graph">Produções X Tempo</h4>
                <img src={graph} className="graph"></img>
                <img src={frame} className="image"></img>
              </div>
              <div className="border w-full mt-4"></div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Dashboard;
