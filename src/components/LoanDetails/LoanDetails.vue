<script setup lang="ts">
import { useFormStore } from '@/stores/formStore'
import { ref } from 'vue'
import EditView from './EditView.vue'

const { storeValues } = useFormStore()

const editMode = ref(true)

const toggleEditMode = () => {
  editMode.value = !editMode.value
}
</script>

<template>
  <div class="mainContainer">
    <div
      v-if="editMode"
      class="d-flex flex-column flex-md-row align-items-center purpleInner w-100"
    >
      <EditView @apply-changes="toggleEditMode" />
    </div>

    <div
      v-if="!editMode"
      class="d-flex flex-row flex-md-row justify-content-center align-items-center w-100"
    >
      <div>
        <button
          class="btn d-flex justify-content-center align-items-center disableStyles"
          @click="toggleEditMode"
        >
          <i class="bi bi-chevron-left" style="color: white"></i>
        </button>
      </div>
      <div class="d-flex flex-row justify-content-center align-items-center w-100 gap-2">
        <div class="purpleBarText">Your loan application</div>
        <div class="d-flex flex-row justify-content-center align-items-center gap-1">
          <div class="amountDurationText">
            {{ storeValues.amount }}€ / {{ storeValues.duration }}
          </div>
          <div class="monthsText">months</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mainContainer {
  display: flex;
  width: 100%;
  height: 58px;
  background-color: #2b0a57;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  padding-right: 12px;
  padding-top: 9px;
  padding-bottom: 9px;
}

.monthsText {
  font-size: 14px;
  line-height: 24px;
  font-weight: 300;
  color: #fdfdfd;
}

.amountDurationText {
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  color: #fdfdfd;
}

.monthlyPayment {
  display: flex;
  border-radius: 30px;
  background-color: #3a156c;
  align-items: center;
  padding-left: 13px;
  padding-right: 13px;
  padding-top: 8px;
  padding-bottom: 8px;
  gap: 9px;
}

.purpleInner {
  position: relative;
  justify-content: center;
}

input,
p {
  color: white !important;
}

label,
p {
  color: #dedede !important;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
}

.purpleBarText {
  color: white;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  word-wrap: break-word;
}

.disableStyles {
  transition: none;
  background-color: transparent;
  border: none;
  color: white;
}
</style>
