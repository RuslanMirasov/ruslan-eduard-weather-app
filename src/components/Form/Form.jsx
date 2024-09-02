import { Section, ButtonSubmit } from "../";
import "./Form.css";

const Form = ({ onAddActivity }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      name: form.elements.name.value,
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
          <input
            type="checkbox"
            name="isForGoodWeather"
            id="isForGoodWeather"
            className="checkbox"
          />
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
