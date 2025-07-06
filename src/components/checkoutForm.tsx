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
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
})

export function CheckoutForm() {
  const amount = 39.99;
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPaypal, setShowPaypal] = useState(false);
  const vinParams = useSearchParams();
  const VIN = vinParams.get("vin") || "";
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
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
      terms: false,
    }
  })

  // Watch the terms value from the form
  const termsAccepted = watch('terms')

  // Update terms in form when checkbox changes
  const handleTermsChange = (checked: boolean) => {
    setValue('terms', checked, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    })
  }

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (isProcessing) return;
    setIsProcessing(true);

    try {
      // ✅ First, submit the form
      const formResponse = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!formResponse.ok) {
        throw new Error("Failed to submit form");
      }

      toast.success("Form submitted successfully");
      setShowPaypal(true); // Show Paypal payment modal
    } catch (error) {
      toast.error("Failed to submit form");
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePaymentSuccess = (details: any) => {
    router.push(`/payment-success?amount=${amount}&email=${details.payer.email_address}&name=${details.payer.name.given_name}&vin=${VIN}`);
  };

  const handleFormSubmit = async () => {
    try {
      const formResponse = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(watch()),
      });

      if (!formResponse.ok) {
        throw new Error("Failed to submit form");
      }

      toast.success("Form submitted successfully");
    } catch (error) {
      toast.error("Failed to submit form");
    }
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-white border-primary/20 text-black">
          <CardHeader className="text-center">
            <CardTitle>Checkout</CardTitle>
            <CardDescription className="text-black">Complete your purchase to receive your vehicle history report</CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col justify-center items-center gap-8">
              {/* Left Column - Customer Details */}
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Details</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" {...register("firstName")} placeholder="First Name" />
                      {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message as string}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" {...register("lastName")} placeholder="Last Name" />
                      {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message as string}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" {...register("email")} placeholder="Email Address" />
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" {...register("phone")} placeholder="Phone Number" />
                    {errors.phone && <p className="text-sm text-red-500">{errors.phone.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>

                    <Input id="country" {...register("country")} placeholder="Country" />
                    {errors.country && <p className="text-sm text-red-500">{errors.country.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" {...register("city")} placeholder="City" />
                    {errors.city && <p className="text-sm text-red-500">{errors.city.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" {...register("address")} placeholder="Street Address" />
                    {errors.address && <p className="text-sm text-red-500">{errors.address.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" {...register("state")} placeholder="State" />
                    {errors.state && <p className="text-sm text-red-500">{errors.state.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input id="postalCode" {...register("postalCode")} placeholder="Postal Code" />
                    {errors.postalCode && <p className="text-sm text-red-500">{errors.postalCode.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vin">VIN</Label>
                    <Input id="vin" {...register("vin")} placeholder="Vehicle Identification Number" />
                    {errors.vin && <p className="text-sm text-red-500">{errors.vin.message as string}</p>}
                  </div>
                </div>

              </CardContent>

              <div>
                {/* Right Column - Payment */}
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={termsAccepted}
                          onCheckedChange={handleTermsChange}
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                          I accept the terms and conditions
                        </label>
                      </div>
                      {errors.terms && <p className="text-sm text-red-500">{errors.terms.message as string}</p>}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="col-span-2">
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                    disabled={!termsAccepted || isProcessing || showPaypal}
                    type="submit"
                  >
                    {isProcessing ? "Processing..." : "Continue Payment"}
                  </Button>
                </CardFooter>
              </div>
            </div>
            {showPaypal && (
              <div className="bg-white p-6 rounded-lg flex justify-center items-center">
                <PaypalPay
                  amount={amount.toString()}
                  email={watch('email')}
                  name={watch('firstName')}
                  vin={VIN}
                  onSuccess={handlePaymentSuccess}
                  onFormSubmit={handleFormSubmit} // Pass the new prop
                />
              </div>
            )}
          </form>
        </Card>
      </div>


    </div>
  )
}

