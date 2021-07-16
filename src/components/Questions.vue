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
        <v-row>
          <v-col
            v-for="answer in question.answers"
            :key="answer._id"
            cols="6"
            :class="{
              'green--text': answer.isCorrect,
              'red--text': !answer.isCorrect,
            }"
            class="answer-box"
          >
            {{ answer.text }}
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
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
.answer-box {
}
</style>
