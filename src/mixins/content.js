export default {
  data () {
    let commonOptions = {
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 8000,
      loop: true,
      centerMode: true,
      paginationColor: 'var(--secondary-content)',
      paginationActiveColor: 'var(--primary-content)',
      paginationPadding: 4,
      paginationSize: 8
    }

    return {
      headSpanSet: [12, 6],
      carouselOptions: {
        perPage: 1,

        ...commonOptions
      },
      carouselGalleryOptions: {
        perPageCustom: [
          [0, 1], // Phones
          [600, 2], // Tablets
          [1200, 3], // Desktops,
          [1800, 4] // Big desktops
        ],

        ...commonOptions
      }
    }
  }
}
