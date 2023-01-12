import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("");
  const [date, setDate] = useState("");

  const history = useHistory();

  const addExercise = async () => {
    const newExercise = { name, reps, weight, unit, date };
    const response = await fetch("/exercises", {
      method: "post",
      body: JSON.stringify(newExercise),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      alert("Successfully added the exercise!");
    } else {
      alert(`Failed to add exercise, status code = ${response.status}`);
    }
    history.push("/");
  };

  return (
    <>
      <article>
        <h2>Add to the collection</h2>
        <p>Use this panel to add exercises to your collection.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <legend>Which exercise did you do?</legend>
            <label for="name">Exercise:</label>
            <input
              type="text"
              placeholder="Name of exercise"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
            />

            <label for="reps">Reps Performed:</label>
            <input
              type="number"
              value={reps}
              placeholder="Reps performed"
              onChange={(e) => setReps(e.target.value)}
              id="reps"
            />

            <label for="weight">Weight Used:</label>
            <input
              type="text"
              placeholder="Weight lifted"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              id="weight"
            />
            <label for="unit">Unit of Weight:</label>
            <input
              type="text"
              placeholder="lbs, kg, etc."
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              id="unit"
            />
            <label for="date">Date:</label>
            <input
              type="date"
              placeholder="Date lift was performed"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              id="date"
            />

            <label for="submit">
              <button type="submit" onClick={addExercise} id="submit">
                Add
              </button>{" "}
            </label>
          </fieldset>
        </form>
      </article>
    </>
  );
};

export default AddExercisePage;
