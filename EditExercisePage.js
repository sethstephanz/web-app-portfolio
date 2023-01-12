import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export const EditExercisePage = ({ exercise }) => {
  const [name, setName] = useState(exercise.name);
  const [reps, setReps] = useState(exercise.reps);
  const [weight, setWeight] = useState(exercise.weight);
  const [unit, setUnit] = useState(exercise.unit);
  const [date, setDate] = useState(exercise.date.slice(0, 10));

  const history = useHistory();

  const editexercise = async () => {
    const response = await fetch(`/exercises/${exercise._id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        reps: reps,
        weight: weight,
        unit: unit,
        date: date,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      alert("Successfully edited document!");
    } else {
      const errMessage = await response.json();
      alert(
        `Something went wrong with your edit! Status ${response.status}. ${errMessage.Error}`
      );
    }
    history.push("/");
  };

  return (
    <>
      <article>
        <h2>Edit your exercise collection</h2>
        <p>Use this panel to edit your exercises.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <legend>Which exercise are you adding?</legend>
            <label for="name">Exercise Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
            />

            <label for="reps">Reps Performed</label>
            <input
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              id="reps"
            />

            <label for="weight">Weight Used</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              id="weight"
            />
            <label for="unit">Unit</label>
            <input
              type="text"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              id="unit"
            />
            <label for="date">Date</label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              id="text"
            />

            <label for="submit">
              <button onClick={editexercise} id="submit">
                Save Edit
              </button>{" "}
            </label>
          </fieldset>
        </form>
      </article>
    </>
  );
};
export default EditExercisePage;
