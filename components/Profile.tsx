interface IProfileProps {
    srcImgBanner: string;
    srcImgAvatar: string;
    name: string;
    description: string;
}
  
export const Profile: React.FC<IProfileProps> = ({ srcImgBanner, srcImgAvatar, name, description }) => {
    return (
        <>
            <img src={srcImgBanner} className="w-full h-36 border-b-4 border-white" />

            <div className="flex justify-center -mt-8">
                <img 
                    src={srcImgAvatar}
                    className="
                        transition duration-500 ease-in-out 
                        w-28 h-28 rounded-full border-solid border-4 
                        -mt-6 border-white transform 
                        hover:-translate-y-1 hover:scale-125
                    " 
                />		
            </div>

            <div className="text-center px-3 pt-2">
                <h3 className="text-white text-xl bold font-sans">
                    {name}
                </h3>
                <p className="font-sans font-light text-gray-300">
                    {description}
                </p>
            </div>
        </>
    );
};