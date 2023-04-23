import { useState } from "react";
import Form from "./components/Form";
import Team from "./components/Team";
import Banner from "./components/Banner";
import { ICollaborator } from "./shared/interfaces/ICollaborator";
import { ITeam } from "./shared/interfaces/ITeam";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: "Programação",
      color: "#57c278",
    },
    {
      id: uuidv4(),
      name: "Frontend",
      color: "#82CFFA",
    },
    {
      id: uuidv4(),
      name: "Data Science",
      color: "#A6D157",
    },
    {
      id: uuidv4(),
      name: "Devops",
      color: "#E06B69",
    },
    {
      id: uuidv4(),
      name: "UX e Design",
      color: "#DB6EBF",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      color: "#FFBA05",
    },
    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      color: "#FF8A29",
    },
  ] as ITeam[]);

  const initial = [
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      office: "Desenvolvedora de software e instrutora",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      office: "Engenheiro de Software na Stone Age",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      office: "Desenvolvedor Python e JavaScript na Alura",
      date: "10-10-2022",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      office: "Hipster e CEO da Alura",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      office: "Desenvolvedora de software e instrutora",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      office: "Engenheiro de Software na Stone Age",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      office: "Desenvolvedor Python e JavaScript na Alura",
      date: "10-10-2022",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      office: "Hipster e CEO da Alura",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      office: "Desenvolvedora de software e instrutora",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      office: "Engenheiro de Software na Stone Age",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      office: "Desenvolvedor Python e JavaScript na Alura",
      date: "10-10-2022",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      office: "Hipster e CEO da Alura",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      office: "Desenvolvedora de software e instrutora",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      office: "Engenheiro de Software na Stone Age",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      office: "Desenvolvedor Python e JavaScript na Alura",
      date: "10-10-2022",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      office: "Hipster e CEO da Alura",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      office: "Desenvolvedora de software e instrutora",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      office: "Engenheiro de Software na Stone Age",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      office: "Desenvolvedor Python e JavaScript na Alura",
      date: "10-10-2022",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      office: "Hipster e CEO da Alura",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      office: "Desenvolvedora de software e instrutora",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      office: "Engenheiro de Software na Stone Age",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      office: "Desenvolvedor Python e JavaScript na Alura",
      date: "10-10-2022",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      office: "Hipster e CEO da Alura",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[5].name,
    },
  ] as ICollaborator[];
  const [collaborators, setCollaborators] = useState<ICollaborator[]>(initial);

  const onNewColaboratorAdd = (collaborator: ICollaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  function deletingCollaborator(id: string) {
    setCollaborators(
      collaborators.filter((collaborator) => collaborator.id !== id)
    );
  }

  function changeColorTeam(color: string, id: string) {
    setTeams(
      teams.map((team) => {
        if (team.id === id) {
          team.color = color;
        }

        return team;
      })
    );
  }

  return (
    <div className="App">
      <Banner src="/images/banner.png" />
      <Form
        teams={teams.map((team) => team.name)}
        onCollaboratorSaved={(collaborator) =>
          onNewColaboratorAdd(collaborator)
        }
      />
      <section className="team">
        <h1>Minha organização</h1>

        {teams.map((team) => (
          <Team
            key={team.name}
            changeColor={changeColorTeam}
            team={team}
            collaborators={collaborators.filter(
              (collaborator) => collaborator.team === team.name
            )}
            onDelete={deletingCollaborator}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
