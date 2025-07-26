import React from "react";
import { useParams } from "react-router-dom";
import trainers from "./TrainersMock";

function TrainerDetails() {
  const { id } = useParams();
  const trainer = trainers.find((t) => t.trainerId === id);

  return (
    <div>
      {trainer ? (
        <>
          <h2>{trainer.name}</h2>
          <p>Email: {trainer.email}</p>
          <p>Phone: {trainer.phone}</p>
          <p>Technology: {trainer.technology}</p>
          <p>Skills: {trainer.skills.join(", ")}</p>
        </>
      ) : (
        <p>Trainer not found</p>
      )}
    </div>
  );
}

export default TrainerDetails;
