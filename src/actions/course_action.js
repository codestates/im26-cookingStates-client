// 액션 타입
export const SET_COURSE_INFO = "SET_COURSE_INFO";

export function setCourseInfo(courseInfo) {
  return {
    type: SET_COURSE_INFO,
    payload: courseInfo,
  };
}
