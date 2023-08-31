import PropTypes from "prop-types";

const InputField = ({
  label,
  type,
  id,
  name,
  register,
  error,
  pattern,
  patternMessage,
}) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <div className={`${error ? "error-input" : ""}`}>
      <input
        type={type || "text"}
        id={id}
        {...register(name, {
          required: `${id} is required`,
          pattern: {
            value: pattern,
            message: patternMessage || "Invalid input format",
          },
        })}
      />
    </div>
    <p className="error">{error?.message}</p>
  </div>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  register: PropTypes.func.isRequired,
  error: PropTypes.object,
  pattern: PropTypes.instanceOf(RegExp),
  patternMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default InputField;
