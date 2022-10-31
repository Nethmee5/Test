import React from "react";
import Carousal from "../Carousal/Carousal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "../../components/CartsSection/CartsSection.scss";
import image1 from "../../images/image1.jpg";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import { Button } from "@mui/material";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";

const CartsSection = () => {
  return (
    <div className="carts-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-6">
            <Carousal />
            <div className="zoom">
              <Button className="zoom-button" variant="contained">
                <b>Zoom</b>

                <ZoomInOutlinedIcon className="icon" />
              </Button>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="h3">2 pairs from $199</div>
            <p>Discount auto-applied at checkout</p>
            <hr></hr>

            <div className="h1">Gaby</div>

            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="color-1"
                  control={<Radio class="select-icon" />}
                />
                <FormControlLabel
                  value="color-2"
                  control={<Radio class="select-icon" />}
                />
                <FormControlLabel
                  value="color-3"
                  control={<Radio class="select-icon" />}
                />
                <FormControlLabel
                  value="color-4"
                  control={<Radio class="select-icon" />}
                />
                <FormControlLabel
                  value="color-5"
                  control={<Radio class="select-icon" />}
                />

                <FormControlLabel
                  value="color-6"
                  control={<Radio class="select-icon" />}
                />

                <FormControlLabel
                  value="color-7"
                  control={<Radio class="select-icon" />}
                />

                <FormControlLabel
                  value="color-8"
                  control={<Radio class="select-icon" />}
                />

                <FormControlLabel
                  value="color-9"
                  control={<Radio class="select-icon" />}
                />
              </RadioGroup>
            </FormControl>
            <div className="selected-color">
              <b> Color</b>: Tabby Tortoise
            </div>

            <hr />
            <p>From $199.00</p>
            <p>or ZIP it from @10/week with ZIP</p>
            <div className="two-buttons">
              <Button variant="contained" className="pres-button1">
                Prescription
              </Button>

              <br />

              <Button variant="contained" className="pres-button2">
                Book an eye test
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartsSection;
