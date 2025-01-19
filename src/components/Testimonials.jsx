// import React, { useState } from 'react';
// import { UserCircle, Quote } from 'lucide-react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const testimonials = [
//   {
//     id: 1,
//     name: "Sarah Chen",
//     role: "Tech Enthusiast",
//     content: "TechieBlog has become my go-to source for staying updated with the latest tech trends. The articles are well-researched and easy to understand.",
//     rating: 5,
//     image: "https://images.ctfassets.net/juauvlea4rbf/7gaBuvSxDqsc44uUgAk66g/bf049b2f0043e92efbda409f685f79ac/Cla_r_Mc_Weeney.png?w=900&h=900&q=50&fm=png"
//   },
//   {
//     id: 2,
//     name: "James Wilson",
//     role: "Software Developer",
//     content: "What I love most about TechieBlog is the depth of technical content. It's perfect for both beginners and experienced developers.",
//     rating: 5,
//     image: "https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
//   },
//   {
//     id: 3,
//     name: "Maria Garcia",
//     role: "Product Manager",
//     content: "The insights shared on TechieBlog have helped me make better product decisions. The community discussions are incredibly valuable.",
//     rating: 5,
//     image: "https://images.saymedia-content.com/.image/t_share/MTc0OTk0MTIwOTMzMTg5NjAw/20-ways-to-tell-if-shes-a-lady.jpg"
//   }
// ];

// const Testimonials = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => setIsHovered(true);
//   const handleMouseLeave = () => setIsHovered(false);

//   return (
//     <section className="py-16 bg-gradient-to-r from-yellow-50 via-orange-50 to-pink-50">
//       <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
//             What Our Readers Say
//           </h2>
//           <p className="text-lg text-gray-600">
//             Join thousands of tech enthusiasts who trust TechieBlog for their daily dose of tech insights
//           </p>
//         </div>

//         <Carousel
//           showArrows={true}
//           autoPlay={!isHovered}
//           infiniteLoop={true}
//           showThumbs={false}
//         >
//           {testimonials.map((testimonial) => (
//             <div
//               key={testimonial.id}
//               className="testimonial-card"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <div className="testimonial-inner">
//                 <div className="testimonial-front">
//                   <img src={testimonial.image} alt={testimonial.name} className="w-44 h-44 rounded-full mx-auto" />
//                   <h4 className="font-semibold text-2xl text-gray-900 mt-10 text-center">{testimonial.name}</h4>
//                   <p className="text-gray-500">{testimonial.role}</p>
//                   <div className="flex justify-center mt-2">
//                     {[...Array(testimonial.rating)].map((_, index) => (
//                       <svg key={index} className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                       </svg>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="testimonial-back">
//                   <div className="flex items-center mb-4">
//                     <Quote className="w-8 h-8 text-orange-500 mr-2" />
//                   </div>
//                   <p className="text-gray-600 mb-6 text-2xl">{testimonial.content}</p>
                  
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import React, { useState } from 'react';
import { UserCircle, Quote } from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Tech Enthusiast",
    content: "TechieBlog has become my go-to source for staying updated with the latest tech trends. The articles are well-researched and easy to understand.",
    rating: 5,
    image: "https://images.ctfassets.net/juauvlea4rbf/7gaBuvSxDqsc44uUgAk66g/bf049b2f0043e92efbda409f685f79ac/Cla_r_Mc_Weeney.png?w=900&h=900&q=50&fm=png"
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Software Developer",
    content: "What I love most about TechieBlog is the depth of technical content. It's perfect for both beginners and experienced developers.",
    rating: 5,
    image: "https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
  },
  {
    id: 3,
    name: "Maria Garcia",
    role: "Product Manager",
    content: "The insights shared on TechieBlog have helped me make better product decisions. The community discussions are incredibly valuable.",
    rating: 5,
    image: "https://images.saymedia-content.com/.image/t_share/MTc0OTk0MTIwOTMzMTg5NjAw/20-ways-to-tell-if-shes-a-lady.jpg"
  }
];

const Testimonials = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <section className="py-16 bg-gradient-to-r from-yellow-50 via-orange-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
  <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl mb-4">
        What Our Readers Say
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Join thousands of tech enthusiasts who trust TechieBlog for their daily dose of tech insights
      </p>
    </div>
    <Carousel
      showArrows={true}
      autoPlay={!isHovered}
      infiniteLoop={true}
      showThumbs={false}
    >
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="testimonial-card"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="testimonial-inner">
            <div className="testimonial-front">
              <img src={testimonial.image} alt={testimonial.name} className="w-44 h-44 rounded-full mx-auto" />
              <h4 className="font-semibold text-2xl text-gray-900 dark:text-gray-100 mt-10 text-center">{testimonial.name}</h4>
              <p className="text-gray-500 dark:text-gray-300">{testimonial.role}</p>
              <div className="flex justify-center mt-2">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <svg key={index} className="w-6 h-6 text-orange-500 dark:text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="testimonial-back">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-orange-500 dark:text-orange-300 mr-2" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-2xl">{testimonial.content}</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
</section>


  );
};

export default Testimonials;