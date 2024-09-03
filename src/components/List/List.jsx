import { Section, ButtonDelete, EmptyActivities } from '../';
import './List.css';

const List = ({ onDeleteActivity, isError, isGoodWeather }) => {
  const activities = JSON.parse(localStorage.getItem('activities'));
  const filteredActivities = activities.filter(activity => activity.isForGoodWeather === isGoodWeather);

  return (
    <Section>
      <div className="list-wrapper">
        {!isError && filteredActivities.length > 0 ? (
          <>
            <h2 className="list-title">
              <span>🤵🏻</span>
              {isGoodWeather ? (
                <p>
                  The weather is awesome! <br />
                  Go outside and:
                </p>
              ) : (
                <p>
                  Bad weather outside! <br />
                  Here is what you can do now:
                </p>
              )}
            </h2>
            <ul className="list">
              {filteredActivities.map(({ id, name }) => (
                <li key={id} className="list__item">
                  <p>{name}</p>
                  <ButtonDelete onClick={() => onDeleteActivity(id)} />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <EmptyActivities isGoodWeather={isGoodWeather} isError={isError} />
        )}
      </div>
    </Section>
  );
};

export default List;
