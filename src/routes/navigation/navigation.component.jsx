import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          <Link className="nav-link" to="auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;

// react provides fragment, it essentially is a component that actually render to nothing when it actually gets mounted on the dom
// fragment is useful when you don't want to render some html specific element.
// here we actually don't want the outer div as react, makes it compulsory for us to have outer div so we can use fragment to tackle that issue.
// svg which we use as our logo, are scalable vectors which on decreasing or increasing the size don't blur like jpeg or pngs
// we can also import svg's as react component directly.
