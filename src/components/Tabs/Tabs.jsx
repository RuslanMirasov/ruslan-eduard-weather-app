import "./Tabs.css";
import Europe from "../../../public/europe.jpg";
import Arctic from "../../../public/arctic.jpg";
import Sahara from "../../../public/sahara.jpg";
import Rainforest from "../../../public/rainforest.jpg";

const Tabs = ({ location, setLocation, setIsloading }) => {
  const tabLinks = [
    {
      id: 1,
      name: "Europe",
      image: Europe,
    },
    {
      id: 2,
      name: "Arctic",
      image: Arctic,
    },
    {
      id: 3,
      name: "Sahara",
      image: Sahara,
    },
    {
      id: 4,
      name: "Rainforest",
      image: Rainforest,
    },
  ];

  const handleLocationChange = (e) => {
    setIsloading(true);
    setLocation(e.target.textContent.toLowerCase());
  };

  return (
    <ul className="tabs">
      {tabLinks.map(({ id, name, image }) => (
        <li
          key={id}
          onClick={handleLocationChange}
          className={`tab ${
            location === name.toLowerCase() ? "tab--active" : ""
          }`}
        >
          <img src={image} alt={name} className="tab__image" />
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
