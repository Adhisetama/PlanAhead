import Link from "next/link";
// import Image from "next/image";

const Hero = () => {
  return (
    // <hero className="flex flex-col items-center justify-center h-screen">
    //   <div>
    //     <Image
    //       alt="Mountains"
    //       fill={true}
    //       src="/landing-page-header.png"
    //       objectFit="contain"
    //       style={{
    //         zIndex: -1
    //       }}
    //     />
    //   </div>
    //   <h1 className="text-4xl font-bold text-white mb-4">Plan Your Everyday Doings</h1>
    //   <p className="text-white text-lg mb-8">Here to help you manage your plans!</p>
    //   <div>
    //     <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Schedule</button>
    //   </div>
    // </hero>
    <section className="relative w-full min-h-screen md:h-screen flex md:block flex-col justify-center mx-auto lg:px-16 max-w-7xl lg:py-24">
      <div className="flex w-full mx-auto text-left">
        <div className="relative inline-flex items-center mx-auto align-middle">
          <div className="text-center">
            <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
              Plan Your Everyday Doings
            </h1>
            <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">
              Here to Help You to Manage Your Plans!
            </p>

            <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
              <div className="mt-3 rounded-lg sm:mt-0">
                <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-[#F9C222] lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Get bundle
                </button>
              </div>

              <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                <button className="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  See features
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
