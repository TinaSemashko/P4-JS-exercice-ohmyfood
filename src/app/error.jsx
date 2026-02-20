"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h1>Oups, une erreur est survenue</h1>
      <button onClick={() => reset()}>Réessayer</button>
    </div>
  );
}