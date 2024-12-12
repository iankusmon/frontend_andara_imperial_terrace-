import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Villa = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");

        const response = await fetch(`http://localhost:3000/api/house_units`);
        console.log("Response received:", response); // Log response

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log("Data received:", result);  // Log data hasil parsing JSON

        setData(result.data);  // Update state dengan data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log("Fetched data in state:", data); // Log data yang ada di state

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <> 
     {/* Navigation */}

     <nav class="navbar fixed-top xl:pl-10 xl:pr-10">
        <div class="bg-red-800 rounded-full h-12 container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
            // Image Logo 
            <a class="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline" href="index.html">
                <img src="https://theb.andararejomakmur.co.id/landing-page/images/logo-menu.png" alt="alternative" class="h-0 md:h-14 md:mb-[6px] lg:xl:h-16 lg:xl:mb-[15px]" />
            </a>

            <button class="background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400" type="button" data-toggle="offcanvas">
                <span class="navbar-toggler-icon inline-block w-8 h-8 align-middle"></span>
            </button>

            <div class="navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center" id="navbarsExampleDefault">
                <ul class="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
                    <li>
                        <a class="nav-link page-scroll active text-white" href="#header">Beli Sekarang <span class="sr-only">(current)</span></a>
                    </li>
                    <li>
                        <a class="nav-link page-scroll text-white" href="#features">Join Us</a>
                    </li>
                    <li>
                        <a class="nav-link page-scroll text-white" href="#details">Tipe Unit</a>
                    </li>
                    <li class="dropdown">
                        <a class="nav-link dropdown-toggle text-white" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tentang Kami</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown01">
                            <a class="dropdown-item page-scroll" href="article.html">Article Details</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item page-scroll" href="terms.html">Terms Conditions</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item page-scroll" href="privacy.html">Privacy Policy</a>
                        </div>
                    </li>
                    <li>
                        <a class="nav-link page-scroll text-white" href="#download">Hubungi Kami</a>
                    </li>
                </ul>
            </div> // end of navbar-collapse 
        </div> // end of container 
    </nav> // end of navbar 

    {/* Features */}
    <div id="features" class="px-4 mt-10">
        <div class="container px-4 sm:px-8 xl:px-4">
            <div class="custom-carousel-title text-start font-bold text-black ml-4 md:ml-6 lg:xl:ml-8 mb-3" id="carousel-titles">Spot</div>
            <div class="custom-carousel-wrapper">
                <div class="custom-carousel-inner">
                     Slide 
                    <div class="custom-carousel-item grid grid-cols-2 gap-2 md:lg:xl:grid-cols-4 md:lg:xl:gap-4">
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/lokasi1.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                         Card 2 
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/lokasi2.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                         Card 3 
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/lokasi3.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                         Card 4 
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/lokasi4.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                    </div>

                     Slide 2 
                    <div class="custom-carousel-item grid grid-cols-2 gap-2 md:lg:xl:grid-cols-4 md:lg:xl:gap-4">
                         Card 5 
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/kawasan1.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                         Add additional cards as needed 
                         Card 6 
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/kawasan2.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                         Card 7 
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/kawasan3.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                         Card 8 
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/kawasan4.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                    </div>
                     Slide 3 
                    <div class="custom-carousel-item grid grid-cols-2 gap-2 md:lg:xl:grid-cols-4 md:lg:xl:gap-4">
                         Card 9 
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/tipe1.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                         Add additional cards as needed 
                         Card 10 
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/tipe2.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                         Card 1
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/tipe3.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                         Card 12 
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/tipe4.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                    </div>
                     Slide 4 
                    <div class="custom-carousel-item grid grid-cols-2 gap-2 md:lg:xl:grid-cols-4 md:lg:xl:gap-4">
                         Card 13 
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/spot1.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                         Add additional cards as needed 
                         Card 14 
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/spot2.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                         Card 15 
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/spot3.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                         Card 16 
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/spot4.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                    </div>
                     Slide 5 
                    <div class="custom-carousel-item grid grid-cols-2 gap-2 md:lg:xl:grid-cols-4 md:lg:xl:gap-4">
                         Card 17 
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/fasum1.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                         Add additional cards as needed 
                         Card 17 
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/fasum2.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                         Card 18 
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/fasum3.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                         Card 19 
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/fasum4.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                    </div>
                     Slide 6 
                    <div class="custom-carousel-item grid grid-cols-2 gap-2 md:lg:xl:grid-cols-4 md:lg:xl:gap-4">
                         Card 20 
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/promo1.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                         Add additional cards as needed 
                         Card 2
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/promo2.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                         Card 22 
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/promo3.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                         Card 23 
                        <div class="p-0 m-0">
                            <div class="w-full">
                                <img src="https:theb.andararejomakmur.co.id/landing-page/images/carousel-item/promo4.png" width="100%" alt="alternative" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>



    {/* Details */}
    <div id="details" class="pt-12 pb-16 lg:pt-16">
        <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
            <div class="lg:col-span-6">
                <div class="mb-16 lg:mb-0">
                    <h2 class="text-xl font-bold">Spot Instagram-Able</h2>
                    <p class="mt-2 text-justify text-black">Terletak disekitar kawasan bisnis Yogyakarta International Airport (YIA), The B Andara City Perumahan serasa Villa and Resort memberikan kemudahan akses ke fasilitas umum, diantaranya :</p>
                </div>
                <div class="flex justify-between mt-4">
                    <div class="border rounded-xl w-full mr-2 border-black hover:bg-red-800 text-black hover:text-white">
                        <div class="p-2 flex">
                            <div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M41.25 41.25H3.75" stroke="black" stroke-width="2" stroke-linecap="round" />
                                    <path d="M31.875 41.25V11.25C31.875 7.71375 31.875 5.9475 30.7762 4.84875C29.6775 3.75 27.9113 3.75 24.375 3.75H20.625C17.0887 3.75 15.3225 3.75 14.2237 4.84875C13.125 5.9475 13.125 7.71375 13.125 11.25V41.25M39.375 41.25V15.9375C39.375 13.305 39.375 11.9869 38.7431 11.0419C38.4695 10.6322 38.1178 10.2805 37.7081 10.0069C36.7631 9.375 35.445 9.375 32.8125 9.375M5.625 41.25V15.9375C5.625 13.305 5.625 11.9869 6.25687 11.0419C6.53054 10.6322 6.88224 10.2805 7.29187 10.0069C8.23687 9.375 9.555 9.375 12.1875 9.375" stroke="black" stroke-width="2" />
                                    <path d="M22.5 41.25V35.625M18.75 22.5H26.25M10.3125 20.625H13.125M10.3125 26.25H13.125M31.875 20.625H34.6875M31.875 26.25H34.6875M10.3125 15H13.125M31.875 15H34.6875M18.75 28.125H26.25" stroke="black" stroke-width="2" stroke-linecap="round" />
                                    <path d="M22.5 16.875V9.375M26.25 13.125H18.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="ml-2">
                                <div class="text-[12px] -mt-1">0 Menit</div>
                                <div class="-mt-1">Pagoda</div>
                            </div>
                        </div>
                    </div>
                    <div class="border rounded-xl w-full ml-2 border-black hover:bg-red-800 text-black hover:text-white">
                        <div class="p-2 flex">
                            <div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M41.25 41.25H3.75" stroke="black" stroke-width="2" stroke-linecap="round" />
                                    <path d="M31.875 41.25V11.25C31.875 7.71375 31.875 5.9475 30.7762 4.84875C29.6775 3.75 27.9113 3.75 24.375 3.75H20.625C17.0887 3.75 15.3225 3.75 14.2237 4.84875C13.125 5.9475 13.125 7.71375 13.125 11.25V41.25M39.375 41.25V15.9375C39.375 13.305 39.375 11.9869 38.7431 11.0419C38.4695 10.6322 38.1178 10.2805 37.7081 10.0069C36.7631 9.375 35.445 9.375 32.8125 9.375M5.625 41.25V15.9375C5.625 13.305 5.625 11.9869 6.25687 11.0419C6.53054 10.6322 6.88224 10.2805 7.29187 10.0069C8.23687 9.375 9.555 9.375 12.1875 9.375" stroke="black" stroke-width="2" />
                                    <path d="M22.5 41.25V35.625M18.75 22.5H26.25M10.3125 20.625H13.125M10.3125 26.25H13.125M31.875 20.625H34.6875M31.875 26.25H34.6875M10.3125 15H13.125M31.875 15H34.6875M18.75 28.125H26.25" stroke="black" stroke-width="2" stroke-linecap="round" />
                                    <path d="M22.5 16.875V9.375M26.25 13.125H18.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="ml-2">
                                <div class="text-[12px] -mt-1">5 Menit</div>
                                <div class="-mt-1">Tori 99 Asmaul Husna</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between mt-4">
                    <div class="border rounded-xl w-full mr-2 border-black hover:bg-red-800 text-black hover:text-white">
                        <div class="p-2 flex">
                            <div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.2812 26.7188H15.4688C14.6953 26.7188 14.0625 26.0859 14.0625 25.3125C14.0625 24.5391 14.6953 23.9062 15.4688 23.9062H18.2812C19.0547 23.9062 19.6875 24.5391 19.6875 25.3125C19.6875 26.1 19.0687 26.7188 18.2812 26.7188ZM25.3125 26.7188H22.5C21.7266 26.7188 21.0938 26.0859 21.0938 25.3125C21.0938 24.5391 21.7266 23.9062 22.5 23.9062H25.3125C26.0859 23.9062 26.7188 24.5391 26.7188 25.3125C26.7188 26.1 26.1 26.7188 25.3125 26.7188ZM26.0156 11.25H14.7656C14.3719 11.25 14.0625 10.9406 14.0625 10.5469C14.0625 10.1531 14.3719 9.84375 14.7656 9.84375H26.0156C26.4094 9.84375 26.7188 10.1531 26.7188 10.5469C26.7188 10.9406 26.4094 11.25 26.0156 11.25Z" fill="black" />
                                    <path d="M11.2512 5.625C11.2512 4.85016 11.87 4.21875 12.6294 4.21875H28.1544C28.9137 4.21875 29.5325 4.85016 29.5325 5.625H29.6183C31.1229 5.625 32.345 6.82031 32.345 8.31094V26.7047C32.345 29.2036 30.7067 31.3144 28.43 32.0583L29.6225 33.8386C30.7081 35.4586 31.8415 37.1489 32.0581 37.4977C32.5334 38.2556 32.5053 38.8111 32.1537 39.2709C31.8022 39.7308 31.2594 39.7589 30.8122 39.7589H9.95467C9.7156 39.7603 8.89857 39.7673 8.5231 39.1219C8.17717 38.5242 8.49498 38.0011 8.75092 37.5778L8.84935 37.4161C8.93935 37.2572 9.66217 36.2292 10.5158 35.017C11.1936 34.0537 11.9529 32.9738 12.545 32.1173L12.4564 32.0906C10.1276 31.3791 8.43873 29.2416 8.43873 26.7047V8.31094C8.43873 6.82031 9.6481 5.625 11.1514 5.625H11.2512ZM11.2512 22.5V26.0859C11.2512 27.9844 12.7981 29.5312 14.6965 29.5312H26.0872C27.9856 29.5312 29.5325 27.9844 29.5325 26.0859V22.5H11.2512ZM11.2512 21.0938H29.5325V14.0625H11.2512V21.0938ZM29.5325 11.8828C29.5325 9.98437 27.9856 8.4375 26.0872 8.4375H14.6965C12.7981 8.4375 11.2512 9.98437 11.2512 11.8828V12.6366H29.5325V11.8828ZM13.092 35.1506H27.6734L27.5989 35.0142C27.4993 34.8156 27.388 34.6231 27.2656 34.4377C27.0083 34.0594 26.5934 33.7345 26.0379 33.7345H14.7654C14.1284 33.7345 13.6292 34.2633 13.5209 34.4377C13.4337 34.5797 13.1778 35.0058 13.092 35.1506ZM11.2597 37.9491H29.5522C29.4537 37.7972 29.0347 37.1658 28.9264 37.0041C28.7295 36.7087 28.2894 36.5428 27.9912 36.5428H13.1581C12.5211 36.5428 11.8025 37.1377 11.6534 37.3809C11.53 37.5761 11.3987 37.7647 11.2597 37.9491Z" fill="black" />
                                    <path d="M35.1573 9.81563C35.1573 9.05625 35.7761 8.4375 36.5355 8.4375H40.8105C41.5698 8.4375 42.1886 9.05625 42.1886 9.81563V16.9031C42.1886 17.6625 41.5698 18.2812 40.8105 18.2812H39.3761V28.1306L42.1886 28.125V40.7812L32.9355 31.5703C31.6698 30.3047 32.5698 28.1391 34.3558 28.1391L37.9698 28.132V18.2812H36.5355C35.7761 18.2812 35.1573 17.6625 35.1573 16.9031V9.81563ZM40.7823 12.6562H36.5636V16.875H40.7823V12.6562ZM34.3558 29.5453C34.2369 29.5462 34.1209 29.582 34.0223 29.6485C33.9237 29.7149 33.8469 29.8089 33.8014 29.9187C33.7559 30.0286 33.7438 30.1494 33.7667 30.266C33.7895 30.3827 33.8462 30.4901 33.9297 30.5747L40.7823 37.3964V29.5341L34.3558 29.5453Z" fill="black" />
                                </svg>
                            </div>
                            <div class="ml-2">
                                <div class="text-[12px] -mt-1">7 Menit</div>
                                <div class="-mt-1">Infinity Pool</div>
                            </div>
                        </div>
                    </div>
                    <div class="border rounded-xl w-full ml-2 border-black hover:bg-red-800 text-black hover:text-white">
                        <div class="p-2 flex">
                            <div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M35.6068 4.78583C34.2 3.97339 32.6468 3.44604 31.0362 3.23387C29.4255 3.02171 27.7888 3.12889 26.2195 3.5493C24.6503 3.9697 23.1792 4.6951 21.8903 5.68407C20.6014 6.67304 19.52 7.9062 18.7077 9.31315L18.2416 10.1199C18.0821 10.3968 18.0391 10.7257 18.1219 11.0343C18.2048 11.3429 18.4068 11.6059 18.6836 11.7656L27.4602 16.833L22.2081 26.0258L22.0988 26.0242C17.0234 26.0242 12.6279 28.9685 10.0098 33.131C10.3088 33.0239 10.6227 32.9633 10.9516 32.9494C11.6492 32.921 12.337 33.1206 12.9111 33.5178C13.4853 33.915 13.9144 34.4884 14.1338 35.1512C15.09 38.0408 18.5807 37.8833 19.4615 35.3231C19.6793 34.6904 20.0893 34.1415 20.6341 33.7529C21.1789 33.3644 21.8314 33.1555 22.5006 33.1555C23.1697 33.1555 23.8222 33.3644 24.367 33.7529C24.9118 34.1415 25.3218 34.6904 25.5397 35.3231C26.4204 37.8833 29.9111 38.0408 30.869 35.1496C31.0899 34.4835 31.5227 33.9081 32.1014 33.5111C32.68 33.1141 33.3727 32.9174 34.0736 32.951C31.9329 29.6435 28.6607 27.1331 24.8213 26.3119L29.5479 18.0383L38.0223 22.9321C38.1595 23.0113 38.3109 23.0627 38.468 23.0834C38.625 23.1041 38.7846 23.0936 38.9376 23.0525C39.0906 23.0115 39.234 22.9407 39.3596 22.8442C39.4852 22.7477 39.5906 22.6274 39.6697 22.4901L40.1357 21.6849C40.9481 20.278 41.4754 18.7248 41.6874 17.114C41.8995 15.5033 41.7921 13.8666 41.3716 12.2973C40.951 10.728 40.2255 9.25699 39.2363 7.96817C38.2472 6.67934 37.0139 5.59797 35.6068 4.78583ZM12.2261 35.7812C12.1436 35.5332 11.9826 35.3187 11.7676 35.1701C11.5526 35.0215 11.2951 34.9469 11.0339 34.9574C10.7727 34.9679 10.5221 35.0631 10.3197 35.2285C10.1173 35.3939 9.97413 35.6206 9.91181 35.8744C9.50199 37.549 8.72574 38.4683 7.84181 39.0019C6.91609 39.5612 5.73645 39.7765 4.4202 39.7765C4.10052 39.7765 3.79393 39.9035 3.56788 40.1296C3.34184 40.3556 3.21484 40.6622 3.21484 40.9819C3.21484 41.3016 3.34184 41.6082 3.56788 41.8342C3.79393 42.0603 4.10052 42.1873 4.4202 42.1873C5.95824 42.1873 7.63449 41.943 9.08734 41.0655C9.95399 40.542 10.6847 39.8211 11.22 38.9617C14.0952 42.6292 19.709 42.6099 22.5006 38.9231C25.3372 42.6678 31.0827 42.6292 33.9161 38.7849C34.6853 39.8319 35.6884 40.6847 36.8456 41.2754C38.0027 41.8661 39.2818 42.1784 40.5809 42.1873C40.9006 42.1873 41.2072 42.0603 41.4332 41.8342C41.6593 41.6082 41.7863 41.3016 41.7863 40.9819C41.7863 40.6622 41.6593 40.3556 41.4332 40.1296C41.2072 39.9035 40.9006 39.7765 40.5809 39.7765C38.2104 39.7765 35.8479 38.2337 35.0684 35.794C34.9913 35.5513 34.8392 35.3391 34.634 35.1882C34.4289 35.0372 34.1811 34.9551 33.9264 34.9537C33.6717 34.9522 33.423 35.0315 33.2162 35.1802C33.0093 35.3289 32.8549 35.5393 32.775 35.7812C31.2273 40.4564 25.1604 40.3969 23.64 35.9756C23.5582 35.7385 23.4045 35.5328 23.2002 35.3872C22.996 35.2416 22.7514 35.1634 22.5006 35.1634C22.2497 35.1634 22.0051 35.2416 21.8009 35.3872C21.5966 35.5328 21.4429 35.7385 21.3611 35.9756C19.8407 40.3969 13.7754 40.4548 12.2261 35.7812Z"
                                        fill="black" />
                                </svg>
                            </div>
                            <div class="ml-2">
                                <div class="text-[12px] -mt-1">10 Menit</div>
                                <div class="-mt-1">Benteng Pendem</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-10 md:mt-24 lg:mt-32 xl:mt-32">
                    <div class="text-xl font-bold text-black">Yuk Intip Ada Apa Saja di The B Andara City</div>
                    <div class="mt-4">
                        <button type="button" class="text-center rounded-md bg-red-800 text-white text-sm font-semibold p-4 w-[55%]">Lihat Selengkapnya</button>
                    </div>
                </div>
            </div> // end of col 
            <div class="lg:col-span-6 mt-10 md:mt-0 lg:mt-0 xl:mt-0">
                <div class="mb-16 lg:mb-0">
                    <h2 class="text-xl font-bold">Kawasan Bisnis YIA</h2>
                    <p class="mt-2 text-justify text-black">Terletak disekitar kawasan bisnis Yogyakarta International Airport (YIA), The B Andara City Perumahan serasa Villa and Resort memberikan kemudahan akses ke fasilitas umum, diantaranya :</p>
                </div>
                <div class="flex justify-between mt-4">
                    <div class="border rounded-xl w-full mr-2 border-black hover:bg-red-800 text-black hover:text-white">
                        <div class="p-2 flex">
                            <div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M41.25 41.25H3.75" stroke="black" stroke-width="2" stroke-linecap="round" />
                                    <path d="M31.875 41.25V11.25C31.875 7.71375 31.875 5.9475 30.7762 4.84875C29.6775 3.75 27.9113 3.75 24.375 3.75H20.625C17.0887 3.75 15.3225 3.75 14.2237 4.84875C13.125 5.9475 13.125 7.71375 13.125 11.25V41.25M39.375 41.25V15.9375C39.375 13.305 39.375 11.9869 38.7431 11.0419C38.4695 10.6322 38.1178 10.2805 37.7081 10.0069C36.7631 9.375 35.445 9.375 32.8125 9.375M5.625 41.25V15.9375C5.625 13.305 5.625 11.9869 6.25687 11.0419C6.53054 10.6322 6.88224 10.2805 7.29187 10.0069C8.23687 9.375 9.555 9.375 12.1875 9.375" stroke="black" stroke-width="2" />
                                    <path d="M22.5 41.25V35.625M18.75 22.5H26.25M10.3125 20.625H13.125M10.3125 26.25H13.125M31.875 20.625H34.6875M31.875 26.25H34.6875M10.3125 15H13.125M31.875 15H34.6875M18.75 28.125H26.25" stroke="black" stroke-width="2" stroke-linecap="round" />
                                    <path d="M22.5 16.875V9.375M26.25 13.125H18.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="ml-2">
                                <div class="text-[12px] -mt-1">0 Menit</div>
                                <div class="-mt-1">Benteng Pendem</div>
                            </div>
                        </div>
                    </div>
                    <div class="border rounded-xl w-full ml-2 border-black hover:bg-red-800 text-black hover:text-white">
                        <div class="p-2 flex">
                            <div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M41.25 41.25H3.75" stroke="black" stroke-width="2" stroke-linecap="round" />
                                    <path d="M31.875 41.25V11.25C31.875 7.71375 31.875 5.9475 30.7762 4.84875C29.6775 3.75 27.9113 3.75 24.375 3.75H20.625C17.0887 3.75 15.3225 3.75 14.2237 4.84875C13.125 5.9475 13.125 7.71375 13.125 11.25V41.25M39.375 41.25V15.9375C39.375 13.305 39.375 11.9869 38.7431 11.0419C38.4695 10.6322 38.1178 10.2805 37.7081 10.0069C36.7631 9.375 35.445 9.375 32.8125 9.375M5.625 41.25V15.9375C5.625 13.305 5.625 11.9869 6.25687 11.0419C6.53054 10.6322 6.88224 10.2805 7.29187 10.0069C8.23687 9.375 9.555 9.375 12.1875 9.375" stroke="black" stroke-width="2" />
                                    <path d="M22.5 41.25V35.625M18.75 22.5H26.25M10.3125 20.625H13.125M10.3125 26.25H13.125M31.875 20.625H34.6875M31.875 26.25H34.6875M10.3125 15H13.125M31.875 15H34.6875M18.75 28.125H26.25" stroke="black" stroke-width="2" stroke-linecap="round" />
                                    <path d="M22.5 16.875V9.375M26.25 13.125H18.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div class="ml-2">
                                <div class="text-[12px] -mt-1">5 Menit</div>
                                <div class="-mt-1">Exit Tol Bagelen</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between mt-4">
                    <div class="border rounded-xl w-full mr-2 border-black hover:bg-red-800 text-black hover:text-white">
                        <div class="p-2 flex">
                            <div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.2812 26.7188H15.4688C14.6953 26.7188 14.0625 26.0859 14.0625 25.3125C14.0625 24.5391 14.6953 23.9062 15.4688 23.9062H18.2812C19.0547 23.9062 19.6875 24.5391 19.6875 25.3125C19.6875 26.1 19.0687 26.7188 18.2812 26.7188ZM25.3125 26.7188H22.5C21.7266 26.7188 21.0938 26.0859 21.0938 25.3125C21.0938 24.5391 21.7266 23.9062 22.5 23.9062H25.3125C26.0859 23.9062 26.7188 24.5391 26.7188 25.3125C26.7188 26.1 26.1 26.7188 25.3125 26.7188ZM26.0156 11.25H14.7656C14.3719 11.25 14.0625 10.9406 14.0625 10.5469C14.0625 10.1531 14.3719 9.84375 14.7656 9.84375H26.0156C26.4094 9.84375 26.7188 10.1531 26.7188 10.5469C26.7188 10.9406 26.4094 11.25 26.0156 11.25Z" fill="black" />
                                    <path d="M11.2512 5.625C11.2512 4.85016 11.87 4.21875 12.6294 4.21875H28.1544C28.9137 4.21875 29.5325 4.85016 29.5325 5.625H29.6183C31.1229 5.625 32.345 6.82031 32.345 8.31094V26.7047C32.345 29.2036 30.7067 31.3144 28.43 32.0583L29.6225 33.8386C30.7081 35.4586 31.8415 37.1489 32.0581 37.4977C32.5334 38.2556 32.5053 38.8111 32.1537 39.2709C31.8022 39.7308 31.2594 39.7589 30.8122 39.7589H9.95467C9.7156 39.7603 8.89857 39.7673 8.5231 39.1219C8.17717 38.5242 8.49498 38.0011 8.75092 37.5778L8.84935 37.4161C8.93935 37.2572 9.66217 36.2292 10.5158 35.017C11.1936 34.0537 11.9529 32.9738 12.545 32.1173L12.4564 32.0906C10.1276 31.3791 8.43873 29.2416 8.43873 26.7047V8.31094C8.43873 6.82031 9.6481 5.625 11.1514 5.625H11.2512ZM11.2512 22.5V26.0859C11.2512 27.9844 12.7981 29.5312 14.6965 29.5312H26.0872C27.9856 29.5312 29.5325 27.9844 29.5325 26.0859V22.5H11.2512ZM11.2512 21.0938H29.5325V14.0625H11.2512V21.0938ZM29.5325 11.8828C29.5325 9.98437 27.9856 8.4375 26.0872 8.4375H14.6965C12.7981 8.4375 11.2512 9.98437 11.2512 11.8828V12.6366H29.5325V11.8828ZM13.092 35.1506H27.6734L27.5989 35.0142C27.4993 34.8156 27.388 34.6231 27.2656 34.4377C27.0083 34.0594 26.5934 33.7345 26.0379 33.7345H14.7654C14.1284 33.7345 13.6292 34.2633 13.5209 34.4377C13.4337 34.5797 13.1778 35.0058 13.092 35.1506ZM11.2597 37.9491H29.5522C29.4537 37.7972 29.0347 37.1658 28.9264 37.0041C28.7295 36.7087 28.2894 36.5428 27.9912 36.5428H13.1581C12.5211 36.5428 11.8025 37.1377 11.6534 37.3809C11.53 37.5761 11.3987 37.7647 11.2597 37.9491Z" fill="black" />
                                    <path d="M35.1573 9.81563C35.1573 9.05625 35.7761 8.4375 36.5355 8.4375H40.8105C41.5698 8.4375 42.1886 9.05625 42.1886 9.81563V16.9031C42.1886 17.6625 41.5698 18.2812 40.8105 18.2812H39.3761V28.1306L42.1886 28.125V40.7812L32.9355 31.5703C31.6698 30.3047 32.5698 28.1391 34.3558 28.1391L37.9698 28.132V18.2812H36.5355C35.7761 18.2812 35.1573 17.6625 35.1573 16.9031V9.81563ZM40.7823 12.6562H36.5636V16.875H40.7823V12.6562ZM34.3558 29.5453C34.2369 29.5462 34.1209 29.582 34.0223 29.6485C33.9237 29.7149 33.8469 29.8089 33.8014 29.9187C33.7559 30.0286 33.7438 30.1494 33.7667 30.266C33.7895 30.3827 33.8462 30.4901 33.9297 30.5747L40.7823 37.3964V29.5341L34.3558 29.5453Z" fill="black" />
                                </svg>
                            </div>
                            <div class="ml-2">
                                <div class="text-[12px] -mt-1">7 Menit</div>
                                <div class="-mt-1">Stasiun YIA</div>
                            </div>
                        </div>
                    </div>
                    <div class="border rounded-xl w-full ml-2 border-black hover:bg-red-800 text-black hover:text-white">
                        <div class="p-2 flex">
                            <div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M35.6068 4.78583C34.2 3.97339 32.6468 3.44604 31.0362 3.23387C29.4255 3.02171 27.7888 3.12889 26.2195 3.5493C24.6503 3.9697 23.1792 4.6951 21.8903 5.68407C20.6014 6.67304 19.52 7.9062 18.7077 9.31315L18.2416 10.1199C18.0821 10.3968 18.0391 10.7257 18.1219 11.0343C18.2048 11.3429 18.4068 11.6059 18.6836 11.7656L27.4602 16.833L22.2081 26.0258L22.0988 26.0242C17.0234 26.0242 12.6279 28.9685 10.0098 33.131C10.3088 33.0239 10.6227 32.9633 10.9516 32.9494C11.6492 32.921 12.337 33.1206 12.9111 33.5178C13.4853 33.915 13.9144 34.4884 14.1338 35.1512C15.09 38.0408 18.5807 37.8833 19.4615 35.3231C19.6793 34.6904 20.0893 34.1415 20.6341 33.7529C21.1789 33.3644 21.8314 33.1555 22.5006 33.1555C23.1697 33.1555 23.8222 33.3644 24.367 33.7529C24.9118 34.1415 25.3218 34.6904 25.5397 35.3231C26.4204 37.8833 29.9111 38.0408 30.869 35.1496C31.0899 34.4835 31.5227 33.9081 32.1014 33.5111C32.68 33.1141 33.3727 32.9174 34.0736 32.951C31.9329 29.6435 28.6607 27.1331 24.8213 26.3119L29.5479 18.0383L38.0223 22.9321C38.1595 23.0113 38.3109 23.0627 38.468 23.0834C38.625 23.1041 38.7846 23.0936 38.9376 23.0525C39.0906 23.0115 39.234 22.9407 39.3596 22.8442C39.4852 22.7477 39.5906 22.6274 39.6697 22.4901L40.1357 21.6849C40.9481 20.278 41.4754 18.7248 41.6874 17.114C41.8995 15.5033 41.7921 13.8666 41.3716 12.2973C40.951 10.728 40.2255 9.25699 39.2363 7.96817C38.2472 6.67934 37.0139 5.59797 35.6068 4.78583ZM12.2261 35.7812C12.1436 35.5332 11.9826 35.3187 11.7676 35.1701C11.5526 35.0215 11.2951 34.9469 11.0339 34.9574C10.7727 34.9679 10.5221 35.0631 10.3197 35.2285C10.1173 35.3939 9.97413 35.6206 9.91181 35.8744C9.50199 37.549 8.72574 38.4683 7.84181 39.0019C6.91609 39.5612 5.73645 39.7765 4.4202 39.7765C4.10052 39.7765 3.79393 39.9035 3.56788 40.1296C3.34184 40.3556 3.21484 40.6622 3.21484 40.9819C3.21484 41.3016 3.34184 41.6082 3.56788 41.8342C3.79393 42.0603 4.10052 42.1873 4.4202 42.1873C5.95824 42.1873 7.63449 41.943 9.08734 41.0655C9.95399 40.542 10.6847 39.8211 11.22 38.9617C14.0952 42.6292 19.709 42.6099 22.5006 38.9231C25.3372 42.6678 31.0827 42.6292 33.9161 38.7849C34.6853 39.8319 35.6884 40.6847 36.8456 41.2754C38.0027 41.8661 39.2818 42.1784 40.5809 42.1873C40.9006 42.1873 41.2072 42.0603 41.4332 41.8342C41.6593 41.6082 41.7863 41.3016 41.7863 40.9819C41.7863 40.6622 41.6593 40.3556 41.4332 40.1296C41.2072 39.9035 40.9006 39.7765 40.5809 39.7765C38.2104 39.7765 35.8479 38.2337 35.0684 35.794C34.9913 35.5513 34.8392 35.3391 34.634 35.1882C34.4289 35.0372 34.1811 34.9551 33.9264 34.9537C33.6717 34.9522 33.423 35.0315 33.2162 35.1802C33.0093 35.3289 32.8549 35.5393 32.775 35.7812C31.2273 40.4564 25.1604 40.3969 23.64 35.9756C23.5582 35.7385 23.4045 35.5328 23.2002 35.3872C22.996 35.2416 22.7514 35.1634 22.5006 35.1634C22.2497 35.1634 22.0051 35.2416 21.8009 35.3872C21.5966 35.5328 21.4429 35.7385 21.3611 35.9756C19.8407 40.3969 13.7754 40.4548 12.2261 35.7812Z"
                                        fill="black" />
                                </svg>
                            </div>
                            <div class="ml-2">
                                <div class="text-[12px] -mt-1">10 Menit</div>
                                <div class="-mt-1">Wisata Pantai</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between mt-4">
                    <div class="border rounded-xl w-full mr-2 border-black hover:bg-red-800 text-black hover:text-white">
                        <div class="p-2 flex">
                            <div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M38.5492 7.33125C39.6555 8.4375 39.6555 10.2188 38.5492 11.3063L31.2555 18.6L35.2305 35.8313L32.5867 38.4938L25.3117 24.5625L17.9992 31.875L18.6742 36.5062L16.668 38.4938L13.368 32.5312L7.38672 29.2125L9.37422 27.1875L14.0617 27.8812L21.318 20.625L7.38672 13.2937L10.0492 10.65L27.2805 14.625L34.5742 7.33125C35.6242 6.24375 37.4992 6.24375 38.5492 7.33125Z" fill="black" />
                                </svg>
                            </div>
                            <div class="ml-2">
                                <div class="text-[12px] -mt-1">7 Menit</div>
                                <div class="-mt-1">Bandara YIA</div>
                            </div>
                        </div>
                    </div>
                    <div class="border rounded-xl w-full ml-2 border-black hover:bg-red-800 text-black hover:text-white">
                        <div class="p-2 flex">
                            <div>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M35.625 13.125H9.375C8.87772 13.125 8.40081 13.3225 8.04918 13.6742C7.69754 14.0258 7.5 14.5027 7.5 15V39.375C7.5 39.8723 7.69754 40.3492 8.04918 40.7008C8.40081 41.0525 8.87772 41.25 9.375 41.25H35.625C36.1223 41.25 36.5992 41.0525 36.9508 40.7008C37.3025 40.3492 37.5 39.8723 37.5 39.375V15C37.5 14.5027 37.3025 14.0258 36.9508 13.6742C36.5992 13.3225 36.1223 13.125 35.625 13.125Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15.9375 16.875V10.3125C15.9375 9.4507 16.1072 8.59734 16.437 7.80114C16.7668 7.00494 17.2502 6.2815 17.8596 5.67211C18.469 5.06273 19.1924 4.57934 19.9886 4.24954C20.7848 3.91974 21.6382 3.75 22.5 3.75C23.3618 3.75 24.2152 3.91974 25.0114 4.24954C25.8076 4.57934 26.531 5.06273 27.1404 5.67211C27.7498 6.2815 28.2332 7.00494 28.563 7.80114C28.8928 8.59734 29.0625 9.4507 29.0625 10.3125V16.875" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                            <div class="ml-2">
                                <div class="text-[12px] -mt-1">5 Menit</div>
                                <div class="-mt-1">Market</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-12">
                    <div class="text-xl font-bold text-black">Yuk Intip Ada Apa Saja di The B Andara City</div>
                    <div class="mt-4">
                        <button type="button" class="text-center rounded-md bg-red-800 text-white text-sm font-semibold p-4 w-[55%]">Lihat Selengkapnya</button>
                    </div>
                </div>
            </div> // end of col 
        </div> // end of container 
    </div>

    {/* Detail 2 */}
    <div class="py-10">
        <div class="">
            <iframe src="https://theb.andararejomakmur.co.id/daftar-booking"  class="h-screen" frameborder="0"></iframe>
        </div> // end of container
    </div>

    {/* Detail 3 */}
    <div class=" pt-16 pb-4">
        <div class="container relative">
            <img src="https://theb.andararejomakmur.co.id/landing-page/images/alur.png" width="100%" alt="alternative" />
            <div class="absolute right-3 bottom-4 lg:xl:right-32 lg:xl:bottom-20 md:right-20 md:bottom-10">
                <button type="button" class="text-center rounded-md bg-red-800 text-white text-sm font-semibold p-1 md:p-2 lg:xl:p-4 lg:xl:pl-20 lg:xl:pr-20">Lihat Selengkapnya</button>
            </div>
        </div> // end of container
    </div>

    {/* Statistics */}
    <div class="pt-8 pb-12">
        <div class="container px-8 md:lg:xl:px-2">
            <div class="">
                <div class="flex justify-between text-sm px-8">
                    <div class="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
                        {/* <svg class="h-6 mr-3" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 455.005 455.005"
                            style="enable-background:new 0 0 455.005 455.005;" xml:space="preserve">
                            <g>
                                <path d="M446.158,267.615c-5.622-3.103-12.756-2.421-19.574,1.871l-125.947,79.309c-3.505,2.208-4.557,6.838-2.35,10.343 c2.208,3.505,6.838,4.557,10.343,2.35l125.947-79.309c2.66-1.675,4.116-1.552,4.331-1.432c0.218,0.12,1.096,1.285,1.096,4.428 c0,8.449-6.271,19.809-13.42,24.311l-122.099,76.885c-6.492,4.088-12.427,5.212-16.284,3.084c-3.856-2.129-6.067-7.75-6.067-15.423 c0-19.438,13.896-44.61,30.345-54.967l139.023-87.542c2.181-1.373,3.503-3.77,3.503-6.347s-1.323-4.974-3.503-6.347L184.368,50.615 c-2.442-1.538-5.551-1.538-7.993,0L35.66,139.223C15.664,151.815,0,180.188,0,203.818v4c0,23.63,15.664,52.004,35.66,64.595 l209.292,131.791c3.505,2.207,8.136,1.154,10.343-2.35c2.207-3.505,1.155-8.136-2.35-10.343L43.653,259.72 C28.121,249.941,15,226.172,15,207.818v-4c0-18.354,13.121-42.122,28.653-51.902l136.718-86.091l253.059,159.35l-128.944,81.196 c-20.945,13.189-37.352,42.909-37.352,67.661c0,13.495,4.907,23.636,13.818,28.555c3.579,1.976,7.526,2.956,11.709,2.956 c6.231,0,12.985-2.176,19.817-6.479l122.099-76.885c11.455-7.213,20.427-23.467,20.427-37.004 C455.004,277.119,451.78,270.719,446.158,267.615z"> </path>
                                <path d="M353.664,232.676c2.492,0,4.928-1.241,6.354-3.504c2.207-3.505,1.155-8.136-2.35-10.343l-173.3-109.126 c-3.506-2.207-8.136-1.154-10.343,2.35c-2.207,3.505-1.155,8.136,2.35,10.343l173.3,109.126 C350.916,232.303,352.298,232.676,353.664,232.676z"> </path>
                                <path d="M323.68,252.58c2.497,0,4.938-1.246,6.361-3.517c2.201-3.509,1.14-8.138-2.37-10.338L254.46,192.82 c-3.511-2.202-8.139-1.139-10.338,2.37c-2.201,3.51-1.14,8.138,2.37,10.338l73.211,45.905 C320.941,252.21,322.318,252.58,323.68,252.58z"> </path>
                                <path d="M223.903,212.559c-3.513-2.194-8.14-1.124-10.334,2.39c-2.194,3.514-1.124,8.14,2.39,10.334l73.773,46.062 c1.236,0.771,2.608,1.139,3.965,1.139c2.501,0,4.947-1.251,6.369-3.529c2.194-3.514,1.124-8.14-2.39-10.334L223.903,212.559z"> </path>
                                <path d="M145.209,129.33l-62.33,39.254c-2.187,1.377-3.511,3.783-3.503,6.368s1.345,4.983,3.54,6.348l74.335,46.219 c1.213,0.754,2.586,1.131,3.96,1.131c1.417,0,2.833-0.401,4.071-1.201l16.556-10.7c3.479-2.249,4.476-6.891,2.228-10.37 c-2.248-3.479-6.891-4.475-10.37-2.228l-12.562,8.119l-60.119-37.38l48.2-30.355l59.244,37.147l-6.907,4.464 c-3.479,2.249-4.476,6.891-2.228,10.37c2.249,3.479,6.894,4.476,10.37,2.228l16.8-10.859c2.153-1.392,3.446-3.787,3.429-6.351 c-0.018-2.563-1.344-4.94-3.516-6.302l-73.218-45.909C150.749,127.792,147.647,127.795,145.209,129.33z"> </path>
                                <path d="M270.089,288.846c2.187-3.518,1.109-8.142-2.409-10.329l-74.337-46.221c-3.518-2.188-8.143-1.109-10.329,2.409 c-2.187,3.518-1.109,8.142,2.409,10.329l74.337,46.221c1.232,0.767,2.601,1.132,3.953,1.132 C266.219,292.387,268.669,291.131,270.089,288.846z"> </path>
                                <path d="M53.527,192.864c-2.187,3.518-1.109,8.142,2.409,10.329l183.478,114.081c1.232,0.767,2.601,1.132,3.953,1.132 c2.506,0,4.956-1.256,6.376-3.541c2.187-3.518,1.109-8.142-2.409-10.329L63.856,190.455 C60.338,188.266,55.714,189.346,53.527,192.864z"> </path>
                            </g>
                        </svg> */}
                        <a href="#" class="inline-block text-red-800 font-bold">Informasi The B Andara City</a>
                    </div>
                    <a href="#">Lihat Selengkapnya</a>
                </div>
                <div class="grid grid-cols-1 md:grid md:grid-cols-3 lg:xl:grid lg:xl:grid-cols-4 gap-2">
                    // CARD 1 
                    <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg">
                        <a href="#"></a>
                        <div class="relative"><a href="#">
                                <img src="https://theb.andararejomakmur.co.id/landing-page/images/artikel/artikel1.png" width="" alt="alternative" />
                                <div
                                    class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                </div>
                            </a>
                            <a href="#!">
                                <div
                                    class="text-xs absolute top-0 right-0 bg-red-800 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                    Berita
                                </div>
                            </a>
                        </div>
                        <div class="px-6 py-4 mb-auto">
                            <a href="#"
                                class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Simplest
                                Salad Recipe ever</a>
                            <p class="text-gray-500 text-sm">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        <div class="px-6 py-4 flex flex-row items-center justify-between bg-gray-100">
                            <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                {/* <svg height="13px" width="13px" version="1.1" id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                    y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;"
                                    xml:space="preserve">
                                    <g>
                                        <g>
                                            <path
                                                d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                            </path>
                                        </g>
                                    </g>
                                </svg> */}
                                <span class="ml-1">6 mins ago</span>
                            </span>
                        </div>
                    </div>

                    // CARD 2 
                    <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg">
                        <a href="#"></a>
                        <div class="relative"><a href="#">
                                <img src="https://theb.andararejomakmur.co.id/landing-page/images/artikel/artikel2.png" width="" alt="alternative" />
                                <div
                                    class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                </div>
                            </a><a href="#!">
                                <div
                                    class="text-xs absolute top-0 right-0 bg-red-800 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                    The B
                                </div>
                            </a>
                        </div>
                        <div class="px-6 py-4 mb-auto">
                            <a href="#"
                                class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Best
                                FastFood Ideas (Yummy)</a>
                            <p class="text-gray-500 text-sm">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        <div class="px-6 py-4 flex flex-row items-center justify-between bg-gray-100">
                            <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                {/* <svg height="13px" width="13px" version="1.1" id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                    y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;"
                                    xml:space="preserve">
                                    <g>
                                        <g>
                                            <path
                                                d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                            </path>
                                        </g>
                                    </g>
                                </svg> */}
                                <span class="ml-1"> 10 days ago</span>
                            </span>
                        </div>
                    </div>

                    // CARD 3 
                    <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg">
                        <a href="#"></a>
                        <div class="relative"><a href="#">
                                <img src="https://theb.andararejomakmur.co.id/landing-page/images/artikel/artikel3.png" width="" alt="alternative" />
                                <div
                                    class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                </div>
                            </a><a href="#!">
                                <div
                                    class="text-xs absolute top-0 right-0 bg-red-800 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                    The B
                                </div>
                            </a>
                        </div>
                        <div class="px-6 py-4 mb-auto">
                            <a href="#"
                                class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Best
                                FastFood Ideas (Yummy)</a>
                            <p class="text-gray-500 text-sm">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        <div class="px-6 py-4 flex flex-row items-center justify-between bg-gray-100">
                            <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                {/* <svg height="13px" width="13px" version="1.1" id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                    y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;"
                                    xml:space="preserve">
                                    <g>
                                        <g>
                                            <path
                                                d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                            </path>
                                        </g>
                                    </g>
                                </svg> */}
                                <span class="ml-1"> 10 days ago</span>
                            </span>
                        </div>
                    </div>

                    <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg">
                        <a href="#"></a>
                        <div class="relative"><a href="#">
                                <img src="https://theb.andararejomakmur.co.id/landing-page/images/artikel/artikel4.png" width="" alt="alternative" />
                                <div
                                    class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                </div>
                            </a>
                            <a href="#!">
                                <div
                                    class="text-xs absolute top-0 right-0 bg-red-800 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                    Properti
                                </div>
                            </a>
                        </div>
                        <div class="px-6 py-4 mb-auto">
                            <a href="#"
                                class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Simplest
                                Salad Recipe ever</a>
                            <p class="text-gray-500 text-sm">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                        <div class="px-6 py-4 flex flex-row items-center justify-between bg-gray-100">
                            <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                                {/* <svg height="13px" width="13px" version="1.1" id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                    y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;"
                                    xml:space="preserve">
                                    <g>
                                        <g>
                                            <path
                                                d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                            </path>
                                        </g>
                                    </g>
                                </svg> */}
                                <span class="ml-1">6 mins ago</span>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div> // end of container 
    </div>
    
    {/* Testimonial */}

    <div class="py-8">
        <div class="container px-4 sm:px-8 cursor-pointer">
            <img src="https://theb.andararejomakmur.co.id/landing-page/images/afiliate/banner-afiliasi.png" width="100%" alt="alternative" />
        </div> // end of container
    </div>

    {/* Footer */}
    <div class="py-8 bg-black">
        <div class="container px-8 text-white">
            <div class="grid grid-cols-3">
                <div>
                    <div class="flex flex-wrap">
                        <div>
                            <img src="https://theb.andararejomakmur.co.id/landing-page/images/logo-theb.png" width="50px" alt="alternative" />
                        </div>
                        <div class="font-bold mt-3.5 ml-2">THE B ANDARA CITY</div>
                    </div>
                    <div class="mt-3 text-[14px]">Menciptakan koneksi antara Anda dan rumah impian dengan penuh komitme</div>
                </div>
                <div>
                    <div class="font-bold text-sm">HUBUNGI KAMI</div>
                    <table class="mt-3">
                        <tr>
                            <td>Telephone</td>
                            <td class="px-2 py3">:</td>
                            <td>(0272) 3392916</td>
                        </tr>
                        <tr>
                            <td>Whatsapp</td>
                            <td class="px-2 py3">:</td>
                            <td>+62858-0012-0888</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td class="px-2 py3">:</td>
                            <td>pt.andararejomakmur@gmail.com</td>
                        </tr>
                    </table>
                </div>
                <div>
                    <div class="font-bold">Marketing Office</div>
                    <div class="mt-3">Jl Dr. Soeradji Tirtonegoro No. Bendogantungan, Sumberejo, Klaten Selatan, Klaten, Jawa Tengah 57424</div>
                    <div class="font-bold mt-6">Marketing Gallery</div>
                    <div class="mt-3">Jl.Wates - Purworejo, KM 3 Bapangsari, Bagelen, Purworejo (Border City)</div>
                </div>
            </div>
            <hr class="border-slate-500 mt-3 mb-3" />
            <div class="grid grid-cols-2">
                <div class="text-zinc-500">© 2024 The B Andara City. All rights reserved</div>
                <div class="text-zinc-300 text-end">
                    <div class="flex justify-end">
                        <div class="mr-2 cursor-pointer">Privacy Statemen</div>
                        <div class="ml-2 cursor-pointer">Terms of Use</div>
                    </div>
                </div>
            </div>
        </div>
    </div> // end of copyright

    </>
    

    
  );
};

export default Villa;