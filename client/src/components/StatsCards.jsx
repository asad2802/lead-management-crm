function StatsCards({ leads }) {

  const total = leads.length;

  const converted =
    leads.filter(
      (lead) => lead.status === "Converted"
    ).length;

  const lost =
    leads.filter(
      (lead) => lead.status === "Lost"
    ).length;

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">

      <div className="bg-slate-900 p-6 rounded-xl">
        <h3 className="text-gray-400">
          Total Leads
        </h3>

        <p className="text-3xl font-bold">
          {total}
        </p>
      </div>

      <div className="bg-slate-900 p-6 rounded-xl">
        <h3 className="text-gray-400">
          Converted
        </h3>

        <p className="text-3xl font-bold text-green-400">
          {converted}
        </p>
      </div>

      <div className="bg-slate-900 p-6 rounded-xl">
        <h3 className="text-gray-400">
          Lost
        </h3>

        <p className="text-3xl font-bold text-red-400">
          {lost}
        </p>
      </div>

    </div>
  );
}

export default StatsCards;