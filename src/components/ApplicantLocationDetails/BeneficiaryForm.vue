<script setup lang="ts">
import { useFormStore } from '@/stores/formStore'

const {
  beneficiaryFirstName,
  beneficiaryLastName,
  beneficiaryIdentificationCode,
  beneficiaryResidency,
  beneficiaryBirthplace,
  beneficiaryBirthdate
} = useFormStore()
</script>

<template>
  <div class="formContainer">
    <div class="row w-100">
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="First name"
          aria-label="First name"
          v-bind="beneficiaryFirstName"
        />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Last name"
          aria-label="Last name"
          v-bind="beneficiaryLastName"
        />
      </div>
    </div>
    <div class="row w-100">
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Personal ID code"
          aria-label="Personal ID code"
          v-bind="beneficiaryIdentificationCode"
        />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Residency"
          aria-label="Residency"
          v-bind="beneficiaryResidency"
        />
      </div>
    </div>
    <div class="row w-100">
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Birth place"
          aria-label="Birth place"
          v-bind="beneficiaryBirthplace"
        />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Birth date"
          aria-label="Birth date"
          v-bind="beneficiaryBirthdate"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.formContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 100%;
}
</style>
