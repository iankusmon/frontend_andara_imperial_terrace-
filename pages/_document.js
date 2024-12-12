import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    // SEO Meta Tags 
    <meta name="description" content="Pavo is a mobile app Tailwind CSS HTML template created to help you present benefits, features and information about mobile apps in order to convince visitors to download them" />
    <meta name="author" content="Your name" />

    // OG Meta Tags to improve the way the post looks when you share the page on Facebook, Twitter, LinkedIn 
    <meta property="og:site_name" content="" /> // website name 
    <meta property="og:site" content="" /> // website link 
    <meta property="og:title" content="" /> // title shown in the actual shared post 
    <meta property="og:description" content="" /> // description shown in the actual shared post 
    <meta property="og:image" content="" /> // image link, make sure it's jpg 
    <meta property="og:url" content="" /> // where do you want your post to link to 
    <meta name="twitter:card" content="summary_large_image" /> // to have large image post format in Twitter 

    // Webpage Title 
    <title>Dashboard</title>

    // Styles 
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
    <link href="https://theb.andararejomakmur.co.id/landing-page/css/fontawesome-all.css" rel="stylesheet" />
    <link href="https://theb.andararejomakmur.co.id/landing-page/css/swiper.css" rel="stylesheet" />
    <link href="https://theb.andararejomakmur.co.id/landing-page/css/magnific-popup.css" rel="stylesheet" />
    <link href="https://theb.andararejomakmur.co.id/landing-page/css/styles.css" rel="stylesheet" />

    // Favicon  
    <link rel="icon" href="https://theb.andararejomakmur.co.id/landing-page/images/favicon.png" />
    <link rel="preload" as="style" href="/build/assets/app-d81f998a.css" /><link rel="stylesheet" href="/build/assets/app-d81f998a.css" /> 
    <style global jsx>{`
        .carousel {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
      }

      /* Carousel Inner */
      .carousel-inner {
          display: flex;
          transition: transform 0.5s ease-in-out;
          /* Tambahkan transisi untuk animasi halus */
          will-change: transform;
          /* Optimize for better performance */
      }

      /* Carousel Items */
      .carousel-item {
          min-width: 100%;
          /* Pastikan setiap slide mengambil 100% dari lebar container */
          transition: opacity 0.5s ease-in-out;
      }

      /* Carousel Images */
      .carousel-item img {
          width: 100%;
          border-radius: 15px;
      }

      /* Carousel Captions */
      .carousel-caption {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background-color: rgba(0, 0, 0, 0.6);
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 16px;
      }

      /* Carousel Controls */
      .carousel-control {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          color: white;
          border: none;
          padding: 12px;
          cursor: pointer;
          font-size: 24px;
          user-select: none;
      }

      .carousel-control.prev {
          left: 10px;
      }

      .carousel-control.next {
          right: 10px;
      }

      .hover\:fill-white:hover {
          fill: white;
      }

      /* Responsive Design */
      @media (max-width: 600px) {
          .carousel-caption {
              font-size: 14px;
              padding: 8px 16px;
          }
      }

      .custom-carousel-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
      }

      .custom-carousel-inner {
          display: flex;
          flex-direction: row;
          transition: transform 0.5s ease-in-out;
      }

      .custom-carousel-item {
          min-width: 100%;
      }

      .custom-carousel-item img {
          width: 100%;
      }

      .custom-carousel-title {
          text-transform: uppercase;
      `}</style>
      <body>
        <Main />
        <NextScript />
      </body>
      <script>
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const carouselInner = document.querySelector('.carousel-inner');

    // Duplicate first and last slides
    const firstSlide = slides[0].cloneNode(true);
    const lastSlide = slides[totalSlides - 1].cloneNode(true);

    // Append duplicate slides to the carousel
    carouselInner.appendChild(firstSlide);
    carouselInner.insertBefore(lastSlide, slides[0]);

    // Adjust initial position to account for the duplicate slide at the start
    carouselInner.style.transform = `translateX(-100%)`;

    // Function to update the slide
    {/* function showSlide(index) {
        carouselInner.style.transition = 'transform 0.5s ease-in-out';
        carouselInner.style.transform = `translateX(${-index * 100}%)`;
    } */}

    // Function to handle the next slide
    {/* function nextSlide() {
        currentSlideIndex++;
        showSlide(currentSlideIndex);

        // Check if we reached the end of the original slides
        if (currentSlideIndex === totalSlides + 1) {
            setTimeout(() => {
                // Reset to the first original slide without animation
                carouselInner.style.transition = 'none';
                currentSlideIndex = 1;
                carouselInner.style.transform = `translateX(-100%)`;
            }, 500); // Delay matches transition duration
        }
    } */}

    // Function to handle the previous slide
    {/* function prevSlide() {
        currentSlideIndex--;
        showSlide(currentSlideIndex);

        // Check if we reached the beginning of the original slides
        if (currentSlideIndex === 0) {
            setTimeout(() => {
                // Reset to the last original slide without animation
                carouselInner.style.transition = 'none';
                currentSlideIndex = totalSlides;
                carouselInner.style.transform = `translateX(${-totalSlides * 100}%)`;
            }, 500); // Delay matches transition duration
        }
    } */}

    // Auto-slide functionality
    setInterval(nextSlide, 2500);

    // Initial display of the first slide
    showSlide(currentSlideIndex + 1);

    let customCurrentSlideIndex = 0;
    const customSlides = document.querySelectorAll('.custom-carousel-item');
    const customTotalSlides = customSlides.length;
    const customCarouselInner = document.querySelector('.custom-carousel-inner');
    const titles = ["Lokasi", "Kawasan", "Tipe", "Spot", "Fasum", "Promo"];
    const titleElement = document.getElementById('carousel-titles');

    {/* function customShowSlide(index) {
        customCarouselInner.style.transition = 'transform 0.5s ease-in-out';
        customCarouselInner.style.transform = `translateX(${index * -100}%)`;

        titleElement.textContent = titles[index];
    } */}

    {/* function customNextSlide() {
        customCurrentSlideIndex++;
        if (customCurrentSlideIndex === customTotalSlides) {
            customCurrentSlideIndex = 0;
        }
        customShowSlide(customCurrentSlideIndex);
    } */}

    // Auto-slide every 2.5 seconds
    setInterval(customNextSlide, 3000);

    // Initialize the first slide
    customShowSlide(customCurrentSlideIndex);
</script>
    </Html>
  );
}
