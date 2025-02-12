import api from "../api/api";



// 사용자 프로필 목록 조회 API
export const fetchUserProfiles = async () => {
    try {
        const response = await api.get('/users/profile/');
        return response.data; // 사용자 프로필 목록 반환
    } catch (error) {
        console.error('프로필 목록 조회 실패:', error);
        throw error; // 에러를 상위 호출로 전파
    }
};

// 특정 사용자 프로필 조회 API
export const fetchUserProfile = async (username) => {
    try {
        const response = await api.get(`/users/profile/${username}/`);
        return response.data; // 특정 사용자 프로필 반환
    } catch (error) {
        console.error('프로필 조회 실패:', error);
        throw error; // 에러를 상위 호출로 전파
    }
};

// 프로필 수정 API
export const updateUserProfile = async (username, profileData) => {
    try {
        const response = await api.patch(`/users/profile/${username}/`, profileData);
        return response.data; // 수정된 프로필 반환
    } catch (error) {
        console.error('프로필 수정 실패:', error);
        throw error; // 에러를 상위 호출로 전파
    }
};

// 사용자 프로젝트 목록 조회 API
export const fetchUserProjects = async (username) => {
    try {
        const response = await api.get(`/users/profile/${username}/projects/`); // 예시 경로
        return response.data; // 사용자 프로젝트 목록 반환
    } catch (error) {
        console.error('사용자 프로젝트 목록 조회 실패:', error);
        throw error; // 에러를 상위 호출로 전파
    }
};

// 사용자 리뷰 조회 API
export const fetchUserReviews = async (username) => {
    try {
        const response = await api.get(`/users/profile/${username}/reviews/`); // 예시 경로
        return response.data; // 사용자 리뷰 목록 반환
    } catch (error) {
        console.error('사용자 리뷰 조회 실패:', error);
        throw error; // 에러를 상위 호출로 전파
    }
};
