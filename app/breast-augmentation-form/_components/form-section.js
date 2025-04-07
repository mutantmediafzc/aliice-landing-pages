"use client";

import { useRef, useState } from "react";

export default function FormSection() {
  const [formData, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "+971",
    service_id: "",
    clinic_preference: "",
    description: "",
  });
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const sanitizedMobile = formData.mobile.replace(/\D/g, "");
    const serviceToInt = parseInt(formData.service_id);

    const payload = { ...formData, mobile: sanitizedMobile, service_id: serviceToInt };

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
        setEmailErrorMessage(data.errors.email[0]);
        return;
      }

      console.log("Success", data);
      formRef.current.reset();
      setEmailErrorMessage("");
      setData({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        service_id: "",
        clinic_preference: "",
        description: "",
      });

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your data has been submitted successfully",
        confirmButtonText: "Great!",
      });
    } catch (error) {
      console.log("Error: ", error);
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
                Price list and consultation booking
              </h3>
              <h2 className="cs_appointment_title cs_bold cs_fs_45 mb-0">
                To schedule a FREE CONSULTATION or receive our detailed PRICE
                LIST by email, <br /> complete the form.
              </h2>
              <form id="cs_form" ref={formRef} onSubmit={handleSubmit}>
                <div className="form-flex-row">
                  <div className="form-input flex-col position-relative">
                    <label htmlFor="fname">First Name*</label>
                    <input
                      type="text"
                      name="fname"
                      className="form-input"
                      value={formData.first_name}
                      onChange={(e) =>
                        setData({ ...formData, first_name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-input flex-col position-relative">
                    <label htmlFor="lname">Last Name*</label>
                    <input
                      type="text"
                      name="lname"
                      className="form-input"
                      value={formData.last_name}
                      onChange={(e) =>
                        setData({ ...formData, last_name: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="form-flex-row">
                  <div className="form-input flex-col position-relative">
                    <label htmlFor="email">Email*</label>
                    <input
                    style={{
                      borderColor: emailErrorMessage !== "" ? "red" : "#e1e1e1"
                    }}
                      id="email"
                      type="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) =>
                        setData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                    <p id="email-error">{emailErrorMessage}</p>
                  </div>
                  <div className="form-input flex-col position-relative">
                    <label htmlFor="phone">Phone number*</label>
                    <div style={{ display: "flex" }}>
                      <select id="country-selector" required>
                        <option value="" defaultValue="" />
                      </select>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                        value={formData.mobile}
                        onChange={(e) =>
                          setData({ ...formData, mobile: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-flex-row">
                  <div className="form-input flex-col position-relative">
                    <label>I'm interested in the following service:*</label>
                    <select
                      id="service-selector"
                      name="service-selector"
                      value={formData.service_id}
                      onChange={(e) =>
                        setData({ ...formData, service_id: e.target.value })
                      }
                      required
                    >
                      <option value="" disabled="" defaultValue="">
                        Please Select
                      </option>
                    </select>
                  </div>
                  <div className="form-input flex-col position-relative">
                    <label>My preferred location is:*</label>
                    <select
                      id="location-selector"
                      name="location-selector"
                      value={formData.clinic_preference}
                      onChange={(e) =>
                        setData({
                          ...formData,
                          clinic_preference: e.target.value,
                        })
                      }
                      required
                    >
                      <option value="" disabled="" defaultValue="">
                        Please Select
                      </option>
                      <option value="geneva">Geneva</option>
                      <option value="gstaad">Gstaad</option>
                      <option value="montreux">Montreux</option>
                    </select>
                  </div>
                </div>
                <div>
                  <hr className="line" />
                  <div>
                    <input
                      type="checkbox"
                      id="patient-checkbox"
                      name="patient-checkbox"
                    />
                    <label htmlFor="patient-checkbox">Already a patient?</label>
                  </div>
                </div>
                <div className="position-relative">
                  <label htmlFor="message">
                    If you have any further questions, please feel free to ask
                    them here!
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.description}
                    onChange={(e) =>
                      setData({ ...formData, description: e.target.value })
                    }
                  />
                </div>
                <div>
                  <p>
                    Aesthetics Clinic Geneva needs the contact information you
                    provide to us to contact you <br /> about our products and
                    services.
                  </p>
                  <p>
                    By clicking on "Confirm", you are agreeing with the terms
                    listed in our{" "}
                    <span>
                      <a href="#">privacy policy</a>
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
                    {isLoading ? "Submitting..." : "CONFIRM"}
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
