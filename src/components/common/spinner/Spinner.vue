<template>
  <svg
    class="spinner"
    :class="spinnerClasses"
    xmlns="http://www.w3.org/2000/svg"
    width="38"
    height="38"
    viewBox="0 0 38 38">
    <defs>
      <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
        <stop stop-color="var(--spinner-color)" offset="0%" stop-opacity="0" />
        <stop stop-color="var(--spinner-color)" offset="66.667%" stop-opacity=".631"/>
        <stop stop-color="var(--spinner-color)" offset="100%"/>
      </linearGradient>
    </defs>
    <g transform="translate(1 1)" fill-rule="evenodd">
      <circle class="track" cx="18" cy="18" r="18"/>
      <path class="runner tail" d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)"/>
      <circle class="runner head" cx="36" cy="18" r="1"/>
    </g>
  </svg>
</template>

<script>
  import colored from '@/mixins/colored'

  /**
   * This is the beautiful spinner that should be used everywhere.
   */
  export default {
    name: 'Spinner',
    mixins: [
      colored
    ],
    computed: {
      /**
       * Get the classes to use on the spinner.
       * @returns {Array} an array of all the classes to apply on the element
       */
      spinnerClasses () {
        return [
          ...this.coloredClasses
        ]
      }
    }
  }
</script>

<style scoped lang="scss" src="./Spinner.scss"/>
