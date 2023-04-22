import { ICollaborator } from "../../shared/interfaces/ICollaborator";
import Collaborator from "../Collaborator";
import "./Team.css";

interface TeamProps {
  primaryColor: string;
  secondaryColor: string;
  name: string;
  collaborators: ICollaborator[];
}

const Team = (props: TeamProps) => {
  return props.collaborators.length > 0 ? (
    <section
      className="team"
      style={{
        backgroundImage: "url(/images/fundo.png)",
        backgroundColor: props.secondaryColor,
      }}
    >
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className="collaborators">
        {props.collaborators.map((office) => (
          <Collaborator
            backgroundColor={props.primaryColor}
            key={office.name}
            name={office.name}
            office={office.office}
            image={office.image}
            date={office.date}
          />
        ))}
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Team;
