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
          <Card 
            href="https://www.linkedin.com/in/tarikwataya/" 
            icon="/img/linkedin.svg" 
            tittle="My Linkedin" 
            description="See my experiences!" 
          />

          <Card 
            href="https://github.com/tarikwataya" 
            icon="/img/github.svg" 
            tittle="My Github" 
            description="My codes are here!" 
          />

          <Card 
            href="http://wataya.firecat.com.br/" 
            icon="/img/portfolio.svg" 
            tittle="My Portfolio" 
            description="See my projects in full!" 
          />

          <Card 
            href="https://www.instagram.com/tarik_wataya/" 
            icon="/img/instagram.svg" 
            tittle="My instagram" 
            description="Various cool content!" 
          />

          <Card 
            href="https://firecat.com.br/" 
            icon="/img/fire.svg" 
            tittle="Firecat" 
            description="Service Provider & Consulting" 
          />
        </div>
      </div>
    </div>
  );
}