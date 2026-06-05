import Papa from "papaparse";
import { saveAs } from "file-saver";

export const exportLeadsCSV = (leads) => {
  const formattedData = leads.map((lead) => ({
    Name: lead.name,
    Email: lead.email,
    Phone: lead.phone,
    Company: lead.company,
    Status: lead.status,
    Notes: lead.notes,
    CreatedDate: new Date(
      lead.createdAt
    ).toLocaleDateString(),
  }));

  const csv = Papa.unparse(
    formattedData
  );

  const blob = new Blob(
    [csv],
    {
      type: "text/csv;charset=utf-8;",
    }
  );

  saveAs(blob, "LeadCRM_Leads.csv");
};