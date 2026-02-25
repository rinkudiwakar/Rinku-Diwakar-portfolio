import React from "react";
import { Award, Users, Star, Trophy, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    title: "Winner, ImaGenAI Innovation Challenge",
    org: "IIT Delhi Techfest 2024",
    icon: <Trophy className="h-5 w-5 text-yellow-500" />
  },
  {
    title: "3rd Place, What If Ideation Competition",
    org: "IIT Ropar Techfest 2024",
    icon: <Trophy className="h-5 w-5 text-orange-400" />
  },
  {
    title: "Successfully organized 10+ events",
    org: "Managed logistics, budgets, and 200+ participants",
    icon: <Users className="h-5 w-5 text-blue-500" />
  },
  {
    title: "Operational Excellence Recognition",
    org: "Customer support with 95% satisfaction rating",
    icon: <Star className="h-5 w-5 text-purple-500" />
  }
];

const leadership = [
  {
    role: "Vice President, SEED Society",
    desc: "Leading 30+ members; overseeing execution of technical initiatives and team operations."
  },
  {
    role: "Internship Representative",
    desc: "Coordinating between students and administration for internship opportunities at NIT Jalandhar."
  },
  {
    role: "Event Coordinator, Forge 1.0",
    desc: "Directed end-to-end execution of innovation event; managed sponsorship, PR, and logistics."
  }
];

const Involvement: React.FC = () => {
  return (
    <section id="involvement" className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership & Achievements</h2>
          <p className="text-gray-600">
            Recognitions for innovation and technical leadership within the campus and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Achievements Column */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-bold">Key Achievements</h3>
            </div>
            <div className="grid gap-4">
              {achievements.map((item, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-lg bg-gray-50">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{item.org}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Leadership Column */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-8 w-8 text-indigo-600" />
              <h3 className="text-2xl font-bold">Leadership Roles</h3>
            </div>
            <div className="space-y-4">
              {leadership.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-indigo-100 pb-6 last:pb-0">
                  <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>
                  <h4 className="text-lg font-bold text-gray-900">{item.role}</h4>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
              <div className="pt-4 flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100">NIT Jalandhar</Badge>
                <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100">SEED Society</Badge>
                <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100">Robotics Club</Badge>
                <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100">E-Cell</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Involvement;
