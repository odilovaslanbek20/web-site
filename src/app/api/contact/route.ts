import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Form validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: "All fields are required",
        },
        { status: 400 }
      );
    }

    // Telegram environment variables
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram environment variables are missing");

      return NextResponse.json(
        {
          success: false,
          error: "Telegram configuration is missing",
        },
        { status: 500 }
      );
    }

    // Telegram message
    const text = [
      "📩 NEW PORTFOLIO MESSAGE",
      "",
      `👤 Name: ${name.trim()}`,
      `📧 Email: ${email.trim()}`,
      "",
      "💬 Message:",
      message.trim(),
    ].join("\n");

    // Send message to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
      }
    );

    const telegramData = await telegramResponse.json();

    // Telegram API error
    if (!telegramResponse.ok || !telegramData.ok) {
      console.error("Telegram API error:", telegramData);

      return NextResponse.json(
        {
          success: false,
          error: "Telegram message could not be sent",
        },
        { status: 500 }
      );
    }

    // Success
    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong",
      },
      { status: 500 }
    );
  }
}