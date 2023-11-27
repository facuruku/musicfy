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
  el.classList.add('fa', `fa-${binding.value}`)

  if (binding.arg === 'full') {
    el.classList = ''
    el.classList.add(binding.value)
  }

  if (binding.arg === 'button') {
    el.classList.add('hover:scale-110')
  }
}
