import axios from "axios";
import React, { useEffect, useState } from "react";
import Question from "./Question";

const Test = () => {
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);

  useState(() => {
    async function get() {
      const req = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/personality`
      );

      console.log(req.data.data[0].questions);

      if (req.data.data) {
        setQuestions(req.data.data[0].questions);
      }
    }

    get();
  }, []);

  function selectAnswer(e, type) {
    setAnswers((prev) => {
      return [
        ...prev,
        {
          [type]: e.target.value,
        },
      ];
    });

    // console.log(q);
  }

  useEffect(() => {
    console.log(questions);
    console.log(answers);
  });

  async function handleSubmit(e) {
    console.log(answers);

    const id = window.localStorage.getItem("application_id");

    const req = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/personality/result`,
      {
        id,
        result: answers,
      }
    );

    console.log(req.data);

    alert("Successfull");

    window.location.href = "/apptitude/test";
  }

  return (
    <div>
      <div>
        {questions.map((n, index) => {
          return (
            <div>
              <Question
                selectAnswer={selectAnswer}
                question={n.question_text}
                type={n.ans_type}
                index={index + 1}
                id={n._id}
              />
            </div>
          );
        })}
      </div>

      <div className="mt-2 flex justify-center py-9">
        {questions.length === 0 ? (
          <h1>No Questions found</h1>
        ) : (
          <button
            onClick={handleSubmit}
            className=" py-2 px-3 hover:ring  bg-indigo-500 text-white font-bold"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Test;
