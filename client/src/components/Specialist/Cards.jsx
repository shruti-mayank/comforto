import React, { useState } from "react";
import img from "./man.jpg";

export default function Cards(){
    // const[newUser, setNewUser] = useState("");
    // const[user,setUser] = useState("");
    // let userDetails = JSON.parse(localStorage.getItem('user'));
    // function logNewUser()
    // {
    //     setUser(user);
    // 
    return(
        <div class="grid grid-rows-4 grid-flow-col gap-4 m-10 sm:grid-rows-2 xs:grid-rows-1">
            <div className="overflow-hidden rounded shadow-lg">
                <img className="w-full h-60" src={img} alt="Specialist1" />
                <div className="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Specialist 1</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                    <button className="px-5 py-2 mt-2 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-600">
                        Chat
                    </button>
                </div>
            </div>
            <div className="overflow-hidden rounded shadow-lg">
                <img className="w-full h-60" src={img} alt="Specialist1" />
                <div className="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Specialist 1</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                    <button className="px-5 py-2 mt-2 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-600">
                        Chat
                    </button>
                </div>
            </div>
            <div className="overflow-hidden rounded shadow-lg">
                <img className="w-full h-60" src={img} alt="Specialist1" />
                <div className="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Specialist 1</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                    <button className="px-5 py-2 mt-2 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-600">
                        Chat
                    </button>
                </div>
            </div>
            <div className="overflow-hidden rounded shadow-lg">
                <img className="w-full h-60" src={img} alt="Specialist1" />
                <div className="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Specialist 1</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                    <button className="px-5 py-2 mt-2 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-600">
                        Chat
                    </button>
                </div>
            </div>
            <div className="overflow-hidden rounded shadow-lg">
                <img className="w-full h-60" src={img} alt="Specialist1" />
                <div className="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Specialist 1</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                    <button className="px-5 py-2 mt-2 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-600">
                        Chat
                    </button>
                </div>
            </div>
            <div className="overflow-hidden rounded shadow-lg">
                <img className="w-full h-60" src={img} alt="Specialist1" />
                <div className="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Specialist 1</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                    <button className="px-5 py-2 mt-2 font-bold text-white bg-indigo-500 rounded hover:bg-indigo-600">
                        Chat
                    </button>
                </div>
            </div>
        </div>
    )
}