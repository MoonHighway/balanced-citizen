export function ThriveBox({ total }) {
  return (
    <div className="w-64 h-64 bg-swirl-red rounded-lg shadow-lg p-4 text-white">
      <p className="text-2xl">Thrivin'</p>
      <p className="text-6xl text-center leading-loose">
        {total}
      </p>
    </div>
  );
}
