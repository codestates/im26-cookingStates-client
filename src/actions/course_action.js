// 액션 타입
export const SET_COURSE_INFO = "SET_COURSE_INFO";
export const SET_ALL_COURSE_INFO = "SET_ALL_COURSE_INFO";

export function setCourseInfo(courseInfo) {
  return {
    type: SET_COURSE_INFO,
    payload: courseInfo,
  };
}

export function setAllCourseInfo(courseInfo) {
  return {
    type: SET_ALL_COURSE_INFO,
    payload: courseInfo,
  };
}
