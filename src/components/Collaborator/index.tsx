import "./Collaborator.css";

interface CollaboratorProps {
  name: string;
  image: string;
  office: string;
  date: string;
  backgroundColor: string;
}

const Collaborator = ({
  name,
  image,
  office,
  backgroundColor,
  date,
}: CollaboratorProps) => {
  return (
    <div className="colaborator">
      <div className="header" style={{ backgroundColor: backgroundColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{office}</h5>
        <h5>{new Date(date).toLocaleDateString()}</h5>
      </div>
    </div>
  );
};

export default Collaborator;
