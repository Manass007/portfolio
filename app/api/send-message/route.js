import nodemailer from 'nodemailer';

export async function POST(req, res) {
  const { name, email, message, mobile, subject } = await req.json();

  // Create a Nodemailer transporter using your SMTP settings
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Set up HTML email options with a background image
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: `${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; background: url('https://firebasestorage.googleapis.com/v0/b/melodyai-e8496.appspot.com/o/message-bg1.png?alt=media&token=ea2ed4ee-1d72-47b2-8b09-2543571f156e') no-repeat center center; background-size: cover; padding: 20px; color: #333;">
        <div style="background: rgba(255, 255, 255, 0.8); padding: 20px; border-radius: 10px;">
          <h2 style="color: #333;">You have received a new Message!</h2>
          <p style="color: #555;"><strong>Name:</strong> ${name}</p>
          <p style="color: #555;"><strong>Email:</strong> ${email}</p>
          <p style="color: #555;"><strong>Mobile Number:</strong> ${mobile}</p>
          <p style="color: #555;"><strong>Message:</strong></p>
          <p style="color: #555; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      </div>
    `,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send Message. Please try again.' }), { status: 500 });
  }
}
