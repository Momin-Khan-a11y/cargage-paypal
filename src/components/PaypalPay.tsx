'use client'
import React, { useRef, useState } from 'react';
import { PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "sonner";

interface PaypalPayProps {
    amount: string;
    email: string;
    FirstName: string;
    LastName: string;
    zipCode: string;
    vin: string;
    disabled: boolean;
    onSuccess: (details: any) => void;
}

export default function PaypalPay({ amount, email, FirstName, LastName, vin, disabled, zipCode, onSuccess }: PaypalPayProps) {
    const [isProcessing, setIsProcessing] = useState(false);

    const handleApprove = async (data: any, actions: any) => {
        setIsProcessing(true);
        try {
            const response = await fetch('/api/capture-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ orderID: data.orderID }),
            });
            const orderDetails = await response.json();
            if (response.ok && orderDetails.status === 'COMPLETED') {
                toast.success("Payment successful!");
                onSuccess(orderDetails);
                
            } else {
                toast.error(`Payment failed: ${orderDetails.message || 'Unable to capture order'}`);
            }
        } catch (error) {
            toast.error("Payment failed due to a network error or server issue.");
        } finally {
            setIsProcessing(false);
        }
    };

    const handleCreateOrder = async (data: any, actions: any) => {
        setIsProcessing(true);
        try {
            const response = await fetch('/api/create-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: amount,
                    currency: "USD",
                    payer: {
                        email_address: email,
                        name: { given_name: FirstName, surname: LastName },
                        address: { postal_code: zipCode, country_code: "US" }
                    },
                    vin: vin
                }),
            });
            const order = await response.json();
            if (response.ok && order.id) {
                setIsProcessing(false);
                return order.id;
            } else {
                toast.error(`Failed to create payment order: ${order.message || 'Unknown error'}`);
                setIsProcessing(false);
                throw new Error(order.message || "Failed to create order");
            }
        } catch (error) {
            toast.error("Failed to initiate payment due to a network error or server issue.");
            setIsProcessing(false);
            throw error;
        }
    };

    const onError = (err: any) => {
        toast.error("Payment failed!");
        setIsProcessing(false);
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="space-y-4">
                {isProcessing && (
                    <div className="text-center text-gray-700 font-semibold mb-4">
                        Processing Order... Please wait.
                    </div>
                )}
                <PayPalButtons
                    disabled={disabled || isProcessing}
                    createOrder={handleCreateOrder}
                    onApprove={handleApprove}
                    onError={onError}
                    onCancel={() => {
                        toast.info("Payment cancelled.");
                        setIsProcessing(false);
                    }}
                />
            </div>
        </div>
    );
}

