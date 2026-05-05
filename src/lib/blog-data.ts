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
    },
    {
      slug: 'building-mubxai-gpa-tracker',
      title: "Building MUBXAI: A Real-Time GPA Tracker for Students",
      excerpt: "How I built a client-side calculator with a premium UI that persists data locally, ensuring privacy and instant access for university students.",
      tag: "Engineering",
      date: "Mar 10, 2026",
      content: `
## The Challenge
Students needed a quick, private way to calculate their GPA and track their academic progress without logging into slow, clunky university portals.

### The Solution
I engineered MUBXAI as a client-side calculator using Next.js and React. By leveraging local storage for data persistence, the tool guarantees 100% privacy—no backend required.

### The Outcome
The result is a seamless, lightning-fast application with a premium UI driven by Framer Motion. It instantly provides academic insights to students, acting as the perfect integrated tool for their daily workflow.
    `
    },
    {
      slug: 'developing-mubxbot-ai',
      title: "Developing MUBXbot: An AI Assistant for Instant Support",
      excerpt: "Designing and deploying a branded AI assistant with a guided conversation flow and production-ready UI for 24/7 lead support.",
      tag: "AI",
      date: "Mar 5, 2026",
      content: `
## The Challenge
Visitors to the MUBX ecosystem needed instant answers and clearer guidance on services. Waiting for manual support responses was causing friction and slowing down potential leads.

### The Solution
I built and deployed MUBXbot, a custom AI chat assistant powered by modern LLMs. The frontend was developed using Next.js and TypeScript, fully integrated with the site's neon aesthetic. It uses a guided conversation flow to preemptively answer common questions before smoothly escalating to human contact when necessary.

### The Outcome
Response times dropped to zero. The bot provides 24/7 support, significantly improving user experience and accelerating the lead-generation funnel.
    `
    },
    {
      slug: 'high-performance-photography-aqabwi',
      title: "Engineering a High-Performance Photography Portfolio for Aqabwi",
      excerpt: "Balancing stunning visual storytelling and high-quality imagery with sub-second page loads.",
      tag: "Performance",
      date: "Feb 25, 2026",
      content: `
## The Challenge
Photography portfolios are notoriously slow. The client needed a professional platform to showcase high-end photography without sacrificing page speed or SEO.

### The Solution
I engineered a high-performance portfolio using Next.js, implementing aggressive image optimization via Next.js Image component (WebP/AVIF). I paired this with Framer Motion to create sleek, cinematic transitions between galleries without the heavy JavaScript overhead typical of similar sites.

### The Outcome
The digital presence now loads in under 1.2s while maintaining breathtaking visual fidelity. It establishes absolute credibility with premium clients through its flawless user experience.
    `
    },
    {
      slug: 'scaling-men-only-show',
      title: "Scaling Men Only Show: The Arab World's First Men's Talk Show",
      excerpt: "Developing a robust, accessible platform to host podcast content, guest profiles, and community resources.",
      tag: "Architecture",
      date: "Feb 18, 2026",
      content: `
## The Challenge
There was a distinct lack of a dedicated, high-performance digital platform for men's dialogue and personal growth in the Arab region. The platform needed to handle heavy media content while remaining fast and culturally resonant.

### The Solution
Acting as Technical Consultant, I developed a robust Next.js web platform tailored to host video content, detailed guest profiles, and community discussions. A strong focus was placed on Arabic typography, RTL support, and mobile-first accessibility to reach viewers everywhere.

### The Outcome
We successfully established the region's first digital home for the show. The performant architecture comfortably scales to a massive audience across the Arab world, amplifying the show's impact.
    `
    },
    {
      slug: 'crafting-the-glorious-page',
      title: "Crafting The Glorious Page: A Bespoke Link-In-Bio Solution",
      excerpt: "Moving beyond generic tools to build a custom, high-conversion brand hub with integrated social flows.",
      tag: "Design",
      date: "Feb 5, 2026",
      content: `
## The Challenge
Generic link-in-bio tools (like Linktree) lacked the visual impact and high-end brand integration required for a luxury lifestyle presence. The brand needed something that felt native to their luxurious social media feed.

### The Solution
I built a bespoke brand hub as a standalone micro-site. It features custom animations, dynamic video backgrounds, and highly optimized routing for social media traffic via Next.js. I also integrated live Instagram feeds to keep the content fresh.

### The Outcome
The platform now acts as a high-conversion landing point. It perfectly aligns with the brand’s aesthetic, substantially outperforming standard tools in both loading speed and visual style.
    `
    },
    {
      slug: 'launching-blobjo-ecommerce',
      title: "Launching BloB.JO: Jordan's First Print-on-Demand E-commerce Store",
      excerpt: "Building a full-stack e-commerce engine with real-time product visualization and local payment integration.",
      tag: "E-commerce",
      date: "Jan 28, 2026",
      content: `
## The Challenge
Jordan lacked local Print-on-Demand (POD) infrastructure equipped with custom design tools for the local creative market. Artists faced immense technical barriers when trying to sell custom apparel.

### The Solution
I engineered a custom e-commerce engine using React and Node.js. The highlight was developing real-time product visualization, allowing buyers to see their designs instantly. Furthermore, I integrated essential local payment gateways (Zain Cash and CliQ) to eliminate payment friction.

### The Outcome
BloB.JO launched as Jordan’s first fully operational POD platform, empowering local artists to sell at scale securely and efficiently.
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
    },
    {
      slug: 'building-mubxai-gpa-tracker',
      title: "بناء MUBXAI: متتبع المعدل التراكمي الفوري للطلاب",
      excerpt: "كيف بنيت آلة حاسبة من جانب العميل بواجهة متميزة تحفظ البيانات محلياً، مما يضمن الخصوصية للطلاب.",
      tag: "هندسة برمجيات",
      date: "10 مارس 2026",
      content: `
## التحدي
احتاج الطلاب إلى طريقة سريعة وخاصة لحساب معدلاتهم وتتبع تقدمهم الأكاديمي دون الحاجة لتسجيل الدخول في بوابات الجامعة البطيئة والمعقدة.

### الحل
قمت بهندسة MUBXAI كآلة حاسبة تعمل بالكامل من جانب العميل باستخدام Next.js و React. من خلال الاعتماد على التخزين المحلي (Local Storage) لحفظ البيانات، تضمن الأداة الخصوصية بنسبة 100٪ بدون الحاجة لقاعدة بيانات خلفية.

### النتيجة
النتيجة هي تطبيق سلس وسريع جداً بواجهة متميزة عبر Framer Motion. يوفر رؤى أكاديمية فورية للطلاب، ويعمل كأداة متكاملة ومثالية لروتينهم اليومي.
    `
    },
    {
      slug: 'developing-mubxbot-ai',
      title: "تطوير MUBXbot: مساعد ذكاء اصطناعي للدعم الفوري",
      excerpt: "تصميم ونشر مساعد ذكي متكامل مع تجربة محادثة لتقديم الدعم الفوري وتوليد العملاء على مدار الساعة.",
      tag: "ذكاء اصطناعي",
      date: "5 مارس 2026",
      content: `
## التحدي
كان زوار منظومة MUBX بحاجة لإجابات أسرع وتوجيه أوضح حول الخدمات. انتظار الدعم اليدوي كان يسبب احتكاكاً ويبطئ من عملية تحويل العملاء المحتملين.

### الحل
قمت بتطوير ونشر MUBXbot، وهو مساعد دردشة مخصص مدعوم بنماذج لغوية حديثة (LLMs). تم تطوير الواجهة الأمامية باستخدام Next.js و TypeScript لتتناغم تماماً مع الهوية البصرية. يستخدم البوت تدفق محادثة موجّه للإجابة على الأسئلة الشائعة قبل التحويل السلس إلى الدعم البشري عند الحاجة.

### النتيجة
انخفضت أوقات الاستجابة إلى الصفر. يوفر البوت الدعم على مدار الساعة طوال أيام الأسبوع، مما أدى إلى تحسين تجربة المستخدم وتسريع مسار توليد العملاء.
    `
    },
    {
      slug: 'high-performance-photography-aqabwi',
      title: "هندسة معرض صور عالي الأداء لـ \"عقباوي\"",
      excerpt: "الموازنة بين السرد البصري المذهل والصور عالية الدقة وتجربة التصفح فائقة السرعة.",
      tag: "الأداء",
      date: "25 فبراير 2026",
      content: `
## التحدي
تُعرف معارض التصوير الفوتوغرافي ببطئها. احتاج العميل إلى منصة احترافية لعرض التصوير الفوتوغرافي عالي الجودة دون التضحية بسرعة الصفحة أو تحسين محركات البحث.

### الحل
قمت بتصميم معرض عالي الأداء باستخدام Next.js، مع تنفيذ تحسين قوي للصور عبر مكون Next.js Image بتنسيقات (WebP/AVIF). تم دمج ذلك مع Framer Motion لإنشاء انتقالات سينمائية سلسة بين المعارض دون عبء الجافا سكريبت الثقيل المميز لهذه المواقع.

### النتيجة
أصبح التواجد الرقمي يُحمل الآن في أقل من 1.2 ثانية مع الحفاظ على دقة بصرية مبهرة. المعرض يرسخ المصداقية التامة مع العملاء المتميزين من خلال تجربة مستخدم لا تشوبها شائبة.
    `
    },
    {
      slug: 'scaling-men-only-show',
      title: "توسيع \"للرجال فقط\": أول برنامج حواري للرجال في العالم العربي",
      excerpt: "تطوير منصة قوية يمكن الوصول إليها لاستضافة محتوى البودكاست والضيوف والمجتمع.",
      tag: "بنية الأنظمة",
      date: "18 فبراير 2026",
      content: `
## التحدي
كان هناك نقص واضح في المنصات الرقمية عالية الأداء والمخصصة للحوار والنمو الشخصي للرجال في المنطقة العربية. احتاجت المنصة إلى التعامل مع محتوى وسائط ثقيل مع الحفاظ على سرعتها وملاءمتها الثقافية.

### الحل
بصفتي مستشاراً تقنياً، طورت منصة ويب قوية باستخدام Next.js مصممة لاستضافة محتوى الفيديو وملفات تعريف الضيوف والنقاشات المجتمعية. تم التركيز بشكل كبير على أسلوب الطباعة العربية ودعم (RTL) وسهولة الوصول من الأجهزة المحمولة للوصول إلى المشاهدين في كل مكان.

### النتيجة
أسسنا بنجاح أول موطن رقمي للبرنامج في المنطقة. البنية التحتية القوية تتوسع بسلاسة لدعم جمهور هائل من جميع أنحاء العالم العربي، مما ضاعف من تأثير البرنامج.
    `
    },
    {
      slug: 'crafting-the-glorious-page',
      title: "صياغة The Glorious Page: حل مخصص لرابط البايو",
      excerpt: "تجاوز الأدوات العامة لبناء مركز علامة تجارية مخصص ومُحسن يعزز زيارات وسائل التواصل.",
      tag: "تصميم",
      date: "5 فبراير 2026",
      content: `
## التحدي
أدوات رابط البايو العامة (مثل Linktree) كانت تفتقر إلى التأثير البصري وتكامل العلامة التجارية الفاخرة المطلوبة. احتاجت العلامة التجارية إلى شيء يبدو امتداداً طبيعياً لحساباتهم الفاخرة على وسائل التواصل الاجتماعي.

### الحل
قمت ببناء مركز هبط مخصص كـ (Micro-site) مستقل. يتميز برسوم متحركة مخصصة، خلفيات فيديو ديناميكية، وتوجيه مُحسّن للغاية لزيارات وسائل التواصل باستخدام Next.js. كما قمت بدمج تحديثات انستجرام المباشرة للحفاظ على حيوية المحتوى.

### النتيجة
تعمل المنصة الآن كنقطة هبوط عالية التحويل. إنها تتطابق تماماً مع جماليات العلامة التجارية، متفوقة بشكل كبير على الأدوات القياسية سواء في سرعة التحميل أو الأسلوب البصري.
    `
    },
    {
      slug: 'launching-blobjo-ecommerce',
      title: "إطلاق BloB.JO: أول متجر طباعة حسب الطلب في الأردن",
      excerpt: "بناء محرك تجارة إلكترونية متكامل مع تخصيص منتجات فوري وربط محلي لوسائل الدفع.",
      tag: "تجارة إلكترونية",
      date: "28 يناير 2026",
      content: `
## التحدي
افتقر الأردن إلى البنية التحتية المحلية للطباعة حسب الطلب (POD) المجهزة بأدوات التصميم المخصصة للسوق الإبداعي. واجه الفنانون حواجز تقنية هائلة عند محاولة بيع الملابس المخصصة.

### الحل
قمت بهندسة محرك تجارة إلكترونية مخصص باستخدام React و Node.js. كان الإنجاز الأبرز هو تطوير معاينة المنتجات في الوقت الفعلي، مما يتيح للمشترين رؤية تصاميمهم فوراً. علاوة على ذلك، قمت بدمج بوابات الدفع المحلية الأساسية (زين كاش وكليك) للقضاء على أي عقبات في الدفع.

### النتيجة
انطلق مشروع BloB.JO كأول منصة للطباعة حسب الطلب تعمل بكامل طاقتها في الأردن، مما مكّن الفنانين المحليين من البيع على نطاق واسع بأمان وكفاءة عالية.
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
