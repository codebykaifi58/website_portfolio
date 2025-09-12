import { useState } from "react";

function FAQCarousel() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What Services Do You Offer In Development?",
      answer:
        "Yes, we provide tailored solutions based on your business needs, ensuring efficiency, scalability, and security.",
    },
    {
      question: "Do You Offer Custom Development Solutions?",
      answer:
        "Absolutely! We create custom development solutions tailored to your specific requirements.",
    },
    {
      question: "Can You Help With Website And App Maintenance?",
      answer:
        "Yes, we offer ongoing website and app maintenance services to keep your projects running smoothly.",
    },
    {
      question: "Do You Develop E-Commerce Websites?",
      answer:
        "Certainly! We build fully functional and scalable e-commerce websites tailored to your business.",
    },
  ];

  return (
    <div
      className="container-fluid"
      style={{
        width: "100vw", // Full viewport width
        minHeight: "100vh", // At least full viewport height
        padding: "2rem 1.5rem",
        boxSizing: "border-box",
        background:"#161618", // subtle gradient background
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily:
          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#222",
      }}
    >
      <div
        className="container mt-5"
        style={{
          width: "100%",
          backgroundColor: "#1C1D20",
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(7, 7, 7, 0.2)",
          padding: "2rem",
          textAlign: "center", // Center all text inside container
        }}
      >
        <button
          disabled
          style={{
            border: "1.5px solid #28E98C",
            borderRadius: "25px",
            background: "transparent",
            color: "#28E98C",
            fontWeight: "700",
            padding: "0.6rem 1.5rem",
            marginBottom: "1.5rem",
            cursor: "default",
            letterSpacing: "1px",
            fontSize: "0.95rem",
            userSelect: "none",
            textAlign: "center", // Center text inside button
          }}
        >
          ✨ Find Your Answer
        </button>

        <h2
          style={{
            fontWeight: "800",
            fontSize: "2rem",
            marginBottom: "0.5rem",
            lineHeight: "1.1",
            color:'white',
            textAlign: "center", // center heading
          }}
        >
          Read Most Frequent Questions
        </h2>

        <p
          style={{
            color: "#555",
            fontSize: "1rem",
            marginBottom: "1.5rem",
            lineHeight: "1.5",
            maxWidth: "480px", // reduced width for better readability
            margin: "0 auto", // center horizontally
            textAlign: "center",
          }}
        >
          With a passion for technology and years of
          experience, I specialize in web, mobile, AI,
          and blockchain development. My expertise lies
          in creating innovative, scalable, and efficient
          solutions that help businesses.
        </p>

        <p
          style={{
            marginBottom: "1rem",
            fontWeight: "600",
            fontSize: "1.1rem",
            textAlign: "center", // center text
            color:'white',
          }}
        >
          Haven’t Found An Answer To Your Query?
        </p>

        <button
          style={{
            backgroundColor: "#28E98C",
            color: "white",
            border: "none",
            padding: "0.9rem 2rem",
            borderRadius: "30px",
            cursor: "pointer",
            fontWeight: "700",
            fontSize: "1rem",
            marginBottom: "2rem",
            boxShadow: "0 4px 12px rgba(40, 233, 140, 0.5)",
            transition: "background-color 0.3s ease",
            textAlign: "center",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#22b97a")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#28E98C")
          }
        >
          Contact Us
        </button>

        {/* FAQ Accordion */}
        <div>
          {faqs.map((faq, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={idx}
                style={{
                  marginBottom: "1.25rem",
                  borderRadius: "10px",
                  boxShadow: isActive
                    ? "0 4px 15px rgba(40, 233, 140, 0.3)"
                    : "0 1px 6px rgba(0,0,0,0.1)",
                  border: isActive ? "2px solid #28E98C" : "1px solid #ddd",
                  transition: "box-shadow 0.3s ease, border 0.3s ease",
                  backgroundColor: isActive ? "#161618" : "#161618",
                  textAlign: "center", // center text inside FAQ container
                }}
              >
                <button
                  onClick={() => setActiveIndex(isActive ? null : idx)}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    padding: "1.2rem 1.5rem",
                    textAlign: "center", // center question text
                    fontWeight: "700",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center", // center flex content horizontally
                    alignItems: "center",
                    outline: "none",
                    color: "white",
                    userSelect: "none",
                    fontSize: "1.1rem",
                    borderRadius: "10px",
                    gap: "10px",
                  }}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {faq.question}
                  <span
                    style={{
                      fontSize: "1.3rem",
                      transform: isActive ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 0.4s ease",
                      color: "#28E98C",
                      fontWeight: "900",
                      userSelect: "none",
                      display: "inline-block",
                    }}
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isActive ? "250px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    padding: isActive ? "0 1.5rem 1.25rem 1.5rem" : "0 1.5rem",
                    color: "#555",
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    backgroundColor: "#161618",
                    borderTop: "1px solid #ddd",
                    userSelect: "text",
                    borderRadius: "0 0 10px 10px",
                    textAlign: "center", // center answer text
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FAQCarousel;
