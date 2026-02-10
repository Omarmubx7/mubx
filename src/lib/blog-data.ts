import { Locale } from './dictionaries';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  content: string;
}

const blogData: Record<Locale, BlogPost[]> = {
  en: [
    {
      slug: 'secure-login-php-mysql',
      title: "What I learned building a secure login system in PHP + MySQL",
      excerpt: "Moving beyond basic tutorials to understand hashing, sessions, and SQL injection prevention in a real-world student project.",
      tag: "Security",
      date: "Feb 10, 2026",
      content: `
## The Challenge
Building authentication seems simple until you start thinking about security. For HTU Martial Arts, I needed a system that wasn't just "functional" but actually secure.

### Key Learnings
- **Password Hashing:** Why MD5 is dead and why \`password_hash()\` (Bcrypt/Argon2) is the standard.
- **SQL Injection:** Using prepared statements seems obvious now, but seeing how easy it is to inject SQL into raw queries was a wake-up call.
- **Session Management:** Handling session fixation and using secure, HTTP-only cookies.

This project taught me that security is not a feature you add at the end, but a mindset you start with.
    `
    },
    {
      slug: 'database-schema-design',
      title: "Designing a clean database schema for a university sports club",
      excerpt: "How I iterated on the HTU Martial Arts database to handle bookings, memberships, and payments without redundancy.",
      tag: "Database",
      date: "Jan 15, 2026",
      content: `
## Normalization Matters
My first draft of the schema was a mess. User data was duplicated in booking tables, and tracking membership status was a query nightmare.

### The Solution
I normalized the data into three core tables: \`Users\`, \`Memberships\`, and \`Bookings\`. This allowed for:
- Single source of truth for user details.
- Flexible membership types without altering the user table.
- Faster queries for admin reports.

Good data architecture makes the backend code 50% simpler.
    `
    },
    {
      slug: 'shipping-vynex-media',
      title: "Shipping Vynex Media: Performance lessons from Next.js 15",
      excerpt: "Balancing high-end visual production aesthetics with web performance metrics using Next.js and Framer Motion.",
      tag: "Performance",
      date: "Dec 28, 2025",
      content: `
## Visuals vs. Speed
Vynex Media needed to look "expensive." That usually means heavy assets. My challenge was to make it feel instant.

### Optimization Techniques
- **Image Optimization:** Using \`next/image\` for automatic format selection (WebP/AVIF).
- **Code Splitting:** Next.js handles this well, but I had to be careful with heavy animation libraries.
- **Framer Motion:** Using \`layout\` animations sparsely and optimizing \`whileInView\` triggers.

The result is a site that feels cinematic but loads like a static page.
    `
    }
  ],
  ar: [
    {
      slug: 'secure-login-php-mysql',
      title: "ما تعلمته من بناء نظام تسجيل دخول آمن بـ PHP و MySQL",
      excerpt: "تجاوز الدروس الأساسية لفهم التشفير، الجلسات، والحماية من حقن SQL في مشروع طلابي حقيقي.",
      tag: "أمن المعلومات",
      date: "10 فبراير 2026",
      content: `
## التحدي
يبدو بناء المصادقة بسيطاً حتى تبدأ في التفكير بالأمان. لنادي فنون القتال في HTU، احتجت لنظام ليس مجرد "وظيفي" بل آمن فعلياً.

### أهم الدروس المستفادة
- **تشفير كلمات المرور:** لماذا مات MD5 ولماذا \`password_hash()\` (Bcrypt/Argon2) هو المعيار.
- **حقن SQL:** استخدام البيانات المجهزة يبدو بديهياً الآن، لكن رؤية سهولة حقن SQL في الاستعلامات الخام كانت بمثابة جرس إنذار.
- **إدارة الجلسات:** التعامل مع تثبيت الجلسة واستخدام ملفات تعريف الارتباط الآمنة (HTTP-only).

علمني هذا المشروع أن الأمان ليس ميزة تضيفها في النهاية، بل عقلية تبدأ بها.
    `
    },
    {
      slug: 'database-schema-design',
      title: "تصميم مخطط قاعدة بيانات نظيف لنادي رياضي جامعي",
      excerpt: "كيف قمت بتطوير قاعدة بيانات HTU Martial Arts للتعامل مع الحجوزات، العضويات، والدفعات بدون تكرار.",
      tag: "قواعد البيانات",
      date: "15 يناير 2026",
      content: `
## أهمية القواعد الطبيعية (Normalization)
المسودة الأولى للمخطط كانت فوضوية. بيانات المستخدم كانت مكررة في جداول الحجز، وتتبع حالة العضوية كان كابوساً في الاستعلامات.

### الحل
قمت بتنظيم البيانات في ثلاثة جداول أساسية: \`المستخدمين\`، \`العضويات\`، و \`الحجوزات\`. هذا سمح بـ:
- مصدر واحد للحقيقة لتفاصيل المستخدم.
- أنواع عضوية مرنة دون تغيير جدول المستخدم.
- استعلامات أسرع لتقارير المسؤول.

هندسة البيانات الجيدة تجعل كود الواجهة الخلفية أبسط بنسبة 50%.
    `
    },
    {
      slug: 'shipping-vynex-media',
      title: "إطلاق Vynex Media: دروس في الأداء من Next.js 15",
      excerpt: "الموازنة بين جماليات الإنتاج المرئي العالي ومقاييس أداء الويب باستخدام Next.js و Framer Motion.",
      tag: "الأداء",
      date: "28 ديسمبر 2025",
      content: `
## المرئيات مقابل السرعة
احتاجت Vynex Media لتبدو "باهظة الثمن". وهذا يعني عادةً أصولاً ثقيلة. كان تحدي هو جعلها تبدو فورية.

### تقنيات التحسين
- **تحسين الصور:** استخدام \`next/image\` للاختيار التلقائي للتنسيق (WebP/AVIF).
- **تقسيم الكود:** Next.js يتعامل مع هذا بشكل جيد، لكن كان علي الحذر مع مكتبات الرسوم المتحركة الثقيلة.
- **Framer Motion:** استخدام رسوم \`layout\` بشكل مقتصد وتحسين محفزات \`whileInView\`.

النتيجة هي موقع يبدو سينمائياً لكنه يحمل مثل صفحة ثابتة.
    `
    }
  ]
};

export const getBlogPosts = (lang: Locale) => blogData[lang] || blogData.en;

export const getBlogPost = (slug: string, lang: Locale) => {
  const posts = getBlogPosts(lang);
  return posts.find((p) => p.slug === slug);
};

export const blogPosts = blogData.en; // Fallback for legacy imports
