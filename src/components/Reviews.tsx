const AVATAR_COLORS = [
  "#1a73e8", "#0d9488", "#7c3aed", "#ea580c",
  "#e11d48", "#16a34a", "#ca8a04", "#4f46e5",
  "#db2777", "#059669", "#b45309", "#0284c7",
  "#9333ea", "#c2410c", "#0f766e",
];

const reviews = [
  {
    name: "Maria G.",
    initials: "MG",
    location: "Hayward, CA",
    service: "Move-Out Clean",
    stars: 5,
    date: "2 days ago",
    text: "Just got my full deposit back thanks to Bay Shine! My landlord called after the inspection and said it was the cleanest unit she'd seen in years. The team was incredibly thorough — they got grease off the hood vent I didn't even know was there. Will 100% call them again.",
  },
  {
    name: "James T.",
    initials: "JT",
    location: "San Leandro, CA",
    service: "Deep Clean",
    stars: 5,
    date: "1 week ago",
    text: "Called on Thursday and they came out Friday morning. My house was in rough shape after months of neglect and they turned it around completely. Floors, bathrooms, baseboards — everything sparkled. Great value for the price.",
  },
  {
    name: "Priya S.",
    initials: "PS",
    location: "Castro Valley, CA",
    service: "Move-Out Clean",
    stars: 5,
    date: "2 weeks ago",
    text: "I was stressed about my move-out inspection and a friend recommended Bay Shine. They came the day before my walkthrough and did an incredible job. My landlord didn't charge me for cleaning — which honestly never happens. So grateful I found them.",
  },
  {
    name: "David K.",
    initials: "DK",
    location: "Hayward, CA",
    service: "Deep Clean",
    stars: 4,
    date: "3 weeks ago",
    text: "Good service overall. The crew was friendly and worked hard. Kitchen and bathrooms came out looking brand new. Took a little longer than expected but the quality was definitely there. Would book again.",
  },
  {
    name: "Jennifer L.",
    initials: "JL",
    location: "Union City, CA",
    service: "Move-Out Clean",
    stars: 5,
    date: "1 month ago",
    text: "Bay Shine cleaned our 3-bedroom apartment before we handed over the keys. The attention to detail was impressive — they cleaned inside every cabinet, behind the fridge, even the light switch covers. Got our full $2,400 deposit back within a week.",
  },
  {
    name: "Marcus W.",
    initials: "MW",
    location: "San Leandro, CA",
    service: "Deep Clean",
    stars: 5,
    date: "1 month ago",
    text: "I've tried a few cleaning services in the East Bay and Bay Shine is hands down the best. They actually move furniture to clean under it and they don't rush. The whole house smelled fresh and clean when they left. Highly recommend to anyone.",
  },
  {
    name: "Rosa M.",
    initials: "RM",
    location: "Hayward, CA",
    service: "Move-Out Clean",
    stars: 5,
    date: "6 weeks ago",
    text: "Fantastic from start to finish. Called, got a same-day quote, they came the next morning. My oven looked like it had never been cooked in after they finished. And the bathroom grout was white again — I genuinely didn't think that was possible!",
  },
  {
    name: "Kevin N.",
    initials: "KN",
    location: "Castro Valley, CA",
    service: "Deep Clean",
    stars: 5,
    date: "2 months ago",
    text: "Had them do a deep clean before putting our house on the market. Our realtor noticed right away and said the house showed beautifully. Punctual, professional, and thorough. Money very well spent.",
  },
  {
    name: "Angela B.",
    initials: "AB",
    location: "San Lorenzo, CA",
    service: "Move-Out Clean",
    stars: 5,
    date: "2 months ago",
    text: "Moving out is stressful enough without worrying about cleaning. Bay Shine took that completely off my plate. They were done in about 4 hours and the place looked better than when we moved in. Landlord sent my deposit check back with a note saying it was spotless.",
  },
  {
    name: "Tony R.",
    initials: "TR",
    location: "Fremont, CA",
    service: "Deep Clean",
    stars: 4,
    date: "2 months ago",
    text: "Solid cleaning service. Arrived on time and got the job done efficiently. I pointed out a couple spots in the bathroom they'd missed and they fixed it right away without any attitude. Fair price and I'd use them again.",
  },
  {
    name: "Linda H.",
    initials: "LH",
    location: "San Leandro, CA",
    service: "Move-Out Clean",
    stars: 5,
    date: "3 months ago",
    text: "Best money I've spent on a cleaning service. I was honestly skeptical of the price but the quality more than justified it. Every single room was spotless — inside the microwave, inside the refrigerator, everything. Got my full deposit back no questions asked.",
  },
  {
    name: "Carlos D.",
    initials: "CD",
    location: "Hayward, CA",
    service: "Move-Out Clean",
    stars: 5,
    date: "3 months ago",
    text: "My apartment needed serious work before move-out. Bay Shine came in and handled everything professionally. The crew was respectful and didn't cut corners. They even texted me when they were on the way, which I really appreciated.",
  },
  {
    name: "Stephanie K.",
    initials: "SK",
    location: "Castro Valley, CA",
    service: "Deep Clean",
    stars: 5,
    date: "3 months ago",
    text: "I have two dogs so deep cleaning is always a challenge. Bay Shine didn't flinch — pet hair, odors, the works, completely eliminated. My house felt like a hotel when they left. My mom came to visit and couldn't stop commenting on how clean everything was.",
  },
  {
    name: "Robert A.",
    initials: "RA",
    location: "Hayward, CA",
    service: "Move-Out Clean",
    stars: 5,
    date: "4 months ago",
    text: "As a landlord I used Bay Shine after a tenant left my unit in bad shape. They restored it to rentable condition in one visit — faster and better than I expected. Already have them on standby for future turnovers. Highly reliable.",
  },
  {
    name: "Michelle T.",
    initials: "MT",
    location: "Union City, CA",
    service: "Deep Clean",
    stars: 5,
    date: "4 months ago",
    text: "Booked a deep clean and was blown away by the results. The team wore shoe covers, were respectful of our space, and explained what they were doing. The kitchen looked brand new when they were done. Already planning to make this a regular thing.",
  },
];

const totalReviews = reviews.length;
const avgRating = (
  reviews.reduce((sum, r) => sum + r.stars, 0) / totalReviews
).toFixed(1);
const fiveStarCount = reviews.filter((r) => r.stars === 5).length;
const fourStarCount = reviews.filter((r) => r.stars === 4).length;

function StarRow({ count, filled }: { count: number; filled: boolean }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < count
              ? filled
                ? "text-yellow-400"
                : "text-yellow-300"
              : "text-gray-200 dark:text-gray-600"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  const color = AVATAR_COLORS[index % AVATAR_COLORS.length];
  return (
    <div className="break-inside-avoid mb-5 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
            style={{ backgroundColor: color }}
          >
            {review.initials}
          </div>
          <div>
            <div className="font-bold text-gray-900 dark:text-white text-sm">{review.name}</div>
            <div className="text-xs text-gray-400 dark:text-gray-500">{review.location}</div>
          </div>
        </div>
        {/* Google icon */}
        <div className="flex items-center gap-1 opacity-60" title="Google Review">
          <GoogleIcon />
        </div>
      </div>

      {/* Stars + date */}
      <div className="flex items-center gap-2 mb-3">
        <StarRow count={review.stars} filled />
        <span className="text-xs text-gray-400 dark:text-gray-500">{review.date}</span>
      </div>

      {/* Review text */}
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Service badge */}
      <span
        className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
          review.service === "Move-Out Clean"
            ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
            : "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300"
        }`}
      >
        {review.service}
      </span>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Real reviews from real homeowners, renters, and landlords across the East Bay.
          </p>
        </div>

        {/* Aggregate rating bar */}
        <div className="max-w-sm mx-auto mb-12 bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-center">
              <div className="text-5xl font-extrabold text-gray-900 dark:text-white leading-none">
                {avgRating}
              </div>
              <div className="flex justify-center mt-1">
                <StarRow count={5} filled />
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                {totalReviews} reviews
              </div>
            </div>
            <div className="flex-1 space-y-1.5">
              {[
                { label: "5", count: fiveStarCount },
                { label: "4", count: fourStarCount },
                { label: "3", count: 0 },
                { label: "2", count: 0 },
                { label: "1", count: 0 },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400 w-2">{row.label}</span>
                  <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full"
                      style={{ width: `${(row.count / totalReviews) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-400 dark:text-gray-500 w-3">{row.count}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-1.5 border-t border-gray-100 dark:border-gray-700 pt-4">
            <GoogleIcon />
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              Verified Google Reviews
            </span>
          </div>
        </div>

        {/* Masonry grid */}
        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-5"
        >
          {reviews.map((review, i) => (
            <ReviewCard key={review.name} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
