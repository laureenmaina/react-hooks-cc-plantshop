import React, { useContext } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { PlantContext } from "./App";

function PlantPage({ handleDelete }) {
  const { filteredPlants, handleSearchChange } = useContext(PlantContext);

  return (
    <main>
      <NewPlantForm />
      <Search handleSearchChange={handleSearchChange} />
      <PlantList handleDelete={handleDelete} filteredPlants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
