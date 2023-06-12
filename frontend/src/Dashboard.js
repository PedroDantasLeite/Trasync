import "./Dashboard.css";
import bell from "./assets/bell.png";
import juliana from "./assets/juliana.png";
function Dashboard() {
  return (
    <>
      <header>
        <div className="title">
          <t1>Dashboard</t1>
        </div>
        <div className="perfil">
          <img src={bell}></img>
          <img src={juliana}></img>
          <div>
            <p className="name">Juliana Silva</p>
            <p className="email">juliana@gmail.com</p>
          </div>
        </div>
      </header>
      <body></body>
    </>
  );
}

export default Dashboard;
