export default {
  data () {
    return {
      observerOptions: {
        callback: this.intersectionChanged,
        once: true,
        intersection: { // Triggered when 3em of the content is visible
          rootMargin: '0px 0px -48px 0px', // Only px or % values are allowed
          threshold: 0.0
        }
      },
      isIntersected: false
    }
  },
  computed: {
    /**
     * _the classes describing the whether a component is above the fold_
     */
    intersectableClasses () {
      return {
        intersected: this.isIntersected
      }
    }
  },
  methods: {
    /**
     * Set the components's visibility status as sent by the observer.
     * @param {boolean} isIntersected - the new visibility status of the component
     */
    intersectionChanged (isIntersected) {
      if (isIntersected) {
        this.isIntersected = true
      }
    }
  }
}
