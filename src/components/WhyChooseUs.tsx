'use client';

import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const musicSchoolAcademy = [
    {
      title: "Collaborative Practice Sessions",
      description:
        "Practice together in real time with your instructors, fellow musicians, and mentors. Collaborate on musical pieces, share creative insights, and refine your skills collectively. Our platform streamlines collaboration, making every practice session engaging and productive.",
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
    },
    {
      title: "Real-Time Feedback",
      description:
        "Receive immediate feedback from instructors on your performance. With our platform, you can see notes and suggestions in real time, helping you correct techniques on the spot. Say goodbye to delayed feedback and embrace the effectiveness of real-time improvement.",
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
    },
    {
      title: "Track Your Progress",
      description:
        "Keep track of your progress with version control for your musical pieces. Our platform ensures you’re always working on the latest version of your performance notes, making it easy to review changes and improve over time. Stay on track and keep your growth consistent.",
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
    },
    {
      title: "Never Run Out of Material",
      description:
        "Access a wide range of resources and exercises to enhance your learning journey. Our platform is constantly updated with new content, so you’ll never run out of material to practice, keeping your musical growth dynamic and well-rounded.",
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
    },
  ];
  
function WhyChooseUs() {
    return (
        <div className="p-10">
          <StickyScroll content={musicSchoolAcademy} />
        </div>
      );
}

export default WhyChooseUs