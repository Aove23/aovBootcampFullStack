import { useState } from "react";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const Anecdotes = (props) => {
  const points = Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(points);
  const [max, setMax] = useState(0);

  const generate = () => {
    let random = 0;
    while (selected === random) {
      random = Math.floor(Math.random() * 5);
    }

    return random;
  };

  const aleatorios = () => {
    let random = generate();
    setSelected(random);
  };

  const countVotes = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
    let maxVote = maxVotes();
    setMax(maxVote);
  };

  const maxVotes = () => {
    let el = votes[0];
    let pos = 0;
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > el) {
        el = votes[i];
        pos = i;
      }
    }
    return pos;
  };

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <div>
        <span>has {votes[selected]} votes</span>
      </div>
      <button onClick={countVotes}>vote</button>
      <button onClick={aleatorios}>next anecdote</button>

      <div>
        <h2>Anecdote with most votes</h2>
        <div>{anecdotes[max]}</div>
        <div>
          <span>has {votes[max]} votes</span>
        </div>
      </div>
    </>
  );
};

export default Anecdotes;
