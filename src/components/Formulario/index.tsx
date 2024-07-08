import Botao from "../Botao";
import style from "./Formulario.module.scss";
const Formulario = () => {
  return (
    <form className={style.novaTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adiciona um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você vai estudar?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="1:30:00"
          required
        />
      </div>
      <Botao>Adicionar</Botao>
    </form>
  );
};

export default Formulario;
