import './style/SVG.css'

const GenericSVG = ({ src, color }) => (
    <div className="SVG-Container">
      <img src={src} alt="SVG Background" className="SVG-Image" style={{ filter: `hue-rotate(${color}deg)` }} />
    </div>
  );

export default GenericSVG;