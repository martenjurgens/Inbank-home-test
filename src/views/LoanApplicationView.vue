<script setup lang="ts">
import LoanDetails from '@/components/LoanDetails/LoanDetails.vue'
import ApplicantDetails from '@/components/ApplicantDetails/ApplicantDetails.vue'
import ApplicantLocationDetails from '@/components/ApplicantLocationDetails/ApplicantLocationDetails.vue'

import { useFormStore } from '@/stores/formStore'

const { onSubmit } = useFormStore()
</script>

<template>
  <div class="page-container">
    <main>
      <form class="d-flex flex-column justify-content-center align-items-center">
        <LoanDetails />
        <ApplicantDetails />
        <ApplicantLocationDetails />
        <button type="button" @click="onSubmit" class="btn continueBtn">Continue</button>
      </form>
    </main>
  </div>
</template>

<style scoped>
.page-container {
  max-width: 764px;
  margin: 0 auto;
}

main {
  display: flex;
  flex-direction: column;
  padding-top: 67px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.continueBtn {
  width: 372px;
  height: 48px;
  background-color: #2b0a57;
  color: white;
}
</style>
