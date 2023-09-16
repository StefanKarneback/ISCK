import { ContainerCol } from "../GlobalStyles";
import GlobalStyle from "../GlobalStyles";
import EconomyTable from "../components/EconomyTable";
import SidebarMenu from "../components/SidebarMenu";

function Economy(props) {
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
              <div style={{ marginBottom: "1em" }}>
	<h3>Can I afford a cooker?</h3>
	
 	<h3>The question is rather if you can afford not to use a solar cooker.
	 </h3>
	<br/>
	Is the cooker expensive?
	<br/ >
	Make an estimation - how much do you pay for fuel today?
	<br/>
	<br/>
	The vendor will give you the exact price for your cooker. Panel ovens and conical cookers are usually the less expensive ones. A panel oven or a conical cooker pay for itself by using it for around 18 meals instead of 2kg (wood fuel) per meal.
<br />
<br/>
	You can often buy the cooker on instalment, but you need to pay a certain amount in cash. 
<br/>
<br/>
After paying for your solar cooker the sun will provide you with free fuel. Take good care of your cooker and it will last for many years.
<br/>
<br/>
Combine with a fireless cooker to keep your meal hot until you want to eat. 
<br/>
<br/>

An estimation of how much you can save by using solar cookers is presented in the table below.  <b>
          (We are waiting for a report with numbers for the table)
	</b>
<br/>
<br/>
If you save 2000 Ksh per month, after 8 months, you have saved 16000 Ksh.  

         </div>
          </div>
          </div>
          </div>     
     <div>
         <EconomyTable />;
	</div>
      </ContainerCol>
</>
);
}
export default Economy
