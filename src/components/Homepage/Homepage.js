import React from 'react';

function Homepage() {
    return (
        <div className="max-w-screen-2xl bg-white-900 w-auto">
            <section className="grid md:grid-cols-2 grid-cols-1 mt-5" id="hero-section">
            <div className="flex  flex-col justify-center items-center md:items-start m-5 row-start-1">
                <h1 className="font-medium md:text-7xl text-4xl tracking-tighter leading-7">Easy Note For all</h1>
                <p className="font-medium text-gray-600 pt-10 md:text-2xl text-lg leading-8 mb-8">Make it share it and learn it</p>
                <p href="#" className="py-2 px-4 rounded text-base flex flex-row justify-around items-center bg-indigo-600 text-indigo-100 md:text-lg ml-4 border-solid border border-blue-500">Get Started <i className=" pl-2 fas fa-arrow-right"></i></p>
            </div>
          
            <div className="max-w-2xl md:w-11/12 w-7/12 self-center justify-self-center ml-10 md:row-end-1 row-start-2">
                <img src="images/img1.png"/>
            </div>

            <div className="max-w-2xl md:w-11/12 w-7/12 self-center justify-self-center  md:row-start-2 row-start-4 ">
                <img src="images/img2.png"/>
            </div>

            <div className="flex flex-col justify-center items-center md:items-start m-5 md:row-end-2 row-start-3">
                <h1 className="font-medium md:text-7xl text-4xl tracking-tighter leading-7"> Sharing is Caring</h1>
                <p className="font-medium text-gray-600 pt-10 md:text-2xl text-lg leading-8 mb-8"> Prepare the note and pass it to the other people in more efficient manner and let everyone be
                    educated</p>
            </div>

            </section>
        </div>
    )
}

export default Homepage
