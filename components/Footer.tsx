import Link from "next/link";
const Footer = () => {
  return (
   <footer>
     <div className="px-5 lg:px-10 py-5 text-white">
      <div className=" pt-14 mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row gap-x-8 py-8 gap-y-10">
          <div className="md:w-2/5 text-xs flex flex-col gap-y-1">
          <Link href="/" className="text-3xl text-white font-bold">
           SHOWFLIX.
          </Link>
            <p className="pb-6">
             SHOWFLIX is a streaming website in 2023
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>
          <div className="md:w-3/12 text-xs flex flex-col gap-y-1">
            <h3 className="text-sm font-semibold ">Useful Links</h3>
            <p>Movies</p>
            <p>Tv Shows</p>
            <p>Upcoming</p>
          </div>
          <div className="md:w-3/12 text-xs flex flex-col gap-y-1">
            <h3 className="text-sm font-semibold  ">Contact Us</h3>
            <p>Follow us</p>
            <p>
              Terms of service
            </p>
          </div>
        </div>
        <div className="text-xs py-3">
          <p>All rights reserved. ©alwayspearlxx.</p>
        </div>
      </div>
    </div>
   </footer>
  );
};

export default Footer;
