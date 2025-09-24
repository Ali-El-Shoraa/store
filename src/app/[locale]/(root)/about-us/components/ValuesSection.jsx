import { Card, CardContent } from "@/components/ui/card";

export default function ValuesSection({ values }) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These principles guide every decision we make and every feature we
            build
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values?.map((value, index) => (
            <div key={index} className="group">
              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 h-full group-hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div
                    className={`bg-gradient-to-r ${value?.color} w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 text-white`}
                  >
                    {value?.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value?.title}
                  </h3>
                  <p className="text-gray-600">{value?.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
