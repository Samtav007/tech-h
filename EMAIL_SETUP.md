# 📧 Email Setup Guide for Contact Form

## 🚀 **Quick Setup (5 minutes)**

To make the contact form send emails to `nirmantech8@gmail.com`, follow these steps:

### 1. **Create Environment File**
Create a file called `.env.local` in your project root with:

```bash
# Gmail Configuration
GMAIL_USER=nirmantech8@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password_here
```

### 2. **Get Gmail App Password**

**Step 1:** Go to [Google Account Settings](https://myaccount.google.com/)

**Step 2:** Click on **Security** in the left sidebar

**Step 3:** Enable **2-Step Verification** (if not already enabled)

**Step 4:** Go to **App passwords** (you'll see this after enabling 2FA)

**Step 5:** Select **Mail** as the app and **Other** as the device

**Step 6:** Enter "hömy Contact Form" as the device name

**Step 7:** Copy the 16-character password (like: `abcd efgh ijkl mnop`)

**Step 8:** Add it to your `.env.local` file:
```bash
GMAIL_APP_PASSWORD=abcdefghijklmnop
```

### 3. **Test the Contact Form**

1. Go to `http://localhost:3000/contact`
2. Fill out the contact form
3. Click "Send Message"
4. Check `nirmantech8@gmail.com` for the email!

## 📧 **What You'll Receive**

When someone submits the contact form, you'll get an email with:

- ✅ **Sender's name and email**
- ✅ **Phone number and company** (if provided)
- ✅ **Inquiry type** (General, Support, Design, etc.)
- ✅ **Subject and full message**
- ✅ **Professional HTML formatting**
- ✅ **Reply-to link** for easy responses

## 🔧 **Troubleshooting**

**If emails aren't sending:**

1. **Check your `.env.local` file** - Make sure it's in the project root
2. **Restart the development server** - Run `npm run dev` again
3. **Check the app password** - Make sure it's exactly 16 characters
4. **Check Gmail security** - Make sure 2FA is enabled

**Error messages:**
- `"Missing required fields"` - User didn't fill required fields
- `"Failed to send email"` - Check your Gmail app password
- `"Authentication failed"` - Wrong app password or 2FA not enabled

## 🎯 **Alternative: Use EmailJS (No Gmail setup needed)**

If you prefer not to set up Gmail, you can use EmailJS instead:

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create a free account
3. Set up a Gmail service
4. Create an email template
5. Get your public key
6. Update the ContactForm component with your EmailJS credentials

## 📱 **Ready to Go!**

Once you've set up the environment variables, your contact form will:
- ✅ Send real emails to `nirmantech8@gmail.com`
- ✅ Show success/error messages to users
- ✅ Reset the form after successful submission
- ✅ Handle all form validation

**Your contact form is now fully functional!** 🎉
