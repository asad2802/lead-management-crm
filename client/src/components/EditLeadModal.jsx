import { useState, useEffect } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
function EditLeadModal({
  isOpen,
  onClose,
  lead,
  fetchLeads,
}) {

  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (lead) {
      setFormData(lead);
    }
  }, [lead]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.put(
      `/leads/${lead._id}`,
      formData
    );

    fetchLeads();
    onClose();
  };

  if (!isOpen || !lead) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">

      <div className="bg-slate-900 p-6 rounded-xl w-[500px]">

        <h2 className="text-2xl font-bold mb-4">
          Edit Lead
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-3"
        >

          <input
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-800"
          />

          <input
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-800"
          />

          <input
            name="company"
            value={formData.company || ""}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-800"
          />

          <select
            name="status"
            value={formData.status || ""}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-800"
          >
            <option>New</option>
            <option>Contacted</option>
            <option>Qualified</option>
            <option>Converted</option>
            <option>Lost</option>
          </select>

          <button
            className="bg-cyan-500 px-5 py-2 rounded"
          >
            Update
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditLeadModal;