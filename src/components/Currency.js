const Currency = ({ rates, rate, value, setValue, setRate }) => {
  return (
    <div className="Currency">
      <input
        type="text"
        value={value}
        onFocus={(event) => {
          event.target.value = "";
        }}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <select
        value={rate}
        onChange={(event) => {
          setRate(event.target.value);
        }}
      >
        {Object.entries(rates).map(([key, value], i) => {
          return (
            <option value={value} key={i}>
              {key}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Currency;
