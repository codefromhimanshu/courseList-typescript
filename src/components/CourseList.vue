<template>
  <div class="course">
    <ul>
      <li class="col-sm-4" v-for="course in getCourses" :key="course.node.id">
        <router-link :to="'/course/'+course.node.id" class="card">
          <img :src="course.node.logo_url">
          <h4>{{course.node.title}}</h4>
          <div>{{course.node.headline}}</div>
          <div>{{course.node.est_minutes}} Minutes</div>
        </router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CourseList",
  props: {
    msg: String
  },
  computed: {
    ...mapGetters([
      "getCourses"
      // ...
    ])
  },
  mounted() {
    this.$store.dispatch("listCourses");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
