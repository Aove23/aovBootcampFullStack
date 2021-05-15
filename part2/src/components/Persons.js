const Persons = ({ persons, word }) => {
  const cb = (person) => {
    let query = word.toLowerCase();
    if (query) {
      if (person.name.toLowerCase().indexOf(query) > -1) {
        return person;
      }
    } else {
      return person;
    }
  };

  return (
    <>
      <ul>
        {persons.filter(cb).map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Persons;
