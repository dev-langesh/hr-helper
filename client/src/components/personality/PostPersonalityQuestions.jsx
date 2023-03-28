import axios from "axios";
// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import Button from "../../../common/buttons/Button";
import AddIcon from "@mui/icons-material/Add";
import {
  Alert,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Snackbar,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
// import { errorType } from "../../../Auth/types";

const initialState = {
  questions: [
    {
      id: 1,
      question_text: "",
    },
  ],
};

let id = 2;

export default function PostPersonalityQuestions() {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState({
    open: false,
    msg: "",
  });

  // const router = useRouter();

  // useEffect(() => {
  //   if (router.query.id) {
  //     setData((p) => ({
  //       ...p,
  //       course_id: router.query.id,
  //     }));
  //   }
  // }, [router.query]);

  function changeHandler(e) {
    setData((p) => {
      return {
        ...p,
        title: e.target.value,
      };
    });
  }

  function addQuestion() {
    setData((p) => {
      return {
        ...p,
        questions: [
          ...p.questions,
          {
            id: id++,
            question_text: "",
            answer: "",
          },
        ],
      };
    });
  }

  function removeQuestion(id) {
    const questions = data.questions.filter((question) => {
      return question.id !== id;
    });

    setData((p) => {
      return {
        ...p,
        questions,
      };
    });
  }

  const closeError = () => {
    setError((prev) => ({ ...prev, open: false }));

    setTimeout(() => {
      setError({ open: false, msg: "" });
    }, 400);
  };

  function updateQuestion(e, i) {
    const copy = JSON.parse(JSON.stringify(data));

    copy.questions[i].question_text = e.target.value;

    setData(copy);
  }

  function updateAnswer(e, i) {
    const copy = JSON.parse(JSON.stringify(data));

    copy.questions[i].answer = e.target.value;

    setData(copy);
  }

  async function submitHandler(e) {
    e.preventDefault();

    console.log(data);

    if (!data.questions[0].question_text) {
      setError(() => {
        return {
          open: true,
          msg: "Fill all the fields",
        };
      });
    } else {
      console.log(data);
      const req = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/personality`,
        data
      );

      console.log(req.data);

      setData(initialState);

      // history.back();
    }
  }

  return (
    <div className="w-full flex items-center justify-center">
      <form
        className="shadow-2xl p-8 space-y-3 flex items-center flex-col justify-center w-11/12 mt-10 "
        onSubmit={submitHandler}
      >
        <h1 className="text-center text-2xl font-bold pb-4 font-slab text-indigo-600">
          Personality Questions
        </h1>

        <div className="space-y-2">
          {data.questions.map((question, i) => {
            return (
              <div key={question.id} className="py-5">
                <div className="flex">
                  <input
                    onChange={(e) => updateQuestion(e, i)}
                    type="text"
                    className="border p-2 outline-none flex-1"
                    placeholder={`Question ${i + 1}`}
                    value={data.questions[i].question_text}
                  />
                  {i === data.questions.length - 1 && (
                    <>
                      <IconButton onClick={addQuestion}>
                        <AddIcon />
                      </IconButton>
                      {i !== 0 && (
                        <IconButton onClick={() => removeQuestion(question.id)}>
                          <RemoveIcon />
                        </IconButton>
                      )}
                    </>
                  )}
                </div>

                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(e) => updateAnswer(e, i)}
                >
                  <FormControlLabel
                    value="strongly_agree"
                    control={<Radio />}
                    label="Strongly Agree"
                  />
                  <FormControlLabel
                    value="somewhat_agree"
                    control={<Radio />}
                    label="Somewhat agree"
                  />
                  <FormControlLabel
                    value="neutral"
                    control={<Radio />}
                    label="neutral"
                  />
                  <FormControlLabel
                    value="somewhat_disagree"
                    control={<Radio />}
                    label="Somewhat Disagree"
                  />{" "}
                  <FormControlLabel
                    value="strongly_disagree"
                    control={<Radio />}
                    label="Strongly Disagree"
                  />
                </RadioGroup>
              </div>
            );
          })}
        </div>
        <button
          type="submit"
          className="bg-indigo-500 w-32 py-1 text-white hover:bg-white border border-indigo-500 hover:text-indigo-500"
        >
          submit
        </button>

        <Snackbar
          open={error.open}
          autoHideDuration={6000}
          onClose={closeError}
        >
          <Alert onClose={closeError} severity="error">
            {error.msg}
          </Alert>
        </Snackbar>
      </form>
    </div>
  );
}
