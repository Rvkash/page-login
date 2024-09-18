import "./style.css";

function Home() {
  return (
    <div className="container">
      <form>
        <h1>Cadastro de usuários</h1>
        <input name="nome" type="text" />
        <input name="idade" type="number" />
        <input name="email" type="email" />
        <button type="button">Enviar</button>
      </form>
    </div>
  );
}

export default Home;
