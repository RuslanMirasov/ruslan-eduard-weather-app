import "./EmptyActivities.css";

const EmptyActivities = ({ isGoodWeather }) => {
  return (
    <div className="empty-activities">
      <span className="empty-activities__emoji">🔍</span>
      <h3 className="empty-activities__title">
        You don't have an activity for{" "}
        <span>{isGoodWeather ? "good" : "bed"} weather</span> yet.
      </h3>
      <p className="empty-activities__text">
        Add an activity by filling out the form below.
      </p>
      <span className="empty-activities__emoji animated">👇</span>
    </div>
  );
};

export default EmptyActivities;
