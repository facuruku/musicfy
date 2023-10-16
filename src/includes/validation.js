import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minValue,
  max_value as maxValue,
  confirmed,
  not_one_of as excluded
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('tos', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('email', email)
    defineRule('min_value', minValue)
    defineRule('max_value', maxValue)
    defineRule('passwords_missmatch', confirmed)
    defineRule('excluded', excluded)
    defineRule('country_excluded', excluded)

    configure({
      generateMessage: (context) => {
        const messages = {
          required: `The field ${context.field} is required.`,
          min: `The field ${context.field} must have at least ${context.rule.params} characters.`,
          max: `The field ${context.field} maximun length is ${context.rule.params}.`,
          alpha_spaces: `The field ${context.field} may only contain alphabetical characters and spaces.`,
          email: `The field ${context.field} must be a valid email.`,
          min_value: `The field ${context.field} is too low.`,
          max_value: `The field ${context.field} is too high.`,
          excluded: `You are not allowed to use this value for the field ${context.field}.`,
          country_excluded: `Due to restrictions, we do not accept users from this location: ${context.value}.`,
          passwords_missmatch: `The passwords don't match`,
          tos: 'You must accept the Terms of Service.'
        }

        const message = messages[context.rule.name]
          ? messages[context.rule.name]
          : `The field ${context.field} is invalid.`

        return message
      }
    })
  }
}
