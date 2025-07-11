"use client"
// @ts-nocheck
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"
import React, { useState } from "react"
import { useSearchParams, useRouter } from 'next/navigation';
import PaypalPay from './PaypalPay';

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  country: z.string().min(1, "Country is required"),
  city: z.string().min(1, "City is required"),
  address: z.string().min(5, "Address is required"),
  state: z.string().min(2, "State is required"),
  postalCode: z.string().min(4, "Postal code is required"),
  vin: z.string().min(17, "Valid VIN number is required"),
  // terms: z.boolean().refine((val) => val === true, {
  //   message: "You must accept the terms and conditions",
  // }),
})

export function CheckoutForm() {
  const amount = 39.99;
  const [isProcessing, setIsProcessing] = useState(false);
  // const [showPaypal, setShowPaypal] = useState(false);
  const vinParams = useSearchParams();
  const VIN = vinParams.get("vin") || "";
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      vin: VIN,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      address: "",
      state: "",
      postalCode: "",
      // terms: false,
    }
  })

  // Watch the terms value from the form
  // const termsAccepted = watch('terms')
  const formData = watch();
  // Update terms in form when checkbox changes
  // const handleTermsChange = (checked: boolean) => {
  //   setValue('terms', checked, {
  //     shouldValidate: true,
  //     shouldDirty: true,
  //     shouldTouch: true,
  //   })
  // }

  const onFormValidate = (data: z.infer<typeof formSchema>) => {
    // console.log("Form is valid and ready for payment. Data:", data);
    // toast.info("Form details are valid. You can now complete the payment.");
  };


  // const onSubmit = async (data: z.infer<typeof formSchema>) => {
  //   if (isProcessing) return;
  //   setIsProcessing(true);

  //   try {
  //     // ✅ First, submit the form
  //     const formResponse = await fetch("/api/submit-form", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(data),
  //     });

  //     if (!formResponse.ok) {
  //       throw new Error("Failed to submit form");
  //     }

  //     // toast.success("Form submitted successfully");
  //     setShowPaypal(true); // Show Paypal payment modal
  //   } catch (error) {
  //     toast.error("Failed to submit form");
  //   } finally {
  //     setIsProcessing(false);
  //   }
  // };

  const handlePaymentSuccess = async (details: any) => {
    setIsProcessing(true);
    try {
      const formResponse = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // Use the latest watched form data
      });

      if (!formResponse.ok) {
        throw new Error("Failed to submit form data after payment.");
      }

      toast.success("Payment successful and details saved!");
      router.push(`/payment-success?amount=${amount}&email=${details.payer.email_address}&name=${details.payer.name.given_name}&vin=${VIN}`);

    } catch (error) {
      console.error("Error saving form details after payment:", error);
      toast.error("Payment successful, but failed to save details. Please contact support.");
    } finally {
      setIsProcessing(false); // Reset payment processing state
    }
  };

  // const handleFormSubmit = async () => {
  //   try {
  //     const formResponse = await fetch("/api/submit-form", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(watch()),
  //     });

  //     if (!formResponse.ok) {
  //       throw new Error("Failed to submit form");
  //     }

  //     // toast.success("Form submitted successfully");
  //   } catch (error) {
  //     toast.error("Failed to submit form");
  //   }
  // };

  const handleFormSubmitForPaypal = async () => {
    return handleSubmit(onFormValidate)(); 
  };


  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <Card className="max-w-5xl mx-auto bg-white border-primary/20 text-black shadow-lg rounded-xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-extrabold text-textcolor">
              Secure Checkout
            </CardTitle>
            <CardDescription className="text-gray-700 mt-2">
              Complete your purchase to receive your vehicle history report
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit(onFormValidate)}>
            {/* <div className="flex flex-col justify-center items-center gap-8"> */}
            {/* Left Column - Customer Details */}
            <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
              <div className="space-y-6 lg:border-r lg:pr-8">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-3 mb-4">
                  Customer Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-start">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">
                      First Name
                    </Label>
                    <Input
                      className="rounded-md border-gray-300 focus:border-primary focus:ring-primary"
                      id="firstName" {...register("firstName")} placeholder="First Name" />
                    {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">
                      Last Name
                    </Label>
                    <Input
                      className="rounded-md border-gray-300 focus:border-primary focus:ring-primary"
                      id="lastName" {...register("lastName")} placeholder="Last Name" />
                    {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message as string}</p>}
                  </div>
                </div>
                <div className="space-y-2 text-start">
                  <Label htmlFor="email">
                    Email
                  </Label>
                  <Input
                    className="rounded-md border-gray-300 focus:border-primary focus:ring-primary"
                    id="email" type="email" {...register("email")} placeholder="Email Address" />
                  {errors.email && <p className="text-sm text-red-500">{errors.email.message as string}</p>}
                </div>

                <div className="space-y-2 text-start">
                  <Label htmlFor="phone">
                    Phone
                  </Label>
                  <Input
                    className="rounded-md border-gray-300 focus:border-primary focus:ring-primary"
                    id="phone" type="tel" {...register("phone")} placeholder="Phone Number" />
                  {errors.phone && <p className="text-sm text-red-500">{errors.phone.message as string}</p>}
                </div>

                <div className="space-y-2 text-start">
                  <Label htmlFor="address">
                    Street Address
                  </Label>
                  <Input
                    className="rounded-md border-gray-300 focus:border-primary focus:ring-primary"
                    id="address" {...register("address")} placeholder="Street Address" />
                  {errors.address && <p className="text-sm text-red-500">{errors.address.message as string}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-start">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      className="rounded-md border-gray-300 focus:border-primary focus:ring-primary"
                      id="city" {...register("city")} placeholder="City" />
                    {errors.city && <p className="text-sm text-red-500">{errors.city.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">State/ Province</Label>
                    <Input
                      className="rounded-md border-gray-300 focus:border-primary focus:ring-primary"
                      id="state" {...register("state")} placeholder="State" />
                    {errors.state && <p className="text-sm text-red-500">{errors.state.message as string}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-start">
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input
                      className="rounded-md border-gray-300 focus:border-primary focus:ring-primary"
                      id="postalCode" {...register("postalCode")} placeholder="Postal Code" />
                    {errors.postalCode && <p className="text-sm text-red-500">{errors.postalCode.message as string}</p>}
                  </div>

                  <div className="space-y-2 ">
                    <Label htmlFor="country">
                      Country
                    </Label>
                    <Input
                      className="rounded-md border-gray-300 focus:border-primary focus:ring-primary"
                      id="country" {...register("country")} placeholder="Country" />
                    {errors.country && <p className="text-sm text-red-500">{errors.country.message as string}</p>}
                  </div>
                </div>

                <div className="space-y-2 text-start">
                  <Label htmlFor="vin">VIN (Vehicle Identification Number)</Label>
                  <Input
                    className="rounded-md border-gray-300 focus:border-primary focus:ring-primary"
                    id="vin" {...register("vin")} placeholder="17-digit VIN" />
                  {errors.vin && <p className="text-sm text-red-500">{errors.vin.message as string}</p>}
                </div>

                {/* <div className="flex items-center space-x-2 pt-4">
                  <Checkbox
                    id="terms"
                    className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white"
                  // checked={termsAccepted}
                  // onCheckedChange={handleTermsChange}
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700 select-none">
                    I accept the <a href="/privacypolicy" className="text-primary hover:underline">terms and conditions</a>.
                  </label>
                </div> */}
                {/* {errors.terms && <p className="text-sm text-red-500">{errors.terms.message as string}</p>} */}
              </div>



              {/* Right Column - Payment */}
              <div className="space-y-6 lg:pl-8">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-3 mb-4">Order Summary</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">VIN:</span>
                    <span className="font-bold text-textcolor break-all">{VIN || "N/A"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Report Type:</span>
                    <span>Basic Vehicle History Report</span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-3 mt-3">
                    <span className="font-semibold text-lg">Subtotal:</span>
                    <span className="font-bold text-lg text-textcolor">${amount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-3 mt-3">
                    <span className="font-bold text-xl">Total:</span>
                    <span className="font-bold text-xl text-textcolor">${amount.toFixed(2)}</span>
                  </div>
                </div>

                {/* <CardFooter className="p-0 pt-6"> */}
                  {/* <Button
                    className="w-full h-12 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
                    disabled={isProcessing || showPaypal}
                    !termsAccepted ||
                    type="submit"> */}
                    {/* {isProcessing ? "Processing..." : "Secure Checkout"} */}
                  {/* </Button> */}
                {/* </CardFooter> */}
                <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    {isProcessing && (
                    <div className="text-center text-primary font-medium mb-4">Processing payment and saving details...</div>
                  )}
                  <PaypalPay
                    amount={amount.toFixed(2).toString()}
                    email={formData.email}
                    FirstName={formData.firstName}
                    LastName={formData.lastName}
                    zipCode={formData.postalCode}
                    vin={formData.vin}
                    onSuccess={handlePaymentSuccess}
                    onFormSubmit={handleFormSubmitForPaypal} // This will trigger form validation before PayPal
                    disabled={!isValid || isProcessing} // PayPal button disabled until form is valid and terms accepted
                  />
                </div>
                {/* {showPaypal && (
                  <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="text-center text-lg font-semibold mb-4 text-gray-800">Complete Payment with PayPal</h4>
                    <PaypalPay
                      amount={amount.toString()}
                      email={watch('email')}
                      FirstName={watch('firstName')}
                      LastName={watch('lastName')}
                      zipCode={watch('postalCode')}
                      vin={VIN}
                      onSuccess={handlePaymentSuccess}
                      onFormSubmit={handleFormSubmit} // Pass the new prop
                    />
                  </div>
                )} */}
              </div>


            </CardContent>
          </form>
        </Card>
      </div >
    </div >
  )
}

