import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, goal, budget, deadline, message, language } = await req.json();

    console.log('📧 Sending Resend notification to mubxdev@proton.me');
    const { data, error } = await resend.emails.send({
      from: 'MUBX Portfolio <onboarding@resend.dev>',
      to: ['mubxdev@proton.me'],
      subject: `New Lead from Portfolio (${language === 'ar' ? 'Arabic' : 'English'})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #FF1E1E;">New Project Inquiry</h2>
          <hr />
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Goal:</strong> ${goal || 'Not specified'}</p>
          <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
          <p><strong>Deadline:</strong> ${deadline || 'Not specified'}</p>
          <p><strong>Language:</strong> ${language || 'en'}</p>
          <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 5px;">
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
          <footer style="margin-top: 30px; font-size: 12px; color: #888;">
            Sent from your portfolio at mubx.dev
          </footer>
        </div>
      `,
    });

    if (error) {
      console.error('🔥 Resend API Error:', error);
      return NextResponse.json({ error }, { status: 400 });
    }

    console.log('✅ Resend success:', data);
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
