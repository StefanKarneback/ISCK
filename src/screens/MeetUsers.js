import { ContainerCol } from "../GlobalStyles";
import GlobalStyle from "../GlobalStyles";
import SidebarMenu from "../components/SidebarMenu";
import Sarah1 from "../images/Sarah_portrait1.jpeg";
import Sarah_on_field from "../images/Sarah_on_field1.jpeg"
import Box from "../images/prod1.png"
import Fireless from "../images/FirelessCooker.jpg"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function MeetUsers(props) {
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
          <div className="SlidingText">
            <div
              style={{
                marginTop: "3em",
                marginBottom: "3em",
                paddingLeft: "100px",
                paddingRight: "100px",
              }}
            >
              <h2>Meet the Regular Solar Cooker Users</h2>
              <div style={{ marginBottom: "1em" }}>
                Is solar cooking for real or just a hobby for some phanatics? 
	<br />
		We present some persons that regularly use solar cooking for preparing their meals.
 	< br />
	<br />

            <h3> Sarah Ndunyo is a user and entrepreneur living in Kitui</h3>
	<br />
<Row>
<Col>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={Sarah1}
                  alt="logo"
                  style={{ height: "20em", paddingTop: "1em" }}
                />{" "}
              </div>
	     <div
	    style={{
            marginTop: "1em",
            marginBottom: "0em",
            paddingLeft: "30px",
            paddingRight: "70px",
		}}>	
</div>
</Col>
<Col>
<br />
<br />
<br />
	<text>
	My name is Sarah Ndunyo. I have used solar cookers for some years now. It saves me a lot of money. A sunny month as last February I solar cooked my food during 20 days. That saved me around 2000 KES. 
        </text>
</Col>
</Row>
<Row>
	 <div
            style={{
            marginTop: "1em",
            marginBottom: "0em",
            paddingLeft: "1px",
            paddingRight: "1px",
                }}>    
	</div>
<Col>
               <img
                  src={Sarah_on_field}
                  alt="logo"
                  style={{ height: "32em", paddingTop: "1em" }}
                />{" "}
</Col>
<Col>
<br />
<br />
         <div
            style={{
            marginTop: "1em",
            marginBottom: "0em",
            paddingLeft: "1px",
            paddingRight: "10px",
                }}>
        </div>

Only chapati is not possible to cook in my panel cooker. The cooker also saves me time, since I can do other work while it cooks. A good thing is that It is easy to bring it out to the fields and eat there after work.
<br />
</Col>
         <div
            style={{
            marginTop: "1em",
            marginBottom: "0em",
            paddingLeft: "30px",
            paddingRight: "10px",
                }}>
        </div>
I have two cookers that I can bring to the fields.  It is easier and faster to use two cookers. I heat up water when my food is done to use for washing up. 
<br />
I also have a box cooker and a fireless cooker. The box cooker is heavier, but that is good when it is windy. The fireless cooker keeps the dish hot until we eat.


 	<div style={{ display: "flex", justifyContent: "center" }}>
               <img
                  src={Box}
                  alt="logo"
                  style={{ height: "20em", width: "25em", paddingTop: "2em" }}
                />{"  "}
               <img
                  src={Fireless}
                  alt="logo"
                  style={{ height: "20em", width: "25em",  paddingTop: "2em" }}
                />{" "}
	</div> 
</Row>
       </div>
	
         </div>
          </div>
          </div>
     
      </ContainerCol>
    </>
  );
}

export default MeetUsers
