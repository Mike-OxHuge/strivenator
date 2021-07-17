<template>
  <v-container>
    <div class="text-center">
      <h2 v-if="!isFetched">Exam checker.</h2>
      <div v-else>
        <h2>Your position (so far) is {{ position }} out of {{ total }}</h2>
        <h3>Your batch: {{ batch }}</h3>
        <h4>The module: {{ module }}</h4>
        <h3>Topics of this exam:</h3>
        <ul>
          <li v-for="topic in topics" :key="topic.i">{{ topic }}</li>
        </ul>
      </div>
    </div>
    <v-container fluid v-if="!isFetched">
      <v-form v-model="valid">
        <v-row justify="center">
          <v-col cols="12" md="6" class="mx-auto">
            <v-text-field
              outlined
              label="Exam ID"
              placeholder="Exam ID"
              hint="It can be found at the end of the URL on the page after finishing an exam."
              v-model="examId"
              :counter="1000"
              :rules="examRules"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6" class="mx-auto">
            <v-text-field
              outlined
              label="Access token"
              v-model="accessToken"
              :rules="accessTokenRules"
              :counter="1000"
              required
              placeholder="Access token"
              hint="See the user manual for details"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="6" class="mx-auto text-center">
            <v-btn
              @click="handleSubmit()"
              :disabled="!valid"
              :loading="isLoading"
              color="primary"
              outlined
            >
              <span class="font-weight-black px-1">Fetch</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
    <Questions v-else :questions="exam" />
    <v-alert v-if="error" type="error"
      >An error has occured. Please make sure you inserted correct data and try
      again.</v-alert
    >
  </v-container>
</template>

<script>
import Questions from "./Questions.vue";

export default {
  components: { Questions },
  mounted: function () {
    //
  },
  name: "HelloWorld",

  // data: () => ({
  //   // just another way to have state
  // }),
  data() {
    return {
      error: false,
      isFetched: false,
      exam: [],
      topics: [],
      position: null,
      total: null,
      batch: "",
      module: "",
      valid: false,
      accessToken: "",
      accessTokenRules: [
        (v) => !!v || "Access token is required",
        (v) =>
          v.length <= 1000 || "Access token can't be more than 1000 characters",
      ],
      examId: "",
      examRules: [
        (v) => !!v || "ExamID is required",
        (v) => v.length <= 1000 || "ExamID can't be more than 1000 characters",
      ],
      isLoading: false,
    };
  },
  methods: {
    async handleSubmit() {
      this.isLoading = true;
      try {
        const getTheExam = await fetch(
          `https://striveschool-benchmark-be.herokuapp.com/exams/position/${this.examId}`,
          {
            method: "GET",
            headers: {
              authorization: "Bearer " + this.accessToken,
            },
          }
        );
        if (getTheExam.ok) {
          const examResults = await getTheExam.json();
          this.isLoading = false;
          this.isFetched = true;
          this.exam = examResults.exam.questions;
          this.topics = examResults.exam.topics;
          this.position = examResults.position;
          this.total = examResults.total;
          this.batch = examResults.exam.batch;
          this.module = examResults.exam.module;
        } else {
          this.error = true;
          this.isLoading = false;
        }
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
  },
};
</script>
