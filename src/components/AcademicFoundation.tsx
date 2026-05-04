"use client";

import { Award, GraduationCap } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./MotionPrimitives";

const degrees = [
  {
    degree: "PhD in Business",
    icon: GraduationCap,
    institution: "University of the Cumberlands",
    specialization: "Specialization: Strategic Management",
    year: "2024",
    gpa: "GPA: 3.7"
  },
  {
    degree: "MBA",
    icon: GraduationCap,
    institution: "Campbellsville University",
    specialization: "Major: Marketing",
    year: "2020",
    gpa: "GPA: 3.9"
  },
  {
    degree: "Master’s in Project Management and Entrepreneurship",
    icon: GraduationCap,
    institution: "University of California, Berkeley",
    specialization: "",
    year: "2017",
    gpa: "GPA: 3.7"
  },
  {
    degree: "Master of Commerce",
    icon: GraduationCap,
    institution: "University of Mumbai",
    specialization: "Major: Marketing",
    year: "2015",
    gpa: "GPA: 3.8"
  },
  {
    degree: "Certificate in Advanced Digital Marketing",
    icon: Award,
    institution: "Digital Marketing Institute",
    specialization: "",
    year: "2015",
    gpa: ""
  },
  {
    degree: "Bachelor of Management Studies",
    icon: GraduationCap,
    institution: "University of Mumbai",
    specialization: "",
    year: "2013",
    gpa: "GPA: 3.8"
  }
];

export default function AcademicFoundation() {
  return (
    <section className="relative w-full overflow-hidden bg-[#121212] py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Academic Foundation
          </h3>
          <p className="text-lg text-white/60 font-light max-w-2xl">
            My academic path helped me connect practical growth work with deeper strategic thinking.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {degrees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={idx} className="premium-card group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.045] md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1 transition-colors duration-500 group-hover:bg-white/10">
                      <Icon className="w-5 h-5 text-white/70 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white leading-tight pr-4 mb-2">
                        {item.degree}
                      </h4>
                      <p className="text-white/70 font-medium mb-2">{item.institution}</p>
                    </div>
                  </div>
                  <span className="text-white/40 text-sm font-medium tracking-widest mt-2">{item.year}</span>
                </div>
                
                <div className="mt-6 flex flex-wrap gap-4 text-xs text-white/50 uppercase tracking-widest ml-14">
                  {item.specialization && <span>{item.specialization}</span>}
                  {item.gpa && <span>{item.gpa}</span>}
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
