<script setup lang="ts">
import { useFormStore } from '@/stores/formStore'
import { toTypedSchema } from '@vee-validate/zod'

import { useForm } from 'vee-validate'
import { computed } from 'vue'
import { z } from 'zod'

const emit = defineEmits(['applyChanges'])

function toggleEditMode() {
  emit('applyChanges')
}

const { setStoreFieldValue, storeValues } = useFormStore()

const formSchema = toTypedSchema(
  z.object({
    newAmount: z.number().refine((value) => value >= 200 && value <= 10000, {
      message: 'Out of range'
    }),
    newDuration: z.number().refine((value) => value >= 3 && value <= 48, {
      message: 'Out of range'
    })
  })
)

const { defineInputBinds, handleSubmit, errors } = useForm({
  validationSchema: formSchema,
  initialValues: {
    newDuration: storeValues.duration,
    newAmount: storeValues.amount
  }
})

const newAmount = defineInputBinds('newAmount')
const newDuration = defineInputBinds('newDuration')

const applyChanges = handleSubmit((values) => {
  setStoreFieldValue('amount', values.newAmount)
  setStoreFieldValue('duration', values.newDuration)
  toggleEditMode()
})

const durationOptions = Array.from({ length: 16 }, (_, index) => 3 + index * 3)
const amountOptions: number[] = []

for (let i = 200; i <= 1000; i += 50) {
  amountOptions.push(i)
}

for (let i = 1100; i <= 10000; i += 100) {
  amountOptions.push(i)
}

const monthlyPayment = computed(() => {
  const amount = newAmount.value.value
  const duration = newDuration.value.value
  if (duration !== 0) {
    // TODO - FIX ANY
    return ((amount as any) / (duration as any)).toFixed(2)
  } else {
    return '0.00'
  }
})
</script>

<template>
  <form class="d-flex flex-column flex-md-row align-items-center purpleInner w-100">
    <div class="d-flex flex-column flex-md-row align-items-center placeholderName">
      <div class="labelContainer">
        <label for="amount" class="thirdText">Amount</label>
        <span class="errorMessage">{{ errors.newAmount }}</span>
      </div>

      <select class="form-select formInput" id="amount" v-bind="newAmount">
        <option selected class="formOption">Choose...</option>
        <option v-for="option in amountOptions" :value="option" :key="option" class="formOption">
          {{ option }}
        </option>
      </select>

      <div class="labelContainer">
        <label for="duration" class="thirdText">Duration</label>
        <span class="errorMessage">{{ errors.newDuration }}</span>
      </div>

      <select class="form-select formInput" id="duration" v-bind="newDuration">
        <option selected class="formOption">Choose...</option>
        <option v-for="option in durationOptions" :value="option" :key="option" class="formOption">
          {{ option }}
        </option>
      </select>

      <div class="monthlyPayment">
        <div class="thirdText">Monthly payment</div>
        <div class="paymentAmountContaienr">
          <div class="paymentText">{{ monthlyPayment }}</div>
          <div class="currencySign">€</div>
        </div>
      </div>
    </div>

    <button
      type="button"
      class="btn applyButton d-flex justify-content-center align-items-center"
      @click="applyChanges"
    >
      <i class="bi bi-chevron-right"></i>
    </button>
  </form>
</template>

<style scoped>
.labelContainer {
  display: flex;
  flex-direction: column;
}

.errorMessage {
  font-weight: 300;
  font-size: 10px;
  line-height: 24px;
  color: #eb5757;
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
.paymentAmountContaienr {
  display: flex;
}

.purpleInner {
  position: relative;
  justify-content: center;
}

.placeholderName {
  gap: 20px;
}

.currencySign {
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
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

.formInput {
  color: white;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  border-bottom: 1px;
  border-style: solid;
  border-color: white;
  width: 100px;
}

.formOption {
  color: black;
}

.thirdText {
  color: white;
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  word-wrap: break-word;
}
.paymentText {
  color: white;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
}

.applyButton {
  background-color: white;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  transition: box-shadow 0.3s;
  position: absolute;
  right: 0px;
}

.applyButton:hover {
  box-shadow: 0px 1px 14px 0px #5948ad;
}
</style>
