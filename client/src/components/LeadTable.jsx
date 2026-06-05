function LeadTable({
  leads,
  onEdit,
  onDelete,
}) {
  return (
    <div className="bg-slate-900 rounded-xl overflow-hidden">
      <table className="w-full">

        <thead className="bg-slate-800">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Company</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr
              key={lead._id}
              className="border-t border-slate-700"
            >
              <td className="p-4">{lead.name}</td>
              <td className="p-4">{lead.email}</td>
              <td className="p-4">{lead.company}</td>

              <td className="p-4">
                <span className="bg-cyan-500 px-3 py-1 rounded-full">
                  {lead.status}
                </span>
              </td>

              <td className="p-4">
                <div className="flex gap-2">

                  <button
                    onClick={() => onEdit(lead)}
                    className="bg-yellow-500 px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(lead)}
                    className="bg-red-500 px-3 py-1 rounded"
                  >
                    Delete
                  </button>

                </div>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default LeadTable;