import React, { useEffect, useState } from "react";
import axios from "axios";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

export default function ApptitudeTest() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState({
    quants: 0,
    verbal: 0,
    logical: 0,
  });

  useEffect(() => {
    async function get() {
      const req = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/apptitude`
      );

      setData(req.data.data);
    }

    get();
  }, []);

  function handleChange(e, id, category) {
    const answer = e.target.value;

    data.forEach((d) => {
      if (d.category === category) {
        d.questions.forEach((q) => {
          if (q._id === id) {
            console.log(q);

            if (q.answer === answer) {
              setScore((prev) => {
                return {
                  ...prev,
                  [category]: prev[category] + 1,
                };
              });
            }
          }
        });
      }
    });
  }

  async function handleSubmit() {
    const application_id = window.localStorage.getItem("application_id");

    console.log(application_id);
    const req = await axios.post(
      `${
        import.meta.env.VITE_SERVER_URL
      }/apptitude/score/?application_id=${application_id}`,
      score
    );

    alert("Application Successfull");

    // console.log(req.data);

    window.location.href = "/active-jobs";
  }

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-center text-gray-800 text-xl font-bold">
        ApptitudeTest
      </h1>

      <div className="w-screen p-6">
        {data.map((type) => {
          return (
            <section className="py-4 ">
              <h1 className="text-lg font-bold text-slate-400">
                {type.category}
              </h1>

              <main>
                {type.questions.map((question, i) => {
                  return (
                    <Question
                      category={type.category}
                      selectAnswer={handleChange}
                      key={i}
                      index={i}
                      {...question}
                    />
                  );
                })}
              </main>
            </section>
          );
        })}
      </div>

      <button
        onClick={handleSubmit}
        className="w-52 bg-blue-500 p-2 text-white text-sm hover:bg-blue-700"
      >
        Submit
      </button>
    </div>
  );
}

function Question(props) {
  return (
    <div className="px-5 pt-5">
      <div className="bg-blue-300 p-5 border-4 border-blue-400 shadow-lg">
        <div>
          {/* <p className="font-bold">Question {props.index}</p> */}
          <h1 className="text-2xl">
            {props.index + 1}. {props.question_text}
          </h1>
        </div>
        <div className="flex-col mt-2">
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => props.selectAnswer(e, props._id, props.category)}
          >
            <FormControlLabel
              value={props.option1}
              control={<Radio />}
              label={props.option1}
            />
            <FormControlLabel
              value={props.option2}
              control={<Radio />}
              label={props.option2}
            />
            <FormControlLabel
              value={props.option3}
              control={<Radio />}
              label={props.option3}
            />
            <FormControlLabel
              value={props.option4}
              control={<Radio />}
              label={props.option4}
            />
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
