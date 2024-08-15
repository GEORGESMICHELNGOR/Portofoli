import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
            <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
    <div className="font-bold text-[16px]">Communauté</div>
    <a href="https://www.youtube.com/@Vouminho-vg4zp" className="flex flex-row items-center my-[15px] cursor-pointer">
        <FaYoutube />
        <span className="text-[15px] ml-[6px]">YouTube</span>    
    </a>
    <a href="https://github.com" className="flex flex-row items-center my-[15px] cursor-pointer">
        <RxGithubLogo />
        <span className="text-[15px] ml-[6px]">GitHub</span>    
    </a>
    <a href="https://discord.com" className="flex flex-row items-center my-[15px] cursor-pointer">
        <RxDiscordLogo />
        <span className="text-[15px] ml-[6px]">Discord</span>    
    </a>
</div>


              
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Médias Sociaux</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Twitter</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">À propos</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Devenir Sponsor</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Apprendre à Me Connaître</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">ndenegeorgesmichelngor@gmail.com</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Georges Dev 2023 Inc. Tous droits réservés.
            </div>
        </div>
    </div>
  )
}

export default Footer