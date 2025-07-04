export const SEND_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8" />
  <title>Portfolio Message</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: #f4f4f7;
      color: #51545e;
      margin: 0;
      padding: 0;
    }
    .email-wrapper {
      width: 100%;
      background-color: #f4f4f7;
      padding: 20px;
    }
    .email-content {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .email-header {
      background-color: #3869d4;
      color: #ffffff;
      text-align: center;
      padding: 20px;
      font-size: 24px;
    }
    .email-body {
      padding: 30px;
    }
    .sender-info {
      background: #f0f4fa;
      border-radius: 4px;
      padding: 16px;
      margin-bottom: 20px;
      font-size: 16px;
    }
    .divider {
      border-top: 1px solid #eaeaec;
      margin: 24px 0;
    }
    .message-content {
      font-size: 18px;
      color: #22223b;
      padding: 12px 0;
      white-space: pre-line;
    }
    .footer {
      text-align: center;
      font-size: 12px;
      color: #a8aaaf;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="email-content">
      <div class="email-header">
        Portfolio Contact Message
      </div>
      <div class="email-body">
        <div class="sender-info">
          <strong>From:</strong> {name} &lt;{email}&gt;
        </div>
        <div class="divider"></div>
        <div class="message-content">
          {message}
        </div>
        <div class="divider"></div>
        <p style="font-size:14px;color:#888;">If you didn’t send this message, you can safely ignore this email.</p>
        <p>Thanks,<br/>Jake's Portfolio Website</p>
      </div>
    </div>
    <div class="footer">
      © ${new Date().getFullYear()} Jake's Portfolio Website. All rights reserved.
    </div>
  </div>
</body>
</html>
`;