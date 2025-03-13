import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const [maxReached, setMaxReached] = useState(false);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Load message count from localStorage on component mount
  useEffect(() => {
    const storedCount = localStorage.getItem('contactMessageCount');
    if (storedCount) {
      const count = parseInt(storedCount, 10);
      setMessageCount(count);
      
      // Check if max message limit is reached
      if (count >= 2) {
        setMaxReached(true);
      }
    }
  }, []);

  useEffect(() => {
    // Check if email and phone are not empty
    const isValid = formData.email.trim() !== '' && formData.phone.trim() !== '';
    setIsFormValid(isValid && !maxReached);
  }, [formData.email, formData.phone, maxReached]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const showSuccess = () => {
    toast.success('Your message has been sent successfully!', {
      duration: 5000,
      position: 'top-right',
      style: {
        background: '#4CAF50',
        color: '#fff'
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#4CAF50'
      }
    });
  };

  const showError = (message) => {
    toast.error(message || 'There was an error sending your message. Please try again later.', {
      duration: 5000,
      position: 'top-right',
      style: {
        background: '#F44336',
        color: '#fff'
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#F44336'
      }
    });
  };

  const incrementMessageCount = () => {
    const newCount = messageCount + 1;
    setMessageCount(newCount);
    localStorage.setItem('contactMessageCount', newCount.toString());
    
    // Check if max limit is reached after increment
    if (newCount >= 2) {
      setMaxReached(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if max message limit is reached
    if (messageCount >= 2) {
      showError('You have reached the maximum limit of 2 messages. Thank you for your interest!');
      return;
    }
    
    // Additional validation check before submission
    if (!formData.email || !formData.phone) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Replace contactUsApi with EmailJS
      const result = await emailjs.sendForm(
        'service_cy7t8q6', // Replace with your EmailJS service ID
        'template_0ynt0cd', // Replace with your EmailJS template ID
        form.current,
        'l2HcZ0a-EopiC1DGI' // Replace with your EmailJS public key
      );
      
      console.log('EmailJS result:', result.text);
      setFormData({ name: '', email: '', phone: '', message: '' });
      showSuccess();
      incrementMessageCount();
    } catch (error) {
      console.error('Error submitting form:', error);
      showError();
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to reset message count (for testing purposes)
  /* Uncomment for testing
  const resetMessageCount = () => {
    localStorage.removeItem('contactMessageCount');
    setMessageCount(0);
    setMaxReached(false);
  };
  */

  return (
    <section className="py-5">
      <div className="container px-0 px-lg-5">
        {/* React Hot Toast component */}
        <Toaster />
        
        {/* Contact form */}
        <div className="bg-light rounded-4 py-5 px-4 px-md-5">
          <div className="text-center mb-5">
            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
              <i className="bi bi-envelope"></i>
            </div>
            <h1 className="fw-bolder">Get in touch</h1>
            <p className="lead fw-normal text-muted mb-0">
              Lets work together!
            </p>
          </div>
          
          {/* Message count indicator */}
          <div className="text-center mb-4">
            <p className="text-muted">
              {messageCount < 2 ? (
                `You have sent ${messageCount} of 2 allowed messages.`
              ) : (
                `You have reached the maximum limit of 2 messages.`
              )}
            </p>
          </div>
          
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              {maxReached ? (
                <div className="text-center p-4 bg-light border rounded">
                  <h4 className="mb-3">Message Limit Reached</h4>
                  <p>You have already sent 2 messages. Thank you for your interest!</p>
                  <p className="text-muted small">If you need to send another message, please contact us through another channel.</p>
                  {/* Uncomment for testing */}
                  {/* <button 
                    className="btn btn-secondary mt-3" 
                    onClick={resetMessageCount}
                  >
                    Reset Message Count (Testing Only)
                  </button> */}
                </div>
              ) : (
                <form id="contactForm" ref={form} onSubmit={handleSubmit}>
                  {/* Name input */}
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name..."
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="name">Full name</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="name:required"
                    >
                      A name is required.
                    </div>
                  </div>
                  {/* Email address input */}
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="email">Email address</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:required"
                    >
                      An email is required.
                    </div>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:email"
                    >
                      Email is not valid.
                    </div>
                  </div>
                  {/* Phone number input */}
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="phone">Phone number</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="phone:required"
                    >
                      A phone number is required.
                    </div>
                  </div>
                  {/* Message input */}
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Enter your message here..."
                      style={{ height: "10rem" }}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <label htmlFor="message">Message</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="message:required"
                    >
                      A message is required.
                    </div>
                  </div>
                  
                  {/* Form validation message */}
                  {!isFormValid && formData.email.trim() !== '' && formData.phone.trim() !== '' && (
                    <div className="text-center text-warning mb-3">
                      Please provide both email and phone number to submit.
                    </div>
                  )}
                  {/* Submit Button */}
                  <div className="d-grid">
                    <button
                      className={`btn btn-primary btn-lg ${(!isFormValid || isSubmitting) ? 'disabled' : ''}`}
                      id="submitButton"
                      type="submit"
                      disabled={!isFormValid || isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
