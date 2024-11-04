import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
const ContactForm = ({ formTitle, children }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Full name is required")
      .min(2, "Full name must be at least 2 characters long")
      .matches(
        /^[A-Za-z\s]+$/,
        "Full name can only contain letters and spaces"
      ), // Tillåter endast bokstäver och mellanslag

    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
        "Invalid email format"
      ), // Specifik regular expression för e-postformat

    selection: Yup.string()
      .required("Please select an option")
      .oneOf(["Bankist", "Customer Service", "Sales"], "Invalid selection"), // Kontrollera att valet är ett av de angivna alternativen
  });

  const initialValues = {
    fullName: "",
    email: "",
    specialist: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    const requestBody = {
      fullName: values.fullName,
      email: values.email,
      specialist: values.specialist,
    };

    try {
      const response = await fetch(
        "https://win24-assignment.azurewebsites.net/api/forms/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      // const response = new Response(null, {
      //   status: 400,
      //   statusText: "Bad Request",
      // });
      console.log("Response status:", response.status);

      if (response.ok) {
        console.log("Success: Form submitted successfully");
        resetForm(); // Reset the form after successful submission
        setErrorMessage(""); // Clear any previous error messages
      } else {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(
        "An error occurred while submitting the form. Please try again."
      ); // Update error message state
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="consultation-form" noValidate>
        <h2 className="form-title">{formTitle}</h2>
        {children}
        <button type="submit" className="submit-button">
          {formTitle}
        </button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}{" "}
        {/* Display the error message */}
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired, // Changed to node to accept all types of children
};

export default ContactForm;
