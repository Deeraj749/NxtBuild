import api from './api.js';

const getProjects = async () => {
  const response = await api.get('/projects');
  return response.data.data;
};

const getProject = async (id) => {
  const response = await api.get(`/projects/${id}`);
  return response.data.data;
};

const createProject = async (title, generatedCode = '', messages = []) => {
  const response = await api.post('/projects', { title, generatedCode, messages });
  return response.data.data;
};

const updateProject = async (id, data) => {
  const response = await api.put(`/projects/${id}`, data);
  return response.data.data;
};

const deleteProject = async (id) => {
  const response = await api.delete(`/projects/${id}`);
  return response.data.data;
};

export { getProjects, getProject, createProject, updateProject, deleteProject };