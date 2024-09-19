import "./style.css";
import Trash from "../../assets/trash.svg";

function Home() {
  const users = [
    {
      id: "45345345345",
      name: "Rodolfo",
      age: "33",
      email: "rodolfo@gmail.com",
    },
    {
      id: "89898989",
      name: "leticia",
      age: "23",
      email: "leticia@gmail.com",
    },
  ];

  return (
    <div className="container1">
      <div className="container">
        <form>
          <h1>Cadastro de Usuários</h1>
          <input placeholder="Nome..." name="nome" type="text" />
          <input placeholder="Idade..." name="idade" type="number" />
          <input placeholder="Email..." name="email" type="email" />
          <button type="button">Enviar</button>
        </form>

        {users.map((user) => (
          <div key={user.id} className="card">
            <div>
              <p>Nome: {user.name}</p>
              <p>Idade: {user.age}</p>
              <p>Email: {user.email}</p>
            </div>
            <button>
              <img src={Trash} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
