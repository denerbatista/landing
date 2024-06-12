import "./style.css";

function About() {
  return (
    <section className="box-default section-about">
      <h2 className="h2-default">Sobre o Evento</h2>
      <p className="p-default">
        O Anime Fest é o principal evento de cosplay de anime, reunindo
        entusiastas e fãs da cultura otaku de todas as idades. Fundado em 2020,
        o evento se tornou um marco anual, conhecido por sua energia vibrante e
        atmosfera acolhedora.
      </p>
      <p className="p-default">
        Este ano, estamos preparando algo verdadeiramente especial, com mais
        atrações, competições e atividades do que nunca! Não perca a
        oportunidade de fazer parte desta incrível celebração da cultura anime.
      </p>

      <h2 className="h2-default">Destaques do Evento</h2>
      <pre className="p-default">
        {`
    Competições de Cosplay com prêmios incríveis.
        `}
        {/* <img src="src\assets\about1.jpg" alt="desfile" /> */}
        {`
    Workshops interativos sobre criação de cosplay.
       
    Presença de convidados especiais, incluindo dubladores e artistas.famosos
       
    Stands de merchandise exclusivo de anime.

    Apresentações de dança e música ao vivo.
`}
      </pre>
    </section>
  );
}

export default About;
