import React from "react"
import Nav from "../components/Homepage/Nav";

export default function HomePage(){
	return (
		<div>
			<Nav />
            <div className="flex items-center mt-60 bg-dark ml-96">
                <a href="/talk"><button className="px-4 py-4 mt-32 font-bold text-white bg-indigo-500 rounded ml-60 mt-px-5 hover:bg-indigo-600 aligh-self-center">See our Professionals</button></a>
            </div>
		</div>
	)
}