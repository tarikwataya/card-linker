import { motion } from "framer-motion";
import Link from "next/link";

interface ICardProps {
  href: string;
  imgSrc: string;
  tittle: string;
  description: string;
}

const Card: React.FC<ICardProps> = ({ href, imgSrc, tittle, description }) => (
  <Link href={href}>
    <div className="transition duration-500 ease-in-out h-14 mt-6 flex flex-row bg-gray-400 bg-opacity-20 rounded-xl cursor-pointer hover:bg-gray-500 hover:bg-opacity-20 transform hover:-translate-y-1 hover:scale-110">      
      <img src={imgSrc} className="h-full p-4" />
      <div className="mt-3 sm:mt-2">
        <p className="text-white text-lg sm:text-base">{tittle}</p>
        <p className="hidden sm:block text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  </Link>
);

export default function Home() {
  return (
    <div className="flex justify-center">

      <div className="rounded-3xl overflow-hidden w-4/5 sm:w-4/5 md:w-2/5 my-3 bg-gray-500 bg-opacity-20">
        <img src="https://i.imgur.com/BetGBxl.jpg" className="w-full h-36 border-b-4 border-white" />
        <div className="flex justify-center -mt-8">
            <img src="https://github.com/tarikwataya.png" className="transition duration-500 ease-in-out w-28 h-28 rounded-full border-solid border-4 -mt-6 border-white transform hover:-translate-y-1 hover:scale-125" />		
        </div>
        <div className="text-center px-3 pt-2">
          <h3 className="text-white text-xl bold font-sans">Tárik Wataya</h3>
          <p className="font-sans font-light text-gray-300">Front-End Developer</p>
        </div>
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