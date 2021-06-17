import React from 'react';
import { MenuItems } from './Menuitems';

function Navbar() {
    return (
        <div>
            <nav className="bg-gray-100 w-full">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                    
                        <div className="flex space-x-4">
                            {/* logo */}
                            <div>
                            <p href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                                <svg className="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                <span className="font-bold">LOGO HERE</span>
                            </p>
                            </div>
                        {/* primary navbar */}
                        <div className="hidden md:flex items-center space-x-1">
                            {MenuItems.map((item,index)=>{
                                return(
                                    <p key={index} href="{item.url}" className="py-5 px-3  text-gray-700 hover:text-gray-900 capitalize">{item.title}</p>
                                )
                            })}
                               <input class="w-40 h-10 rounded-sm p-3 outline-none border-solid  border border-indigo-500 placeholder-gray-600::placeholder"  type="text" placeholder="Search" />
                            <p href="#" className="py-2 px-4 rounded-sm border-gray-600 border border-solid bg-indigo-600 text-lg text-indigo-100">Search</p>

                        </div>
                        </div>
                        {/* secondary nav */}
                        <div className="hidden md:flex items-center space-x-1">
                             <p href="#" className=" py-2 px-6 rounded-sm border-gray-600 border border-solid text-lg" >Login</p>
                            <p href="#" className="py-2 px-6 rounded-sm border-gray-600 border border-solid bg-indigo-600 text-lg  text-indigo-100 transition duration-300">Signup<i className=" pl-2 fas fa-arrow-right"></i></p>
                        </div>

                        {/* mobile button goes here */}
                        <div className="md:hidden flex items-center">
                                <button className="mobile-menu-button" onClick={()=>{}}>
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                </button>
                         </div>
                    </div>
                </div>

                {/* mobile menu */}
                <div className="mobile-menu hidden md:hidden">

                {MenuItems.map((item,index)=>{
                    return(
                            <p key={index} href="{item.url}" className="py-5 px-3  text-gray-700 hover:text-gray-900 capitalize">{item.title}</p>
                         )
                    })}

                    <p href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Sign In</p>
                    <p href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Sign Up <i className=" pl-2 fas fa-arrow-right"></i></p>
                </div>
            </nav>
      </div>
    )
}

export default Navbar
