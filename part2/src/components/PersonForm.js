const FormPerson = ({ handleSubmit, newDate, handleDateChange }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          name:
          <input name="name" value={newDate.name} onChange={handleDateChange} />
        </div>
        <div>
          phone:
          <input
            name="number"
            value={newDate.number}
            onChange={handleDateChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default FormPerson;
