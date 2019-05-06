<template>
  <div class="course">
    <h1>Title: {{course.title}}</h1>
    <!-- {{course.units.edges}} -->
    <ul v-if="course.units && course.units.edges">
      <li class="edge" v-for="(edge,i) in course.units.edges" :key="i">
        <h3>Edge {{i+1}}</h3>
        <ul>
          <li class="section" v-for="(section,j) in edge.node.sections_list" :key="j">
            <h4>Section {{j+1}}</h4>
            <ul class="card-list">
              <li class="card" v-for="(cards,k) in section.cards_list" :key="k">
                <b>Title:</b>
                {{cards.title}} -
                <a :href="cards.github_edit_url">GitHub Link</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Course",
  props: ["courseId"],
  computed: {
    ...mapGetters([
      "course"
      // ...
    ])
  },
  mounted() {
    this.$store.dispatch("getCourse", this.courseId);
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
  padding: 20px;
  text-align: left;
}
ul.card-list {
  list-style-type: decimal;
}
ul.card-list li {
  margin-bottom: 10px;
}
li {
  display: block;
  margin: 0 10px;
  padding-left: 20px;
}
a {
  color: #42b983;
}
</style>
