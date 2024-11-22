import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
export default function ProfileCard({profile}){

    return(
        <div class="lg:flex bg-slate-500 rounded-lg">
            <img class="object-cover w-full h-56 rounded-lg lg:w-64" src={profile.profileImage} alt=""/>

            <div class="flex flex-col justify-between py-6 lg:mx-6">
                <h3 class="text-xl font-semibold text-orange-400 hover:underline dark:text-white ">
                    {profile.firstName} {profile.lastName}
                </h3>
                <h5 className="text-gray-200">
                    {profile.quote}
                </h5>
                {/* {profile.socialMedia.map((link)=>{
                    return <>
                    <a href={link.url} class="flex items-center space-x-2 text-sm/6 text-gray-400 hover:text-white">
                        <link.icon className="w-5 h-5" />
                        {link.name}
                    </a>
                    </>
                })} */}
                
                <span class="text-md text-white dark:text-gray-300">Year: {profile.year} </span>
            </div>
        </div>
    )
}