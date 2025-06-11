"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Search,
  Eye,
  RefreshCw,
  FileText,
  Download,
} from "lucide-react";
import Image from "next/image";
import { ordersItemsHistory } from "@/lib/ordersItemsHistory";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function OrderHistoryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("all");
  const [openInvoiceDialog, setOpenInvoiceDialog] = useState(false);
  const [currentInvoice, setCurrentInvoice] = useState(null);
  const itemsPerPage = 5;

  // تصفية الطلبات بناء على الحالة المختارة
  const filteredOrders = ordersItemsHistory.filter((order) => {
    if (filter === "all") return true;
    return order.status.toLowerCase() === filter;
  });

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  const currentItems = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleInvoiceClick = (order) => {
    setCurrentInvoice(order);
    setOpenInvoiceDialog(true);
  };

  const handleDownloadInvoice = () => {
    // هنا يمكنك إضافة منطق لتحميل الفاتورة
    // مثلاً: إنشاء ملف PDF أو تنزيله من الخادم
    alert(`Downloading invoice for order ${currentInvoice.id}`);
    // يمكنك استبدال هذا بتنفيذ حقيقي لتحميل الملف
  };

  return (
    <>
      <div className="flex flex-wrap justify-between items-center gap-6 mb-12">
        <div className="">
          <h2 className="text-2xl font-bold text-brand-secoundry mb-3">
            Order History
          </h2>
          <p className="text-base text-slate-600">
            View and manage your past orders
          </p>
        </div>
        {/* <div className="w-full md:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search orders..."
              className="pl-10 w-full md:w-64"
            />
          </div>
        </div> */}
      </div>

      {/* استبدال Tabs بـ Select */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-sm font-medium text-slate-600">Filter by:</span>
        <Select
          value={filter}
          onValueChange={(value) => {
            setFilter(value);
            setCurrentPage(1);
          }}
        >
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Orders</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
            <SelectItem value="shipped">Shipped</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-6">
        {currentItems.length > 0 ? (
          currentItems.map((order) => (
            <Card key={order.id}>
              <CardHeader className="border-b pb-4">
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <div>
                    <CardTitle className="text-lg font-semibold">
                      {order.id}
                    </CardTitle>
                    <p className="text-sm text-slate-600 mt-1">{order.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className={order.status}>{order.status}</Badge>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-slate-900">
                        ${order.total.toFixed(2)}
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        {order?.products.length} items
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                {/* المنتجات */}
                <div className="flex overflow-x-auto items-center gap-8 mb-6">
                  {order?.products?.map((product, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-100 p-1 rounded-md overflow-hidden">
                        <Image
                          width={1000}
                          height={1000}
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">
                          {product.name}
                        </p>
                        <p className="text-xs text-slate-600 mt-1">
                          Qty: {product.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  {/* <Button variant="outline" className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    View Details
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <RefreshCw className="h-4 w-4" />
                    Reorder
                  </Button> */}
                  <Button
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() => handleInvoiceClick(order)}
                  >
                    <FileText className="h-4 w-4" />
                    Invoice
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No orders found for this filter.</p>
          </div>
        )}
      </div>

      {/* Dialog لعرض الفاتورة */}
      <Dialog open={openInvoiceDialog} onOpenChange={setOpenInvoiceDialog}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Invoice #{currentInvoice?.id}</DialogTitle>
          </DialogHeader>

          {currentInvoice && (
            <div className="space-y-6">
              {/* معلومات الفاتورة */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Order Details</h3>
                  <p className="text-sm text-gray-600">
                    Date: {currentInvoice.date}
                  </p>
                  <p className="text-sm text-gray-600">
                    Status:{" "}
                    <span className="capitalize">{currentInvoice.status}</span>
                  </p>
                </div>
                <div className="text-right">
                  <h3 className="font-semibold">Total Amount</h3>
                  <p className="text-lg font-bold">
                    ${currentInvoice.total.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* قائمة المنتجات */}
              <div>
                <h3 className="font-semibold mb-2">Products</h3>
                <div className="space-y-4">
                  {currentInvoice.products.map((product, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center border-b pb-2"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden">
                          <Image
                            width={48}
                            height={48}
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-gray-600">
                            Qty: {product.quantity}
                          </p>
                        </div>
                      </div>

                      <p className="font-medium">
                        ${(product.price * product.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ملخص الفاتورة */}
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal:</span>
                  <span>${currentInvoice.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping:</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span>${currentInvoice.total.toFixed(2)}</span>
                </div>
              </div>

              {/* زر التحميل */}
              <div className="flex justify-end">
                <Button
                  onClick={handleDownloadInvoice}
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download Invoice
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {filteredOrders.length > 0 && (
        <div className="flex justify-center mt-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage - 1);
                  }}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(page);
                      }}
                      isActive={page === currentPage}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage + 1);
                  }}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </>
  );
}
