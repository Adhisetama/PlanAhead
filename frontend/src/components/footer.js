import Image from "next/image";

const Footer = () =>{
return (
        <footer className="bg-[#F9C222] text-white mt-5 border-t border-gray-100">
        <div className="flex justify-center items-center sm:px-16 px-6 py-10">
            <div className="text-center">
            <div className="flex justify-center items-center mb-4">
                <Image
                src="/header-logo.png"
                alt="Logo"
                width={100}
                height={50}
                />
            </div>
            <p>
                Here to help you managing your plans!
            </p>
            <div className="border-t border-white flex my-4 mx-0"></div>
            <p>
                PlanAhead ©2024 
            </p>
            </div>
        </div>
        </footer>
    )
}

export default Footer;