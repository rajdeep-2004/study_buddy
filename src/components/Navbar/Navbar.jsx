import "../../styles.css"
const Navbar = () => {

  return (
    <>

    <nav className="sticky top-0 z-10  backdrop-blur-lg bg-opacity-10 border-b border-gray-200">

        <ul className="p-2 flex  justify-between">
            <li className="flex items-center">
                <span><img src="src/assets/Logo.png" alt="Logo" class="h-15 w-15 p-2"/></span>
                <span className="ml-2 font-semibold text-xl text-gray-800 ">Study Buddy</span>
            </li>
            <div className=" hehe flex justify-end-safe gap-10 w-200">
                <li className="nav-links flex items-center ml-2 pt-0.9 font-light hover:text-[rgb(118,195,255)]  hover:cursor-pointer hover:font-semibold">Home</li>
                <li className="nav-links flex items-center ml-2 pt-0.9 font-light hover:text-[rgb(118,195,255)] hover:cursor-pointer hover:font-semibold">Features</li>
                <li className="nav-links flex items-center ml-2 pt-0.9 font-light hover:text-[rgb(118,195,255)] hover:cursor-pointer hover:font-semibold">Testimonials</li>
                <li className="nav-links flex items-center ml-2 pt-0.9 font-light hover:text-[rgb(118,195,255)] hover:cursor-pointer hover:font-semibold">Contact Us</li>
            </div>


        </ul>
        
    </nav>
    <hr />
    </>
  );
};

export default Navbar;