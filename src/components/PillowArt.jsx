export default function PillowArt({ color = "#e8b9b5", className = "" }) {
  return (
    <div className={`pillow-art ${className}`} aria-hidden="true">
      <div className="pillow-art__shadow" />
      <div className="pillow-art__body" style={{ "--pillow-color": color }}>
        <span className="pillow-art__seam" />
        <span className="pillow-art__shine" />
      </div>
    </div>
  );
}
