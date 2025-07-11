'use client'
import React, { useEffect, useRef } from 'react'
import { FUNDING, PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { toast } from "sonner"

if (!process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID) {
    throw new Error("PayPal client ID is missing");
}

interface PaypalPayProps {
    amount: string;
    email: string;
    FirstName: string;
    LastName: string;
    zipCode: string;
    vin: string;
    disabled: boolean;
    onSuccess: (details: any) => void;
    onFormSubmit: () => void;
}

export default function PaypalPay({ amount, email, FirstName, LastName, vin,disabled , zipCode, onSuccess }: PaypalPayProps) {
    const paypalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (paypalRef.current) {
            paypalRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const handleSuccess = (details: any) => {
        console.log("Transaction completed by", details.payer.name.given_name);
        toast.success("Payment successful!");
        onSuccess(details);
    };

    const onError = (err: any) => {
        console.error("Error occurred during payment:", err);
        toast.error("Payment failed!");
    };

    return (
        <PayPalScriptProvider options={{
            clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
            components: "buttons",
            enableFunding: [FUNDING.PAYPAL, FUNDING.CARD],
            disableFunding: [FUNDING.PAYLATER],
        }}>
            {/*  Payment */}
            <div ref={paypalRef} className="w-full max-w-md mx-auto ">
                {/* <div className="bg-white p-6 rounded-lg shadow-md"> */}
                    {/* <h3 className="text-lg font-semibold mb-4 text-black text-center">Complete Your Payment</h3> */}
                    <div className="space-y-4">
                        {/* <p className="text-center text-gray-600">Total Amount: ${Number.parseFloat(amount).toFixed(2)}</p> */}
                        <PayPalButtons
                            disabled={disabled}
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    intent: "CAPTURE",

                                    purchase_units: [
                                        {
                                            amount: {
                                                value: amount,
                                                currency_code: "USD",
                                            },
                                        },
                                    ],
                                    application_context: {
                                        shipping_preference: "NO_SHIPPING" // hides shipping address
                                    },
                                    payer: {
                                        name: { given_name: FirstName, surname: LastName },
                                        address: { postal_code: zipCode, country_code: "US" }, 
                                        email_address: email,
                                    },
                                });
                            }}
                            onApprove={(data, actions) => {
                                return new Promise<void>((resolve, reject) => {
                                    if (!actions.order) {
                                        console.error("Order actions are undefined");
                                        toast.error("Payment failed: Order actions are undefined");
                                        return reject();
                                    }

                                    actions.order.capture()
                                        .then((details) => {
                                            handleSuccess(details); // Handle successful payment
                                            resolve(); // Resolve the promise on success
                                        })
                                        .catch((error) => {
                                            console.error("Error capturing order:", error);
                                            toast.error("Payment failed: Unable to capture order");
                                            reject(error); // Reject the promise on failure
                                        });
                                });
                            }}
                            onError={(err) => {
                                console.error("Error occurred during payment:", err);
                                toast.error("Payment failed!");
                            }}
                        />
                    </div>
                {/* </div> */}
            </div>
        </PayPalScriptProvider>
    )
}
