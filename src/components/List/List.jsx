import { Section, ButtonDelete } from "../";
import "./List.css";

const List = ({ onDeleteActivity, isGoodWeather }) => {
  const activities = JSON.parse(localStorage.getItem("activities"));
  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  return (
    <Section>
      <div className="list-wrapper">
        {filteredActivities.length > 0 ? (
          <>
            {" "}
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
              {filteredActivities.map(({ id, name }) => (
                <li key={id} className="list__item">
                  <p>{name}</p>
                  <ButtonDelete onDeleteActivity={onDeleteActivity} id={id} />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>Empty</p>
        )}
      </div>
    </Section>
  );
};

export default List;
