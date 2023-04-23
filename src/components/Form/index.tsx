import { useState } from "react";
import { ICollaborator } from "../../shared/interfaces/ICollaborator";
import { ITeam } from "../../shared/interfaces/ITeam";
import Button from "../Button";
import DropdownList from "../DropdownList";
import Input from "../Input";
import "./Form.css";

interface FormProps {
  onCollaboratorSaved: (collaborator: ICollaborator) => void;
  teams: string[];
  createTime: (team: ITeam) => void;
}

const Form = (props: FormProps) => {
  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");
  const [teamName, setTeamName] = useState("");
  const [colorTeam, setColorTeam] = useState("");

  const onSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onCollaboratorSaved({
      name,
      office,
      image,
      team,
      date,
      id,
    });
    setName("");
    setOffice("");
    setImage("");
    setTeam("");
    setDate("");
    setId("");
  };

  return (
    <section className="section-form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Input
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          onChanged={(value) => setName(value)}
        />
        <Input
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={office}
          onChanged={(value) => setOffice(value)}
        />
        <Input
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          onChanged={(value) => setImage(value)}
        />
        <Input
          label="Data"
          placeholder=""
          value={date}
          onChanged={(value) => setDate(value)}
          type="date"
        />
        <DropdownList
          value={team}
          onChanged={(value) => setTeam(value)}
          required={true}
          label="Time"
          itens={props.teams}
        />
        <Button>Criar Card</Button>
      </form>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.createTime({ name: teamName, color: colorTeam });
        }}
      >
        <h2>Preencha os dados para criar um novo time</h2>
        <Input
          required
          label="Nome"
          placeholder="Digite o nome do time"
          value={teamName}
          onChanged={(value) => setTeamName(value)}
        />
        <Input
          required
          type="color"
          label="Cor"
          placeholder="Digite a cor do time"
          value={colorTeam}
          onChanged={(value) => setColorTeam(value)}
        />
        <Button>Criar um novo time</Button>
      </form>
    </section>
  );
};

export default Form;
