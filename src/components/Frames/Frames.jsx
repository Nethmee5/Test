import React from "react";
import "bootstrap/scss/bootstrap.scss";
import "react-bootstrap-grid-component/dist/sizingbreakpoints.scss";
import { Container } from "react-bootstrap-grid-component/dist/Container";
import { Column } from "react-bootstrap-grid-component/dist/Column";
import { Row } from "react-bootstrap-grid-component/dist/Row";
import "../Frames/Frames.scss";
import { LegendToggle } from "@mui/icons-material";
const Frames = () => {
  return (
    <div className="Frame-section">
      
            <h3>About the Frames</h3>
     
      <div class="container">
        <div class="row ">
          <div class="col-lg-6 ">
            <p className="content">
              {" "}
              A classic brow-line glasses,reimagined.Macro has spring hings and
              an adjustable nose fit for maximum comfort (and style).Now
              available in small.{" "}
            </p>
          </div>
          <div class="col-lg-6 ">
            <h3>Made from Acetate</h3>
            <div className="table-section ">
              <table class="box">
                <tr>
                  <td width="250px" height="40px"align="center" class="left">
                    {" "}
                    <b> FRAME FIT</b>{" "}
                  </td>
                  <td  width="250px" height="40px" align="center" class="right">
                    <b> MEASUREMENTS</b>{" "}
                  </td>
                </tr>
                <tr>
                  <td width="250px" height="40px"align="center" class="left"> WIDE </td>
                  <td width="250px" height="40px"align="center" > 56-19-148 </td>
                </tr>
              </table>
            </div>

            <div className="text-section">
              These measurements mean lens width,bridge, and template length in
              millimetres(mm). they can be found on the inside of the temple
              arm. If you already have a pair that you like. you can compare it
              to these measurements.
              <br></br>
              <br></br>
              <br></br>
            <p>Filter category 3-General purpose sunglasses. High protection againstsunglare.Good UV protection. Not suitable for driving in twilight, at night or under dull conditions.
              </p>
             
              <p><b>This frame comes with polarised lenses. An additional $100 will be added to your order total for prescription orders.</b></p>
</div>
            {/* <div className="box-left">
     MEASUREMENTS
     56-19-148
     </div>
     <div className="box-RRIGHT">
     MEASUREMENTS
     56-19-148
     </div>

    </div>
     */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frames;
