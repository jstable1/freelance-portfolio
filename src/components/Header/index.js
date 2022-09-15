import React from "react";
import Navigation from "../Navigation";
import headerImage from "../../assets/images/chevron-pattern.jpeg";

function Header(props) {

  return (
    <header style={{
      backgroundImage: `url(${headerImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '10vw'}}>
      <h1>Jessica Stabler</h1>
      <Navigation  currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
    </header>
  );
}

export default Header;