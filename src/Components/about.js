import CountUp from "react-countup";

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="text">
        <h1 className="blue-text heading">about us</h1>
        <p className="description">
          Queen's Web Development Club is a student run organization focusing on
          all things web, including design and development. We teach students
          how to build websites through tutorials and well as real practice
          through client projects. In the fall, join us for our education series
          ranging from the very basics of HTML/CSS all the way to React and
          back-end integrations.
        </p>
      </div>
      <div className="card-container">
        <div className="card blue-text">
          <h2>
            <CountUp
              start={300}
              end={400}
              duration={1}
              delay={0}
              enableScrollSpy={true}
            />
            +
          </h2>
          <p>members</p>
        </div>
        <div className="card blue-text">
          <h2>
            <CountUp
              start={0}
              end={30}
              duration={1}
              delay={0}
              enableScrollSpy={true}
            />
            +
          </h2>
          <p>projects</p>
        </div>
        <div className="card blue-text">
          <h2>
            <CountUp
              start={1}
              end={15}
              duration={1}
              delay={0}
              enableScrollSpy={true}
            />
            +
          </h2>
          <p>tutorials</p>
        </div>
      </div>
    </div>
  );
}
