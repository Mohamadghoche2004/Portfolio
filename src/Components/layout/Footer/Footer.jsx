import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const handleContactClick = () => {
    // Scroll to top when contact link is clicked
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-white py-4 mt-auto">
      <div className="container px-5">
        <div className="row align-items-center justify-content-between flex-column flex-sm-row">
          <div className="col-auto">
            <div className="small m-0">
              Copyright &copy; USpot {new Date().getFullYear()}
            </div>
          </div>
          <div className="col-auto">
            <span className="mx-1">&middot;</span>
            <Link className="small" to="/contact" onClick={handleContactClick}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
