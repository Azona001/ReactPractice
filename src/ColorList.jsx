import Color from "./Color.jsx";

const ColorList = ({
  colors = [],
  onRemoveColor = (f) => f,
  OnRateColor = (f) => f,
}) => {
  if (!colors.length) return <div>No colors Listed. (Add a color)</div>;
  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRemove={onRemoveColor}
          onRate={OnRateColor}
        />
      ))}
    </div>
  );
};

export default ColorList;
