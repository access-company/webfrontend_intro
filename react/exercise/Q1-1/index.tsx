import { FC } from "react";
import ReactDOM from "react-dom";
import "./style.css";

const ChildComponent: FC = () => {
  return (
    <div>
      {/*
			  // 赤色の物の名前を入力し、赤色ものは赤色に
		    // 緑色の物の名前を入力し、緑色ものは赤色に
		    // 青色の物の名前を入力し、青色ものは赤色に
		*/}
    </div>
  );
};

const App: FC = () => {
  return (
    <div>
      <ChildComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
