import "./style.css";

function ButtonDefault(props: { title: string; url: string }) {
  const clickEnviar = () => {
    if (props.url !== "#section-tickets") alert("NewsLetter registrada");
  };

  return (
    <a href={props.url} id="a-button-default">
      <button onClick={clickEnviar} className="button-default">
        {props.title}
      </button>
    </a>
  );
}

export default ButtonDefault;
