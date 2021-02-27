const NAVS_ANIMATION = {
  unMounted: { y: -20, opacity: 0 },
  mounted: {
    y: 0,
    opacity: 1,
    transition: {
      ...{ type: 'spring', mass: 1.3 },
      mass: 0.8
    }
  }
}

export default NAVS_ANIMATION
