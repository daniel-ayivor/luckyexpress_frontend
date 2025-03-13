

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/swiper-bundle.css';  // This includes all necessary CSS
// import { Navigation, Pagination } from 'swiper';
import { Navigation, Pagination } from "swiper/modules";
import { Card } from "@/components/ui/card";
import { Ship, Truck, Package } from "lucide-react";
import photo1 from '../../../../../assets/pexels-tomfisk-3856433.jpg'
import photo2 from '../../../../../assets/markus-winkler-V0WETbEXG5Y-unsplash.jpg'
import photo4 from '../../../../../assets/elias-8QOpH6i3eQI-unsplash.jpg'
import photo5 from '../../../../../assets/WhatsApp Image 2025-02-17 at 7.06.32 AM.jpeg'
import { HiChevronDoubleLeft } from "react-icons/hi";
import { HiChevronDoubleRight } from "react-icons/hi";
const AboutCards = () => {
  const galleryItems = [
    {
      title: "Cargo Ships",
      description: "Our fleet of modern cargo ships for international shipping",
      icon: <Ship className="w-12 h-12 text-primary" />,
      image: photo1
    },
    {
      title: "Freight Trucks",
      description: "Reliable ground transportation across the country",
      icon: <Truck className="w-12 h-12 text-primary" />,
      image: photo2
    },
    {
      title: "Cargo Services",
      description: "Comprehensive cargo handling and logistics",
      icon: <Package className="w-12 h-12 text-primary" />,
      image: photo4
    },
    {
      title: "Good Customer Services",
      description: "Comprehensive cargo handling and logistics",
      icon: <Package className="w-12 h-12 text-primary" />,
      image: photo5
    }
  ];

  return (
    <div className="container mx-auto px-4 lg:px-28 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Fleet Gallery</h1>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: '.swiper-button-prev', // Define custom prev button
            nextEl: '.swiper-button-next'   // Define custom next button
          }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="fleet-carousel"
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide key={index}>
              <Card className="hover-lift h-80 overflow-hidden">
                <img
                  src={`${item.image}`}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md mb-4"
                />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between p-4 z-20">
          {/* Previous Button */}

          <HiChevronDoubleLeft className="w-6 swiper-button-prev h-6 p-2 flex items-center justify-center rounded-full bg-white backdrop-blur-sm text-black hover:bg-black/40 transition-all" />
          <HiChevronDoubleRight className=" swiper-button-next w-6 h-6  text-black p-2 flex items-center justify-center rounded-full bg-white backdrop-blur-sm  hover:bg-black/40 transition-all" />
        </div>
      </div>
    </div>

  );
};

export default AboutCards;
