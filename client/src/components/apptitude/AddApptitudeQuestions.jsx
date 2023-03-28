import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import axios from "axios";

const initialState = {
  category: "",
  questions: [
    {
      id: 1,
      question_text: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: "",
    },
  ],
};

let id = 2;

export default function AddApptitudeQuestions() {
  const [data, setData] = useState(initialState);

  function addQuestion() {
    setData((p) => {
      return {
        ...p,
        questions: [
          ...p.questions,
          {
            id: id++,
            question_text: "",
            option1: "",
            option2: "",
            option3: "",
            option4: "",
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

  function updateQuestion(e, i) {
    const copy = JSON.parse(JSON.stringify(data));

    copy.questions[i].question_text = e.target.value;

    setData(copy);
  }

  function updateAnswer(e, i) {
    const copy = JSON.parse(JSON.stringify(data));

    copy.questions[i][e.target.name] = e.target.value;

    setData(copy);
  }

  function handleCategoryChange(e) {
    setData((prev) => {
      return {
        ...prev,
        category: e.target.value,
      };
    });
  }

  async function submitHandler(e) {
    e.preventDefault();

    const req = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/apptitude`,
      data
    );

    console.log(req.data);

    alert("Questions added");

    setData(initialState);
  }

  return (
    <div className="p-4 flex items-center justify-center flex-col w-screen">
      <h1 className="text-xl font-bold text-center text-gray-700">
        Add Apptitude Questions
      </h1>

      <form
        onSubmit={submitHandler}
        className="bg-white shadow-xl p-6 flex items-center flex-col"
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data.category}
            label="Age"
            onChange={handleCategoryChange}
          >
            <MenuItem value="logical">Logical</MenuItem>
            <MenuItem value="quants">Quants</MenuItem>
            <MenuItem value="verbal">Verbal</MenuItem>
          </Select>
        </FormControl>

        {data.questions.map((question, i) => {
          return (
            <div key={question.id} className="py-5 space-y-3 space-x-3">
              <h1 className="text-blue-500">{`Question ${i + 1}`}</h1>
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
                    <IconButton sx={{ color: "blue" }} onClick={addQuestion}>
                      <AddIcon />
                    </IconButton>
                    {i !== 0 && (
                      <IconButton
                        sx={{ color: "red" }}
                        onClick={() => removeQuestion(question.id)}
                      >
                        <RemoveIcon />
                      </IconButton>
                    )}
                  </>
                )}
              </div>

              <h1 className="text-sm text-blue-400">Options</h1>

              <input
                placeholder="Option1"
                name="option1"
                value={data.questions[i].option1}
                onChange={(e) => updateAnswer(e, i)}
                className="border p-1 px-2 outline-none text-sm "
                type="text"
              />
              <input
                placeholder="Option2"
                name="option2"
                value={data.questions[i].option2}
                onChange={(e) => updateAnswer(e, i)}
                className="border p-1 px-2 outline-none text-sm"
                type="text"
              />
              <input
                placeholder="Option3"
                name="option3"
                value={data.questions[i].option3}
                onChange={(e) => updateAnswer(e, i)}
                className="border p-1 px-2 outline-none text-sm"
                type="text"
              />
              <input
                placeholder="Option4"
                name="option4"
                value={data.questions[i].option4}
                onChange={(e) => updateAnswer(e, i)}
                className="border p-1 px-2 outline-none text-sm"
                type="text"
              />

              <p className="text-sm text-blue-400">Answer</p>
              <input
                placeholder="answer"
                name="answer"
                value={data.questions[i].answer}
                onChange={(e) => updateAnswer(e, i)}
                className="border  p-1 px-2 outline-none text-sm"
                type="text"
              />

              <br />
              <br />
            </div>
          );
        })}

        <button
          className="bg-blue-500 px-4 py-2 text-white w-40 hover:bg-blue-700"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
