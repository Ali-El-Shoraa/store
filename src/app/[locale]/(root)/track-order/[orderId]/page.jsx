// app/track-order/[orderId]/page.jsx
"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Calendar,
  Truck,
  CheckCircle,
  Clock,
  MapPin,
  CreditCard,
  Package,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import SupportSectionCard from "@/components/SupportSectionCard";
import { formatCurrency } from "@/utils/formatCurrency";

export default function OrderDetails() {
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const orderId = params.orderId;
  console.log("orderId: ", orderId);
  // Mock orders data - in a real app, this would come from an API
  const mockOrders = [
    {
      id: "ORD-123456",
      status: "shipped", // ordered, confirmed, processing, shipped, delivered
      orderDate: "2023-10-15",
      estimatedDelivery: "2023-10-20",
      items: [
        { name: "Wireless Headphones", quantity: 1, price: 99.99 },
        { name: "Phone Case", quantity: 2, price: 19.99 },
      ],
      customer: {
        name: "John Doe",
        email: "john.doe@example.com",
      },
      shippingAddress: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "USA",
      },
      trackingNumber: "TRK-987654321",
      carrier: "Fast Shipping Co.",
      paymentMethod: "Credit Card",
      paymentStatus: "Paid",
    },
    {
      id: "ORD-789012",
      status: "delivered",
      orderDate: "2023-10-10",
      estimatedDelivery: "2023-10-15",
      items: [{ name: "Smart Watch", quantity: 1, price: 199.99 }],
      customer: {
        name: "Jane Smith",
        email: "jane.smith@example.com",
      },
      shippingAddress: {
        street: "456 Oak Ave",
        city: "Los Angeles",
        state: "CA",
        zipCode: "90001",
        country: "USA",
      },
      trackingNumber: "TRK-123456789",
      carrier: "Quick Delivery Inc.",
      paymentMethod: "PayPal",
      paymentStatus: "Paid",
    },
    {
      id: "ORD-345678",
      status: "processing",
      orderDate: "2023-10-18",
      estimatedDelivery: "2023-10-25",
      items: [
        { name: "Laptop", quantity: 1, price: 999.99 },
        { name: "Laptop Sleeve", quantity: 1, price: 29.99 },
      ],
      customer: {
        name: "Robert Johnson",
        email: "robert.j@example.com",
      },
      shippingAddress: {
        street: "789 Pine Rd",
        city: "Chicago",
        state: "IL",
        zipCode: "60007",
        country: "USA",
      },
      trackingNumber: "TRK-456789123",
      carrier: "Secure Ship Ltd.",
      paymentMethod: "Credit Card",
      paymentStatus: "Pending",
    },
    {
      id: "ORD-901234",
      status: "ordered",
      orderDate: "2023-10-19",
      estimatedDelivery: "2023-10-26",
      items: [
        { name: "Wireless Charger", quantity: 2, price: 39.99 },
        { name: "USB-C Cable", quantity: 3, price: 15.99 },
      ],
      customer: {
        name: "Sarah Williams",
        email: "sarah.w@example.com",
      },
      shippingAddress: {
        street: "321 Elm St",
        city: "Houston",
        state: "TX",
        zipCode: "77001",
        country: "USA",
      },
      trackingNumber: "TRK-789123456",
      carrier: "Express Logistics",
      paymentMethod: "Apple Pay",
      paymentStatus: "Paid",
    },
  ];

  // Simulate API call to fetch order details
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const foundOrder = mockOrders.find((order) => order.id === orderId);
      setOrder(foundOrder);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [orderId]);

  const getStatusPercentage = (status) => {
    const statuses = [
      "ordered",
      "confirmed",
      "processing",
      "shipped",
      "delivered",
    ];
    const index = statuses.indexOf(status);
    return ((index + 1) / statuses.length) * 100;
  };

  const getStatusSteps = (currentStatus) => {
    const statuses = [
      { id: "ordered", label: "Ordered", icon: Clock },
      { id: "confirmed", label: "Confirmed", icon: CheckCircle },
      { id: "processing", label: "Processing", icon: Clock },
      { id: "shipped", label: "Shipped", icon: Truck },
      { id: "delivered", label: "Delivered", icon: CheckCircle },
    ];

    return statuses.map((status) => ({
      ...status,
      active:
        statuses.findIndex((s) => s.id === currentStatus) >=
        statuses.findIndex((s) => s.id === status.id),
      completed:
        statuses.findIndex((s) => s.id === currentStatus) >
        statuses.findIndex((s) => s.id === status.id),
    }));
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      ordered: { label: "Ordered", variant: "secondary", icon: Clock },
      confirmed: { label: "Confirmed", variant: "outline", icon: CheckCircle },
      processing: { label: "Processing", variant: "default", icon: Clock },
      shipped: { label: "Shipped", variant: "default", icon: Truck },
      delivered: { label: "Delivered", variant: "success", icon: CheckCircle },
    };

    return (
      statusConfig[status] || {
        label: status,
        variant: "secondary",
        icon: Clock,
      }
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button asChild variant="outline" className="mb-6">
            <Link href="/track-order">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Orders
            </Link>
          </Button>
          <div className="text-center py-12">
            <Package className="mx-auto h-16 w-16 text-gray-400" />
            <h1 className="text-2xl font-bold text-gray-900 mt-4">
              Order Not Found
            </h1>
            <p className="text-gray-600 mt-2">
              The order you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const statusInfo = getStatusBadge(order.status);
  const StatusIcon = statusInfo.icon;
  const total = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button asChild variant="outline" className="mb-6">
          <Link href="/track-order">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Orders
          </Link>
        </Button>

        <Card className="w-full mb-6">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Order {order.id}</CardTitle>
                <CardDescription>Placed on {order.orderDate}</CardDescription>
              </div>
              <Badge
                variant={statusInfo.variant}
                className="flex items-center gap-1"
              >
                <StatusIcon className="h-4 w-4" />
                {statusInfo.label}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Order Status Progress */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Order Status</h3>
                <Progress
                  value={getStatusPercentage(order.status)}
                  className="h-2"
                />

                <div className="flex justify-between mt-4">
                  {getStatusSteps(order.status).map((step, index) => {
                    const StepIcon = step.icon;
                    return (
                      <div key={step.id} className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center 
                          ${
                            step.completed
                              ? "bg-green-500 text-white"
                              : step.active
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-600"
                          }`}
                        >
                          <StepIcon className="h-5 w-5" />
                        </div>
                        <span
                          className={`text-xs mt-2 text-center ${
                            step.active ? "font-medium" : "text-gray-500"
                          }`}
                        >
                          {step.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Order Details */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Order Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Order Date:</span>
                      <span className="font-medium">{order.orderDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment Method:</span>
                      <span className="font-medium">{order.paymentMethod}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Payment Status:</span>
                      <Badge
                        variant={
                          order.paymentStatus === "Paid" ? "success" : "outline"
                        }
                      >
                        {order.paymentStatus}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Shipping Address */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Shipping Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-900 font-medium">
                      {order.customer.name}
                    </p>
                    <p className="text-gray-600">
                      {order.shippingAddress.street}
                    </p>
                    <p className="text-gray-600">
                      {order.shippingAddress.city},{" "}
                      {order.shippingAddress.state}{" "}
                      {order.shippingAddress.zipCode}
                    </p>
                    <p className="text-gray-600">
                      {order.shippingAddress.country}
                    </p>
                  </CardContent>
                </Card>

                {/* Order Items */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Order Items</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {order.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center border-b pb-4 last:border-b-0 last:pb-0"
                        >
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-gray-600">
                              Qty: {item.quantity}
                            </p>
                          </div>
                          <p className="font-medium">
                            {formatCurrency(item.price)}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-4 pt-4 border-t font-semibold text-lg">
                      <span>Total</span>
                      <span>{formatCurrency(total)}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Tracking Information */}
                {order.trackingNumber && (
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Truck className="h-5 w-5" />
                        Tracking Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tracking Number:</span>
                        <span className="font-medium">
                          {order.trackingNumber}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Carrier:</span>
                        <span className="font-medium">{order.carrier}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Estimated Delivery:
                        </span>
                        <span className="font-medium">
                          {order.estimatedDelivery}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Tracking History */}
              {order.trackingHistory && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Tracking History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {order.trackingHistory.map((event, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-3 h-3 rounded-full bg-blue-500 mt-1.5"></div>
                            {index < order.trackingHistory.length - 1 && (
                              <div className="w-0.5 h-16 bg-gray-200 my-1"></div>
                            )}
                          </div>
                          <div className="flex-1 pb-4">
                            <p className="font-medium">{event.status}</p>
                            <p className="text-sm text-gray-600">
                              {event.date}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Support Section */}
        <SupportSectionCard />
      </div>
    </div>
  );
}
