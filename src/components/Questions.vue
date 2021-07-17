<template>
  <v-container>
    <v-row>
      <v-col
        cols="6"
        sm="12"
        md="6"
        v-for="question in questions"
        :key="question._id"
        class="whole-box"
      >
        <h4 class="mb-5">{{ question.text }}</h4>
        <v-img v-if="question.img" :src="question.img"></v-img>
        <Answers
          :providedAnswers="question.providedAnswer"
          :answers="question.answers"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Answers from "./Answers.vue";
export default {
  components: {
    Answers,
  },
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.whole-box {
  border: 1px grey solid;
}
</style>
