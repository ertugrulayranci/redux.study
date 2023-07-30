import React from "react";
import { useDispatch } from "react-redux";

//sil butonuna tıklanınca çalışır

const SingleTodo = ({ todo }) => {
  //dispatch methodunu kur

  const dispatch = useDispatch();
  //sil butonuna tıklanınca
  const handleDelete = () => {
    dispatch({
      type: "DELETE_TODO",
      payload: todo.id,
    });
  };
  //tamamla butonuna tıklanınca

  const handleUpdate = () => {
    const updatedTodo = { ...todo, isDone: !todo.isDone };

    //güncel hali reducer'a gönderme

    dispatch({
      type: "UPDATE_TODO",
      payload: updatedTodo,
    });
  };
  return (
    <div className="card my-4">
      <div className="card-body">
        <h5>{todo.text}</h5>
        <h6>{todo.isDone ? "Tamalandı" : "Devam Ediyor"}</h6>
        <p>{new Date(todo.date).toLocaleDateString()}</p>
        <button onClick={handleUpdate}>
          {todo.isDone ? "Geri Al" : "Tamamla"}
        </button>
        <button className="mx-3" onClick={handleDelete}>
          Sil
        </button>
      </div>
    </div>
  );
};

export default SingleTodo;
