import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import api from "../services/api";

import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import LeadTable from "../components/LeadTable";
import StatsCards from "../components/StatsCards";
import AddLeadModal from "../components/AddLeadModal";
import DeleteModal from "../components/DeleteModal";
import EditLeadModal from "../components/EditLeadModal";
import PieChartCard from "../components/PieChartCard";

import { exportLeadsCSV } from "../utils/exportCSV";

function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);

  const [selectedLead, setSelectedLead] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await api.get("/leads");
      setLeads(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name?.toLowerCase().includes(search.toLowerCase()) ||
      lead.email?.toLowerCase().includes(search.toLowerCase()) ||
      lead.company?.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async () => {
    try {
      await api.delete(`/leads/${selectedLead._id}`);

      toast.success("Lead Deleted Successfully");

      fetchLeads();

      setShowDeleteModal(false);
      setSelectedLead(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (lead) => {
    setSelectedLead(lead);
    setShowEditModal(true);
  };

  const handleDeleteClick = (lead) => {
    setSelectedLead(lead);
    setShowDeleteModal(true);
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1">

        <nav className="bg-slate-900 p-5 flex justify-between items-center">

          <h1 className="text-2xl font-bold">
            LeadCRM Dashboard
          </h1>

          <div className="flex gap-3">

            <button
              onClick={() => exportLeadsCSV(leads)}
              className="
                bg-green-500
                hover:bg-green-600
                px-4
                py-2
                rounded-lg
              "
            >
              📁 Export CSV
            </button>

            <button
              onClick={() => setShowAddModal(true)}
              className="
                bg-cyan-500
                hover:bg-cyan-600
                px-4
                py-2
                rounded-lg
              "
            >
              + Add Lead
            </button>

          </div>

        </nav>

        <div className="p-8">

          <StatsCards leads={leads} />

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <LeadTable
            leads={filteredLeads}
            onEdit={handleEdit}
            onDelete={handleDeleteClick}
          />

          <PieChartCard leads={leads} />

        </div>

      </div>

      <AddLeadModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        fetchLeads={fetchLeads}
      />

      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() =>
          setShowDeleteModal(false)
        }
        onConfirm={handleDelete}
      />

      <EditLeadModal
        isOpen={showEditModal}
        onClose={() =>
          setShowEditModal(false)
        }
        lead={selectedLead}
        fetchLeads={fetchLeads}
      />

    </div>
  );
}

export default Dashboard;