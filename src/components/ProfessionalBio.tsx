import Image from "next/image";

export default function ProfessionalBio() {
  return (
    <section id="professional-bio" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Professional Bio
        </h2>

        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              I co-founded Embr Labs in 2014 and am currently Chief Revenue
              Officer after 11 years as COO. I helped create the wearable
              thermal wellness category with Embr Wave, the first personal
              thermostat that cools or warms you at the touch of a button.
            </p>

            <p>
              Over the past twelve years, I&apos;ve helped to scale Embr Labs
              from an MIT prototyping competition to a market leader: $50M+ in
              lifetime revenue, 200k+ customers across 100+ countries, 250k+
              units shipped, 21 utility patents, and $60M+ in venture financing.
              I also led the shift from one-time sales to a subscription model,
              taking the Embrship hardware subscription from $0 to a $4M ARR run
              rate in eight months.
            </p>

            <p>
              I have received recognition from Forbes 30 Under 30, TIME Best
              Inventions, the National Sleep Foundation&apos;s SleepTech Award,
              and Oprah&apos;s Menopause Award.
            </p>

            <p>
              I’ve been invited to speak on category creation, connected
              devices, business model and pricing strategy, go-to-market
              execution, and supply chain & manufacturing at both universities
              and industry conferences.
            </p>
            <p>
              I welcome inquiries about speaking, informal and formal advising,
              and independent board member opportunities.
            </p>
            <p>You can contact me at: sam [at] samshames.com</p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/2025_professional_photo.jpg"
                alt="Sam Shames professional portrait in 2025"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
