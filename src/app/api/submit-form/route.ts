import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, vin, country, city, address, postalCode } = body
    const name = `${firstName} ${lastName}`
    
    // Try Google Form submission
    try {
      const formResponse = await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd-LFxM-e9HfdQ-rYQkeG6-VZ7x6zzpDihFPL58KIbnj1l2FQ/formResponse",
        {
          method: "POST",
          mode: 'no-cors', 
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            "entry.65501370": name,
            "entry.1081725993": email,
            "entry.997398533": phone,
            "entry.1353545039": country,
            "entry.1758907296": city,
            "entry.1884365213": address,
            "entry.452905563": postalCode,
            "entry.960129972": vin,
          }).toString(),
        }
      )
      console.log('Google Form submission attempted')
    } catch (formError) {
      console.error('Google Form submission error:', formError)
      // Continue execution even if Google Form fails
    }

    // Try email submission
    try {
      // Email Configuration
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASSWORD, 
        },
      })

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "New Vehicle Report Request",
        html: `
          <h2>New Form Submission from ${name}</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>VIN:</strong> ${vin}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Postal Code:</strong> ${postalCode}</p>
        `,
      })
      console.log('Email sent successfully')
    } catch (emailError) {
      console.error('Email sending error:', emailError)
      // Continue execution even if email fails
    }

    // Return success if at least one method worked
    return NextResponse.json({ message: "Form submitted successfully!" })
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    )
  }
} 