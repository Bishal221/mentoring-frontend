import React from 'react';
import ScrollToTop from '../../components/ScrollTop';
import About from './AboutSection';
import Blog from './BlogSection';
import Campus from './CampusSection';
import Counter from './CounterSection';
import Course from './CourseSection';
import Event from './EventSection';
import Service from './ServiceSection';
import HomeSlider from './SliderSection';
import Testimonial from './TestimonialSection';

const HomeMain = () => {
  return (
    <>
      <div className="react-wrapper">
        <div className="react-wrapper-inner">
          {/* SliderSection-start */}
          <HomeSlider />
          {/* SliderSection-start */}

          {/* Service-area-start */}
          <Service />
          {/* Service-area-end */}

          {/* About-area-start */}
          <About />
          {/* About-area-end */}

          {/* Campus-area-start */}
          <Campus />
          {/* Campus-area-end */}

          {/* Course-area-start */}
          <Course />
          {/* Course-area-end */}

          {/* Counter-area-start */}
          <Counter />
          {/* Counter-area-end */}

          {/* Event-area-start */}
          <Event />
          {/* Event-area-end */}

          {/* testmonial-area-start */}
          <Testimonial />
          {/* testmonial-area-end */}

          {/* blog-area-start */}
          <Blog />
          {/* blog-area-end */}

          {/* scrolltop-start */}
          <ScrollToTop
            scrollClassName="home react__up___scroll"
          />
          {/* scrolltop-end */}
        </div>
      </div>

    </>
  );
}

export default HomeMain;