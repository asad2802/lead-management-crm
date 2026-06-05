import { useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
function AddLeadModal({
  isOpen,
  onClose,
  fetchLeads,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    status: "New",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/leads", formData);

      fetchLeads();
      onClose();

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        status: "New",
        notes: "",
      });

    } catch (error) {
      console.log(error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">

      <div className="bg-slate-900 p-6 rounded-xl w-[500px]">

        <h2 className="text-2xl font-bold mb-4">
          Add Lead
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-3"
        >

          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-800"
          />

          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-800"
          />

          <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-800"
          />

          <input
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-800"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-800"
          >
            <option>New</option>
            <option>Contacted</option>
            <option>Qualified</option>
            <option>Converted</option>
            <option>Lost</option>
          </select>

          <textarea
            name="notes"
            placeholder="Notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-800"
          />

          <div className="flex gap-3">

            <button
              type="submit"
              className="bg-cyan-500 px-5 py-2 rounded"
            >
              Save
            </button>

            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 px-5 py-2 rounded"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddLeadModal;