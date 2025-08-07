import axios from 'axios';
import { Buffer } from 'buffer';

let cachedToken: { token: string; expiresAt: number } | null = null;

/**
 * Get a PayPal access token using client credentials.
 * Caches the token until it expires (usually 8-9 hours).
 */
async function getAccessToken(): Promise<string> {
    const now = Date.now();

    // Reuse token if it's still valid
    if (cachedToken && now < cachedToken.expiresAt) {
        return cachedToken.token;
    }

    const auth = Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`).toString('base64');

    try {
        const response = await axios("https://api-m.paypal.com/v1/oauth2/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Basic ${auth}`,
            },
            data: "grant_type=client_credentials",
        });

        const data = response.data;

        if (response.status !== 200) {
            throw new Error(`Failed to get token: ${data.error_description || response.statusText}`);
        }

        // Cache the token with expiry (subtract 1 min for safety buffer)
        cachedToken = {
            token: data.access_token,
            expiresAt: now + data.expires_in * 1000 - 60000,
        };

        return data.access_token;
    } catch (error: any) {
        console.error("PayPal access token error:", error.response?.data || error.message);
        throw new Error("Unable to retrieve PayPal access token");
    }
}

/**
 * Create a PayPal order
 */
async function createOrder(amount: number, currency = "USD") {
    const accessToken = await getAccessToken();
    const url = "https://api-m.paypal.com/v2/checkout/orders";

    try {
        const response = await axios({
            url,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
            data: {
                intent: "CAPTURE",
                purchase_units: [
                    {
                        amount: {
                            currency_code: currency,
                            value: amount.toString(),
                        },
                    },
                ],
                application_context: {
                    shipping_preference: "NO_SHIPPING",
                },
            },
        });

        return response.data;
    } catch (error: any) {
        console.error("PayPal create order error:", error.response?.data || error.message);
        throw new Error("Failed to create PayPal order");
    }
}

/**
 * Capture a PayPal order
 */
async function captureOrder(orderID: string) {
    const accessToken = await getAccessToken();
    const url = `https://api-m.paypal.com/v2/checkout/orders/${orderID}/capture`;

    try {
        const response = await axios({
            url,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
        });

        return response.data;
    } catch (error: any) {
        console.error("PayPal capture order error:", error.response?.data || error.message);
        throw new Error("Failed to capture PayPal order");
    }
}

export { getAccessToken, createOrder, captureOrder };
