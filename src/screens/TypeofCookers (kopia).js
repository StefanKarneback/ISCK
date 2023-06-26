import "../App.css";
import GlobalStyle, { ContainerCol } from "../GlobalStyles";
import React from "react";
import SlidingImage from "../components/SlidingImage";;
import Types from "../components/Types";
import SidebarMenu from "../components/SidebarMenu";

function TypeofCookers(props) {
  return (
    <>
      <GlobalStyle />
      {props.isOpen ? <SidebarMenu /> : <></>}

      <ContainerCol className="landingDiv">
        <SlidingImage></SlidingImage>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div className="SlidingText">
            <Types />
          </div>
        </div>
      </ContainerCol>
    </>
  );
}

export default TypeofCookers;
