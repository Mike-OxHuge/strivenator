<template>
  <v-container>
    <v-row>
      <v-col
        cols="6"
        sm="12"
        md="6"
        v-for="question in questions"
        :key="question._id"
        >{{ question.text }}
        <v-row>
          <v-col
            v-for="answer in question.answers"
            :key="answer._id"
            cols="6"
            :class="{
              'green--text': answer.isCorrect,
              'red--text': !answer.isCorrect,
            }"
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

<style></style>
