import { Section, ButtonDelete } from "../";
import "./List.css";

const List = ({ onDeleteActivity }) => {
  const activities = JSON.parse(localStorage.getItem("activities"));
  const isGoodWeather = JSON.parse(localStorage.getItem("isGoodWeather"));
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  return (
    <Section>
      <div className="list-wrapper">
        <h2 className="list-title">
          <span>🤵🏻</span>
          {isGoodWeather === false ? (
            <p>
              Bad weather outside! <br />
              Here is what you can do now:
            </p>
          ) : (
            <p>
              The weather is awesome! <br />
              Go outside and:
            </p>
          )}
        </h2>
        <ul className="list">
          {filteredActivities.map((activity) => (
            <li key={activity.id} className="list__item">
              <p>{activity.name}</p>
              <ButtonDelete
                onDeleteActivity={onDeleteActivity}
                id={activity.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default List;
