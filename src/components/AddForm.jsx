import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const AddForm = () => {
  //dispatch methodunu kurma

  const dispatch = useDispatch();

  const [text, settext] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //todo'yla alakalı bilgileri içeren bir obje oluşturalım.
    const newTodo = {
      id: new Date().getTime(),
      text,
      isDone: false,
      date: new Date(),
    };
    /* //! oluşturduğumuz objeyi state'e aktarma
    store'da değişiklik yapmanın tek yolu
    * bir eylemi yani action'ı dispatch yöntemiyle reducere'a sevik etmek 
   */
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  return (
    <form
      className="d-flex flex-column align-items-center justify-content-center"
      onSubmit={handleSubmit}
    >
      <input type="text" onChange={(e) => settext(e.target.value)} />
      <button>Ekle</button>
    </form>
  );
};

export default AddForm;
