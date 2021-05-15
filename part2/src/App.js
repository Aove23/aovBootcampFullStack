import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import FormPerson from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const initialState = { name: "", number: "" };
  const [persons, setPersons] = useState([]);
  const [newDate, setNewDate] = useState(initialState);
  const [word, setWord] = useState("");

  const handleFilter = (e) => {
    setWord(e.target.value);
    console.log(word);
  };

  const handleDateChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewDate({ ...newDate, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newDate);
    const filter = persons.filter(
      (el) => el.name.toLowerCase() === newDate.name.toLowerCase()
    );

    if (filter.length === 0) {
      setPersons(persons.concat(newDate));
      setNewDate(initialState);
    }

    if (filter.length > 0) {
      alert(`${newDate.name} is already added to phonebook`);
      setNewDate(initialState);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      const persons = response.data;
      setPersons(persons);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handler={handleFilter} word={word} />
      <h2>add a news</h2>
      <FormPerson
        handleSubmit={handleSubmit}
        newDate={newDate}
        handleDateChange={handleDateChange}
      />
      <h2>Numbers</h2>
      <Persons word={word} persons={persons} />
    </div>
  );
};

export default App;
