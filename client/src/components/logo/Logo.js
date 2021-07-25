import { Link } from "react-router-dom";

import "./Logo.css";

const Logo = () => {
  return (
    <div>
      <Link id="company-logo" to="/">
        getflicks
      </Link>
    </div>
  );
};

export default Logo;
