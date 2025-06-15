"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/utils/formatCurrency";
import { Plus } from "lucide-react";

export default function CheckoutStep({
  subtotal,
  shipping,
  tax,
  total,
  onBack,
  onComplete,
}) {
  // State لإدارة العناوين
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "المنزل",
      address: "123 شارع الرياض، الرياض 11564",
      city: "الرياض",
      isDefault: true,
    },
    {
      id: 2,
      name: "العمل",
      address: "456 شارع الملك فهد، جدة 23422",
      city: "جدة",
      isDefault: false,
    },
  ]);

  const [selectedAddressId, setSelectedAddressId] = useState(1);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    isDefault: false,
  });
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);

  const handleAddNewAddress = () => {
    if (
      !newAddress.name ||
      !newAddress.firstName ||
      !newAddress.lastName ||
      !newAddress.address ||
      !newAddress.city
    ) {
      alert("الرجاء ملء جميع الحقول المطلوبة");
      return;
    }

    const newId =
      addresses?.length > 0 ? Math.max(...addresses?.map((a) => a.id)) + 1 : 1;
    const addressToAdd = {
      id: newId,
      name: newAddress.name,
      address: newAddress.address,
      city: newAddress.city,
      isDefault: newAddress.isDefault,
    };

    // إذا تم تحديده كافتراضي، نلغي التحديد من العناوين الأخرى
    if (newAddress.isDefault) {
      setAddresses(addresses?.map((addr) => ({ ...addr, isDefault: false })));
    }

    setAddresses([...addresses, addressToAdd]);
    setSelectedAddressId(newId);
    setShowNewAddressForm(false);
    setNewAddress({
      name: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      isDefault: false,
    });
  };

  const handleApplyDiscount = () => {
    // هنا يمكنك إضافة منطق التحقق من كود الخصم
    if (discountCode === "DISCOUNT10") {
      setDiscountAmount(total * 0.1); // خصم 10%
      setDiscountApplied(true);
      alert("تم تطبيق الخصم بنجاح!");
    } else if (discountCode) {
      alert("كود الخصم غير صحيح");
    }
  };

  const selectedAddress =
    addresses.find((addr) => addr.id === selectedAddressId) || addresses[0];

  const finalTotal = total - discountAmount;

  return (
    <div className="grid md:grid-cols-3 gap-6 animate-in slide-in-from-right-5 duration-500">
      <div className="md:col-span-2">
        <Card className="transform transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Checkout</h2>

            <div className="space-y-6">
              <div className="animate-in slide-in-from-left-5 duration-500">
                <h3 className="text-lg font-medium mb-4">
                  Shipping Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <div className="mb-4">
                      <Label>Address</Label>
                      <Select
                        value={selectedAddressId}
                        onValueChange={(value) => {
                          if (value === "add-new") {
                            setSelectedAddressId(0);
                            setShowNewAddressForm(true);
                          } else {
                            setSelectedAddressId(Number(value));
                            setShowNewAddressForm(false);
                          }
                        }}
                      >
                        <SelectTrigger className="w-full mt-2">
                          <SelectValue placeholder="Address" />
                        </SelectTrigger>
                        <SelectContent>
                          {addresses.map((address) => (
                            <SelectItem key={address?.id} value={address?.id}>
                              {address?.name}{" "}
                              {address?.isDefault && "(افتراضي)"} -{" "}
                              {address?.address}
                            </SelectItem>
                          ))}

                          {!showNewAddressForm && (
                            <SelectItem value={"add-new"}>
                              <div
                                className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                                onClick={() => {
                                  setSelectedAddressId(0);
                                  setShowNewAddressForm(true);
                                }}
                              >
                                <Plus className="h-4 w-4 mr-2" />
                                إضافة عنوان جديد
                              </div>
                            </SelectItem>
                          )}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="animate-in slide-in-from-left-5 duration-500">
                      {showNewAddressForm && (
                        <div className="border rounded-md p-4 mb-4 space-y-4 animate-in fade-in duration-300">
                          <h4 className="font-medium">إضافة عنوان جديد</h4>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="addressName">
                                اسم العنوان (مثال: المنزل، العمل)
                              </Label>
                              <Input
                                id="addressName"
                                value={newAddress?.name}
                                onChange={(e) =>
                                  setNewAddress({
                                    ...newAddress,
                                    name: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="firstName">الاسم الأول</Label>
                              <Input
                                id="firstName"
                                value={newAddress?.firstName}
                                onChange={(e) =>
                                  setNewAddress({
                                    ...newAddress,
                                    firstName: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lastName">الاسم الأخير</Label>
                              <Input
                                id="lastName"
                                value={newAddress?.lastName}
                                onChange={(e) =>
                                  setNewAddress({
                                    ...newAddress,
                                    lastName: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="address">العنوان التفصيلي</Label>
                            <Input
                              id="address"
                              value={newAddress?.address}
                              onChange={(e) =>
                                setNewAddress({
                                  ...newAddress,
                                  address: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="city">المدينة</Label>
                            <Input
                              id="city"
                              value={newAddress?.city}
                              onChange={(e) =>
                                setNewAddress({
                                  ...newAddress,
                                  city: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="defaultAddress"
                              checked={newAddress?.isDefault}
                              onChange={(e) =>
                                setNewAddress({
                                  ...newAddress,
                                  isDefault: e.target.checked,
                                })
                              }
                            />
                            <Label htmlFor="defaultAddress">
                              تعيين كعنوان افتراضي
                            </Label>
                          </div>

                          <div className="flex gap-2">
                            <Button
                              className="flex-1"
                              onClick={handleAddNewAddress}
                            >
                              حفظ العنوان
                            </Button>
                            <Button
                              variant="outline"
                              className="flex-1"
                              onClick={() => setShowNewAddressForm(false)}
                            >
                              إلغاء
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="animate-in slide-in-from-left-5 duration-700">
                <h3 className="text-lg font-medium mb-4">Payment Method</h3>
                <RadioGroup
                  defaultValue="card"
                  className="space-y-3"
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                >
                  <div className="flex items-center space-x-2 border rounded-md p-4 transition-all duration-200 hover:bg-muted/50 hover:scale-[1.02]">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex-1 cursor-pointer">
                      Credit Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-4 transition-all duration-200 hover:bg-muted/50 hover:scale-[1.02]">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash" className="flex-1 cursor-pointer">
                      Cash
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="mt-4 space-y-4 animate-in fade-in duration-300">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="transition-all duration-200 focus:scale-[1.02]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          className="transition-all duration-200 focus:scale-[1.02]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input
                          id="cvc"
                          placeholder="123"
                          className="transition-all duration-200 focus:scale-[1.02]"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="animate-in slide-in-from-right-5 duration-700">
        <Card className="sticky top-4 transform transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between transition-colors duration-200 hover:text-primary">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between transition-colors duration-200 hover:text-primary">
                <span className="text-muted-foreground">Shipping</span>
                <span>{formatCurrency(shipping)}</span>
              </div>
              <div className="flex justify-between transition-colors duration-200 hover:text-primary">
                <span className="text-muted-foreground">Tax</span>
                <span>{formatCurrency(tax)}</span>
              </div>

              {/* حقل كود الخصم */}
              <div className="pt-2">
                <div className="flex gap-2">
                  <Input
                    placeholder="Discount"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    disabled={discountApplied}
                  />
                  <Button
                    variant="outline"
                    onClick={handleApplyDiscount}
                    disabled={!discountCode || discountApplied}
                  >
                    {discountApplied ? "مطبق" : "تطبيق"}
                  </Button>
                </div>
              </div>

              {discountApplied && (
                <div className="flex justify-between text-green-600">
                  <span className="text-muted-foreground">Discount</span>
                  <span>-{formatCurrency(discountAmount)}</span>
                </div>
              )}

              <Separator className="my-2" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="animate-pulse">
                  {formatCurrency(finalTotal)}
                </span>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <Button
                  onClick={onComplete}
                  size="lg"
                  className="transform transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  Complete Order
                </Button>
                <Button
                  variant="outline"
                  onClick={onBack}
                  className="transform transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  Back to Cart
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Separator } from "@/components/ui/separator";
// import { formatCurrency } from "@/utils/formatCurrency";
// import { Plus } from "lucide-react";

// export default function CheckoutStep({
//   subtotal,
//   shipping,
//   tax,
//   total,
//   onBack,
//   onComplete,
// }) {
//   // State لإدارة العناوين
//   const [addresses, setAddresses] = useState([
//     {
//       id: 1,
//       name: "المنزل",
//       address: "123 شارع الرياض، الرياض 11564",
//       city: "الرياض",
//       isDefault: true,
//     },
//     {
//       id: 2,
//       name: "العمل",
//       address: "456 شارع الملك فهد، جدة 23422",
//       city: "جدة",
//       isDefault: false,
//     },
//   ]);

//   const [selectedAddressId, setSelectedAddressId] = useState(1);
//   const [showNewAddressForm, setShowNewAddressForm] = useState(false);
//   const [newAddress, setNewAddress] = useState({
//     name: "",
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     isDefault: false,
//   });

//   const handleAddNewAddress = () => {
//     if (
//       !newAddress.name ||
//       !newAddress.firstName ||
//       !newAddress.lastName ||
//       !newAddress.address ||
//       !newAddress.city
//     ) {
//       alert("الرجاء ملء جميع الحقول المطلوبة");
//       return;
//     }

//     const newId =
//       addresses?.length > 0 ? Math.max(...addresses?.map((a) => a.id)) + 1 : 1;
//     const addressToAdd = {
//       id: newId,
//       name: newAddress.name,
//       address: newAddress.address,
//       city: newAddress.city,
//       isDefault: newAddress.isDefault,
//     };

//     // إذا تم تحديده كافتراضي، نلغي التحديد من العناوين الأخرى
//     if (newAddress.isDefault) {
//       setAddresses(addresses.map((addr) => ({ ...addr, isDefault: false })));
//     }

//     setAddresses([...addresses, addressToAdd]);
//     setSelectedAddressId(newId);
//     setShowNewAddressForm(false);
//     setNewAddress({
//       name: "",
//       firstName: "",
//       lastName: "",
//       address: "",
//       city: "",
//       isDefault: false,
//     });
//   };

//   const selectedAddress =
//     addresses.find((addr) => addr.id === selectedAddressId) || addresses[0];

//   return (
//     <div className="grid md:grid-cols-3 gap-6 animate-in slide-in-from-right-5 duration-500">
//       <div className="md:col-span-2">
//         <Card className="transform transition-all duration-300 hover:shadow-lg">
//           <CardContent className="p-6">
//             <h2 className="text-2xl font-bold mb-6">Checkout</h2>

//             <div className="space-y-6">
//               <div className="animate-in slide-in-from-left-5 duration-500">
//                 <h3 className="text-lg font-medium mb-4">
//                   Shipping Information
//                 </h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="firstName">First Name</Label>
//                     <Input
//                       id="firstName"
//                       className="transition-all duration-200 focus:scale-[1.02]"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="lastName">Last Name</Label>
//                     <Input
//                       id="lastName"
//                       className="transition-all duration-200 focus:scale-[1.02]"
//                     />
//                   </div>
//                   <div className="col-span-2 space-y-2">
//                     <div className="mb-4">
//                       <Label>Address</Label>
//                       <Select
//                         value={selectedAddressId}
//                         onValueChange={(value) => {
//                           if (value === "add-new") {
//                             setSelectedAddressId(0);
//                             setShowNewAddressForm(true);
//                           } else {
//                             setSelectedAddressId(Number(value));
//                             setShowNewAddressForm(false);
//                           }
//                         }}
//                       >
//                         <SelectTrigger className="w-full mt-2">
//                           <SelectValue placeholder="Address" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {addresses.map((address) => (
//                             <SelectItem key={address.id} value={address.id}>
//                               {address.name} {address.isDefault && "(افتراضي)"}{" "}
//                               - {address.address}
//                             </SelectItem>
//                           ))}

//                           {!showNewAddressForm && (
//                             <SelectItem value={"add-new"}>
//                               <div
//                                 className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
//                                 onClick={() => {
//                                   setSelectedAddressId(0);

//                                   setShowNewAddressForm(true);
//                                 }}
//                               >
//                                 <Plus className="h-4 w-4 mr-2" />
//                                 إضافة عنوان جديد
//                               </div>
//                             </SelectItem>
//                           )}
//                         </SelectContent>
//                       </Select>
//                     </div>

//                     <div className="animate-in slide-in-from-left-5 duration-500">
//                       {showNewAddressForm && (
//                         <div className="border rounded-md p-4 mb-4 space-y-4 animate-in fade-in duration-300">
//                           <h4 className="font-medium">إضافة عنوان جديد</h4>

//                           <div className="grid grid-cols-2 gap-4">
//                             <div className="space-y-2">
//                               <Label htmlFor="addressName">
//                                 اسم العنوان (مثال: المنزل، العمل)
//                               </Label>
//                               <Input
//                                 id="addressName"
//                                 value={newAddress.name}
//                                 onChange={(e) =>
//                                   setNewAddress({
//                                     ...newAddress,
//                                     name: e.target.value,
//                                   })
//                                 }
//                               />
//                             </div>
//                             <div className="space-y-2">
//                               <Label htmlFor="firstName">الاسم الأول</Label>
//                               <Input
//                                 id="firstName"
//                                 value={newAddress.firstName}
//                                 onChange={(e) =>
//                                   setNewAddress({
//                                     ...newAddress,
//                                     firstName: e.target.value,
//                                   })
//                                 }
//                               />
//                             </div>
//                             <div className="space-y-2">
//                               <Label htmlFor="lastName">الاسم الأخير</Label>
//                               <Input
//                                 id="lastName"
//                                 value={newAddress.lastName}
//                                 onChange={(e) =>
//                                   setNewAddress({
//                                     ...newAddress,
//                                     lastName: e.target.value,
//                                   })
//                                 }
//                               />
//                             </div>
//                           </div>

//                           <div className="space-y-2">
//                             <Label htmlFor="address">العنوان التفصيلي</Label>
//                             <Input
//                               id="address"
//                               value={newAddress.address}
//                               onChange={(e) =>
//                                 setNewAddress({
//                                   ...newAddress,
//                                   address: e.target.value,
//                                 })
//                               }
//                             />
//                           </div>

//                           <div className="space-y-2">
//                             <Label htmlFor="city">المدينة</Label>
//                             <Input
//                               id="city"
//                               value={newAddress.city}
//                               onChange={(e) =>
//                                 setNewAddress({
//                                   ...newAddress,
//                                   city: e.target.value,
//                                 })
//                               }
//                             />
//                           </div>

//                           <div className="flex items-center space-x-2">
//                             <input
//                               type="checkbox"
//                               id="defaultAddress"
//                               checked={newAddress.isDefault}
//                               onChange={(e) =>
//                                 setNewAddress({
//                                   ...newAddress,
//                                   isDefault: e.target.checked,
//                                 })
//                               }
//                             />
//                             <Label htmlFor="defaultAddress">
//                               تعيين كعنوان افتراضي
//                             </Label>
//                           </div>

//                           <div className="flex gap-2">
//                             <Button
//                               className="flex-1"
//                               onClick={handleAddNewAddress}
//                             >
//                               حفظ العنوان
//                             </Button>
//                             <Button
//                               variant="outline"
//                               className="flex-1"
//                               onClick={() => setShowNewAddressForm(false)}
//                             >
//                               إلغاء
//                             </Button>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="city">City</Label>
//                     <Input
//                       id="city"
//                       className="transition-all duration-200 focus:scale-[1.02]"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <Separator />

//               <div className="animate-in slide-in-from-left-5 duration-700">
//                 <h3 className="text-lg font-medium mb-4">Payment Method</h3>
//                 <RadioGroup defaultValue="card" className="space-y-3">
//                   <div className="flex items-center space-x-2 border rounded-md p-4 transition-all duration-200 hover:bg-muted/50 hover:scale-[1.02]">
//                     <RadioGroupItem value="card" id="card" />
//                     <Label htmlFor="card" className="flex-1 cursor-pointer">
//                       Credit Card
//                     </Label>
//                   </div>
//                   <div className="flex items-center space-x-2 border rounded-md p-4 transition-all duration-200 hover:bg-muted/50 hover:scale-[1.02]">
//                     <RadioGroupItem value="Cash" id="Cash" />
//                     <Label htmlFor="Cash" className="flex-1 cursor-pointer">
//                       Cash
//                     </Label>
//                   </div>
//                 </RadioGroup>

//                 <div className="mt-4 space-y-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="cardNumber">Card Number</Label>
//                     <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="expiry">Expiry Date</Label>
//                       <Input id="expiry" placeholder="MM/YY" />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="cvc">CVC</Label>
//                       <Input id="cvc" placeholder="123" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       <div className="animate-in slide-in-from-right-5 duration-700">
//         <Card className="sticky top-4 transform transition-all duration-300 hover:shadow-lg">
//           <CardContent className="p-6">
//             <h2 className="text-xl font-bold mb-4">Order Summary</h2>
//             <div className="space-y-3">
//               <div className="flex justify-between transition-colors duration-200 hover:text-primary">
//                 <span className="text-muted-foreground">Subtotal</span>
//                 <span>{formatCurrency(subtotal)}</span>
//               </div>
//               <div className="flex justify-between transition-colors duration-200 hover:text-primary">
//                 <span className="text-muted-foreground">Shipping</span>
//                 <span>{formatCurrency(shipping)}</span>
//               </div>
//               <div className="flex justify-between transition-colors duration-200 hover:text-primary">
//                 <span className="text-muted-foreground">Tax</span>
//                 <span>{formatCurrency(tax)}</span>
//               </div>
//               <Separator className="my-2" />
//               <div className="flex justify-between font-bold text-lg">
//                 <span>Total</span>
//                 <span className="animate-pulse">{formatCurrency(total)}</span>
//               </div>
//               <div className="flex flex-col gap-2 mt-4">
//                 <Button
//                   onClick={onComplete}
//                   size="lg"
//                   className="transform transition-all duration-200 hover:scale-105 active:scale-95"
//                 >
//                   Complete Order
//                 </Button>
//                 <Button
//                   variant="outline"
//                   onClick={onBack}
//                   className="transform transition-all duration-200 hover:scale-105 active:scale-95"
//                 >
//                   Back to Cart
//                 </Button>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
