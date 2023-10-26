import { countryCode } from '@/utils/constants'
import { toTypedSchema } from '@vee-validate/zod'
import { Country, type ICountry } from 'country-state-city'
import { defineStore } from 'pinia'
import { useForm } from 'vee-validate'
import { z } from 'zod'

const formSchema = toTypedSchema(
  z.object({
    amount: z.number().refine((value) => value >= 200 && value <= 10000, {
      message: 'Amount must be between 200 and 10,000'
    }),
    duration: z.number(),
    name: z.string(),
    identificationCode: z.string(),
    phone: z.string().min(5, { message: 'You must enter a password' }),
    email: z.string().email('Incorrect email'),
    country: z.object({
      name: z.string(),
      isoCode: z.string()
    }),
    county: z.object({
      countryCode: z.string(),
      isoCode: z.string(),
      name: z.string()
    }),
    city: z.string(),
    village: z.string(),
    street: z.string(),
    house: z.string(),
    apartment: z.string(),
    postalCode: z.string(),
    isManualAddressEntry: z.boolean(),
    nonPep: z.boolean(),
    pepRelationship: z.string(),
    pepRegion: z.string(),
    pepPosition: z.string(),
    pepDuration: z.string(),
    isBeneficiary: z.boolean(),
    beneficiaryFirstName: z.string(),
    beneficiaryLastName: z.string(),
    beneficiaryIdentificationCode: z.string(),
    beneficiaryResidency: z.string(),
    beneficiaryBirthplace: z.string(),
    beneficiaryBirthdate: z.string()
  })
)

const currentCountry = Country.getCountryByCode(countryCode)

export const useFormStore = defineStore('form', () => {
  const { defineInputBinds, handleSubmit, errors, values, setFieldValue, validate } = useForm({
    validationSchema: formSchema,
    initialValues: {
      amount: 0,
      duration: 0,
      name: 'Anna Maria Tamm Rodriguez Espinosa',
      identificationCode: '38912052254',
      phone: '+37252896572',
      email: 'anna.tamm@gmail.com',
      country: currentCountry as ICountry,
      county: {
        name: '',
        countryCode: '',
        isoCode: ''
      },
      city: '',
      village: '',
      street: '',
      house: '',
      apartment: '',
      postalCode: '',
      isManualAddressEntry: false,
      nonPep: true,
      pepRelationship: '',
      pepDuration: '',
      pepPosition: '',
      pepRegion: '',
      beneficiaryFirstName: '',
      beneficiaryLastName: '',
      beneficiaryIdentificationCode: '',
      beneficiaryResidency: '',
      beneficiaryBirthplace: '',
      beneficiaryBirthdate: '',
      isBeneficiary: true
    }
  })

  const amount = defineInputBinds('amount')
  const duration = defineInputBinds('duration')
  const name = defineInputBinds('email')
  const identificationCode = defineInputBinds('identificationCode')
  const phone = defineInputBinds('phone')
  const email = defineInputBinds('email')
  const country = defineInputBinds('country')
  const county = defineInputBinds('county')
  const city = defineInputBinds('city')
  const village = defineInputBinds('village')
  const street = defineInputBinds('street')
  const house = defineInputBinds('house')
  const apartment = defineInputBinds('apartment')
  const postalCode = defineInputBinds('postalCode')
  const nonPep = defineInputBinds('nonPep')
  const pepRelationship = defineInputBinds('pepRelationship')
  const pepDuration = defineInputBinds('pepDuration')
  const pepPosition = defineInputBinds('pepPosition')
  const pepRegion = defineInputBinds('pepRegion')
  const beneficiaryFirstName = defineInputBinds('beneficiaryFirstName')
  const beneficiaryLastName = defineInputBinds('beneficiaryLastName')
  const beneficiaryIdentificationCode = defineInputBinds('beneficiaryIdentificationCode')
  const beneficiaryResidency = defineInputBinds('beneficiaryResidency')
  const beneficiaryBirthplace = defineInputBinds('beneficiaryBirthplace')
  const beneficiaryBirthdate = defineInputBinds('beneficiaryBirthdate')
  const isBeneficiary = defineInputBinds('isBeneficiary')

  const onSubmit = handleSubmit((values) => {
    console.log('submitting', values)
    alert(JSON.stringify(values, null, 2))
  })

  return {
    storeErrors: errors,
    storeValues: values,
    onSubmit,
    setStoreFieldValue: setFieldValue,
    validate,
    amount,
    duration,
    name,
    identificationCode,
    phone,
    email,
    country,
    county,
    city,
    village,
    street,
    house,
    apartment,
    postalCode,
    nonPep,
    pepRelationship,
    pepDuration,
    pepPosition,
    pepRegion,
    isBeneficiary,
    beneficiaryFirstName,
    beneficiaryLastName,
    beneficiaryIdentificationCode,
    beneficiaryResidency,
    beneficiaryBirthplace,
    beneficiaryBirthdate
  }
})
