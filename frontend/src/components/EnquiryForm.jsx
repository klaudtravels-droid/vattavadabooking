import React, { useState } from 'react';
import { Send } from 'lucide-react';

const STAY_TYPES = ['Pool Property', 'Budget Property', 'Premium Property', 'Tents', 'Dormitory'];

export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    members: '',
    date: '',
    stayType: '',
    location: 'Vattavada',
    requests: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello Klaud Valley Travels!

I'd like to make an enquiry:
Name: ${form.name}
Phone: ${form.phone}
Members: ${form.members}
Date: ${form.date}
Stay Type: ${form.stayType}
Location: ${form.location}
Special Requests: ${form.requests || 'None'}

Please share availability and pricing. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919778342424?text=${encoded}`, '_blank');
  };

  return (
    <section
      id="booking"
      data-testid="booking-section"
      className="relative py-24 sm:py-32 bg-forest-deep grain-overlay"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <p className="text-amber text-xs tracking-[0.25em] uppercase font-semibold mb-4">Book Now</p>
          <h2 className="font-display text-cream text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4" data-testid="booking-heading">
            Plan Your Escape
          </h2>
          <p className="font-body text-cream/60 text-base sm:text-lg max-w-xl mx-auto">
            Fill in the details and we'll get back to you on WhatsApp within minutes
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="reveal reveal-delay-2 bg-parchment/95 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
          data-testid="enquiry-form"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label className="block font-body text-charcoal/70 text-xs uppercase tracking-wider font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="form-input"
                data-testid="input-name"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-body text-charcoal/70 text-xs uppercase tracking-wider font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your WhatsApp number"
                required
                className="form-input"
                data-testid="input-phone"
              />
            </div>

            {/* Members */}
            <div>
              <label className="block font-body text-charcoal/70 text-xs uppercase tracking-wider font-semibold mb-2">
                Number of Members
              </label>
              <input
                type="number"
                name="members"
                value={form.members}
                onChange={handleChange}
                placeholder="How many people?"
                min="1"
                required
                className="form-input"
                data-testid="input-members"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block font-body text-charcoal/70 text-xs uppercase tracking-wider font-semibold mb-2">
                Date of Visit
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="form-input"
                data-testid="input-date"
              />
            </div>

            {/* Stay Type */}
            <div>
              <label className="block font-body text-charcoal/70 text-xs uppercase tracking-wider font-semibold mb-2">
                Stay Type
              </label>
              <select
                name="stayType"
                value={form.stayType}
                onChange={handleChange}
                required
                className="form-input"
                data-testid="select-stay-type"
              >
                <option value="">Select stay type</option>
                {STAY_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block font-body text-charcoal/70 text-xs uppercase tracking-wider font-semibold mb-2">
                Location
              </label>
              <select
                name="location"
                value={form.location}
                onChange={handleChange}
                required
                className="form-input"
                data-testid="select-location"
              >
                <option value="Vattavada">Vattavada</option>
              </select>
            </div>
          </div>

          {/* Special Requests */}
          <div className="mt-5">
            <label className="block font-body text-charcoal/70 text-xs uppercase tracking-wider font-semibold mb-2">
              Special Requests
            </label>
            <textarea
              name="requests"
              value={form.requests}
              onChange={handleChange}
              placeholder="Any special requests or preferences..."
              rows={3}
              className="form-input resize-none"
              data-testid="textarea-requests"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-8 w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-full font-body font-bold text-base hover:bg-[#1fb855] transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/20"
            data-testid="booking-submit-btn"
          >
            <Send size={18} />
            Send Enquiry on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
