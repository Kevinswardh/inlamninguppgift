import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SubscribeForm = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email address is required")
      .matches(
        /^[a-öA-Ö0-9._%+-]+@[a-öA-Ö0-9.-]+\.[a-zA-Z]{2,}$/,
        "Email address must be in a valid format"
      ),
  });

  const handleSubmit = async (
    values,
    { resetForm, setSubmitting, setErrors }
  ) => {
    try {
      const response = await fetch(
        "https://win24-assignment.azurewebsites.net/api/forms/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const responseText = await response.text();
      console.log("Response status:", response.status);
      console.log("Response status text:", response.statusText);
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Response error text:", errorText);
        throw new Error("Something went wrong!");
      }

      const data = responseText ? JSON.parse(responseText) : {};

      console.log("Email subscription:", values.email);
      console.log("Response data:", data);
      resetForm();
    } catch (error) {
      console.error("Error during subscription:", error);
      setErrors({
        email: "Subscription failed. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="email-wrapper" noValidate>
          <div className="input-wrapper">
            <Field
              type="email"
              name="email"
              placeholder="Your email"
              className="input-with-icon"
            />

            <svg
              className="email-icon"
              width="18"
              height="18"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.861 3.66548H3.13907C2.72657 3.66548 2.3771 3.80871 2.09064 4.09517C1.80418 4.38162 1.66095 4.72537 1.66095 5.12642V13.9264C1.66095 14.3275 1.80418 14.6741 2.09064 14.9663C2.3771 15.2584 2.72657 15.4045 3.13907 15.4045H14.861C15.2734 15.4045 15.6229 15.2584 15.9094 14.9663C16.1958 14.6741 16.3391 14.3275 16.3391 13.9264V5.12642C16.3391 4.72537 16.1958 4.38162 15.9094 4.09517C15.6229 3.80871 15.2734 3.66548 14.861 3.66548ZM14.861 5.12642V5.50454L9.00001 10.0764L3.13907 5.50454V5.12642H14.861ZM3.13907 13.9264V7.36079L8.55314 11.5717C8.61043 11.6176 8.67918 11.6548 8.75939 11.6834C8.8396 11.7121 8.9198 11.7264 9.00001 11.7264C9.08022 11.7264 9.16043 11.7121 9.24064 11.6834C9.32085 11.6548 9.3896 11.6176 9.44689 11.5717L14.861 7.36079V13.9264H3.13907Z"
                fill="#9397AD"
              />
            </svg>
            {/* Visa felmeddelande om fältet har berörts och ett fel finns */}
            {touched.email && errors.email && (
              <div className="error">{errors.email}</div>
            )}
          </div>
          <button className="sub-btn" type="submit" disabled={isSubmitting}>
            <p>Subscribe</p>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SubscribeForm;
