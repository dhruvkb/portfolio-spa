<template>
  <svg
    class="spinner"
    :class="spinnerClasses"
    xmlns="http://www.w3.org/2000/svg"
    width="38"
    height="38"
    viewBox="0 0 38 38">
    <g fill="none" fill-rule="evenodd">
      <g transform="translate(1 1)" stroke-width="2">
        <circle class="track" cx="18" cy="18" r="18"/>
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite"/>
        </path>
      </g>
    </g>
  </svg>
</template>

<script>
  import colored from '@/mixins/colored'

  export default {
    name: 'Spinner',
    mixins: [
      colored
    ],
    computed: {
      spinnerClasses () {
        return [
          ...this.coloredClasses
        ]
      }
    }
  }
</script>

<style scoped lang="scss" src="./Spinner.scss"/>
