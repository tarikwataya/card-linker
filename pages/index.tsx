import { Card } from "../components/Card";
import { Profile } from "../components/Profile";

export default function Home() {
  return (
    <div className="flex justify-center">

      <div className="rounded-3xl overflow-hidden w-4/5 sm:w-4/5 md:w-2/5 my-3 bg-gray-500 bg-opacity-20">
        <Profile 
          srcImgBanner="https://i.imgur.com/BetGBxl.jpg" 
          srcImgAvatar="https://github.com/tarikwataya.png" 
          name="Tárik Wataya" 
          description="Front-End Developer"
        />
        
        <div className="pl-10 pr-10 pb-10 flex flex-col">
          <Card href="/nextjs" imgSrc="/img/linkedin.svg" tittle="My Linkedin" description="Veja minhas experiências!" />
          <Card href="/nextjs" imgSrc="/img/github.svg" tittle="My Github" description="Meus códigos estão aqui!" />
          <Card href="/nextjs" imgSrc="/img/portfolio.svg" tittle="My Portfolio" description="Veja meus projetos por completo!" />
          <Card href="/tailwind" imgSrc="/img/instagram.svg" tittle="My instagram" description="Diversos conteúdos legais!" />
          <Card href="/nextjs" imgSrc="/img/fire.svg" tittle="Firecat Services" description="Empresa de prestação de Serviço" />
        </div>
      </div>
    </div>
  );
}