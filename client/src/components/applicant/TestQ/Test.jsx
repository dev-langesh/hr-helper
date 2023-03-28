import React, { useEffect, useState } from "react";
import Question from "./Question";

const res = {
  _id: "64227ad7ee2255a73013a10a",
  questions: [
    {
      question_text: "Will you help friends to solve their coding problems?",
      answer: "strongly_agree",
      _id: "64227ad7ee2255a73013a10b",
    },
    {
      question_text: "q2",
      answer: "neutral",
      _id: "64227ad7ee2255a73013a10c",
    },
    {
      question_text: "q3",
      answer: "strongly_disagree",
      _id: "64227ad7ee2255a73013a10d",
    },
    {
      question_text: "q4",
      answer: "somewhat_agree",
      _id: "64227ad7ee2255a73013a10e",
    },
  ],
  __v: 0,
};

const Test = () => {
  const [marks, setMarks] = useState(0);

  function selectAnswer(e, id) {
    // console.log(e.target.value, id);

    res.questions.forEach((q) => {
      if (q._id === id && q.answer === e.target.value) {
        setMarks(marks + 1);
      }
    });
  }

  // useEffect(() => {
  //   console.log(marks);
  // });

  return (
    <div>
      <div>
        {res.questions.map((n, index) => {
          return (
            <div>
              <Question
                selectAnswer={selectAnswer}
                question={n.question_text}
                index={index + 1}
                id={n._id}
              />
            </div>
          );
        })}
      </div>

      <div className="mt-2 flex justify-center">
        <button
          onClick={() => console.log(marks)}
          className="bttng py-1 px-3 rounded-md text-white font-bold"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Test;
