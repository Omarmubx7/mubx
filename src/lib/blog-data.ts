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
      <h2>The Challenge</h2>
      <p>Building authentication seems simple until you start thinking about security. For HTU Martial Arts, I needed a system that wasn't just "functional" but actually secure.</p>
      
      <h3>Key Learnings</h3>
      <ul>
        <li><strong>Password Hashing:</strong> Why MD5 is dead and why \`password_hash()\` (Bcrypt/Argon2) is the standard.</li>
        <li><strong>SQL Injection:</strong> Using prepared statements seems obvious now, but seeing how easy it is to inject SQL into raw queries was a wake-up call.</li>
        <li><strong>Session Management:</strong> Handling session fixation and using secure, HTTP-only cookies.</li>
      </ul>

      <p>This project taught me that security is not a feature you add at the end, but a mindset you start with.</p>
    `
    },
    {
      slug: 'database-schema-design',
      title: "Designing a clean database schema for a university sports club",
      excerpt: "How I iterated on the HTU Martial Arts database to handle bookings, memberships, and payments without redundancy.",
      tag: "Database",
      date: "Jan 15, 2026",
      content: `
      <h2>Normalization Matters</h2>
      <p>My first draft of the schema was a mess. User data was duplicated in booking tables, and tracking membership status was a query nightmare.</p>

      <h3>The Solution</h3>
      <p>I normalized the data into three core tables: <code>Users</code>, <code>Memberships</code>, and <code>Bookings</code>. This allowed for:</p>
      <ul>
        <li>Single source of truth for user details.</li>
        <li>Flexible membership types without altering the user table.</li>
        <li>Faster queries for admin reports.</li>
      </ul>

      <p>Good data architecture makes the backend code 50% simpler.</p>
    `
    },
    {
      slug: 'shipping-vynex-media',
      title: "Shipping Vynex Media: Performance lessons from Next.js 15",
      excerpt: "Balancing high-end visual production aesthetics with web performance metrics using Next.js and Framer Motion.",
      tag: "Performance",
      date: "Dec 28, 2025",
      content: `
      <h2>Visuals vs. Speed</h2>
      <p>Vynex Media needed to look "expensive." That usually means heavy assets. My challenge was to make it feel instant.</p>

      <h3>Optimization Techniques</h3>
      <ul>
        <li><strong>Image Optimization:</strong> Using <code>next/image</code> for automatic format selection (WebP/AVIF).</li>
        <li><strong>Code Splitting:</strong> Next.js handles this well, but I had to be careful with heavy animation libraries.</li>
        <li><strong>Framer Motion:</strong> Using <code>layout</code> animations sparsely and optimizing <code>whileInView</code> triggers.</li>
      </ul>

      <p>The result is a site that feels cinematic but loads like a static page.</p>
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
      <h2>التحدي</h2>
      <p>يبدو بناء المصادقة بسيطاً حتى تبدأ في التفكير بالأمان. لنادي فنون القتال في HTU، احتجت لنظام ليس مجرد "وظيفي" بل آمن فعلياً.</p>
      
      <h3>أهم الدروس المستفادة</h3>
      <ul>
        <li><strong>تشفير كلمات المرور:</strong> لماذا مات MD5 ولماذا \`password_hash()\` (Bcrypt/Argon2) هو المعيار.</li>
        <li><strong>حقن SQL:</strong> استخدام البيانات المجهزة يبدو بديهياً الآن، لكن رؤية سهولة حقن SQL في الاستعلامات الخام كانت بمثابة جرس إنذار.</li>
        <li><strong>إدارة الجلسات:</strong> التعامل مع تثبيت الجلسة واستخدام ملفات تعريف الارتباط الآمنة (HTTP-only).</li>
      </ul>

      <p>علمني هذا المشروع أن الأمان ليس ميزة تضيفها في النهاية، بل عقلية تبدأ بها.</p>
    `
    },
    {
      slug: 'database-schema-design',
      title: "تصميم مخطط قاعدة بيانات نظيف لنادي رياضي جامعي",
      excerpt: "كيف قمت بتطوير قاعدة بيانات HTU Martial Arts للتعامل مع الحجوزات، العضويات، والدفعات بدون تكرار.",
      tag: "قواعد البيانات",
      date: "15 يناير 2026",
      content: `
      <h2>أهمية القواعد الطبيعية (Normalization)</h2>
      <p>المسودة الأولى للمخطط كانت فوضوية. بيانات المستخدم كانت مكررة في جداول الحجز، وتتبع حالة العضوية كان كابوساً في الاستعلامات.</p>

      <h3>الحل</h3>
      <p>قمت بتنظيم البيانات في ثلاثة جداول أساسية: <code>المستخدمين</code>، <code>العضويات</code>، و <code>الحجوزات</code>. هذا سمح بـ:</p>
      <ul>
        <li>مصدر واحد للحقيقة لتفاصيل المستخدم.</li>
        <li>أنواع عضوية مرنة دون تغيير جدول المستخدم.</li>
        <li>استعلامات أسرع لتقارير المسؤول.</li>
      </ul>

      <p>هندسة البيانات الجيدة تجعل كود الواجهة الخلفية أبسط بنسبة 50%.</p>
    `
    },
    {
      slug: 'shipping-vynex-media',
      title: "إطلاق Vynex Media: دروس في الأداء من Next.js 15",
      excerpt: "الموازنة بين جماليات الإنتاج المرئي العالي ومقاييس أداء الويب باستخدام Next.js و Framer Motion.",
      tag: "الأداء",
      date: "28 ديسمبر 2025",
      content: `
      <h2>المرئيات مقابل السرعة</h2>
      <p>احتاجت Vynex Media لتبدو "باهظة الثمن". وهذا يعني عادةً أصولاً ثقيلة. كان تحدي هو جعلها تبدو فورية.</p>

      <h3>تقنيات التحسين</h3>
      <ul>
        <li><strong>تحسين الصور:</strong> استخدام <code>next/image</code> للاختيار التلقائي للتنسيق (WebP/AVIF).</li>
        <li><strong>تقسيم الكود:</strong> Next.js يتعامل مع هذا بشكل جيد، لكن كان علي الحذر مع مكتبات الرسوم المتحركة الثقيلة.</li>
        <li><strong>Framer Motion:</strong> استخدام رسوم <code>layout</code> بشكل مقتصد وتحسين محفزات <code>whileInView</code>.</li>
      </ul>

      <p>النتيجة هي موقع يبدو سينمائياً لكنه يحمل مثل صفحة ثابتة.</p>
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
