import routes from "./routes";

// Reusable fetch wrapper
async function apiFetch(url, { method = "GET", body } = {}) {
  const options = {
    method,
    headers: { "Content-Type": "application/json" },
  };
  if (body !== undefined) {
    options.body = JSON.stringify(body);
  }
  const res = await fetch(url, options);
  return res.json();
}

// Save a note (plain text)
export function saveNote(note) {
  return apiFetch(routes.createNote(), { method: "POST", body: { note } });
}

// Fetch all notes
export function fetchNotes() {
  return apiFetch(routes.getAllNotes());
}

// Connect call
export function connectCall(agentNumber, clientNumber) {
  return apiFetch(routes.connectCall(), {
    method: "POST",
    body: { agentNumber, clientNumber },
  });
}
