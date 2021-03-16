import Link from "next/link";

interface ICardProps {
    href: string;
    imgSrc: string;
    tittle: string;
    description: string;
}
  
export const Card: React.FC<ICardProps> = ({ href, imgSrc, tittle, description }) => (
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