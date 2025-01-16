import api from '../api/api'; // api 인스턴스 가져오기

// 게시판 목록 조회 API
export const fetchBoardList = async () => {
    try {
        const response = await api.get('board/boards/');
        return response.data;
    } catch (error) {
        console.error('게시판 목록 조회 실패:', error);
        throw error; // 에러를 상위 호출로 전파
    }
};

// 게시판 생성 API
export const createBoard = async (data) => {
    try {
        const response = await api.post('board/boards', data);
        return response.data;
    } catch (error) {
        console.error('게시판 생성 실패:', error);
        throw error;
    }
};

// 게시판 상세 조회 API
export const fetchBoardDetails = async (id) => {
    try {
        const response = await api.get(`/board/boards/${id}/`);
        return response.data;
    } catch (error) {
        console.error('게시판 상세 조회 실패:', error);
        throw error;
    }
};

// 게시판 수정 API
export const updateBoard = async (id, data) => {
    try {
        const response = await api.patch(`/board/boards/${id}/`, data);
        return response.data;
    } catch (error) {
        console.error('게시판 수정 실패:', error);
        throw error;
    }
};

// 게시판 삭제 API
export const deleteBoard = async (id) => {
    try {
        const response = await api.delete(`/board/boards/${id}/`);
        return response.status; // 삭제 성공 시 상태 코드 반환
    } catch (error) {
        console.error('게시판 삭제 실패:', error);
        throw error;
    }
};
