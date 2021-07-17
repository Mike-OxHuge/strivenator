<template>
  <v-row>
    <v-col
      v-for="answer in answers"
      :key="answer._id"
      cols="6"
      :class="{
        'green--text': answer.isCorrect,
        'red--text': !answer.isCorrect,
      }"
    >
      {{ answer.text }}
      <div v-for="providedAnswer in providedAnswers" :key="providedAnswer.i">
        <span v-if="providedAnswer === answer._id" class="provided-answer"
          >YOUR ANSWER</span
        >
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    providedAnswers: Array,
    answers: Array,
  },
};
</script>

<style>
.provided-answer {
  background: blue;
  color: black;
}
</style>
