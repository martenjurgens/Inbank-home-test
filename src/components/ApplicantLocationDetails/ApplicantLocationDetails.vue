<script setup lang="ts">
import CustomDivider from '@/components/CustomDivider.vue'
import CustomModal from '@/components/CustomModal.vue'
import InfoIcon from '@/components/icons/InfoIcon.vue'
import { useFormStore } from '@/stores/formStore'
import { countryCode } from '@/utils/constants'
import { City, State } from 'country-state-city'
import { Field } from 'vee-validate'
import { computed, ref } from 'vue'
import BeneficiaryFormVue from './BeneficiaryForm.vue'
import PepForm from './PepForm.vue'

const { country, county, city, street, house, apartment, postalCode, storeValues } = useFormStore()

const counties = State.getStatesOfCountry(countryCode)
const allCities = City.getCitiesOfCountry(countryCode)

const countryName = country.value?.name

const filteredCities = computed(() => {
  return storeValues.county
    ? City.getCitiesOfState(countryCode, storeValues.county.isoCode as string)
    : allCities
})

const showModal = ref(false)
const modalHeader = ref('')

function toggleModal(header: string) {
  modalHeader.value = header
  showModal.value = true
}
</script>

<template>
  <div class="mainContainer">
    <div>Personal Information</div>
    <div class="row w-100 gapRow">
      <div class="col p-0">
        <input
          type="text"
          class="form-control shadow-none"
          placeholder="Country"
          aria-label="Country"
          v-model="countryName"
          disabled
        />
      </div>
      <div class="col p-0">
        <Field
          as="select"
          class="form-select shadow-none"
          aria-label="Default select example"
          v-model="county"
          name="county"
        >
          <option disabled selected>County</option>
          <option v-for="county in counties" :value="county" :key="county.isoCode">
            {{ county.name }}
          </option>
        </Field>
      </div>
    </div>

    <div class="row w-100 gapRow">
      <div class="col p-0">
        <Field class="form-select shadow-none" as="select" v-model="city" name="city">
          <option selected disabled>City / Parish</option>
          <option v-for="city in filteredCities" :value="city.name" :key="city.name">
            {{ city.name }}
          </option>
        </Field>
      </div>
      <div class="col p-0">
        <input
          type="text"
          class="form-control shadow-none"
          placeholder="Village / Township"
          aria-label="Village / Township"
        />
      </div>
    </div>

    <div class="row w-100 gapRow">
      <div class="col p-0">
        <input
          type="text"
          class="form-control shadow-none"
          placeholder="Street"
          aria-label="Street"
          v-bind="street"
        />
      </div>

      <div class="col p-0">
        <div class="row">
          <div class="col">
            <input
              type="text"
              class="form-control shadow-none"
              placeholder="House"
              aria-label="House"
              v-bind="house"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control shadow-none"
              placeholder="Apartment"
              aria-label="Apartment"
              v-bind="apartment"
            />
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control shadow-none"
              placeholder="Postal Code"
              aria-label="Postal Code"
              v-bind="postalCode"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="divider w-100">Or</div> -->
    <CustomDivider text="Or" margin="10px" />
    <div class="form-check form-switch">
      <input
        class="form-check-input shadow-none"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
      />
      <label class="form-check-label" for="flexSwitchCheckDefault">Add address manually</label>
    </div>
    <CustomDivider />

    <div class="form-check w-100">
      <Field
        name="nonPep"
        v:model="nonPep"
        type="checkbox"
        class="form-check-input"
        as="input"
        id="nonPep"
        :value="storeValues.nonPep"
      >
      </Field>
      <label class="form-check-label" for="nonPep"> Neither I nor my family member is a PEP </label>
      <button class="infoButton" type="button" id="show-modal" @click="toggleModal('PEP')">
        <InfoIcon />
      </button>
    </div>

    <PepForm v-if="!storeValues.nonPep" />

    <div class="form-check w-100">
      <Field
        name="isBeneficiary"
        v:model="isBeneficiary"
        type="checkbox"
        class="form-check-input"
        as="input"
        id="isBeneficiary"
        :value="storeValues.isBeneficiary"
      >
      </Field>
      <label class="form-check-label" for="isBeneficiary"> I'm the ultimate beneficiary </label>
      <button
        class="infoButton"
        type="button"
        id="show-modal"
        @click="toggleModal('ULTIMATE BENEFICIARY')"
      >
        <InfoIcon />
      </button>
    </div>

    <BeneficiaryFormVue v-if="!storeValues.isBeneficiary" />
  </div>

  <Teleport to="body">
    <CustomModal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>{{ modalHeader }}</h3>
      </template>
    </CustomModal>
  </Teleport>
</template>

<style scoped>
.mainContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 100%;
}

.gapRow {
  gap: 21px;
}

.infoButton {
  background-color: transparent;
  border: none;
  color: white;
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.form-check .form-check-input {
  background-color: transparent;
  border-color: #413c3c;
}

.form-check .form-check-input:checked {
  color: red;
  background-color: transparent;
  border-color: #5948ad;
  --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%235948ad' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e") !important;
}

.form-switch .form-check-input:checked {
  background-color: #53cba0;
  border-color: #53cba0;
}
</style>
