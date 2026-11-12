import { useState } from 'react';
import './App.css';
import MarsGlobe from './MarsGlobe.jsx';
const locations = [
  { name: 'Olympus Mons', type: 'Shield volcano', coordinates: '18.65° N, 226.2° E' },
  { name: 'Jezero Crater', type: 'Ancient lake basin', coordinates: '18.38° N, 77.58° E' },
  { name: 'Valles Marineris', type: 'Canyon system', coordinates: '13.9° S, 59.2° W' },
];

function App() {
  const [selected, setSelected] = useState(locations[1]);
  const [activeLayer, setActiveLayer] = useState('Surface imagery');

  return (
    <main className="mission">
      <header className="topbar">
        <div className="brand">
          <span className="planet">◉</span>
          <div>
            <h1>THE INVISIBLE MARS</h1>
            <p>INTERPLANETARY SURVIVAL INTELLIGENCE</p>
          </div>
        </div>
        <span className="status"><i /> MISSION SYSTEM ONLINE</span>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">HUMANITY'S NEXT FRONTIER</p>
          <h2>Explore the<br /><span>Red Planet.</span></h2>
          <p className="intro">
            Explore Martian terrain, scientific observations and potential
            landing regions through one unified planetary interface.
          </p>
        </div>
        <div className="mars-art" aria-label="Stylized Mars illustration">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="mars-sphere"><span /></div>
          <div className="mars-caption">MARS // SOL 0001</div>
        </div>
      </section>

      <section className="workspace">
        <aside className="panel layers">
          <p className="panel-label">01 / DATA LAYERS</p>
          <h3>Mission overlays</h3>
          {['Surface imagery', 'Elevation & terrain', 'Weather observations',
            'Dust events', 'Rover locations', 'AI terrain predictions'].map((layer, i) => (
            <button
              className={`layer ${activeLayer === layer ? 'selected' : ''}`}
              key={layer}
              onClick={() => setActiveLayer(layer)}
            >
              <span className="layer-icon">{['◉', '⌁', '≋', '〰', '⌖', '✳'][i]}</span>
              <span>{layer}</span>
              <span className="layer-dot">{i === 0 ? '●' : '○'}</span>
            </button>
          ))}
          <p className="note">Interface preview: scientific layers are not connected yet.</p>
        </aside>

        <section className="panel map-panel">
          <div className="map-heading">
            <div>
              <p className="panel-label">02 / PLANETARY EXPLORER</p>
              <h3>{activeLayer}</h3>
            </div>
            <span className="badge">DEMO VIEW</span>
          </div>
          <div className="map-placeholder">
  <MarsGlobe />

  <span className="map-coord coord-a">18.38° N</span>
  <span className="map-coord coord-b">77.58° E</span>

  <div className="map-message">
    <span>PLANETARY VISUALIZATION</span>
    <p>3D Mars mapping engine</p>
  </div>
</div>
          <div className="map-footer">
            <span>REFERENCE BODY: MARS</span>
            <span>SCIENTIFIC DATA: NOT CONNECTED</span>
          </div>
        </section>

        <aside className="panel location-panel">
          <p className="panel-label">03 / SITE INTELLIGENCE</p>
          <h3>Explore a region</h3>
          <label htmlFor="location">Select a location</label>
          <select id="location" value={selected.name}
            onChange={(e) => setSelected(locations.find(x => x.name === e.target.value))}>
            {locations.map(place => <option key={place.name}>{place.name}</option>)}
          </select>
          <div className="location-card">
            <p className="panel-label">SELECTED REGION</p>
            <h4>{selected.name}</h4>
            <p>{selected.type}</p>
            <div className="divider" />
            <span className="small-label">REFERENCE COORDINATES</span>
            <p>{selected.coordinates}</p>
          </div>
          <div className="assessment">
            <span className="assessment-icon">⌁</span>
            <div>
              <strong>Survival assessment</strong>
              <p>Awaiting verified terrain and environmental data.</p>
            </div>
          </div>
          <p className="note">This demo does not determine actual landing safety.</p>
        </aside>
      </section>

      <footer>
        <span>THE INVISIBLE MARS © 2026</span>
        <span>OBSERVED DATA ≠ AI PREDICTION</span>
      </footer>
    </main>
  );
}

export default App;
