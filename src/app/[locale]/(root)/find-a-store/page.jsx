"use client";
import { useState, useEffect, useMemo, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  MapPin,
  Car,
  Wifi,
  Coffee,
  ShoppingBag,
  X,
  Loader2,
  LocateFixed,
} from "lucide-react";
import HeroSubPage from "@/components/HeroSubPage";
import { stores } from "@/lib/stores";
import StoreDetailCard from "./components/StoreDetailCard";
import ColumnStoreList from "./components/ColumnStoreList";

const serviceIcons = {
  parking: <Car className="h-4 w-4" />,
  wifi: <Wifi className="h-4 w-4" />,
  coffee: <Coffee className="h-4 w-4" />,
  pickup: <ShoppingBag className="h-4 w-4" />,
};

const serviceLabels = {
  parking: "Parking",
  wifi: "Free WiFi",
  coffee: "Coffee Bar",
  pickup: "In-Store Pickup",
};

export default function FindAStorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStore, setSelectedStore] = useState(null);
  const [expandedStores, setExpandedStores] = useState({});
  const [userLocation, setUserLocation] = useState(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedServices, setSelectedServices] = useState([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const mapRef = useRef(null);

  const toggleStoreHours = (storeId) => {
    setExpandedStores((prev) => ({
      ...prev,
      [storeId]: !prev[storeId],
    }));
  };

  const getUserLocation = () => {
    setIsLoadingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLoc = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userLoc);
          setIsLoadingLocation(false);

          // تحديث الخريطة لتركز على موقع المستخدم
          if (map) {
            map.setView([userLoc.lat, userLoc.lng], 13);

            // إضافة علامة لموقع المستخدم
            L.marker([userLoc.lat, userLoc.lng], {
              icon: L.divIcon({
                className: "user-location-marker",
                html: '<div class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-blue-400 opacity-75"></div><div class="relative flex justify-center items-center w-6 h-6 bg-blue-600 rounded-full"><div class="w-2 h-2 bg-white rounded-full"></div></div>',
                iconSize: [24, 24],
                iconAnchor: [12, 12],
              }),
            })
              .addTo(map)
              .bindPopup("Your current location")
              .openPopup();
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          setIsLoadingLocation(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setIsLoadingLocation(false);
    }
  };

  const toggleServiceFilter = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setActiveFilter("all");
    setSelectedServices([]);
    setIsFiltersOpen(false);
  };

  const filteredStores = useMemo(() => {
    return stores.filter((store) => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        store.name.toLowerCase().includes(searchLower) ||
        store.city.toLowerCase().includes(searchLower) ||
        store.address.toLowerCase().includes(searchLower) ||
        store.zip.toLowerCase().includes(searchLower);

      // Status filter
      const matchesStatus =
        activeFilter === "all" ||
        (activeFilter === "open" && store.currentStatus === "Open now") ||
        (activeFilter === "closed" && store.currentStatus === "Closed");

      // Services filter
      const matchesServices =
        selectedServices.length === 0 ||
        selectedServices.every((service) => store.services.includes(service));

      return matchesSearch && matchesStatus && matchesServices;
    });
  }, [searchQuery, activeFilter, selectedServices]);

  // تهيئة الخريطة
  useEffect(() => {
    const initializeMap = async () => {
      setIsLoading(true);
      // تحميل Leaflet فقط على العميل
      const L = await import("leaflet");
      await import("leaflet/dist/leaflet.css");

      // إصلاح أيقونات Leaflet الافتراضية
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      });

      if (mapRef.current && !map) {
        const newMap = L.map(mapRef.current).setView([41.8781, -87.6298], 10);

        // إضافة طبقة الخريطة من OpenStreetMap
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(newMap);

        setMap(newMap);
        setIsLoading(false);
      }
    };

    initializeMap();

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  // تحديث العلامات على الخريطة عند تغيير المتاجر
  useEffect(() => {
    if (!map) return;

    // إزالة العلامات القديمة
    markers.forEach((marker) => map.removeLayer(marker));
    const newMarkers = [];

    // إضافة علامات جديدة للمتاجر
    filteredStores.forEach((store) => {
      const marker = L.marker([store.lat, store.lng], {
        icon: L.icon({
          iconUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
          shadowSize: [41, 41],
        }),
      }).addTo(map).bindPopup(`
          <div class="p-2 min-w-[200px]">
            <h3 class="font-semibold text-lg">${store.name}</h3>
            <p class="text-sm text-gray-600">${store.address}</p>
            <p class="text-sm text-gray-600">${store.city}, ${store.zip}</p>
            <div class="mt-2 flex justify-between items-center">
              <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                store.currentStatus === "Open now"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }">
                ${store.currentStatus}
              </span>
              <span class="inline-flex items-center text-amber-500">
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                <span class="ml-1 text-sm">${store.rating}</span>
              </span>
            </div>
            <button class="mt-3 w-full px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm transition-colors store-details-btn" data-store-id="${
              store.id
            }">
              View details
            </button>
          </div>
        `);

      newMarkers.push(marker);

      // عند النقر على علامة، تحديد المتجر
      marker.on("click", () => {
        const storeObj = stores.find((s) => s.id === store.id);
        setSelectedStore(storeObj);

        // إضافة تأثير للنقر على المتجر في القائمة
        document.querySelectorAll(".store-item").forEach((item) => {
          item.classList.remove("ring-2", "ring-blue-500", "shadow-md");
        });
        const listItem = document.querySelector(
          `.store-item[data-store-id="${store.id}"]`
        );
        if (listItem) {
          listItem.classList.add("ring-2", "ring-blue-500", "shadow-md");
          listItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      });

      // إضافة event listener للزر داخل البوب أب
      marker.on("popupopen", () => {
        const popupBtn = document.querySelector(
          `.store-details-btn[data-store-id="${store.id}"]`
        );
        if (popupBtn) {
          popupBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const storeObj = stores.find((s) => s.id === store.id);
            setSelectedStore(storeObj);
          });
        }
      });
    });

    setMarkers(newMarkers);

    // ضبط عرض الخريطة ليشمل جميع العلامات إذا كان هناك متاجر
    if (filteredStores.length > 0) {
      const group = new L.featureGroup(newMarkers);
      map.fitBounds(group.getBounds().pad(0.1));
    }
  }, [filteredStores, map]);

  // عند تحديد متجر، نركز الخريطة عليه
  useEffect(() => {
    if (selectedStore && map) {
      map.setView([selectedStore.lat, selectedStore.lng], 13);

      // فتح popup للعلامة المحددة
      markers.forEach((marker) => {
        const markerLatLng = marker.getLatLng();
        if (
          markerLatLng.lat === selectedStore.lat &&
          markerLatLng.lng === selectedStore.lng
        ) {
          marker.openPopup();
        }
      });
    }
  }, [selectedStore, map]);

  // const getStatusColor = (status) => {
  //   if (status === "Open now") return "text-green-800 bg-green-100";
  //   if (status === "Closes soon") return "text-amber-800 bg-amber-100";
  //   return "text-red-800 bg-red-100";
  // };

  return (
    <div className="container py-12 space-y-14">
      {/* Page Header */}

      <HeroSubPage
        title={`Find a store near you`}
        des={`Explore our store locations, check opening hours and available services, and plan your visit.`}
      />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Store List */}
        <ColumnStoreList
          searchQuery={searchQuery}
          activeFilter={activeFilter}
          selectedServices={selectedServices}
          setSearchQuery={setSearchQuery}
          isFiltersOpen={isFiltersOpen}
          serviceLabels={serviceLabels}
          isLoadingLocation={isLoadingLocation}
          expandedStores={expandedStores}
          filteredStores={filteredStores}
          selectedStore={selectedStore}
          setSelectedStore={setSelectedStore}
          toggleStoreHours={toggleStoreHours}
          serviceIcons={serviceIcons}
          setActiveFilter={setActiveFilter}
          getUserLocation={getUserLocation}
          userLocation={userLocation}
          setIsFiltersOpen={setIsFiltersOpen}
          toggleServiceFilter={toggleServiceFilter}
          clearFilters={clearFilters}
        />

        {/* Right Column - Map and Store Details */}
        <div className="lg:w-3/5 xl:w-2/3">
          <div className="flex flex-col h-full gap-6">
            {/* Map Section */}
            <Card className="shadow-lg rounded-2xl flex-grow border-0 overflow-hidden p-0 pt-4">
              <CardHeader className="pb-3 bg-white">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Store Map</CardTitle>
                    <CardDescription>
                      {selectedStore
                        ? `View site: ${selectedStore.name}`
                        : "Select a store from the list to view its details."}
                    </CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={getUserLocation}
                    disabled={isLoadingLocation}
                  >
                    <LocateFixed className="h-4 w-4 ml-1" />
                    Your location
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0 relative h-full">
                {isLoading && (
                  <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10 rounded-b-2xl">
                    <div className="text-center">
                      <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-2" />
                      <p className="text-gray-600">Loading map...</p>
                    </div>
                  </div>
                )}
                <div
                  ref={mapRef}
                  className="h-[600px] w-full rounded-b-2xl overflow-hidden z-10"
                />
              </CardContent>
            </Card>

            {/* Selected Store Details */}
            {selectedStore ? (
              <StoreDetailCard
                store={selectedStore}
                serviceIcons={serviceIcons}
                serviceLabels={serviceLabels}
              />
            ) : (
              <Card className="shadow-lg rounded-2xl border-0 p-0">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full p-4 inline-flex mb-4">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Choose a store
                  </h3>
                  <p className="text-gray-500">
                    Select a store from the list to view full details and
                    available services.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
