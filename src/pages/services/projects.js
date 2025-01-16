import api from '../api/api';

// 프로젝트 목록 조회 API
export const fetchProjectsList = async () => {
    try {
        const response = await api.get('/projects/');
        return response.data;
    } catch (error) {
        console.error('프로젝트 목록 조회 실패:', error);
        throw error; // 에러를 상위 호출로 전파
    }
};

// 프로젝트 생성 API
export const createProject = async (projectData) => {
    try {
        const response = await api.post('/projects/', projectData);
        return response.data;
    } catch (error) {
        console.error('프로젝트 생성 실패:', error);
        throw error;
    }
};

// 특정 프로젝트 조회 API
export const fetchProjectDetails = async (id) => {
    try {
        const response = await api.get(`/projects/${id}/`);
        return response.data;
    } catch (error) {
        console.error('프로젝트 상세 조회 실패:', error);
        throw error;
    }
};

// 특정 프로젝트 수정 API
export const updateProject = async (id, updatedData) => {
    try {
        const response = await api.patch(`/projects/${id}/`, updatedData);
        return response.data;
    } catch (error) {
        console.error('프로젝트 수정 실패:', error);
        throw error;
    }
};

// 특정 프로젝트 삭제 API
export const deleteProject = async (id) => {
    try {
        const response = await api.delete(`/projects/${id}/`);
        return response.data; // 삭제 성공 시 반환
    } catch (error) {
        console.error('프로젝트 삭제 실패:', error);
        throw error;
    }
};
