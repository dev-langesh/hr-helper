import React from "react";

const Test = () => {
  return (
    <div>
      <div className="p-5">
        <div>
          <p className="font-bold">Question 1</p>
          <h1 className="text-2xl">
            When faced with a difficult situation, which of the following best
            describes your approach?
          </h1>
        </div>
        <div className="flex-col mt-2">
          <div className="flex gap-3">
            <input name="ques1" type="radio" value={"a"} />
            <p>Confront the problem head-on and find a solution</p>
          </div>
          <div className="flex gap-3">
            <input name="ques1" type="radio" value={"a"} />
            <p>Seek the advice of others and collaborate on a solution</p>
          </div>
          <div className="flex gap-3">
            <input name="ques1" type="radio" value={"a"} />
            <p>Avoid the situation as much as possible</p>
          </div>
          <div className="flex gap-3">
            <input name="ques1" type="radio" value={"a"} />
            <p> Wait for the situation to resolve itself</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
