import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import InputField from "./InputField";
import "./App.css";

function App() {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      dob: new Date(),
      country: "",
      phoneNumber: "",
      social: {
        X: "",
        facebook: "",
      },
    },
    mode: "onTouched",
  });

  const { register, control, handleSubmit, reset, formState } = form;
  const { errors, isSubmitSuccessful, isSubmitting } = formState;

  const onSubmit = (data) => {
    console.log("submitted", data);
  };

  const onError = (errors) => {
    console.log("Form Errors", errors);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <h1>React HookForm</h1>
        <InputField
          label="Username"
          id="username"
          name="username"
          register={register}
          error={errors.username}
        />

        <InputField
          label="Email Address"
          id="email"
          name="email"
          type="email"
          register={register}
          error={errors.email}
          pattern={
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          }
          patternMessage="Please enter a valid email address"
        />
        <InputField
          label="Date of Birth"
          id="date"
          name="date"
          type="date"
          register={register}
          error={errors.date}
        />

        <InputField
          label="Country"
          id="country"
          name="country"
          register={register}
          error={errors.country}
        />
        <InputField
          label="Phone Number"
          id="phoneNumber"
          name="phoneNumber"
          register={register}
          error={errors.phoneNumber}
          pattern={/^\d{10}$/}
          patternMessage="Enter a valid phone number up to 10 digits"
        />
        <InputField
          label="X (Formely Twitter)"
          id="x"
          name="social.X"
          register={register}
          error={errors.social?.X}
        />

        <InputField
          label="Facebook"
          id="facebook"
          name="social.facebook"
          register={register}
          error={errors.social?.facebook}
        />
        <button disabled={isSubmitting}>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default App;
