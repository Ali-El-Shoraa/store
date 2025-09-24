import { Button } from "@/components/ui/button";
import { Play, Target } from "lucide-react";

export default function OurStorySection({
  videoUrl,
  toggleVideo,
  isVideoPlaying,
  setIsVideoPlaying,
}) {
  return (
    <>
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We started our journey with a clear vision to make e-commerce
                accessible to everyone, and today we're proud to be a trusted
                platform for thousands of sellers and buyers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  From Humble Beginnings to Market Leadership
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our company was founded in 2015 through the initiative of a
                  group of ambitious young professionals who believed in the
                  power of e-commerce and its ability to transform traditional
                  shopping concepts.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Today, after a journey of growth and development, we serve
                  more than 500,000 customers across the Arab world, providing a
                  comprehensive platform that helps entrepreneurs build their
                  online stores with ease and efficiency.
                </p>
                <div className="flex items-center space-x-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl">
                    Read More
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-xl flex items-center gap-2"
                    onClick={toggleVideo}
                  >
                    <Play className="h-4 w-4" />
                    Watch Video
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div
                  className="bg-gradient-to-br from-blue-500 to-indigo-600 h-80 w-full rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
                  onClick={toggleVideo}
                >
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center transition-opacity group-hover:bg-black/50 rounded-2xl">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform transition-transform group-hover:scale-110">
                      <Play className="h-12 w-12 text-white fill-current" />
                    </div>
                  </div>
                  <video
                    src={videoUrl || "/sample-video.mp4"}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-medium">Company Story</p>
                    <p className="text-sm text-white/80">2:45</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl w-4/5 border">
                  <div className="flex items-center mb-2">
                    <Target className="h-5 w-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">Our Vision</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    To be the leading platform in enabling e-commerce in the
                    Arab world and to contribute to transforming ideas into
                    successful projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <Button
              onClick={toggleVideo}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="w-full h-full flex items-center justify-center">
              <video
                src={videoUrl || "/sample-video.mp4"}
                controls
                autoPlay
                className="w-full h-full object-cover"
                onEnded={() => setIsVideoPlaying(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
