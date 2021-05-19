import ReactDOM from "react-dom";
import CourseInfo from "./CourseInfo";
import Unicafe from "./Unicafe";
import Anecdotes from "./Anecdotes";

const App = () => {
  return (
    <>
      <h2>Course Info</h2>
      <CourseInfo />
      <h2>Unicafe App</h2>
      <Unicafe />
      <h2>Anecdotes</h2>
      <Anecdotes />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
