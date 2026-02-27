import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabaseUrl = 'https://uolwakngldkxiawrfavs.supabase.co';
const supabaseKey = 'sb_publishable_Z1WZaKqjpNKOZtLve0dGqQ_6lcMftlc';
const resendKey = 're_dTCPvBRU_LwqMWXxFaZpHDhhYjNZF1srK';

async function test() {
  console.log('Testing Supabase...');
  const supabase = createClient(supabaseUrl, supabaseKey);
  const { data: supaData, error: supaError } = await supabase
    .from('contact_submissions')
    .insert([{
        name: 'Test Bot',
        email: 'test@example.com',
        brand_name: 'Test Brand',
        website: 'https://test.com',
        goal: 'Testing',
        budget: 'Testing',
        deadline: 'Testing',
        message: 'This is a test message to verify the form functionality.',
        language: 'en'
    }]);

  if (supaError) {
    console.error('Supabase Error:', supaError);
  } else {
    console.log('Supabase Success!');
  }

  console.log('\nTesting Resend...');
  const resend = new Resend(resendKey);
  const { data: resData, error: resError } = await resend.emails.send({
    from: 'MUBX Portfolio <onboarding@resend.dev>',
    to: ['mubxdev@proton.me'],
    subject: `Test Lead: Test Bot`,
    html: `<p>Test message</p>`,
  });

  if (resError) {
    console.error('Resend Error:', resError);
  } else {
    console.log('Resend Success!', resData);
  }
}

test();
