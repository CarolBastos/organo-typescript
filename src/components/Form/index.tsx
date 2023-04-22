import { useState } from "react";
import { ICollaborator } from "../../shared/interfaces/ICollaborator";
import Button from "../Button";
import DropdownList from "../DropdownList";
import InputText from "../InputText";
import "./Form.css";

interface FormProps {
  onCollaboratorSaved: (collaborator: ICollaborator) => void;
  teams: string[];
}

const Form = (props: FormProps) => {
  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const onSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onCollaboratorSaved({ name, office, image, team });
    setName("");
    setOffice("");
    setImage("");
    setTeam("");
  };

  return (
    <section className="section-form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <InputText
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          onChanged={(value) => setName(value)}
        />
        <InputText
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={office}
          onChanged={(value) => setOffice(value)}
        />
        <InputText
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          onChanged={(value) => setImage(value)}
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
    </section>
  );
};

export default Form;
