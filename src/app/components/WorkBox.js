export function WorkBox({ total }) {
  return (
    <div className="w-64 h-64 bg-swirl-green rounded-lg shadow-lg p-4 text-white">
      <p className="text-2xl">Workin'</p>
      <p className="text-6xl text-center leading-loose">
        {total}
      </p>
    </div>
  );
}
