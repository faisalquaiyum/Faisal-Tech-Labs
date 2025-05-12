import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./faq.css";

const faqData = [
  {
    question: "How do I get started with your services?",
    answer:
      "Simply sign up for an account on our platform and choose a service plan that fits your needs. Our onboarding process will guide you through setup.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers. Subscription payments are processed securely through our payment gateway.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time through your account dashboard. There are no cancellation fees.",
  },
  {
    question: "How do you handle data security?",
    answer:
      "We use industry-standard encryption and follow strict security protocols to ensure your data is always protected.",
  },
  {
    question: "Do you offer 24/7 customer support?",
    answer:
      "Yes, our customer support team is available 24/7 via live chat and email to assist you with any issues.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span>{activeIndex === index ? <FaMinus /> : <FaPlus />}</span>
            </div>
            {activeIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
