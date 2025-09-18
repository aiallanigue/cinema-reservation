// Seat.js
export default function Seat({ id, category, status, onClick }) {
  const colors = {
    regular: "bg-gray-300",
    bundle2: "bg-orange-200",
    bundle4: "bg-rose-200",
    bundle5: "bg-sky-200",
    vipInner: "bg-yellow-200",
    vipOuter: "bg-amber-300",
    vipCenter: "bg-green-300",
    vipUngrouped: "bg-red-400",
  };

  return (
    <button
      className={`w-8 h-8 m-1 rounded ${colors[category]} ${
        status === "sold" ? "opacity-60" :
        status === "reserved" ? "ring-2 ring-blue-400" :
        status === "cancelled" ? "bg-white border" : ""
      }`}
      onClick={onClick}
    >
      {id}
    </button>
  );
}
