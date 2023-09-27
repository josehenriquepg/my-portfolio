import {
  Container,
  Image,
  Text,
  Network,
  SocialMedia,
  Info,
  InfoCard,
  InfoContent,
  InfoTitle,
  Button,
} from "./styles";
import {
  BsDownload,
  BsEnvelope,
  BsGithub,
  BsLinkedin,
  BsPhone,
} from "react-icons/bs";

const Sidebar = () => {
  return (
    <Container>
      <Image></Image>
      <Text></Text>
      <Network>
        <SocialMedia href="https://github.com/josehenriquepg" target="_blank">
          <BsGithub />
        </SocialMedia>
        <SocialMedia
          href="https://www.linkedin.com/in/josehenriquepg/"
          target="_blank"
        >
          <BsLinkedin />
        </SocialMedia>
      </Network>
      <Info>
        <InfoCard>
          <BsPhone className="icon" />
          <InfoContent>
            <InfoTitle> Contato: </InfoTitle>
            <Text> (35) 9774-4971 </Text>
          </InfoContent>
        </InfoCard>
        <InfoCard>
          <BsEnvelope className="icon" />
          <InfoContent>
            <InfoTitle> Email: </InfoTitle>
            <Text> hpereira012@gmail.com </Text>
          </InfoContent>
        </InfoCard>
      </Info>
      <Button>
        <BsDownload /> Baixar Curriculo
      </Button>
    </Container>
  );
};

export default Sidebar;
