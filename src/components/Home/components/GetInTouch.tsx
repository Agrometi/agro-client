import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import * as Styled from "./styles/getInTouch.styled";
import SectionTitle from "./SectionTitle";
import { CheckIcon } from "@/components/Layouts/Icons";
import { TextField, TextareaField } from "@/components/Layouts";

type GetInTouchT = {};

const GetInTouch: React.FC<GetInTouchT> = () => {
  return (
    <Styled.GetInTouch>
      <div className="left-side"></div>
      <div className="right-side">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1531339137874-f8999782d3bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            title=""
            width="100%"
            loading="lazy"
          />
        </figure>
      </div>

      <div className="content-box">
        <div className="content-box__details">
          <SectionTitle
            subTitle="CONTACT"
            title="Get In Touch With Out Team Today"
            type="secondary"
          />

          <p className="content-box__details-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad suscipit
            fugit aliquid maxime eum eligendi eius natus ab sapiente ut. Lorem
            ipsum dolor sit amet consectetur!
          </p>

          <div className="content-box__details-list">
            <li>
              <span>
                <CheckIcon />
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero!
              </span>
            </li>

            <li>
              <span>
                <CheckIcon />
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero!
              </span>
            </li>

            <li>
              <span>
                <CheckIcon />
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero!
              </span>
            </li>

            <li>
              <span>
                <CheckIcon />
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero!
              </span>
            </li>
          </div>

          <div className="content-box__details-footer">
            <CircularProgressbar
              value={90}
              maxValue={100}
              text={`${90}%`}
              strokeWidth={7}
              styles={buildStyles({
                textColor: "#fff",
                pathColor: "#f7f052",
                trailColor: "#F2F2F2",
              })}
            />

            <div className="satisfied-clients">
              <span>SATISFIED</span>
              <span>Clients</span>
            </div>

            <div className="footer-label">Amet Minim Moll It Non Deserunt</div>
            <div></div>
          </div>
        </div>

        <div className="content-box__form">
          <div className="form-fields--wrapper">
            <TextField
              message=""
              label="Name"
              hasError={false}
              fieldProps={{ name: "", onChange: () => {}, value: "" }}
            />

            <TextField
              message=""
              label="Phone Number"
              hasError={false}
              fieldProps={{ name: "", onChange: () => {}, value: "" }}
            />

            <TextareaField
              message=""
              label="Message"
              hasError={false}
              rows={8}
              fieldProps={{ name: "", onChange: () => {}, value: "" }}
            />
          </div>

          <button className="submit-btn">submit</button>
        </div>
      </div>
    </Styled.GetInTouch>
  );
};

export default GetInTouch;
