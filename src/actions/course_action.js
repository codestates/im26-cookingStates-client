// 액션 타입
export const GET_COURSE_INTO = "GET_COURSE_INTO";

export function getCourseInfo(courseInfo) {
  return {
    type: GET_COURSE_INTO,
    payload: courseInfo,
  };
}
