import './EmptyActivities.css';

const EmptyActivities = ({ isGoodWeather, isError }) => {
  const location = JSON.parse(localStorage.getItem('location'));
  return (
    <div className="empty-activities">
      <span className="empty-activities__emoji">{isError ? '💥' : '🔍'}</span>
      {!isError ? (
        <>
          <h3 className="empty-activities__title">
            You don't have an activity for <span>{isGoodWeather ? 'good' : 'bad'} weather</span> in {location} category yet.
          </h3>
          <p className="empty-activities__text">Add an activity by filling out the form below.</p>
        </>
      ) : (
        <>
          <h3 className="empty-activities__title">Oops, looks like something went wrong!</h3>
          <p className="empty-activities__text">
            An error occurred while trying to connect to the server. Reload the page or try again later.
          </p>
        </>
      )}

      {!isError && <span className="empty-activities__emoji animated">👇</span>}
    </div>
  );
};

export default EmptyActivities;
