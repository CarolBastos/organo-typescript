import { ICollaborator } from "../../shared/interfaces/ICollaborator";
import { ITeam } from "../../shared/interfaces/ITeam";
import Collaborator from "../Collaborator";
import "./Team.css";
import hexToRgba from "hex-to-rgba";

interface TeamProps {
  collaborators: ICollaborator[];
  team: ITeam;
  onDelete: (id: string) => void;
  changeColor: (value: string, name: string) => void;
}

const Team = ({ team, collaborators, onDelete, changeColor }: TeamProps) => {
  return collaborators.length > 0 ? (
    <section
      className="team"
      style={{
        backgroundImage: "url(/images/fundo.png)",
        backgroundColor: hexToRgba(team.color, "0.6"),
      }}
    >
      <input
        value={team.color}
        type="color"
        className="input-color"
        onChange={(event) => changeColor(event.target.value, team.id)}
      ></input>
      <h3 style={{ borderColor: team.color }}>{team.name}</h3>
      <div className="collaborators">
        {collaborators.map((collaborator) => {
          return (
            <Collaborator
              backgroundColor={team.color}
              key={collaborator.name}
              collaborator={collaborator}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Team;
