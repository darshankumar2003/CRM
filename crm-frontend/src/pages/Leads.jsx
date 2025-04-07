import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import "./Lead.css";


const Leads = () => {
  const { token, user } = useAuth();
  const [leads, setLeads] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", telecaller: "" });

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    const res = await axios.get("http://localhost:5000/api/leads", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setLeads(res.data);
  };

  const handleCreate = async () => {
    await axios.post("http://localhost:5000/api/leads", form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchLeads();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/leads/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchLeads();
  };

  const handleStatusUpdate = async (id, newStatus) => {
    await axios.patch(
      `http://localhost:5000/api/leads/${id}/status`,
      { status: newStatus },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchLeads();
  };

  return (
    <div>
      <h2>Leads</h2>

      {/* Admin Lead Creation Form */}
      {user?.role === "admin" && (
        <div>
          <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input placeholder="Phone" onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <input placeholder="Address" onChange={(e) => setForm({ ...form, address: e.target.value })} />
          <input placeholder="Telecaller ID" onChange={(e) => setForm({ ...form, telecaller: e.target.value })} />
          <button onClick={handleCreate}>Create Lead</button>
        </div>
      )}

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th><th>Address</th><th>Status</th><th>Telecaller</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead._id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
              <td>{lead.address}</td>
              <td>{lead.callStatus?.status || "N/A"}</td>
              <td>{lead.telecaller?.username || "N/A"}</td>
              <td>
                {/* Admin can delete */}
                {user?.role === "admin" && <button onClick={() => handleDelete(lead._id)}>Delete</button>}

                {/* Telecaller can update status of their own leads */}
                {user?.role === "telecaller" && lead.telecaller?._id === user._id && (
                  <>
                    <select onChange={(e) => handleStatusUpdate(lead._id, e.target.value)} defaultValue="">
                      <option disabled value="">Update Status</option>
                      <option value="Interested">Interested</option>
                      <option value="Not Interested">Not Interested</option>
                      <option value="Follow Up">Follow Up</option>
                    </select>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leads;
