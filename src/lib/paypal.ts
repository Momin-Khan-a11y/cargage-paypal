import axios from 'axios';
import { Buffer } from 'buffer';


async function getAccessToken() {
    const auth = Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`).toString('base64');
    try {
        const response = await axios("https://api-m.sandbox.paypal.com/v1/oauth2/token", { // Use "https://api-m.paypal.com" for production
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Basic ${auth}`,
            },
            data: "grant_type=client_credentials",
        });

        const data = response.data;
        if (response.status !== 200) {
            console.error("Failed to generate access token:", data);
            throw new Error(`Failed to generate access token: ${data.error_description || response.statusText}`);
        }
        return data.access_token;
    } catch (error) {
        console.error("Error generating access token:", error);
        throw error;
    }
}

// Function to create a PayPal order
async function createOrder(amount: number, currency = "USD") {
    const accessToken = await getAccessToken();
    const url = "https://api-m.sandbox.paypal.com/v2/checkout/orders"; // Use "https://api-m.paypal.com" for production

    try {
        const response = await axios({
            url: url,
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
            data: {
                intent: "CAPTURE",
                purchase_units: [{
                    amount: {
                        currency_code: currency,
                        value: amount.toString(),
                    },
                }],
                application_context: {
                    shipping_preference: "NO_SHIPPING", 
                },
            },
        });

        const data = response.data;
        if (response.status !== 201) {
            console.error("Failed to create order:", data);
            throw new Error(`Failed to create order: ${data.message || response.statusText}`);
        }
        return data;
    } catch (error) {
        console.error("Error creating order:", error);
        throw error;
    }
}

// Function to capture a PayPal order
async function captureOrder(orderID : any) {
    const accessToken = await getAccessToken();
    const url = `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}/capture`; // Use "https://api-m.paypal.com" for production

    try {
        const response = await axios({
            url: url,
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
        });

        const data = response.data;
        if (response.status !== 201) {
            console.error("Failed to capture order:", data);
            throw new Error(`Payment declined: ${data.message || response.statusText}`);
        }  

        return data;
    } catch (error) {
        console.error("Error capturing order:", error);
        throw error;
    }
}

export { getAccessToken, createOrder, captureOrder };
