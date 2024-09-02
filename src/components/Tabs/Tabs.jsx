import "./Tabs.css";

const Tabs = ({ location, setLocation }) => {
  const tabLinks = [
    {
      id: 1,
      name: "Europe",
    },
    {
      id: 2,
      name: "Arctic",
    },
    {
      id: 3,
      name: "Sahara",
    },
    {
      id: 4,
      name: "Rainforest",
    },
  ];

  const handleLocationChange = (e) => {
    setLocation(e.target.textContent.toLowerCase());
  };

  return (
    <ul className="tabs">
      {tabLinks.map((link) => (
        <li
          key={link.id}
          onClick={handleLocationChange}
          className={`tab ${
            location === link.name.toLowerCase() ? "tab--active" : ""
          }`}
        >
          {link.name}
        </li>
      ))}
      {/* <li className="tab tab--active">Europe</li>
      <li className="tab">Arctic</li>
      <li className="tab">Sahara</li>
      <li className="tab">Rainforest</li> */}
    </ul>
  );
};

export default Tabs;
