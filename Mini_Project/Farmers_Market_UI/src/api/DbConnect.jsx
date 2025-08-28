import axios from "axios";

// JSON DB URL from JSON SERVER
const API = axios.create({
    baseURL: "http://192.168.29.66:3000",
})

// Get all Vegetables
export const getVeges = () => API.get("/veges");

// Get all Flowers 
export const getFlowers = () => API.get("/flowers");

// Add Vegetables
export const addVeg  = (newVeg) => API.post("/veges", newVeg);

// Add Flowers
export const addFlower  = (newFlower) => API.post("/flowers", newFlower);

// Update Veges
export const updateVeg = (id, updatedData) => API.put(`/veges/${id}`, updatedData);

// update Flowers
export const updateFlower = (id, updatedData) => API.put(`/veges/${id}`, updatedData);

// Delete Veges
export const deleteVeg = (id) => API.delete(`/veges/${id}`);

// Delete Flowers
export const deleteFlower = (id) => API.delete(`/flowers/${id}`);