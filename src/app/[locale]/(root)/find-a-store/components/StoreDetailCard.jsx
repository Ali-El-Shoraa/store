"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Phone, Route, Star, Wifi } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function StoreDetailCard({
  store,
  serviceIcons,
  serviceLabels,
}) {
  const [activeTab, setActiveTab] = useState("hours");

  const getStatusColor = (status) => {
    if (status === "Open now") return "text-green-800 bg-green-100";
    if (status === "Closes soon") return "text-amber-800 bg-amber-100";
    return "text-red-800 bg-red-100";
  };

  //   const openDirections = () => {
  //     const url = `https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}`;
  //     window.open(url, "_blank");
  //   };

  return (
    <Card className="shadow-lg rounded-2xl border-0 overflow-hidden p-0">
      <div className="relative h-40 bg-gradient-to-r from-blue-600 to-indigo-600">
        <img
          src={store.image}
          alt={store.name}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
          <div>
            <h2 className="text-2xl font-bold text-white">{store.name}</h2>
            <p className="text-blue-100">
              {store.address}, {store.city}
            </p>
          </div>
        </div>
        <Badge
          className={`absolute top-4 left-4 ${getStatusColor(
            store.currentStatus
          )}`}
        >
          {store.currentStatus}
        </Badge>
      </div>

      <CardContent className="p-0">
        <Tabs
          defaultValue="hours"
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 gap-3.5 w-full rounded-none border-b h-auto bg-white">
            <TabsTrigger
              value="hours"
              className="py-2 bg-white data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:cursor-auto cursor-pointer hover:bg-blue-700 hover:text-white text-black shadow-md"
            >
              Working Hours
            </TabsTrigger>
            <TabsTrigger
              value="services"
              className="py-2 bg-white data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:cursor-auto cursor-pointer hover:bg-blue-700 hover:text-white text-black shadow-md"
            >
              Services
            </TabsTrigger>
            <TabsTrigger
              value="details"
              className="py-2 bg-white data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:cursor-auto cursor-pointer hover:bg-blue-700 hover:text-white text-black shadow-md"
            >
              Details
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hours" className="p-6">
            <div className="space-y-4">
              {Object.entries(store.hours).map(([day, hours]) => (
                <div
                  key={day}
                  className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                >
                  <span className="font-medium text-gray-700 capitalize">
                    {day}
                  </span>
                  <span
                    className={
                      hours === "Closed"
                        ? "text-gray-400"
                        : "text-gray-900 font-medium"
                    }
                  >
                    {hours}
                  </span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="services" className="p-6">
            {store.services.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {store.services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center p-4 bg-gray-50 rounded-xl border"
                  >
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      {serviceIcons[service]}
                    </div>
                    <span className="mr-3 font-medium">
                      {serviceLabels[service]}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="bg-gray-100 rounded-full p-3 inline-flex mb-3">
                  <Wifi className="h-6 w-6 text-gray-400" />
                </div>
                <p className="text-gray-500">
                  There are no services listed for this store.
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="details" className="p-6">
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3 text-gray-900">
                  Store Information
                </h4>
                <div className="space-y-2">
                  <p className="text-gray-600 flex items-center">
                    <MapPin className="h-4 w-4 ml-2" />
                    {store.address}, {store.city}, {store.zip}
                  </p>
                  <p className="text-gray-600">{store.country}</p>
                  <p className="text-gray-600 flex items-center">
                    <Phone className="h-4 w-4 ml-2" />
                    {store.phone}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3 text-gray-900">
                  Customer Reviews
                </h4>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${
                          star <= Math.floor(store.rating)
                            ? "text-amber-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="mr-2 font-medium text-gray-900">
                    {store.rating}
                  </span>
                  <span className="text-gray-500">
                    ({store.reviews} Evaluation)
                  </span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex gap-3 p-6 border-t border-gray-100">
          <Button variant="outline" className="flex-1" asChild>
            <a href={`tel:${store.phone}`}>
              <Phone className="h-4 w-4 ml-2" />
              Call Us
            </a>
          </Button>
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700" asChild>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Route className="h-4 w-4 ml-2" />
              Trends
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
