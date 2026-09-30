import React, { useEffect, useRef } from 'react'

// Adds the `in` class once the element scrolls into view.
// The hidden state itself lives in index.css and only applies when the
// user has not requested reduced motion.
function Reveal({ as = 'div', className = '', children, ...rest }) {
  const Tag = as
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('in')
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

export default Reveal
