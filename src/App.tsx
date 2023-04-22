import { useState } from "react";
import Form from "./components/Form";
import Team from "./components/Team";
import Banner from "./components/Banner";
import { ICollaborator } from "./shared/interfaces/ICollaborator";

function App() {
  const teams = [
    {
      name: "Programação",
      primaryColor: "#57c278",
      secondaryColor: "#d9f7e9",
    },
    {
      name: "Frontend",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  const initial = [
    {
      name: "JULIANA AMOASEI",
      office: "Desenvolvedora de software e instrutora",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      name: "DANIEL ARTINE",
      office: "Engenheiro de Software na Stone Age",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      name: "GUILHERME LIMA",
      office: "Desenvolvedor Python e JavaScript na Alura",
      date: "10-10-2022",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      name: "PAULO SILVEIRA",
      office: "Hipster e CEO da Alura",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[0].name,
    },
    {
      name: "JULIANA AMOASEI",
      office: "Desenvolvedora de software e instrutora",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      name: "DANIEL ARTINE",
      office: "Engenheiro de Software na Stone Age",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      name: "GUILHERME LIMA",
      office: "Desenvolvedor Python e JavaScript na Alura",
      date: "10-10-2022",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      name: "PAULO SILVEIRA",
      office: "Hipster e CEO da Alura",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[1].name,
    },
    {
      name: "JULIANA AMOASEI",
      office: "Desenvolvedora de software e instrutora",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      name: "DANIEL ARTINE",
      office: "Engenheiro de Software na Stone Age",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      name: "GUILHERME LIMA",
      office: "Desenvolvedor Python e JavaScript na Alura",
      date: "10-10-2022",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      name: "PAULO SILVEIRA",
      office: "Hipster e CEO da Alura",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[2].name,
    },
    {
      name: "JULIANA AMOASEI",
      office: "Desenvolvedora de software e instrutora",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      name: "DANIEL ARTINE",
      office: "Engenheiro de Software na Stone Age",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      name: "GUILHERME LIMA",
      office: "Desenvolvedor Python e JavaScript na Alura",
      date: "10-10-2022",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      name: "PAULO SILVEIRA",
      office: "Hipster e CEO da Alura",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[3].name,
    },
    {
      name: "JULIANA AMOASEI",
      office: "Desenvolvedora de software e instrutora",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      name: "DANIEL ARTINE",
      office: "Engenheiro de Software na Stone Age",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      name: "GUILHERME LIMA",
      office: "Desenvolvedor Python e JavaScript na Alura",
      date: "10-10-2022",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      name: "PAULO SILVEIRA",
      office: "Hipster e CEO da Alura",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[4].name,
    },
    {
      name: "JULIANA AMOASEI",
      office: "Desenvolvedora de software e instrutora",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      name: "DANIEL ARTINE",
      office: "Engenheiro de Software na Stone Age",
      date: "10-10-2022",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[5].name,
    },
    {
      name: "GUILHERME LIMA",
      office: "Desenvolvedor Python e JavaScript na Alura",
      date: "10-10-2022",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[5].name,
    },
    {
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
            name={team.name}
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor}
            collaborators={collaborators.filter(
              (collaborator) => collaborator.team === team.name
            )}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
