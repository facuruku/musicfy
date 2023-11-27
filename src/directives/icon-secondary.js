export default {
  beforeMount(el, binding) {
    updateIconClasses(el, binding)
  },
  updated(el, binding) {
    updateIconClasses(el, binding)
  }
}

function updateIconClasses(el, binding) {
  // Filter out classes that start with 'fa-' to remove previous icon classes
  el.classList = el.className
    .split(' ')
    .filter((className) => !className.startsWith('fa'))
    .join(' ')
  el.classList.add('fa', `fa-${binding.value.icon}`)

  if (binding.value.full) {
    el.classList = ''
    el.classList.add(binding.value)
  }

  if (binding.value.button) {
    el.classList.add('hover:scale-110')
  }
}
