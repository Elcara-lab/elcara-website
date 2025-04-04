import { BuildingOffice2Icon, UserGroupIcon, ShieldCheckIcon, 
  CheckCircleIcon, UserIcon, BriefcaseIcon, 
  CalendarIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="bg-transparent backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold text-white">Elcara</h1>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <a href="tel:+971505323122" className="hidden sm:flex px-2 sm:px-4 py-2 text-sm font-medium text-white hover:text-gray-200">
                <PhoneIcon className="h-5 w-5 inline-block mr-1" />
                <span className="hidden sm:inline">+971 505323122</span>
              </a>
              <a href="mailto:contact@elcara.info" className="px-3 sm:px-4 py-2 text-sm font-medium bg-transparent border border-white text-white rounded-md hover:bg-white/10 transition-colors">
                <EnvelopeIcon className="h-5 w-5 inline-block sm:mr-1" />
                <span className="hidden sm:inline">Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center">
                <h2 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Face it all</span>
                  <span className="block text-[#C4A484]">with us</span>
                </h2>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                  Elcara symbolizes the welcoming and personalized service that we offer to every guest.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                  <div className="rounded-md shadow">
                    <a href="mailto:contact@elcara.info" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-[#C4A484] hover:bg-[#B39476] transition-colors md:py-4 md:text-lg md:px-10">
                      Get Started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#about" className="w-full flex items-center justify-center px-8 py-3 border border-[#C4A484] text-base font-medium rounded-md text-[#C4A484] bg-transparent hover:bg-[#C4A484] hover:text-black transition-colors md:py-4 md:text-lg md:px-10">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#C4A484] font-semibold tracking-wide uppercase">About Elcara</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Meaning Behind Elcara
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              The name Elcara is a blend of "El," which means "the" in English, and "Cara," meaning "face" in Spanish. 
              This combination reflects our commitment to a personalized approach, ensuring that each event showcases 
              its distinct character while delivering a meticulously curated experience for every guest.
            </p>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#C4A484] font-semibold tracking-wide uppercase">Meet the Founder</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Carla Turk
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              CEO & Founder
            </p>
          </div>
          <div className="mt-10 max-w-2xl mx-auto">
            <p className="text-gray-300">
              Carla Turk is an accomplished event management professional with extensive expertise in guest communication, 
              specializing in large-scale sports, corporate and entertainment events worldwide.
            </p>
            <p className="mt-4 text-gray-300">
              Her experience includes managing guest communication for prestigious events such as the Abu Dhabi Grand Prix, 
              Saudi Arabian Grand Prix, SailGP, Expo 2020, and international tennis tournaments, delivering seamless, 
              high-end guest experiences with exceptional attention to detail.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#C4A484] font-semibold tracking-wide uppercase">Our Values</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              What We Stand For
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#C4A484] text-black">
                <UserIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-white">Personalized Service</h3>
                <p className="mt-2 text-base text-gray-300">
                  Each guest is regarded as unique, receiving careful attention to their individual needs and preferences.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#C4A484] text-black">
                <CheckCircleIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-white">Excellence</h3>
                <p className="mt-2 text-base text-gray-300">
                  We aim for perfection in every aspect, guaranteeing impeccable execution from beginning to end.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#C4A484] text-black">
                <ShieldCheckIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-white">Integrity</h3>
                <p className="mt-2 text-base text-gray-300">
                  Trust forms the foundation of our operations, with transparency and reliability steering our actions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#C4A484] text-black">
                <BriefcaseIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-white">Professionalism</h3>
                <p className="mt-2 text-base text-gray-300">
                  Our team, backed by years of experience, maintains the highest standards in all interactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#C4A484] font-semibold tracking-wide uppercase">Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Our Services
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-medium text-white">Event Coordination</h3>
              <p className="mt-2 text-base text-gray-300">
                We oversee every detail of your event's guest experience, from personalized invitations to seamless on-site
                management and post-event follow-up.
              </p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-medium text-white">Guest Registration & RSVP Solutions</h3>
              <p className="mt-2 text-base text-gray-300">
                We offer a flexible guest management system designed to streamline the entire process, providing efficient
                solutions for online registration, on-site check-ins, and real-time data tracking.
              </p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-medium text-white">Customized Accommodation Management</h3>
              <p className="mt-2 text-base text-gray-300">
                Leveraging our extensive network of travel agencies, we secure the best rates and tailor room bookings to
                meet your guests' specific preferences.
              </p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-medium text-white">Travel Coordination</h3>
              <p className="mt-2 text-base text-gray-300">
                We manage all aspects of travel logistics, from flight bookings and visa assistance to seamless airport
                transfers.
              </p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-medium text-white">Executive & VIP Guest Services</h3>
              <p className="mt-2 text-base text-gray-300">
                We curate bespoke travel experiences, luxury accommodation, exclusive event access, and gourmet culinary
                services for VIP guests.
              </p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-medium text-white">Event Staffing & Talent Solutions</h3>
              <p className="mt-2 text-base text-gray-300">
                Our network of professional staff ensures the right talent for your event's specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#C4A484] font-semibold tracking-wide uppercase">Process</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Our Approach
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#C4A484] text-black">
                <CalendarIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">1. Initial Consultation</h3>
              <p className="mt-2 text-base text-gray-300">
                Understand your goals, vision and event requirements
              </p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#C4A484] text-black">
                <BriefcaseIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">2. Proposal Development</h3>
              <p className="mt-2 text-base text-gray-300">
                Create a tailored plan, outlining services and deliverables
              </p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#C4A484] text-black">
                <CheckCircleIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">3. Planning & Preparation</h3>
              <p className="mt-2 text-base text-gray-300">
                Develop detailed event plans and coordinate with vendors
              </p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#C4A484] text-black">
                <UserGroupIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">4. Execution & Delivery</h3>
              <p className="mt-2 text-base text-gray-300">
                Ensure seamless guest experiences with on-site management
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm text-white mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C4A484]">Contact Us</h3>
              <p className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <a href="tel:+971505323122" className="hover:text-[#C4A484] transition-colors">+971 505323122</a>
              </p>
              <p className="flex items-center mt-2">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                <a href="mailto:contact@elcara.info" className="hover:text-[#C4A484] transition-colors">contact@elcara.info</a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#C4A484]">Reach out to us on Google Forms</h3>
              <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSeHbXQ9n6wC1LixQIqIzHSOZJsBdPESh_-NWSz6e3hTpmwoGA/viewform?hl=en" className="hover:text-[#C4A484] transition-colors">Leave us a message and fill in your details on Google Forms and we will get back to you within 24 hours</a></p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; {new Date().getFullYear()} Elcara. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}