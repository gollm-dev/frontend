"use client";
import {useEffect, useState} from "react";
import { PT_Sans, Montserrat } from "next/font/google";
import axios from "axios";

const ptSans = PT_Sans({ subsets: ["latin"], weight: "400" });
const monteserrat = Montserrat({subsets: ["latin"] });

export default function Home() {
    const [ modelName, setModelName ] = useState<string>("");

    const [isHideInput, setIsHideInput] = useState<boolean>(false);

    const handleClick = async() => {
        setIsHideInput(true)
        // try {
        //     const response= await axios.post("https://api.gollm.xyz/downloadModel", {
        //         model_name: modelName.replace(/\//g, '-_-')
        //     });
        //     if(response.status === 200) {
        //         setIsHideInput(true)
        //     }
        // } catch(e) {
        //     console.log(e);
        // }
    }

    return (
      <div
          className={"relative max-w-full h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-200 bg-blur to-[#fffccc] overflow-hidden"}>
          <svg width="1000" height="1000" className={"transform -rotate-90 absolute top-[-450px] left-[-130px] "}>
              <path d="M 250 100 C 200 100 100 250 150 350 Q 250 550 800 600 " fill="none" stroke="#fffccc"
                    strokeWidth="50"/>
          </svg>
          <h1 className={`${monteserrat.className} mb-1 font-mono font-bold text-[10rem] text-black `}>
              GOLLM!
          </h1>
          <h1 className={"mb-1 font-mono text-xl text-black"}>
              Paste AI <br className="block md:hidden"/>
              <span
                  className="inline-flex h-[60px] pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"
              >
      model name from HuggingFace
    </span>
              <span
                  className="box-border inline-block w-1 h-4 ml-2 -mb-2 bg-white md:-mb-4 md:h-10 animate-cursor will-change-transform"
              ></span>
          </h1>
          <div className={"absolute top-20 right-[300px] bg-[#f0c4ff] border border-black w-40 h-10 rounded-3xl p-6"}>

          </div>
          {
              isHideInput ? <TelegramLinkComponent
                  modelName={modelName}
              /> : (  <div className="group flex flex-row w-[600px] mt-5">
                  <div className="flex items-center justify-center w-full">
                      <input
                          id="10"
                          type="text"
                          placeholder={"deepset/roberta-base-squad2"}
                          className="relative h-[50px] w-full rounded-3xl bg-green-200 text-black border border-black pl-4 pr-20 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:drop-shadow-lg"
                          value={modelName}
                          onChange={(e) => setModelName(e.target.value)}
                      />
                      <button
                          className="ml-2 h-[50px] w-20 rounded-3xl p-5 flex items-center justify-center bg-green-200 text-xs font-semibold text-black border border-black transition-all duration-200 ease-in-out ease-out"
                          onClick={handleClick}
                      >GO!
                      </button>
                  </div>
              </div>)
          }


          <div
              className={"w-[400px] h-[400px] bg-transparent border-[70px] border-pink-300  rounded-full absolute bottom-[-150px] right-[-100px]"}>

          </div>
      </div>
  )
      ;
}

const TelegramLinkComponent = ({ modelName } : {modelName: string} ) => {
    const [timeLeft, setTimeLeft] = useState(5);
    const [isDownloadedStatus, setIsDownloadedStatus] = useState<boolean>(false)
    const totalSeconds = 5;

    // useEffect(() => {
    //     const fetchInfo = async () => {
    //         try {
    //             const result = await axios.post("https://api.gollm.xyz/downloadStatus", {
    //                 model_name: modelName.replace(/\//g, '-_-')
    //             });
    //
    //             if(result.status === 200 && result.data.status === "Downloaded") {
    //                 setIsDownloadedStatus(true);
    //             }
    //         } catch(e) {
    //             console.log(e);
    //         }
    //     }
    //
    //     void fetchInfo();
    // }, []);
    useEffect(() => {
        let intervalId: any;

        if ( timeLeft > 0) {
            intervalId = setInterval(() => {
                setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [timeLeft]);

    const percentage = ((totalSeconds - timeLeft) / totalSeconds) * 100;

    if(timeLeft !== 0 && !isDownloadedStatus) {
        return (
            <div className="h-2 w-[800px] bg-neutral-300 rounded-3xl">
                <div className="h-2 bg-purple-900 border border-black ease-linear rounded-3xl" style={{ width: `${percentage}%`, transition: 'width 1s ease-in-out'  }}></div>
            </div>
        )
    }

    return (
        <a
            href={`https://t.me/gollm_bot?start=${modelName.replace(/\//g, '-_-')}`}
           className={" bg-[#f0c4ff] border border-black w-40 h-10 rounded-3xl p-6 text-white flex justify-center items-center"}>
            <>Start a Bot</>
        </a >
    )
}
