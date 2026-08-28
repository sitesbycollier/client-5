export const ContactForm = () => {
  return (
    <form className="self-start bg-transparent bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-[840px] left-0">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-[28px] leading-[34px] font-avenir_lt_w01_85_heavy1475544 text-slate-900 mb-2">
          Contact Snap Magic
        </h3>
        <p className="text-sm text-slate-600 mb-5 font-helvetica_w01_roman">
          Tell us about your listing, timeline, and services needed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="your-name"
            type="text"
            placeholder="Your Name *"
            required={true}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
          <input
            name="email"
            type="email"
            placeholder="Email *"
            required={true}
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
          <input
            name="company-name"
            type="text"
            placeholder="Company / Brokerage"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm md:col-span-2"
          />
          <textarea
            placeholder="Tell us more about your project"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm h-32 md:col-span-2 resize-none"
          ></textarea>
          <button
            type="submit"
            aria-label="Send Message"
            className="md:col-span-2 rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};
