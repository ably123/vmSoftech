import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="hidden lg:block fixed left-4 top-1/2 transform -translate-y-1/2 space-y-4 z-50">
      <a href="https://www.facebook.com/profile.php?id=61570256258807" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl  bg-amber-50 hover:text-blue-800 transition transform hover:scale-110 duration-300">
        <FaFacebook />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl hover:text-blue-600 transition transform hover:scale-110 duration-300">
        <FaTwitter />
      </a>
      <a href="https://www.instagram.com/vm_softech/" target="_blank" rel="noopener noreferrer" className="text-pink-600 text-2xl hover:text-pink-800 transition transform hover:scale-110 duration-300">
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/company/105305995/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-2xl hover:text-blue-900 transition transform hover:scale-110 duration-300">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialLinks;
