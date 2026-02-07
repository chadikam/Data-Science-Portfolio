import { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Web3Forms access key from environment variable
      // Note: This key is safe to be public as it's domain-restricted via Web3Forms dashboard
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      
      if (!accessKey) {
        throw new Error('Web3Forms access key not configured');
      }

      // Create FormData object
      const form = new FormData();
      form.append('access_key', accessKey);
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('subject', formData.subject);
      form.append('message', formData.message);
      form.append('from_name', formData.name);
      form.append('replyto', formData.email);

      // Send to Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form
      });

      const data = await response.json();

      if (data.success) {
        // Reset form and show success
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitStatus('success');
        setIsSubmitting(false);
        
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error('Submission failed');
      }
      
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="container px-4 py-20 scroll-mt-20">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground">
                I'm always open to discussing new opportunities, creative ideas, or
                potential collaborations. Whether you have a question or just want to
                say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="card p-4 flex items-center gap-4 border-border hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:kammounchadi@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    kammounchadi@gmail.com
                  </a>
                </div>
              </div>

              <div className="card p-4 flex items-center gap-4 border-border hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground\">Location</p>
                  <p className="text-foreground">Monastir, Tunisia</p>
                </div>
              </div>

              <div className="card p-4 flex items-center gap-4 border-border hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href="tel:+21650985420"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +216 50 985 420
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium mb-3 text-muted-foreground">
                Social Links
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/chadikam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/chadi-kammoun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-6 border-border">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 text-primary">
                  <CheckCircle className="h-5 w-5" />
                  <p className="text-sm">Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-3 rounded-lg bg-red-500/10 text-red-500">
                  <p className="text-sm">Failed to send message. Please email me directly at kammounchadi@gmail.com</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full gap-2 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
