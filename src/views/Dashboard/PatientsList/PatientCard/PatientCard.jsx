import "./PatientCard.scss";

export default function PatientCard({ patient }) {
  const { name, species, breed } = patient;

  return (
    <div className="PatientCard">
      <h3>{name}</h3>
      <p>{species}</p>
      <p>{breed}</p>
    </div>
  );
}
