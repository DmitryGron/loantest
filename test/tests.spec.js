import { shallowMount } from '@vue/test-utils'
import CustomInput from '~/components/CustomInput.vue'
import FormSection from '~/components/FormSection.vue'
import DecisionPage from '~/pages/index.vue'
import { validatePersonalCode, validateLoanAmount, validateLoanPeriod } from '~/validation/inputValidation'

describe('DecisionPage', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(DecisionPage);
    expect(wrapper.vm).toBeTruthy();
  });

  test('renders correctly', () => {
    const wrapper = shallowMount(DecisionPage);
    expect(wrapper.element).toMatchSnapshot();
  })

  test('renders FormSection', () => {
    const wrapper = shallowMount(DecisionPage);
    expect(wrapper.findComponent(FormSection).exists()).toBe(true)
  })
});

describe('CustomInput', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(CustomInput, {
      propsData: {
        label: 'Test Label', // Provide the label prop here
        value: 'Test Value', // Provide the value prop here
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });

  test('renders correctly', () => {
    const wrapper = shallowMount(CustomInput, {
      propsData: {
        label: 'Test Label', // Provide the label prop here
        value: 'Test Value', // Provide the value prop here
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  })

  test('renders label correctly', () => {
    const wrapper = shallowMount(CustomInput, {
      propsData: {
        label: 'Test Label', // Provide the label prop here
        value: 'Test Value', // Provide the value prop here
      },
    });
    expect(wrapper.find('label').text()).toBe('Test Label');
  })

  test('renders value correctly', () => {
    const wrapper = shallowMount(CustomInput, {
      propsData: {
        label: 'Test Label', // Provide the label prop here
        value: 'Test Value', // Provide the value prop here
      },
    });
    expect(wrapper.find('input').element.value).toBe('Test Value');
  })

  test('emits input event when input value changes', async () => {
    const wrapper = shallowMount(CustomInput, {
      propsData: {
        label: 'Test Label', // Provide the label prop here
        value: 'Test Value', // Provide the value prop here
      },
    });
    await wrapper.find('input').setValue('New Value');
    expect(wrapper.emitted('input')).toBeTruthy();
  })
});

describe('validatePersonalCode', () => {
  test('returns true when personal code is valid', () => {
    const personalCode = "12345612345"
    expect(validatePersonalCode(personalCode)).toBe(true)
  })

  test('returns false when personal code is invalid', () => {
    const personalCode = '123456-1234'
    expect(validatePersonalCode(personalCode)).toBe(false)
  })

  test('returns false when personal code is invalid', () => {
    const personalCode = ''
    expect(validatePersonalCode(personalCode)).toBe(false)
  })

  test('returns false when personal code is invalid', () => {
    const personalCode = null
    expect(validatePersonalCode(personalCode)).toBe(false)
  })

  test('returns false when personal code is invalid', () => {
    const personalCode = 'qqqqqqqqqqq'
    expect(validatePersonalCode(personalCode)).toBe(false)
  })
})

describe('validateLoanAmount', () => {
  test('returns true when loan amount is valid', () => {
    const loanAmount = 2000
    expect(validateLoanAmount(loanAmount)).toBe(true)
  })

  test('returns false when loan amount is invalid', () => {
    const loanAmount = 1000
    expect(validateLoanAmount(loanAmount)).toBe(false)
  })

  test('returns false when loan amount is invalid', () => {
    const loanAmount = "aweqweqwe"
    expect(validateLoanAmount(loanAmount)).toBe(false)
  })

  test('returns false when loan amount is invalid', () => {
    const loanAmount = 11000
    expect(validateLoanAmount(loanAmount)).toBe(false)
  })
})

describe('validateLoanPeriod', () => {
  test('returns true when loan period is valid', () => {
    const loanPeriod = 12
    expect(validateLoanPeriod(loanPeriod)).toBe(true)
  })

  test('returns true when loan period is valid', () => {
    const loanPeriod = 60
    expect(validateLoanPeriod(loanPeriod)).toBe(true)
  })

  test('returns false when loan period is invalid', () => {
    const loanPeriod = 0
    expect(validateLoanPeriod(loanPeriod)).toBe(false)
  })

  test('returns false when loan period is invalid', () => {
    const loanPeriod = 61
    expect(validateLoanPeriod(loanPeriod)).toBe(false)
  })
})




