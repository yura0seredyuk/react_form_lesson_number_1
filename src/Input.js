export const Input = (props) => {
  const { onChange, value, label, error } = props;

  return (
    <label>
      {label}
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type="text"
      />
      {error && <span>{error}</span>}
    </label>
  );
};
