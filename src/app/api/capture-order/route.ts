// app/api/paypal/capture-order/route.js
import { NextResponse } from 'next/server';
import { captureOrder } from '@/lib/paypal'; // Adjust path if necessary

export async function POST(req: any) {
    try {
        const { orderID } = await req.json();

        if (!orderID) {
            return NextResponse.json({ error: "Order ID is required" }, { status: 400 });
        }

        // Call the utility function to capture the order with PayPal
        const capture = await captureOrder(orderID);

        // Check the status of the captured payment
        if (capture.status === "COMPLETED") {
            // Payment was successful, you can now update your database,
            // fulfill the order, send confirmation emails, etc.
            console.log("Payment successfully captured:", capture);
            return NextResponse.json(capture, { status: 200 });
        } else {
            // Payment was not completed or has a different status
            console.warn("Payment not completed or has pending status:", capture);
            return NextResponse.json(
                { message: "Payment not completed", details: capture },
                { status: 400 }
            );
        }
    } catch (error: any) {
        console.error("API Error capturing PayPal order:", error);
        return NextResponse.json(
            { error: "Failed to capture PayPal order", details: error.message },
            { status: 500 }
        );
    }
}
