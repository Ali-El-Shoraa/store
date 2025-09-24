import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PenIcon, Star, VideoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { Rating } from "@/components/ui/rating";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Rating } from "@/components/ui/rating";

export default function ReviewProductDetails() {
  return (
    <div className="">
      <div className="w-full lg:w-1/2">
        <Card>
          <CardHeader>
            <h1 className="text-2xl sm:text-3xl font-bold">Product Reviews</h1>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="video" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-muted/50">
                <TabsTrigger value="video" className="flex items-center gap-2">
                  <VideoIcon className="h-4 w-4" />
                  <span>Video</span>
                </TabsTrigger>
                <TabsTrigger
                  value="write-review"
                  className="flex items-center gap-2"
                >
                  <PenIcon className="h-4 w-4" />
                  <span>Write Review</span>
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="flex items-center gap-2"
                >
                  <Star className="h-4 w-4" />
                  <span>Reviews</span>
                </TabsTrigger>
              </TabsList>

              {/* Video Tab */}
              <TabsContent value="video" className="mt-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Product Video</h2>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center p-4">
                      <VideoIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                      <p className="mt-2 text-muted-foreground">
                        Product video will appear here
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="write-review" className="mt-6">
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">
                    Share Your Experience
                  </h2>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium"
                        >
                          Full Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="focus-visible:ring-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium"
                        >
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          className="focus-visible:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium"
                      >
                        Review Title
                      </label>
                      <Input
                        id="title"
                        placeholder="Summarize your experience"
                        className="focus-visible:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label
                          htmlFor="rating"
                          className="block text-sm font-medium"
                        >
                          Your Rating
                        </label>
                        <span className="text-sm text-muted-foreground">
                          Required
                        </span>
                      </div>
                      <Rating id="rating" defaultValue={0} />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="testimonial"
                        className="block text-sm font-medium"
                      >
                        Your Testimonial
                      </label>
                      <Textarea
                        id="testimonial"
                        rows={5}
                        placeholder="Share your detailed experience with this product..."
                        className="focus-visible:ring-primary min-h-[120px]"
                      />
                      <p className="text-sm text-muted-foreground">
                        Minimum 50 characters
                      </p>
                    </div>

                    <div className="flex justify-end">
                      <Button type="submit" className="w-full sm:w-auto">
                        Submit Review
                      </Button>
                    </div>
                  </form>
                </div>
              </TabsContent>

              {/* Reviews Tab */}
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Customer Reviews</h2>
                    <div className="text-sm text-muted-foreground">
                      Showing 24 reviews
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Review Item 1 */}
                    <div className="border-b pb-6 last:border-b-0 last:pb-0">
                      <div className="flex items-start gap-4">
                        <div className="bg-muted rounded-full h-10 w-10 flex items-center justify-center">
                          <span className="font-medium">JD</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">John Doe</h3>
                            <span className="text-sm text-muted-foreground">
                              October 12, 2023
                            </span>
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <Rating defaultValue={4} readOnly />
                            <span className="text-sm text-muted-foreground ml-2">
                              4.0
                            </span>
                          </div>
                          <h4 className="font-medium mt-2">Amazing Quality!</h4>
                          <p className="text-muted-foreground mt-1">
                            This product exceeded my expectations. The quality
                            is amazing and it works perfectly. I've been using
                            it for a month now and it's been a game changer for
                            my daily routine.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Review Item 2 */}
                    <div className="border-b pb-6 last:border-b-0 last:pb-0">
                      <div className="flex items-start gap-4">
                        <div className="bg-muted rounded-full h-10 w-10 flex items-center justify-center">
                          <span className="font-medium">SM</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">Sarah Miller</h3>
                            <span className="text-sm text-muted-foreground">
                              September 28, 2023
                            </span>
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <Rating defaultValue={3} readOnly />
                            <span className="text-sm text-muted-foreground ml-2">
                              3.0
                            </span>
                          </div>
                          <h4 className="font-medium mt-2">
                            Good but has room for improvement
                          </h4>
                          <p className="text-muted-foreground mt-1">
                            The product is good but I expected more features for
                            the price. The quality is decent though and customer
                            service was helpful when I had questions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button variant="outline" className="mt-4">
                      Load More Reviews
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
