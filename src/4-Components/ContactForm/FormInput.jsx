import PropTypes from "prop-types";
import { Field, ErrorMessage } from "formik";

const FormInput = ({ type, id, name, required }) => {
  return (
    <>
      <Field
        type={type}
        id={id}
        name={name}
        className="form-input"
        required={required}
      />
      <ErrorMessage name={name} component="div" className="error-message" />
    </>
  );
};

FormInput.propTypes = {
  type: PropTypes.oneOf(["text", "email", "password", "number"]).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

FormInput.defaultProps = {
  required: false,
};

export default FormInput;
