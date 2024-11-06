import PropTypes from "prop-types";
import { Field, ErrorMessage } from "formik";

const FormSelect = ({ id, name, options, required }) => {
  return (
    <>
      <Field
        as="select"
        className="form-select"
        id={id}
        name={name}
        required={required}
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component="div" className="error-message" />
    </>
  );
};

FormSelect.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  required: PropTypes.bool,
};

FormSelect.defaultProps = {
  required: false,
};

export default FormSelect;
