import { useState } from "react";
import "./App.css";

function App() {
  // let name: string;
  let [name, setName] = useState<string>();
  let [cpf, setCpf] = useState<string>();
  let [adress, setAdress] = useState<string>();
  let [tel, setTel] = useState<number>();
  let [country, setCountry] = useState<string>();


  return (
    <>
      <section>
        <form action="submit">
          <fieldset>
            <label htmlFor="name">Nome:</label>
            <input name='name' type="text" onChange={(e)=>setName(e.target.value)} value={name} />
          </fieldset>

          <fieldset>
            <label htmlFor="cpf">CPF:</label>
            <input name='cpf' type="text" onChange={(e)=>setCpf(e.target.value)} value={cpf} />
          </fieldset>

          <fieldset>
            <label htmlFor="tel">Telefone:</label>
            <input name='tel' type="number" onChange={(e)=>setName(e.target.value)} value={name}/>
          </fieldset>

          <fieldset>
            <label htmlFor="Adress">Endereço:</label>
            <input name='Adress' type="text" onChange={(e)=>setName(e.target.value)} value={name} />
          </fieldset>

          <fieldset>
            <label htmlFor="country">Cidade:</label>
            <input name='country' type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
          </fieldset>

          <button type="submit">Enviar</button>
        </form>
      </section>
    </>
  );
}

export default App;
