import { Section, ButtonSubmit } from '../';
import './Form.css';

const Form = ({ onAddActivity, category, setCategory }) => {
  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      name: form.elements.name.value,
      category: category,
      isForGoodWeather: form.elements.isForGoodWeather.checked,
    };
    if (onAddActivity) {
      onAddActivity(formData);
    }
    form.reset();
    form.elements.name.focus();
  };
  return (
    <Section>
      <div className="form-wrapper">
        <h2 className="form-title">Add a new Activity</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="label">
            <span>Name:</span>
            <input required type="text" name="name" className="input" />
          </label>

          <fieldset className="fieldset">
            <legend className="legend">Choose category:</legend>

            <input
              type="radio"
              name="category"
              id="cat1"
              className="radio"
              value="europe"
              checked={category === 'europe'}
              onChange={handleCategoryChange}
            />
            <label className="label" htmlFor="cat1">
              <span>Europe</span>
            </label>

            <input
              type="radio"
              name="category"
              id="cat2"
              className="radio"
              value="arctic"
              checked={category === 'arctic'}
              onChange={handleCategoryChange}
            />
            <label className="label" htmlFor="cat2">
              <span>Arctic</span>
            </label>

            <input
              type="radio"
              name="category"
              id="cat3"
              className="radio"
              value="sahara"
              checked={category === 'sahara'}
              onChange={handleCategoryChange}
            />
            <label className="label" htmlFor="cat3">
              <span>Sahara</span>
            </label>

            <input
              type="radio"
              name="category"
              id="cat4"
              className="radio"
              value="rainforest"
              checked={category === 'rainforest'}
              onChange={handleCategoryChange}
            />
            <label className="label" htmlFor="cat4">
              <span>Rainforest</span>
            </label>
          </fieldset>

          <input type="checkbox" name="isForGoodWeather" id="isForGoodWeather" className="checkbox" />
          <label className="label" htmlFor="isForGoodWeather">
            <span>Good-weather Activity</span>
          </label>

          <ButtonSubmit>Submit</ButtonSubmit>
        </form>
      </div>
    </Section>
  );
};

export default Form;
