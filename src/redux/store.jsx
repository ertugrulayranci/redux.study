//1.  Redux kütüphanesinden createStore ve combineReducers import edilir.
// 2.Store içinde tutulacak herbir veri için reducer oluşturulur.
// 3. olusturulan reducerlar combineReducers() yardımıyla birleştirildi
// 4. CREATEsTORE METHODU CAGRILIR VE ARGÜMAN OLARAK rootReducer verilir.
// store export edilir.

import todoReducer from "./todoReducer.JSX";
import categoryReducer from "./categoryReducer.JSX";
import { createStore, combineReducers } from "redux";

//reducerlar bir bütün haline getirilir.
const rootReducer = combineReducers({
  todoReducer,
  categoryReducer,
});

//store oluşturulur.
const store = createStore(rootReducer);

export default store;
