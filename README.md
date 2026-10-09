# 🛒 বাজারদর (Bazar Dor)

**বাজারদর** হলো বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের দাম সহজে দেখতে ও পর্যবেক্ষণ করতে তৈরি একটি ওয়েব অ্যাপ্লিকেশন। এর মাধ্যমে ব্যবহারকারীরা বিভিন্ন পণ্যের বাজারদর দেখতে এবং দাম বৃদ্ধি বা হ্রাসের তথ্য এক নজরে খুঁজে পেতে পারেন।

## ✨ প্রধান বৈশিষ্ট্য

- 💰 **আজকের বাজারদর:** পণ্যের বর্তমান দাম দেখার জন্য UI।
- 📉 **দাম কমেছে:** যেসব পণ্যের দাম কমেছে, সেগুলো আলাদা করে দেখানোর বিভাগ।
- 📈 **দাম বেড়েছে:** যেসব পণ্যের দাম বেড়েছে, সেগুলো আলাদা করে দেখানোর বিভাগ।
- 🔎 **দাম সাজানো:** পণ্যের দাম বা নির্ধারিত মান অনুযায়ী তালিকা সাজানোর সুবিধা।
- 🔐 **অথেনটিকেশন:** Better Auth ব্যবহার করে ব্যবহারকারীর সাইন-ইন/সেশন পরিচালনার ব্যবস্থা।
- 📱 **রেসপনসিভ UI:** বিভিন্ন স্ক্রিনের জন্য উপযোগী ইন্টারফেস তৈরির লক্ষ্য।

## 🧰 ব্যবহৃত প্রযুক্তি

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Authentication:** Better Auth
- **Icons:** Lucide React
- **Data source:** Bazar Dor Products API

## 🌐 API

পণ্যের তথ্য আনার জন্য ব্যবহৃত API endpoint:

```text
https://api.api-store.workers.dev/api/bazardor/products
```

API-এর response structure বা অন্য endpoint পরিবর্তিত হলে সংশ্লিষ্ট fetch logic এবং TypeScript type আপডেট করুন।

## 🚀 নিজের কম্পিউটারে চালানোর নিয়ম

### ১. রিপোজিটরি ক্লোন করুন

```bash
git clone https://github.com/sayeemahmed12/Bazar_Dor.git
cd Bazar_Dor
```

### ২. প্যাকেজ ইনস্টল করুন

```bash
npm install
```

### ৩. Environment variable সেট করুন

প্রকল্পে ব্যবহৃত environment variable-গুলো `.env.example` বা auth configuration দেখে `.env.local` ফাইলে সেট করুন। উদাহরণ:

```env
BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=http://localhost:3000
```

Better Auth-এর Google sign-in বা অন্য কোনো provider ব্যবহার করলে তার প্রয়োজনীয় client ID/secret-ও সেট করতে হবে। প্রকৃত secret কখনো GitHub-এ commit করবেন না।

### ৪. Development server চালু করুন

```bash
npm run dev
```

ব্রাউজারে খুলুন:

```text
http://localhost:3000
```

> `npm run dev` কাজ না করলে `package.json`-এর scripts অংশে থাকা command দেখে নিন।

## 📁 প্রকল্পের কাঠামো

Next.js App Router অনুসারে সাধারণত গুরুত্বপূর্ণ অংশগুলো হলো:

```text
Bazar_Dor/
├── app/          # পেজ, layout এবং route
├── public/       # স্থির asset
├── package.json  # dependencies ও scripts
└── README.md     # প্রকল্পের ডকুমেন্টেশন
```

আপনার repository-তে ফোল্ডারের নাম বা বিন্যাস আলাদা হলে এই কাঠামো সেই অনুযায়ী আপডেট করুন।

## 🔐 নিরাপত্তা

- `.env.local` এবং secret key GitHub-এ আপলোড করবেন না।
- `.gitignore`-এ environment file বাদ দেওয়া আছে কি না যাচাই করুন।
- production-এ `BETTER_AUTH_URL`-এ live domain ব্যবহার করুন।
- authentication provider-এর secret নিরাপদে সংরক্ষণ করুন।

## 🛠️ ভবিষ্যৎ উন্নয়নের ধারণা

- পণ্য ও বাজার অনুযায়ী আরও উন্নত ফিল্টার
- নির্দিষ্ট পণ্যের দাম পরিবর্তনের ইতিহাস
- পছন্দের পণ্যের তালিকা
- দাম পরিবর্তনের notification
- আরও বাজারের তথ্য এবং উন্নত search

## 🤝 অবদান

প্রকল্পে অবদান রাখতে চাইলে:

1. Repository fork করুন।
2. নতুন branch তৈরি করুন।
3. পরিবর্তন করুন এবং পরীক্ষা করুন।
4. Pull Request জমা দিন।

## 👨‍💻 নির্মাতা

**Sayeem Ahmed**

- GitHub: [@sayeemahmed12](https://github.com/sayeemahmed12)
- Project Repository: [Bazar_Dor](https://github.com/sayeemahmed12/Bazar_Dor)
- Live Link: [Bazar Dor](https://bazar-dor-alpha-mocha.vercel.app/)

---

⭐ প্রকল্পটি ভালো লাগলে repository-তে একটি Star দিতে পারেন।
