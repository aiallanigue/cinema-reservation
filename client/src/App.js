
import React from "react";
import "./App.css";
import { seatingConfig } from "./seatingConfig";

const categories = {
  vipCenter: { color: "#8B4513", label: "VIP Center", price: 900 },
  vipInner: { color: "#FFD700", label: "VIP Inner", price: 800 },
  vipOuter: { color: "#FFA500", label: "VIP Outer", price: 700 },
  vipUngrouped: { color: "#FF6347", label: "VIP Special", price: 750 },
  bundle5: { color: "#ADD8E6", label: "Bundle 5", price: 3000 },
  bundle4: { color: "#90EE90", label: "Bundle 4", price: 2500 },
  bundle2: { color: "#F08080", label: "Bundle 2", price: 2000 },
  regular: { color: "#6B7280", label: "Regular", price: 700 },
  cancelledOverlay: { color: "#B91C1C", label: "Cancelled" }
};

const seatCycle = ["available", "reserved", "sold", "cancelled"];

function Seat({ id, category }) {
  const [status, setStatus] = React.useState("available");

  const handleClick = () => {
    const next = seatCycle[(seatCycle.indexOf(status) + 1) % seatCycle.length];
    setStatus(next);
  };

  const baseColor = categories[category] ? categories[category].color : "#999";
  let bg = baseColor;
  let cls = "seat";
  if (status === "reserved") { bg = "#06b6d4"; cls += " reserved"; } // cyan
  if (status === "sold") { bg = "#111827"; cls += " sold"; } // dark
  if (status === "cancelled") { bg = "#ef4444"; cls += " cancelled"; } // red
  if (status === "available") { cls += " available"; }

  return (
    <div
      className={cls}
      onClick={handleClick}
      title={`${id} • ${categories[category] ? categories[category].label : category} • ${status}`}
      style={{ backgroundColor: bg }}
    >
      <span className="seat-label">{id}</span>
    </div>
  );
}

function Row({ row, seats, category }) {
  return (
    <div className="row" data-row={row}>
      <div className="row-label">{row}</div>
      <div className="row-seats">
        {Array.from({ length: seats }, (_, i) => (
          <Seat key={`${row}${i + 1}`} id={`${row}${i + 1}`} category={category} />
        ))}
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div className="legend">
      <h4>Legend</h4>
      <div className="legend-grid">
        {Object.keys(categories).filter(k=>k!=='cancelledOverlay').map(key => (
          <div key={key} className="legend-item">
            <div className="legend-swatch" style={{ background: categories[key].color }} />
            <div>
              <div className="legend-name">{categories[key].label}</div>
              <div className="legend-price">₱{categories[key].price}</div>
            </div>
          </div>
        ))}
        <div className="legend-item">
          <div className="legend-swatch reserved" />
          <div><div className="legend-name">Reserved</div></div>
        </div>
        <div className="legend-item">
          <div className="legend-swatch sold" />
          <div><div className="legend-name">Sold</div></div>
        </div>
        <div className="legend-item">
          <div className="legend-swatch cancelled" />
          <div><div className="legend-name">Cancelled</div></div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="cinema-app">
      <header className="topbar">
        <h1>🎬 Cinema Seating Reservation</h1>
        <div className="top-actions">
          <button className="btn">Reset</button>
        </div>
      </header>

      <main className="main">
        <aside className="sidebar">
          <Legend />
        </aside>

        <section className="seating">
          <div className="seating-inner">
            {seatingConfig.map(r => (
              <Row key={r.row} row={r.row} seats={r.seats} category={r.category} seattype={r.seattype}/>
            ))}
            <div className="screen">SCREEN</div>
          </div>
        </section>
      </main>

      <footer className="footer">Click a seat to cycle: Available → Reserved → Sold → Cancelled (re-sellable)</footer>
    </div>
  );
}
