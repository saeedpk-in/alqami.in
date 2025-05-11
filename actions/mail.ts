"use server" 
import nodemailer from "nodemailer";
// Setup Nodemailer for email sending
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
export async function ReserveProduct(email:string) {
    try {
    const message = {
      from: `"Product Reservation |" <${process.env.EMAIL_USER}>`,
      to: "alqami.in@gmail.com",
      subject: "Product Reservation Request",
      text: `The person with email ${email} is interested in your product launch and wants to reserve it. They are on the waiting list.`,
    };
  
      await transporter.sendMail(message);
  
      return {
        success:true
      }
    } catch (error) {
      return {
        success:false,
        message:"An error occured to sent message try again"
      }
    }
  }
  
  export async function sendContactMessage(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) {
    try {
      const message = {
        from: `"Conatct Form |" <${process.env.EMAIL_USER}>`,
        to: "alqami.in@gmail.com",
        subject: `New Contact Message: ${data.subject}`,
        html: `
          <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e5e5; border-radius: 4px; overflow: hidden;">
      <!-- Header -->
      <div style="background-color: #000000; padding: 25px; text-align: center;">
        <h1 style="color: #ffffff; font-size: 22px; margin: 0; font-weight: 500;">New Contact Form Submission</h1>
      </div>
      
      <!-- Content -->
      <div style="padding: 30px;">
        <div style="margin-bottom: 25px;">
          <span style="display: block; font-size: 14px; color: #666666; margin-bottom: 5px;">From</span>
          <span style="font-size: 16px; color: #000000;">${data.name} &lt;${
          data.email
        }&gt;</span>
        </div>
        
        <div style="margin-bottom: 25px;">
          <span style="display: block; font-size: 14px; color: #666666; margin-bottom: 5px;">Subject</span>
          <span style="font-size: 16px; color: #000000;">${data.subject}</span>
        </div>
        
        <div style="border-top: 1px solid #eeeeee; margin: 25px 0;"></div>
        
        <div style="background-color: #f9f9f9; border-left: 4px solid #000000; padding: 15px; margin-bottom: 25px;">
          ${data.message.replace(/\n/g, "<br>")}
        </div>
        
        <div style="border-top: 1px solid #eeeeee; margin: 25px 0;"></div>
        
        <p style="margin-bottom: 0; font-size: 14px; color: #333333;">
          Reply directly to this email to respond to ${data.name}.
        </p>
      </div>
      
      <!-- Footer -->
      <div style="background-color: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #999999; border-top: 1px solid #eeeeee;">
        <p style="margin: 0 0 5px 0;">© ${new Date().getFullYear()} Alqami </p>
      </div>
    </div>
        `,
      };
  
      await transporter.sendMail(message);
  
      return {
        success:true
      }
    } catch (error) {
      return {
        success:false,
        message:"An error occured to sent message try again"
      }
    }
  }
  