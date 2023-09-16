import React, { useState } from "react";
import { ContainerCol } from "../GlobalStyles";
import SidebarMenu from "../components/SidebarMenu";
import GlobalStyle from "../GlobalStyles";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import data from "../data/Economy.json";
import "./VendorTable.css";
import CloseButton from "react-bootstrap/CloseButton";



function CreateTable() {
  const [show, setShow] = useState(false);
  const [itemIndex, setItemIndex] = useState();
  function handleShow(idx) {
    setItemIndex(idx);
    setShow(!show);
    console.log(show);
    console.log(idx);
  }
  console.log(show);
  return (
    <div style={{ padding: "2.5em", width: "100%" }}>
      <Table striped>
        <thead>
          <tr>
            <th>Fuel used</th>
            <th>Charcoal (kg)</th>
            <th>Kerosine (liter)</th>
            <th>Gas (kg).</th>
            <th>Wood on open fire (kg)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => {
            return (
              <tr>
                <td>{item.Fuel}</td>
                <td>{item.Charcoal}</td>
                <td>{item.Kerosine}</td>
                <td>{item.Gas}</td>
                <td>{item.Wood}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      

    </div>
  );
}

function EconomyTable(props) {
  return (
    <>
      <GlobalStyle />
      {props.isOpen ? <SidebarMenu /> : <></>}
      <ContainerCol className="landingDiv">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "0px",
          }}
        >
          <h4>Fuel Consumption and Money Saved</h4>

          <CreateTable />
        </div>
      </ContainerCol>
    </>
  );
}

export default EconomyTable;
