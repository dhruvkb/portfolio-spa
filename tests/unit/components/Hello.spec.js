import { shallowMount } from '@vue/test-utils'

import Hello from '@/components/Hello/Hello'

describe('Hello', () => {
  it('renders message when one is passed', () => {
    const message = 'Hello there!'
    const wrapper = shallowMount(Hello, {
      propsData: { message }
    })
    expect(wrapper.text()).toMatch(message)
  })

  it('renders default message when one is not passed', () => {
    const defaultMessage = 'Hello World!'
    const wrapper = shallowMount(Hello, {
      propsData: {}
    })
    expect(wrapper.text()).toMatch(defaultMessage)
  })
})
