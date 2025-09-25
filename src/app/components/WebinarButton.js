"use client"; // if you are using Next.js App Router

import { useState } from "react";

export default function WebinarButton({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 Do something with form data (send to API, save in DB, etc.)
    console.log("Form submitted:", form);

    // Redirect to webinar link after submit
    if (item.webinars_button?.url) {
      window.open(item.webinars_button.url, "_blank");
    }

    setIsOpen(false);
  };

  return (
    <>
      {/* Trigger Button */}
      {item.webinars_button?.url && (
        <button
          onClick={() => setIsOpen(true)}
          className="underline font-semibold text-blue-600 hover:text-blue-800"
        >
          {item.webinars_button.title}
        </button>
      )}

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-full max-w-md shadow-lg relative">
            <h2 className="text-xl font-bold mb-4">Register for Webinar</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-3 py-2 mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-3 py-2 mt-1"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium">
                  Phone (optional)
                </label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 mt-1"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>

            {/* Close Icon */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
