import React, { ReactNode } from "react";
import style from "./Botao.module.scss";

type Props = {
  children: ReactNode;
};

const Botao = ({ children }: Props) => {
  return <button className={style.botao}>{children}</button>;
};

export default Botao;
