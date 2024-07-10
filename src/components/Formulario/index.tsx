import { useState } from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { ITarefa } from "../../types/tarefas";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

const Formulario = ({ setTarefas }: Props) => {
  const [tarefa, setTarefa] = useState("");
  const [time, setTime] = useState("00:00:00");

  const adicionarTarefa = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        tarefa: tarefa,
        tempo: time,
        selecionado: false,
        completado: false,
        id: uuidv4(),
      },
    ]);
    setTarefa("");
    setTime("00:00:00");
  };
  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adiciona um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
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
          value={time}
          onChange={(evento) => setTime(evento.target.value)}
          id="tempo"
          min="00:00:00"
          max="1:30:00"
          required
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
};

export default Formulario;
