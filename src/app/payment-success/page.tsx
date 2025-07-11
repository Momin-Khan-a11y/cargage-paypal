'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from "react"

export default function PaymentSuccess({
  searchParams: { amount, email, name, vin },
}: {
  searchParams: { 
    amount: string;
    email: string;
    name: string;
    vin: string;
  };
}) {
  // Send confirmation email when the success page loads
  useEffect(() => {
    const sendConfirmationEmail = async () => {
      // Check if email was already sent for this transaction
      const emailSentKey = `email_sent_${email}_${amount}_${vin}`;
      if (localStorage.getItem(emailSentKey)) {
        console.log('Confirmation email already sent');
        return;
      }

      try {
        await fetch('/api/send-confirmation-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            name,
            amount: Number(amount),
            vin
          }),
        });
        
        // Mark this transaction as emailed
        localStorage.setItem(emailSentKey, 'true');
        
        // Clean up old entries after 24 hours
        setTimeout(() => {
          localStorage.removeItem(emailSentKey);
        }, 24 * 60 * 60 * 1000);

      } catch (error) {
        console.error('Failed to send confirmation email:', error);
      }
    };

    if (email && name && amount && vin) {
      sendConfirmationEmail();
    }
  }, [email, name, amount, vin]);

  return (
    <main className="min-h-screen bg-foreground flex flex-col justify-center items-center p-6">
      <div className="max-w-md w-full bg-background/50 backdrop-blur-sm p-8 rounded-2xl border-2 border-primary/20">
        <div className="text-center space-y-6">
          {/* Success Icon */}
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-textcolor"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Success Message */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-textcolor">
              Payment Successful!
            </h1>
            <p className="text-textcolor/80">
              Thank you for your purchase
            </p>
          </div>

          {/* Amount */}
          <div className="bg-gradient-to-r from-primary to-secondary p-[2px] rounded-lg">
            <div className="bg-background rounded-lg p-4">
              <p className="text-textcolor/70 text-sm">Amount paid</p>
              <p className="text-2xl font-bold text-white">${(Number(amount))}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-4 pt-4">
            <Link href="/#get-report" className="block">
              <Button variant="outline" className="w-full bg-gradient-to-r from-primary to-secondary text-textcolor hover:bg-gradient-to-r hover:from-black/60 hover:to-black/80">
                Get Another Report
              </Button>
            </Link>
            
            <Link href="/" className="block">
              <Button variant="outline" className="w-full bg-gradient-to-r from-primary to-secondary text-textcolor hover:bg-gradient-to-r hover:from-black/60 hover:to-black/80">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}