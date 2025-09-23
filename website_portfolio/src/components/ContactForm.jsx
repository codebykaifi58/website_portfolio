import React, { useState } from "react";

const ContactForm = () => {
  const formConfig = [
    { label: "Your Name", name: "name", type: "text", placeholder: "Enter Your Name", col: 6 },
    { label: "Your Number", name: "number", type: "text", placeholder: "Enter Your Number", col: 6 },
    { label: "Email Address", name: "email", type: "email", placeholder: "Enter Your Email", col: 12 },
    {
      label: "Select Service",
      name: "service",
      type: "select",
      placeholder: "Choose a Service",
      col: 12,
      options: [
        "Web Development",
        "Mobile App Development",
        "E-commerce Website",
        "SEO Optimization",
        "Digital Marketing",
        "Graphic Design",
        "Other",
      ],
    },
    {
      label: "Message",
      name: "message",
      type: "textarea",
      placeholder: "Enter Your Message",
      col: 12,
      rows: 4,
    },
  ];

  const [formData, setFormData] = useState({});
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Your message has been sent successfully!");
  };

  return (
    <div className="contact-wrapper">
      <div className="container py-5">
        <div className="contact-form-card p-5 shadow">
          <h3 className="form-title mb-4">Get In Touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="row">
              {formConfig.map((field, index) => (
                <div key={index} className={`col-md-${field.col} mb-3`}>
                  {/* Input, Select, Textarea */}
                  {field.type !== "select" && field.type !== "textarea" && (
                    <div
                      className={`input-group-custom ${
                        activeField === field.name ? "active" : ""
                      }`}
                    >
                      <input
                        type={field.type}
                        className="form-control custom-input"
                        placeholder={field.placeholder}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        onFocus={() => setActiveField(field.name)}
                        onBlur={() => setActiveField(null)}
                        required
                      />
                    </div>
                  )}

                  {field.type === "select" && (
                    <div
                      className={`input-group-custom ${
                        activeField === field.name ? "active" : ""
                      }`}
                    >
                      <select
                        className="form-select custom-input"
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        onFocus={() => setActiveField(field.name)}
                        onBlur={() => setActiveField(null)}
                        required
                      >
                        <option value="">{field.placeholder}</option>
                        {field.options.map((option, i) => (
                          <option key={i} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {field.type === "textarea" && (
                    <div
                      className={`input-group-custom ${
                        activeField === field.name ? "active" : ""
                      }`}
                    >
                      <textarea
                        className="form-control custom-input"
                        placeholder={field.placeholder}
                        name={field.name}
                        rows={field.rows}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        onFocus={() => setActiveField(field.name)}
                        onBlur={() => setActiveField(null)}
                        required
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="d-grid">
              <button type="submit" className="btn custom-btn">
                Send Message <i className="bi bi-arrow-up-right ms-2"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
