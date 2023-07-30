import AddForm from "./components/AddForm";
import Listtodos from "./components/Listtodos";

function App() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-5">
      <h1>Redux</h1>
      <AddForm />
      <Listtodos />
    </div>
  );
}

export default App;
