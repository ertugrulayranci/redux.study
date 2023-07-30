import React from "react";
import { useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";

const Listtodos = () => {
  //storea abone olma
  const merkeziVeri = useSelector((store) => store.todoReducer);

  return (
    <div>
      {merkeziVeri.sayi === 0 && <p>Lütfen yeni görev ekleyiniz</p>}
      {/*dizideki her obje için ekrana kart basma */}
      {merkeziVeri.todos.map((todo) => (
        <SingleTodo todo={todo} />
      ))}
    </div>
  );
};

export default Listtodos;
