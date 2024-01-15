import NProgress from 'nprogress'

NProgress.configure({
  showSpinner: false,
  easing: 'ease'
})

export default (router) => {
  router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
  })

  router.afterEach(NProgress.done)
}
