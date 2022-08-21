export const getCurrentBreakpoint = (windowWidth, breakpoints) => {
  const removePx = value => Number(value.replace('px', ''))
  return Object.keys(breakpoints).find(((breakpoint, index) => {
    const { min, max } = breakpoints[breakpoint]
    const minWithoutPx = min && removePx(min)
    const maxWithoutPx = max && removePx(max)

    if(index === 0) return 0 < windowWidth && windowWidth < maxWithoutPx
    if(index === breakpoints.length - 1) return windowWidth >= minWithoutPx

    return minWithoutPx < windowWidth && windowWidth < maxWithoutPx
  }))
}

export const isMobile = (breakpoint) => breakpoint === 'mobile'