<script setup lang="ts">
import { useFormStore } from '@/stores/formStore'

const emit = defineEmits(['applyChanges'])

function toggleEditMode() {
  emit('applyChanges')
}

const { phone, email, storeErrors } = useFormStore()

const applyChanges = async () => {
  toggleEditMode()
  // TODO - Display errors, validate
}
</script>

<template>
  <div class="d-flex flex-row">
    <span>Change your contact info</span>
    <span class="errorMessage">{{ storeErrors.phone ?? storeErrors.email }}</span>
  </div>
  <div class="d-flex flex-row align-items-center justify-content-center gap-3">
    <div class="iconContainer">
      <i class="bi bi-telephone"></i>
      <input
        type="text"
        class="form-control customTextfield shadow-none"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter phone"
        v-bind="phone"
      />
    </div>
    <div class="iconContainer">
      <i class="bi bi-envelope"></i>
      <input
        type="email"
        class="form-control customTextfield shadow-none"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-bind="email"
      />
    </div>
  </div>
  <button
    type="button"
    class="btn d-flex justify-content-center align-items-center applyButton"
    @click="applyChanges"
  >
    <i class="bi bi-chevron-right"></i>
  </button>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 105px;
  border: 5px solid #f3eefb;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0;
}

.errorMessage {
  font-weight: 300;
  font-size: 10px;
  line-height: 24px;
  color: #eb5757;
}

.iconContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
}

.iconContainer .form-control:hover {
  border-color: #2b0a57;
}

.applyButton {
  color: white;
  background-color: #2b0a57;
  width: 34px;
  height: 34px;
  border-radius: 50%;
}

.applyButton:hover {
  background-color: white;
  color: #2b0a57;
}

.customTextfield {
  color: black;
  border-radius: 0;
  background-color: transparent;
  outline: 0;
  border-width: 0 0 1px;
  border-color: #9c9c9c;
  padding: 0;
}
</style>
