import { Container } from "react-bootstrap";
import React from "react";
import classes from './Nav.module.css'

const Nav = () => {
  return (
    <>

    <div className={classes.nav}>
        <div className={classes.LOGO}></div>
        
        <div className={classes.navItem}> Tax Information </div>
        <div className={classes.navItem}> slaba </div>

    </div>



      {/* <div className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-4 end">

                </div>
            </div>
        </div>
      </div> */}
    </>
  );
};

export default Nav;
