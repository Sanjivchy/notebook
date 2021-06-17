import React from 'react'

function Footer() {
    let url='';
    return (
        <div>
             <footer className="bg-gray-200 pt-14">
            <div className=" max-w-6xl m-auto">
                <div className="flex flex-wrap ">
                    <div className="md:w-3/12 sm:w-9/12 px-4 w-full  mb-8 ">
                        <h4 className="text-lg text-gray-900 capitalize mb-9 font-medium relative">Company</h4>
                        <ul className="flex flex-col justify-start">
                            <li className="pl-0"><a className="text-base capitalize text-gray-600 font-medium block " href={url}>about hamronote</a></li>
                            <li className="pl-0"><a className="text-base capitalize text-gray-600 font-medium block " href={url}>Address</a></li>
                            <li className="pl-0"><a className="text-base capitalize text-gray-600 font-medium block " href={url}>Contact</a></li>
                            <li className="pl-0"><a className="text-base capitalize text-gray-600 font-medium block " href={url}>find us</a></li>
                        </ul>
                    </div>
                    <div className="md:w-3/12 sm:w-9/12 px-4 w-full  mb-8">
                        <h4 className="text-lg text-gray-900 capitalize mb-9 font-medium relative">Contact</h4>
                        <ul>
                            {/* <li className="pl-0"> <a className="text-base capitalize text-gray-600 font-medium block" href={url}></a>gfdgd</li>
                            <li className="pl-0"> <a className="text-base capitalize text-gray-600 font-medium block" href={url}></a></li>
                            <li className="pl-0"><a className="text-base capitalize text-gray-600 font-medium block " href={url}></a></li>
                            <li className="pl-0"><a className="text-base capitalize text-gray-600 font-medium block " href={url}></a></li> */}
                        </ul> 
                    </div>
                    <div className="md:w-3/12 sm:w-9/12 px-4 w-full  mb-8">
                        <h4 className="text-lg text-gray-900 capitalize mb-9 font-medium relative">nav links</h4>
                        <ul>
                            <li> <a className="text-base capitalize text-gray-600 font-medium block " href={url}>new notes</a></li>
                            <li> <a className="text-base capitalize text-gray-600 font-medium block " href={url}>show the notes</a></li>
                            <li><a className="text-base capitalize text-gray-600 font-medium block " href={url}>sign in</a></li>
                            <li><a className="text-base capitalize text-gray-600 font-medium block " href={url}>help</a></li>
                        </ul>
                    </div>
                    <div className="md:w-3/12 sm:w-9/12 px-4 w-full  mb-8">
                        <h4 className="text-lg text-gray-900 capitalize mb-9 font-medium relative">Follow us</h4>
                        
                        <div className="flex">
                            <a className=" h-10 w-10 bg-gray-800 ml-2.5 mb-2.5 text-center leading-5 rounded-full flex items-center justify-center text-gray-100 " href={url}><i className="fab fa-facebook"></i></a>
                            <a className="h-10 w-10 bg-gray-800 ml-2.5 mb-2.5 text-center leading-5 rounded-full flex items-center justify-center text-gray-100 "href={url}><i className="fab fa-instagram"></i></a>
                            <a  className="h-10 w-10 bg-gray-800 ml-2.5 mb-2.5 text-center leading-5 rounded-full flex items-center justify-center text-gray-100 " href={url}><i className="fab fa-twitter"></i></a>
                            <a className="h-10 w-10 bg-gray-800 ml-2.5 mb-2.5 text-center leading-5 rounded-full flex items-center justify-center text-gray-100 " href={url}><i className="fab fa-tiktok"></i></a>
    
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center bg-gray-300 h-7">
                <h3>Terms • Privacy • © 2021 Sanjivchy</h3>
            </div>
        </footer>
        </div>
    )
}

export default Footer
