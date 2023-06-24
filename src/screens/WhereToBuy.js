import { ContainerCol } from "../GlobalStyles";
import GlobalStyle  from "../GlobalStyles";
import SidebarMenu from "../components/SidebarMenu";
import { FaExternalLinkAlt } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import data from "../data/Products.json";
import Prod1 from "../images/prod1.png";
import Prod2 from "../images/prod2.jpeg";
import Prod3 from "../images/q2.png";
import { useNavigate } from "react-router-dom";
//const navigate = useNavigate();

function WhereToBuy(props) {
  function PrintImage(props) {
    if (props.name === 0) {
      return <Card.Img variant="top" src={Prod1} />;
    } else if (props.name === 1) {
      return <Card.Img variant="top" src={Prod2} />;
    } else if (props.name === 2) {
      return <Card.Img variant="top" src={Prod3} />;
    }
  }  return (
    <>
      <GlobalStyle />
      {props.isOpen ? <SidebarMenu /> : <></>}

      <ContainerCol className="landingDiv">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <div
              style={{
                marginTop: "3em",
                marginBottom: "3em",
                paddingLeft: "100px",
                paddingRight: "100px",
              }}
            >
              <h2 style={{ textAlign: "center" }}>Where to buy your cooker</h2>
              <div style={{ marginBottom: "1em", textAlign: "center" }}>
                There are several entrepreneurs and solar cooker vendors in Kenya. <br />
		You can either search on the map or watch i the list bleow. <br />

                  <h5>
                    Click to get ISC Kenya Map in large screen{" "}
                    <a href="https://umap.openstreetmap.fr/sv/map/vendors-of-integrated-solar-cooking-kenya_873172">
                      <FaExternalLinkAlt />
                    </a>{" "}
                  </h5>
                  Map showing location of solar cooking vendors. Click on the
                  symbol close to your place and you will get more information.{" "}
                  <div style={{ textAlign: "center" }}>
                    <object
                      type="text/html"
                      data="https://umap.openstreetmap.fr/sv/map/vendors-of-integrated-solar-cooking-kenya_873172"
                      width="1000px"
                      height="600px"
                    ></object>
                  </div>
                </div>
              </div>
            </div>
	</div>
        <div style={{ textAlign: "center" }}>
            <h3 id="VendorList">List of Vendors in Kenya</h3>
        </div>
   </ContainerCol>  
   </>
  );
}
export default WhereToBuy;
