import CountUp from "react-countup";

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="text">
        <h1 className="blue-text heading">about us</h1>
        <p className="description">
          Queen's Web Development Club is a student-run organization that
          focuses on all aspects of web development, including design and
          development. Our goal is to equip students with the skills and
          knowledge required to build stunning websites through tutorials and
          practical experience with client projects. In the fall, we offer an
          education series that covers a wide range of topics, starting from the
          basics of HTML/CSS and progressing to advanced topics such as React
          and back-end integration. We also offer tutorials on design. During
          winter, our members get the opportunity to work on a client project
          that utilizes all the skills taught in the fall. With the guidance of
          experienced team leads and QWeb staff, our members receive support
          throughout the project's duration to ensure success.
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
