// src/utils/api.js
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchProfile = async () => {
  const token = localStorage.getItem('access-token');

  const res = await fetch(`${API_BASE_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error('Failed to fetch profile');

  return res.json();
};
