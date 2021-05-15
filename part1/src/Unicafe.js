import { useState } from "react";

const Statistics = ({ text, value }) => (
  <p>
    {text} : {value}
  </p>
);

const Button = ({ setPoint, texto }) => (
  <button onClick={setPoint}>{texto}</button>
);

const Unicafe = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const goodPercent = good * (100 / all) + "%";
  const average = all / 3;

  return (
    <div>
      <h3>give feedback</h3>
      <Button texto="good" setPoint={() => setGood(good + 1)} />
      <Button texto="neutral" setPoint={() => setNeutral(neutral + 1)} />
      <Button texto="bad" setPoint={() => setBad(bad + 1)} />

      <h3>statistics</h3>
      {all !== 0 ? (
        <div>
          <Statistics text="good" value={good} />
          <Statistics text="bad" value={bad} />
          <Statistics text="neutral" value={neutral} />
          <Statistics text="average" value={average} />
          <Statistics text="positive" value={goodPercent} />
        </div>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default Unicafe;
