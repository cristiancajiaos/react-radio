import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [selectedFruit, setSelectedFruit] = useState("banana");

  const fruits = ["apple", "banana", "cherry"];

  const handleChange = (e) => {
    setSelectedFruit(e.target.value);
  };

  const handleSubmit = (e) => {
    alert(`The selected fruit is ${selectedFruit}`);
    e.preventDefault();
  };

  return (
    <>
      <section className="container my-2">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Select your favorite fruit</label>
            {fruits.map((fruit) => (
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="fruit"
                    checked={selectedFruit === fruit}
                    value={fruit}
                    onChange={handleChange}
                  ></input>
                  {fruit}
                </label>
              </div>
            ))}
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>

        <hr />

        <p>Selected fruit: {selectedFruit}</p>
      </section>
    </>
  );
}

export default App;
