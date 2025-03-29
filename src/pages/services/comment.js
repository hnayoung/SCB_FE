import api from '../api/api';
// import { updateBoard } from './board'; // 오타 수정

// 전체 댓글 목록 조회
export const fetchAllComments = async () => {
    try {
        const response = await api.get('/board/comments/');
        return response.data;
    } catch (error) {
        console.error('댓글 목록 조회 실패:', error);
        throw error; // 에러를 상위 호출로 전파
    }
};

// 댓글 생성 API
export const createComment = async (commentData) => {
    try {
        const response = await api.post('/board/comments/', commentData);
        return response.data;
    } catch (error) {
        console.error('댓글 생성 실패:', error);
        throw error;
    }
};

// 댓글 상세 조회 API
export const fetchCommentById = async (id) => {
    try {
        const response = await api.get(`/board/comments/${id}/`);
        return response.data;
    } catch (error) {
        console.error('댓글 상세 조회 실패:', error);
        throw error;
    }
};

// 댓글 수정 API
export const updateComment = async (id, updateData) => {
    try {
        const response = await api.patch(`/board/comments/${id}/`, updateData);
        return response.data;
    } catch (error) {
        console.error('댓글 수정 실패:', error);
        throw error;
    }
};

// 댓글 삭제 API
export const deleteComment = async (id) => {
    try {
        const response = await api.delete(`/board/comments/${id}/`);
        return response.status; // 삭제 성공 시 상태 코드 반환
    } catch (error) {
        console.error('댓글 삭제 실패:', error);
        throw error;
    }
};
