<template>
  <div class="flex flex-col justify-center items-center mt-10 gap-5 w-full">
    <InfoSection />

    <FormSection @submit="submitForm">
      <CustomInput
        v-model="personalCode"
        label="Personal Code:"
        required
        :validate="validatePersonalCode"
      />
      <CustomInput
        v-model.number="loanAmount"
        label="Loan Amount (€):"
        required
        :validate="validateLoanAmount"
      />
      <CustomInput
        v-model.number="loanPeriod"
        label="Loan Period (months):"
        required
        :validate="validateLoanPeriod"
      />
    </FormSection>

    <ResultSection v-if="answer" :answer="answer" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import CustomInput from "~/components/CustomInput.vue";
import FormSection from "~/components/FormSection.vue";
import InfoSection from "~/components/InfoSection.vue";
import ResultSection from "~/components/ResultSection.vue";
import { Answer } from "~/types/types";
import {
  validatePersonalCode,
  validateLoanAmount,
  validateLoanPeriod,
} from "~/validation/inputValidation";

export default Vue.extend({
  name: "DecisionPage",
  components: { CustomInput, FormSection, InfoSection, ResultSection },
  data() {
    return {
      personalCode: "",
      loanAmount: 0,
      loanPeriod: 0,
      answer: null as Answer,
    };
  },
  watch: {
    personalCode: "resetAnswer",
    loanAmount: "resetAnswer",
    loanPeriod: "resetAnswer",
  },
  methods: {
    async submitForm() {
      try {
        if (!validatePersonalCode(this.personalCode)) {
          this.answer = {
            decision: "negative",
            message: "Personal code must be 11 characters long",
            amount: 0,
            period: 0,
          };
          return this.answer;
        }
        if (!validateLoanAmount(this.loanAmount)) {
          this.answer = {
            decision: "negative",
            message: "Loan amount must be between 2000 and 10000 €",
            amount: 0,
            period: 0,
          };
          return this.answer;
        }
        if (!validateLoanPeriod(this.loanPeriod)) {
          this.answer = {
            decision: "negative",
            message: "Loan period must be between 12 and 60 months",
            amount: 0,
            period: 0,
          };
          return this.answer;
        }
        const response = await axios.post(
          "http://localhost:3001/api/decision",
          {
            personalCode: this.personalCode,
            loanAmount: this.loanAmount,
            loanPeriod: this.loanPeriod,
          }
        );
        this.answer = response.data;
      } catch (error) {
        this.answer = null;
      }
    },
    resetAnswer() {
      this.answer = null;
    },
    validateLoanAmount,
    validatePersonalCode,
    validateLoanPeriod,
  },
});
</script>
