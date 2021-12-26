import "./PatientCard.scss";

export default function PatientCard({ patient }) {
  const { name, species, breed } = patient;

  return (
    <li className="PatientCard">
      <h3>{name}</h3>
      <p>{species}</p>
      <p>{breed}</p>
    </li>
  );
}
