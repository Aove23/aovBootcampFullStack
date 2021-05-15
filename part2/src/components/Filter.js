const Filter = ({ handler, word }) => {
  return (
    <>
      filter show with <input value={word} onChange={handler} />
    </>
  );
};
export default Filter;
