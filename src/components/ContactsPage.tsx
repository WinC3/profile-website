import { useState } from "react";
import "./ContactsPage.css";

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"" | "success" | "error">(
    ""
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // FormSubmit handles the email sending
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contacts-page">
      <div className="contacts-container">
        {/* Header Section */}
        <header className="contacts-header">
          <h1 className="contacts-title">Get In Touch</h1>
          <p className="contacts-subtitle">
            I'm always interested in new opportunities, collaborations, and
            interesting projects. Let's connect and discuss how we can work
            together!
          </p>
        </header>

        <div className="contacts-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 className="section-title">Send Me a Message</h2>
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              action="https://formsubmit.co/1636e88ff2e80561a3a0d25e9a5b0a77"
              method="POST"
            >
              {/* FormSubmit configuration */}
              <input
                type="hidden"
                name="_subject"
                value="New message from your website!"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              {/* Add your actual domain when deployed */}
              {/* <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-input ${errors.name ? "error" : ""}`}
                  placeholder="Your full name"
                  required
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? "error" : ""}`}
                  placeholder="your.email@example.com"
                  required
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`form-input ${errors.subject ? "error" : ""}`}
                  placeholder="What's this about?"
                  required
                />
                {errors.subject && (
                  <span className="error-message">{errors.subject}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`form-textarea ${errors.message ? "error" : ""}`}
                  placeholder="Tell me about your project, question, or just say hello!"
                  required
                ></textarea>
                {errors.message && (
                  <span className="error-message">{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? "loading" : ""}`}
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <svg
                  className="send-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="m22 2-7 20-4-9-9-4zm0 0-10 10" />
                </svg>
              </button>

              {submitStatus === "success" && (
                <div className="form-message success">
                  ✅ Thank you! Your message has been sent successfully. I'll
                  get back to you soon!
                </div>
              )}

              {submitStatus === "error" && (
                <div className="form-message error">
                  ❌ Sorry, there was an error sending your message. Please try
                  again or contact me directly via email.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-section">
            <h2 className="section-title">Contact Information</h2>

            <div className="contact-info-grid">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>winstonchan333@gmail.com</p>
                  <small>I typically respond within 24 hours</small>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>+1 (437) 858-8822</p>
                  <small>Available Mon-Fri, 9AM-6PM EST</small>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <p>Toronto, Canada</p>
                  <small>Open to remote opportunities</small>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                </div>
                <div className="contact-details">
                  <h3>Response Time</h3>
                  <p>Within 24 hours</p>
                  <small>Usually much faster!</small>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h3>Connect with me</h3>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/winston-chan-495629335/"
                  className="social-link linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/winc3"
                  className="social-link github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="additional-info">
          <div className="info-cards">
            <div className="info-card">
              <h3>🚀 Open to Opportunities</h3>
              <p>
                Currently seeking full-time positions in software development
                and machine learning roles.
              </p>
            </div>
            <div className="info-card">
              <h3>💼 Freelance Projects</h3>
              <p>
                Available for consulting and freelance projects. Let's discuss
                your requirements!
              </p>
            </div>
            <div className="info-card">
              <h3>🤝 Collaboration</h3>
              <p>
                Always interested in collaborating on open-source projects and
                research initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
