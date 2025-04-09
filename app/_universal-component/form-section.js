"use client";

import { useRef, useState } from "react";

export default function FormSection({
  title,
  subTitle,
  firstNameLabel,
  lastNameLabel,
  emailLabel,
  phoneLabel,
  serviceLabel,
  locationLabel,
  selectText,
  haveAlreadyPatientCheckbox,
  questionLabel,
  acceptTermsTextOne,
  acceptTermsTextTwo,
  btnText,
  btnSubmittingText,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);

    const validationErrors = {};

    const fname = formData.get("fname");
    if (!fname || fname.trim() === "") {
      validationErrors.fname = "First name is required!";
    }

    const lname = formData.get("lname");
    if (!lname || lname.trim() === "") {
      validationErrors.lname = "Last name is required!";
    }

    const email = formData.get("email");
    if (
      !email ||
      email.trim() === "" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      validationErrors.email = "Please enter a valid email address";
    }

    const phone = formData.get("phone");
    const phoneDigitsOnly = phone ? phone.replace(/\D/g, "") : "";
    if (
      !phoneDigitsOnly ||
      phoneDigitsOnly.length < 7 ||
      phoneDigitsOnly.length > 15
    ) {
      validationErrors.phone = "Please enter a valid phone number";
    }

    const serviceSelector = formData.get("service-selector");
    if (
      !serviceSelector ||
      serviceSelector === "" ||
      serviceSelector === "-1"
    ) {
      validationErrors.serviceSelector =
        "Please select a service from the dropdown";
    }

    const locationSelector = formData.get("location-selector");
    if (
      !locationSelector ||
      locationSelector === "" ||
      locationSelector === "-1"
    ) {
      validationErrors.locationSelector =
        "Please select a location from the dropdown";
    }

    const message = formData.get("message");

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }

    setErrors({});
    const payload = {
      first_name: fname,
      last_name: lname,
      email: email,
      mobile: phoneDigitsOnly,
      service_id: parseInt(serviceSelector),
      clinic_preference: locationSelector,
      description: message,
    };

    try {
      const response = await fetch("https://aliice.space/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success === false && data.errors && data.errors.email) {
        validationErrors.email = data.errors.email[0];
        setErrors(validationErrors);
        setIsLoading(false);
        return;
      }

      console.log("Success", data);
      setErrors({});
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your data has been submitted successfully",
        confirmButtonText: "Great!",
      });

      formRef.current.reset();
    } catch (error) {
      console.log("Error", error);

      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section
      className="cs_bg_filed
    max-custom-sm:!px-3.5
    max-custom-md:!px-[12px]"
      id="contact"
    >
      <div className="cs_height_120 cs_height_lg_80" />
      <div
        className="container
      max-custom-md:!max-w-none"
      >
        <div className="row">
          <div className="col-lg-10">
            <div
              id="form-a"
              className="cs_appointment_wrap cs_type_2 wow fadeInLeft"
            >
              <h3
                className="cs_appointment_title_up cs_accent_color_v4 cs_medium cs_fs_24
              max-custom-lg:!text-[44px]"
              >
                {title}
              </h3>
              <h2
                className="cs_appointment_title cs_bold cs_fs_45 mb-0
              max-custom-lg:!text-[20px]"
              >
                {subTitle}
              </h2>
              <form id="cs_form" ref={formRef} onSubmit={handleSubmit}>
                <div
                  className="form-flex-row
                max-custom-md:!flex-col"
                >
                  <div
                    className="form-input flex-col position-relative
                  max-custom-md:!max-w-none"
                  >
                    <label htmlFor="fname">{firstNameLabel}</label>
                    <input
                      style={{
                        borderColor: errors.fname ? "red" : "#e1e1e1",
                      }}
                      type="text"
                      name="fname"
                      className="form-input
                      max-custom-md:!max-w-none"
                    />
                    {errors.fname && <p id="email-error">{errors.fname}</p>}
                  </div>
                  <div
                    className="form-input flex-col position-relative
                  max-custom-md:!max-w-none"
                  >
                    <label htmlFor="lname">{lastNameLabel}</label>
                    <input
                      style={{
                        borderColor: errors.lname ? "red" : "#e1e1e1",
                      }}
                      type="text"
                      name="lname"
                      className="form-input
                      max-custom-md:!max-w-none"
                    />
                    {errors.lname && <p id="email-error">{errors.lname}</p>}
                  </div>
                </div>
                <div
                  className="form-flex-row
                max-custom-md:!flex-col"
                >
                  <div
                    className="form-input flex-col position-relative
                  max-custom-md:!max-w-none"
                  >
                    <label htmlFor="email">{emailLabel}</label>
                    <input
                      style={{
                        borderColor: errors.email ? "red" : "#e1e1e1",
                      }}
                      id="email"
                      type="text"
                      name="email"
                      className="form-input
                      max-custom-md:!max-w-none"
                    />
                    {errors.email && <p id="email-error">{errors.email}</p>}
                  </div>
                  <div
                    className="form-input flex-col position-relative
                  max-custom-md:!max-w-none"
                  >
                    <label htmlFor="phone">{phoneLabel}</label>
                    <div style={{ display: "flex" }}>
                      <select
                        style={{ maxWidth: "150px" }}
                        id="country-selector"
                      >
                        <option value="" defaultValue="+971" />
                      </select>
                      <input
                        style={{
                          borderColor: errors.phone ? "red" : "#e1e1e1",
                        }}
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input
                        max-custom-md:!max-w-none"
                      />
                      {errors.phone && <p id="email-error">{errors.phone}</p>}
                    </div>
                  </div>
                </div>
                <div
                  className="form-flex-row
                max-custom-md:!flex-col"
                >
                  <div
                    className="form-input flex-col position-relative
                  max-custom-md:!max-w-none"
                  >
                    <label>{serviceLabel}</label>
                    <select
                      style={{
                        borderColor: errors.serviceSelector ? "red" : "#e1e1e1",
                      }}
                      id="service-selector"
                      name="service-selector"
                      className="max-custom-md:!max-w-none"
                    >
                      <option value="" disabled="" defaultValue="">
                        {selectText}
                      </option>
                    </select>
                    {errors.serviceSelector && (
                      <p id="email-error">{errors.serviceSelector}</p>
                    )}
                  </div>
                  <div
                    className="form-input flex-col position-relative
                  max-custom-md:!max-w-none"
                  >
                    <label>{locationLabel}</label>
                    <select
                      style={{
                        borderColor: errors.locationSelector
                          ? "red"
                          : "#e1e1e1",
                      }}
                      id="location-selector"
                      name="location-selector"
                      className="max-custom-md:!max-w-none"
                    >
                      <option value="" disabled="" defaultValue="">
                        {selectText}
                      </option>
                      <option value="geneva">Geneva</option>
                      <option value="gstaad">Gstaad</option>
                      <option value="montreux">Montreux</option>
                    </select>
                    {errors.locationSelector && (
                      <p id="email-error">{errors.locationSelector}</p>
                    )}
                  </div>
                </div>

                <div>
                  {haveAlreadyPatientCheckbox && (
                    <>
                      {" "}
                      <hr className="line" />
                      <div>
                        <input
                          type="checkbox"
                          id="patient-checkbox"
                          name="patient-checkbox"
                        />
                        <label htmlFor="patient-checkbox">
                          Already a patient?
                        </label>
                      </div>
                    </>
                  )}
                </div>

                <div className="position-relative">
                  <label htmlFor="message">{questionLabel}</label>
                  <textarea id="message" name="message" />
                </div>
                <div>
                  <p>{acceptTermsTextOne}</p>
                  <p>{acceptTermsTextTwo}</p>
                </div>
                <div className="text-left">
                  <button
                    type="submit"
                    id="submit-btn"
                    disabled={isLoading}
                    className="cs_btn cs_style_1 cs_radius_2 cs_size_md cs_accent_bg_v4 cs_white_color cs_fs_18 cs_semibold uppercase
                    max-custom-sm:!w-full"
                  >
                    {isLoading ? btnSubmittingText : btnText}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
