import React, { useEffect, useState, createContext } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

export const PlantContext = createContext();

function App() {
  const [search, setSearch] = useState("");
  const [plantListing, setPlantListing] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json())
      .then((plants) => setPlantListing(plants));
  }, []);

  function handleSearchChange(e) {
    const searchText = e.target.value.toLowerCase(); // Fix the value extraction
    setSearch(searchText);
  }

  function handleDelete(id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => {
        const withoutDeletedItem = plantListing.filter((plant) => plant.id !== id);
        setPlantListing(withoutDeletedItem);
      });
  }

  const filteredPlants = plantListing.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PlantContext.Provider
      value={{
        plantListing,
        setPlantListing,
        search,
        handleSearchChange,
        filteredPlants,
      }}
    >
      <div className="app">
        <Header />
        <PlantPage handleDelete={handleDelete} />
      </div>
    </PlantContext.Provider>
  );
}

export default App;
