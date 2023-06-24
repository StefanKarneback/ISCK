import { ContainerCol } from "../GlobalStyles";
import GlobalStyle from "../GlobalStyles";
import SidebarMenu from "../components/SidebarMenu";
import { FaExternalLinkAlt } from "react-icons/fa";

function AdditionalInfo(props) {
  return (
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
              <h2 style={{ textAlign: "center" }}>Read More</h2>
              <div style={{ marginBottom: "1em", textAlign: "center" }}>
                There is a lot of information about solar cooking to be found on
                internet. Here are some examples:{" "}
              </div>
              <div>
                <div style={{ marginBottom: "1em" }}>
                  <h5>
                    Solar Cooking Wiki{" "}
                    <a href="https://solarcooking.fandom.com">
                      <FaExternalLinkAlt />
                    </a>
                  </h5>
                  One of the largest information sites. This website presents
                  how to construct solar cookers, how they work, what others do
                  and vendors in different countries.
                </div>
                <div style={{ marginBottom: "1em" }}>
                  <h5>
                    Solar Cookers International{" "}
                    <a href="https://www.solarcookers.org">
                      <FaExternalLinkAlt />
                    </a>{" "}
                  </h5>
                  A US located organisation promoting solar cookers in three
                  ways, advocacy, building capacity and research.{" "}
                </div>{" "}
	</div>
	</div>
	</div>
        </div>
      </ContainerCol>
    </>
  );
}

export default AdditionalInfo;
