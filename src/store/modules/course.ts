import Axios from 'axios'
import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $log: {
      info(message: string, trace?: {}): void
      warning(message: string, trace?: {}): void
      error(message: string, trace?: {}): void
    }
  }
}

const BASE_URL: string = 'https://851acbb1.ngrok.io/graph'
var commit: any

Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

// eslint-disable-next-line import/prefer-default-export
export const course = {
  state: {
    courses: null,
    course: {}
  },
  getters: {
    getCourses: (state: any) => {
      return state.courses
    },
    course: (state: any) => {
      return state.course
    }
  },
  mutations: {
    setCourses(state: any, courses: any[]) {
      state.courses = courses
    },
    setCourse(state: any, course: any) {
      state.course = course
    }
  },
  actions: {
    listCourses: (context: any) => {
      const obj = {
        operationName: 'listCourses',
        query: `query listCourses {
                        listCourses(first: 999) {
                        edges {
                            node {
                            id
                            title
                            headline
                            enrolled_count
                            view_count
                            logo_url
                            skill_level
                            est_minutes
                            primary_topic
                            verified_cert_cost
                            delivery_methods
                            weight
                            }
                        }
                        }
                    }`
      }
      Axios.post(BASE_URL, obj)
        .then(response => {
          context.commit('setCourses', response.data.data.listCourses.edges)
        })
        .catch(error => {})
    },
    getCourse: (context: any, courseId: string) => {
      const obj = {
        operationName: 'getCourse',
        query: `query getCourse {
                getCourseById(course_id: "${courseId}") {
                  title
                  units {
                    edges {
                      node {
                        sections_list {
                          cards_list {
                            title
                            github_edit_url
                          }
                        }
                      }
                    }
                  }
                }
              }`
      }

      Axios.post(BASE_URL, obj)
        .then(response => {
          context.commit('setCourse', response.data.data.getCourseById)
        })
        .catch(error => {})
    }
  }
}
