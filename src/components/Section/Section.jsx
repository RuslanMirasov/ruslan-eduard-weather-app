import "./Section.css";

const Section = ({ children }) => {
  return (
    <section className="section">
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
