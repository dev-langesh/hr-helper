import { useState } from "react";
import React from "react";
import axios from "axios";
import { redirect } from "react-router-dom";

function Post_job() {
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("");
  const [type, setType] = useState("");
  const [skills, setSkills] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");
  const [employee, setEmployee] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const skillsArray = skills
      .toString()
      .split(",")
      .map((skills) => skills.trim());
    const formData = {
      title,
      level,
      type,
      description,
      salary_per_anum: salary,
      experience,
      required_employees: employee,
      skills: skillsArray,
    };
    console.log(formData);

    const res = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/job`,
      formData
    );

    console.log(res.data);

    if (!res.data.error) {
      window.location = "/active-jobs";
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-md p-8 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-4">Basic Form</h2>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="block w-full border border-gray-400 rounded-lg mb-4 px-3 py-2"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="type">
            Level:
          </label>
          <select
            id="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded-md"
          >
            <option value="">Select Level</option>
            <option value="beginnner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="professional">Professional</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="type">
            Type:
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded-md"
          >
            <option value="">Select Type</option>
            <option value="part-time">Part-time</option>
            <option value="full-time">Full-time</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="title">
            Salary Per Anum:
          </label>
          <input
            type="text"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full border border-gray-400 p-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="skills">
            Skills (separated by commas):
          </label>
          <input
            type="text"
            id="skills"
            value={skills}
            onChange={(event) => setSkills(event.target.value)}
            className="w-full border border-gray-400 p-2 rounded-md"
          />
        </div>{" "}
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="skills">
            No of employees:
          </label>
          <input
            type="text"
            id="required_employees"
            value={employee}
            onChange={(event) => setEmployee(event.target.value)}
            className="w-full border border-gray-400 p-2 rounded-md"
          />
        </div>{" "}
        <div className="mb-4">
          <label className="block font-bold mb-2" htmlFor="skills">
            Experience:
          </label>
          <input
            type="number"
            id="required_employees"
            value={experience}
            onChange={(event) => setExperience(event.target.value)}
            className="w-full border border-gray-400 p-2 rounded-md"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Post_job;
