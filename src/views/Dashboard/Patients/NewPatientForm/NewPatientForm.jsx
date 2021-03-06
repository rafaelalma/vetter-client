import { Button } from "components/buttons";
import { Input } from "components/forms";
import useFetch from "hooks/useFetch.hook";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewPatientForm.scss";

export default function NewPatientForm() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [color, setColor] = useState("");
  const [vaccinationStatus, setVaccinationStatus] = useState("");
  const [gender, setGender] = useState("");
  const [spayedOrNeutered, setSpayedOrNeutered] = useState("");

  const { post, loading } = useFetch("http://localhost:3001/");

  const navigate = useNavigate();

  const handleNewPatientSubmit = (event) => {
    event.preventDefault();

    const newPatient = {
      owner_id: 0, // TODO: get from user
      name,
      birth_date: birthDate,
      species,
      breed,
      color,
      vaccination_status: vaccinationStatus,
      gender,
      spayed_or_neutered: spayedOrNeutered,
    };

    (async () => {
      try {
        const data = await post("patients", newPatient);
        console.log("Post patient", data);

        navigate("/dashboard/patients");
      } catch (error) {
        console.error(error);
      }
    })();
  };

  return (
    <form className="NewPatientForm" onSubmit={handleNewPatientSubmit}>
      <Input
        placeholder="Name"
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <Input
        placeholder="Birth Date"
        type="date"
        value={birthDate}
        onChange={(event) => setBirthDate(event.target.value)}
      />
      <Input
        placeholder="Species"
        required
        value={species}
        onChange={(event) => setSpecies(event.target.value)}
      />
      <Input
        placeholder="Breed"
        required
        value={breed}
        onChange={(event) => setBreed(event.target.value)}
      />
      <Input
        placeholder="Color"
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />
      <Input
        placeholder="Vaccination Status"
        required
        value={vaccinationStatus}
        onChange={(event) => setVaccinationStatus(event.target.value)}
      />
      <Input
        placeholder="Gender"
        required
        value={gender}
        onChange={(event) => setGender(event.target.value)}
      />
      <Input
        placeholder="Spayed or Neutered"
        required
        value={spayedOrNeutered}
        onChange={(event) => setSpayedOrNeutered(event.target.value)}
      />
      <Button type="submit" disabled={loading}>
        Add
      </Button>
    </form>
  );
}
