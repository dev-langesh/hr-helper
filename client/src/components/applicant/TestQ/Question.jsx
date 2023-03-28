import React from "react";

const Question = (props) => {
  return (
    <div className="px-5 pt-5">
      <div className="bg-blue-300 p-5 border-4 border-blue-400 shadow-lg">
        <div>
          <p className="font-bold">Question {props.index}</p>
          <h1 className="text-2xl">{props.question}</h1>
        </div>
        <div className="flex-col mt-2">
          <div className="flex gap-3">
            <input
              onChange={(e) => props.selectAnswer(e, props.id)}
              name={props.index}
              type="radio"
              value="strongly_agree"
            />
            <p className="font-semibold">Strongly Agree</p>
          </div>
          <div className="flex gap-3">
            <input
              onChange={(e) => props.selectAnswer(e, props.id)}
              name={props.index}
              type="radio"
              value="somewhat_agree"
            />
            <p className="font-semibold">Somewhat Agree</p>
          </div>
          <div className="flex gap-3">
            <input
              onChange={(e) => props.selectAnswer(e, props.id)}
              name={props.index}
              type="radio"
              value="neutral"
            />
            <p className="font-semibold">Neutral</p>
          </div>
          <div className="flex gap-3">
            <input
              onChange={(e) => props.selectAnswer(e, props.id)}
              name={props.index}
              type="radio"
              value="somewhat_disagree"
            />
            <p className="font-semibold">Somewhat Disagree</p>
          </div>
          <div className="flex gap-3">
            <input
              onChange={(e) => props.selectAnswer(e, props.id)}
              name={props.index}
              type="radio"
              value="strongly_disagree"
            />
            <p className="font-semibold">Stongly Disgree</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
