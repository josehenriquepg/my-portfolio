import { Container, Subtitle, Content, Text } from "./styles";

const About = () => {
  return (
    <Container>
      <Subtitle>Sobre mim</Subtitle>
      <Content>
        <Text>
          Sou um jovem programador brasileiro, buscando melhorar minhas
          habilidades e resolver problemas. Tenho como objetivo ajudar no
          desenvolvimento da empresa, fazer melhorias, adquirir e compartilhar
          conhecimentos com meus colegas de trabalho de uma maneira ética e justa.
        </Text>
        <Text>
          Meu primeiro contato com programação foi quando entrei no Curso Técnico
          em Informática integrado ao ensino médio do CEP - Brazópolis, em 2018.
          lá tive uma boa base de Fundamentos da Programação, Lógica de
          Programação e Banco de Dados. No ano de 2022, após conseguir montar meu
          computador, decidi que ia me profissionalizar na área da programação
          atuando nas áreas de Desenvolvimento Web e Data Sciense. Desde então,
          estou aprofundando meus conhecimentos em programação pela internet de
          forma autodidata.
        </Text>
      </Content>
    </Container>
  );
};

export default About;
