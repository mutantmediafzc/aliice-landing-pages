"use client";

import { useRef, useState } from "react";

export default function FormSection() {
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
    <section className="cs_bg_filed" id="contact">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div
              id="form-a"
              className="cs_appointment_wrap cs_type_2 wow fadeInLeft"
            >
              <h3 className="cs_appointment_title_up cs_accent_color_v4 cs_medium cs_fs_24">
                Liste de prix et réservation de consultation
              </h3>
              <h2 className="cs_appointment_title cs_bold cs_fs_45 mb-0">
                Pour planifier une CONSULTATION GRATUITE <br />
                ou recevoir notre LIST DE PRIX détaillée par email, remplissez
                le formulaire.
              </h2>
              <form id="cs_form" ref={formRef} onSubmit={handleSubmit}>
                <div className="form-flex-row">
                  <div className="form-input flex-col position-relative">
                    <label htmlFor="fname">Prénom*</label>
                    <input
                      style={{
                        borderColor: errors.fname ? "red" : "#e1e1e1",
                      }}
                      type="text"
                      name="fname"
                      className="form-input"
                    />
                    {errors.fname && <p id="email-error">{errors.fname}</p>}
                  </div>
                  <div className="form-input flex-col position-relative">
                    <label htmlFor="lname">Nom*</label>
                    <input
                      style={{
                        borderColor: errors.lname ? "red" : "#e1e1e1",
                      }}
                      type="text"
                      name="lname"
                      className="form-input"
                    />
                    {errors.lname && <p id="email-error">{errors.lname}</p>}
                  </div>
                </div>
                <div className="form-flex-row">
                  <div className="form-input flex-col position-relative">
                    <label htmlFor="email">E-mail*</label>
                    <input
                      style={{
                        borderColor: errors.email ? "red" : "#e1e1e1",
                      }}
                      id="email"
                      type="text"
                      name="email"
                      className="form-input"
                    />
                    {errors.email && <p id="email-error">{errors.email}</p>}
                  </div>
                  <div className="form-input flex-col position-relative">
                    <label htmlFor="phone">Numéro de téléphone*</label>
                    <div style={{ display: "flex" }}>
                      <select id="country-selector">
                        <option value="" defaultValue="+971" />
                      </select>
                      <input
                        style={{
                          borderColor: errors.phone ? "red" : "#e1e1e1",
                        }}
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                      />
                      {errors.phone && <p id="email-error">{errors.phone}</p>}
                    </div>
                  </div>
                </div>
                <div className="form-flex-row">
                  <div className="form-input flex-col position-relative">
                    <label>Mon lieu préféré est:*</label>
                    <select
                      style={{
                        borderColor: errors.serviceSelector ? "red" : "#e1e1e1",
                      }}
                      id="service-selector"
                      name="service-selector"
                    >
                      <option value="" disabled="" defaultValue="">
                      Veuillez sélectionner
                      </option>
                    </select>
                    {errors.serviceSelector && (
                      <p id="email-error">{errors.serviceSelector}</p>
                    )}
                  </div>
                  <div className="form-input flex-col position-relative">
                    <label>Je suis intéressé par le service suivant:*</label>
                    <select
                      style={{
                        borderColor: errors.locationSelector
                          ? "red"
                          : "#e1e1e1",
                      }}
                      id="location-selector"
                      name="location-selector"
                    >
                      <option value="" disabled="" defaultValue="">
                      Veuillez sélectionner
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
                </div>
                <div className="position-relative">
                  <label htmlFor="message">
                    Avez-vous des questions ? N'hésitez pas à les poser ici !
                  </label>
                  <textarea id="message" name="message" />
                </div>
                <div>
                  <p>
                    Aesthetics Clinic Geneva a besoin des coordonnées que vous
                    nous fournissez pour vous <br />
                    contacter au sujet de nos produits et services. En cliquant
                    sur « Soumettre », vous
                  </p>
                  <p>
                    acceptez les conditions énumérées dans notre
                    <span>
                      <a href="#"> politique de confidentialité.</a>
                    </span>
                  </p>
                </div>
                <div className="text-left">
                  <button
                    type="submit"
                    id="submit-btn"
                    disabled={isLoading}
                    className="cs_btn cs_style_1 cs_radius_2 cs_size_md cs_accent_bg_v4 cs_white_color cs_fs_18 cs_semibold"
                  >
                    {isLoading ? "SOUMISSION..." : "SOUMETTRE"}
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
