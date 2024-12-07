"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

const features = [
  {
    title: "Design and Development Team",
    description: "Our expert team brings innovative solutions to life, tailoring automation systems to your specific needs.",
    image: "/Whyus/Design.png",
    alt: "Security shield illustration"
  },
  {
    title: "Quality and Inspection Team",
    description: "Rigorous quality control ensures our systems meet the highest standards of performance and reliability.",
    image: "/Whyus/Inspection.png",
    alt: "AI automation illustration"
  },
  {
    title: "PLC and LabVIEW Based Controllers",
    description: "We utilize cutting-edge PLC and LabVIEW technologies for precise, efficient, and adaptable control systems.",
    image: "/Whyus/Plc_based.png",
    alt: "24/7 support illustration"
  }
]

const CountUp = ({ end, duration, startCounting }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    requestAnimationFrame(animateCount);
  }, [end, duration, startCounting]);

  return <span>{count}</span>;
};

function FeatureCard({ title, description, image, alt, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white/10 backdrop-blur-xl rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow"
    >
      <div className="relative h-48 mb-6">
        <motion.img
          src={image}
          alt={alt}
          className="w-full h-full object-contain"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-100 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}

export default function AnimatedFeatures() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        {/* Numeric Data Section */}
        <div 
          ref={sectionRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 text-center transition-opacity duration-1000 ease-in-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <motion.div 
            className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-4xl font-bold text-white mb-2">
              <CountUp end={50} duration={2000} startCounting={isVisible} />+
            </h3>
            <p className="text-gray-100 text-lg">Innovative Solutions</p>
          </motion.div>
          <motion.div 
            className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-4xl font-bold text-white mb-2">
              <CountUp end={300} duration={2000} startCounting={isVisible} />+
            </h3>
            <p className="text-gray-300 text-lg">Projects Delivered</p>
          </motion.div>
          <motion.div 
            className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <h3 className="text-4xl font-bold text-white mb-2">
              <CountUp end={95} duration={2000} startCounting={isVisible} />%
            </h3>
            <p className="text-gray-100 text-lg">Client Satisfaction</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
