import { NextResponse } from 'next/server';
import { createOrder } from '@/lib/paypal'; // Adjust path if necessary

export async function POST(req: any) {
    try {
        const { amount, currency } = await req.json();

        if (!amount) {
            return NextResponse.json({ error: "Amount is required" }, { status: 400 });
        }

        // Call the utility function to create the order with PayPal
        const order = await createOrder(amount, currency);

        // Return the PayPal order ID to the client
        return NextResponse.json({ id: order.id }, { status: 200 });
    } catch (error: any) {
        console.error("API Error creating PayPal order:", error);
        return NextResponse.json(
            { error: "Failed to create PayPal order", details: error.message },
            { status: 500 }
        );
    }
}
