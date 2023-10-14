import "./App.css";
import FirstFun from "./component/FirstFun/FirstFun";
import ClassCom from "./component/ClassCom/ClassCom";
import loggedinSub from "./component/LoggedinSub/LoggedinSub";
import NumberCounter from "./component/Counter/Counter";

function App() {
  return (
    <div className="App">
      <FirstFun name="Malek" age={6} location="Giza" track="non">
        <h3>The end of te first task</h3>
      </FirstFun>
      <ClassCom corse1="IOT" course2="React"></ClassCom>
      <h3>The end of te Second task</h3>
      <loggedinSub></loggedinSub>
      <NumberCounter />
    </div>
  );
}

export default App;
