const Header = ({ course }) => <h4>{course.name}</h4>;

const Part = ({ obj }) => (
  <p>
    {obj.name} {obj.exercises}
  </p>
);

const Content = ({ data }) => {
  return (
    <>
      <Part obj={data[0]} />
      <Part obj={data[1]} />
      <Part obj={data[2]} />
    </>
  );
};

const Total = ({ data }) => {
  return (
    <p>
      Number of exercises{" "}
      {data[0].exercises + data[1].exercises + data[2].exercises}
    </p>
  );
};

const CourseInfo = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const { parts } = course;

  return (
    <>
      <Header course={course} />
      <Content data={parts} />
      <Total data={parts} />
    </>
  );
};

export default CourseInfo;
