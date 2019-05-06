import { Component, Vue } from 'vue-property-decorator'
import Router from 'vue-router'
import Course from '@/components/Course.vue'
import CourseList from '@/components/CourseList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'CourseList', component: CourseList },
    {
      path: '/course/:courseId',
      name: 'Course',
      component: Course,
      props: true
    }
  ]
})
