import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

const Question = (props) => {
  return (
    <div className="px-5 pt-5">
      <div className="bg-blue-300 p-5 border-4 border-blue-400 shadow-lg">
        <div>
          {/* <p className="font-bold">Question {props.index}</p> */}
          <h1 className="text-2xl">
            {props.index}. {props.question}
          </h1>
        </div>
        <div className="flex-col mt-2">
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => props.selectAnswer(e, props.type)}
          >
            <FormControlLabel
              value="strongly agree"
              control={<Radio />}
              label="Strongly Agree"
            />
            <FormControlLabel
              value="somewhat agree"
              control={<Radio />}
              label="Somewhat agree"
            />
            <FormControlLabel
              value="neutral"
              control={<Radio />}
              label="neutral"
            />
            <FormControlLabel
              value="somewhat disagree"
              control={<Radio />}
              label="Somewhat Disagree"
            />{" "}
            <FormControlLabel
              value="strongly disagree"
              control={<Radio />}
              label="Strongly Disagree"
            />
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default Question;
