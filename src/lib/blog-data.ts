export const blogPosts = [
    {
        slug: 'secure-login-php-mysql',
        title: "What I learned building a secure login system in PHP + MySQL",
        excerpt: "Moving beyond basic tutorials to understand hashing, sessions, and SQL injection prevention in a real-world student project.",
        tag: "Security",
        date: "Feb 2026",
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
        date: "Jan 2026",
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
        date: "Dec 2025",
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
];
