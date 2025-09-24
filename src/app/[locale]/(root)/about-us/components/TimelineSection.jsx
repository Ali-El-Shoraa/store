import { Calendar } from "lucide-react";

export default function TimelineSection({ milestones }) {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A continuous journey of growth and development over the years
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-indigo-500"></div>

            {milestones?.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-md border">
                    <div className="text-blue-600 font-bold text-lg mb-2 flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      {milestone?.year}
                    </div>
                    <p className="text-gray-700">{milestone?.event}</p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 border-4 border-white z-10 shadow-md" />
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
