export default {
  data () {
    return {
      headSpanSet: [12, 6],
      carouselOptions: {
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 8000,
        loop: true,
        perPage: 1,
        centerMode: true,
        paginationColor: 'var(--secondary-content)',
        paginationActiveColor: 'var(--primary-content)',
        paginationPadding: 4,
        paginationSize: 8
      }
    }
  }
}
