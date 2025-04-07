





export async function login(email: string, password: string) {

  const API_URL = import.meta.env.VITE_API_URL || "";
  
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ login: email, password }),
  });

  const data = await response.json();
  console.log(response)
  if (!response.ok) throw new Error(data.error || "Erreur inconnue");

  return [response.status, data] as const;
}


// @ts-ignore
function generateAuthToken() {
  return Math.random().toString(36).substring(2);
}