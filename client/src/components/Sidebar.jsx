import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Sidebar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
<div className="w-64 bg-slate-900 min-h-screen p-5 border-r border-slate-800 relative">
      <h1 className="text-2xl font-bold text-cyan-400 mb-10">
        LeadCRM
      </h1>

      <ul className="space-y-4">

        <li>
          <button
            className="w-full text-left hover:text-cyan-400"
          >
            📊 Dashboard
          </button>
        </li>

        <li>
          <button
            className="w-full text-left hover:text-cyan-400"
          >
            👥 Leads
          </button>
        </li>

        <li>
          <button
            className="w-full text-left hover:text-cyan-400"
          >
            📈 Analytics
          </button>
        </li>

        <li>
          <button
            className="w-full text-left hover:text-cyan-400"
          >
            🛠️ Settings
          </button>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;