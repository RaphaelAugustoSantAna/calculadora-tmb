import { SetStateAction, useState } from "react";
import GenderSelection from "../components/GenderSelection";
import TmbForm from "../components/TmbForm";

const App = () => {
  const [selectedGender, setSelectedGender] = useState("");

  const handleSelectGender = (gender: SetStateAction<string>) => {
    setSelectedGender(gender);
  };

  return (
    <>
      {selectedGender === "" ? (
        <GenderSelection onSelectGender={handleSelectGender} />
      ) : (
        <TmbForm gender={selectedGender} />
      )}
    </>
  );
};

export default App;
