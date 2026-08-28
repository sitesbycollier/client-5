export const BookingEmbed = () => {
  return (
    <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-[940px] left-5 mb-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6">
          <div className="rounded-lg border border-slate-200 p-3">
            <p className="text-xs text-slate-500">Photography Only</p>
            <p className="text-sm font-semibold text-slate-800">From $350</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-3">
            <p className="text-xs text-slate-500">Photo + Video</p>
            <p className="text-sm font-semibold text-slate-800">From $650</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-3">
            <p className="text-xs text-slate-500">Aerial Add-On</p>
            <p className="text-sm font-semibold text-slate-800">From $175</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-3">
            <p className="text-xs text-slate-500">Floor Plans / 3D</p>
            <p className="text-sm font-semibold text-slate-800">Custom</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-3">
            <p className="text-xs text-slate-500">Campaign Package</p>
            <p className="text-sm font-semibold text-slate-800">Quoted</p>
          </div>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
          <input
            type="text"
            placeholder="Business / Brokerage"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
          <input
            type="text"
            placeholder="Property Address"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm md:col-span-2"
          />
          <select className="rounded-lg border border-slate-300 px-3 py-2 text-sm">
            <option>Service Focus</option>
            <option>Photography Only</option>
            <option>Photography + Video</option>
            <option>Aerial Add-On</option>
            <option>Full Campaign Package</option>
            <option>Custom Coverage Plan (Flexible Add-Ons)</option>
          </select>
          <input
            type="date"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
          <textarea
            rows={4}
            placeholder="Scope, square footage, timeline, and any requested add-ons..."
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm md:col-span-2"
          ></textarea>
          <label className="md:col-span-2 flex items-center gap-2 text-sm text-slate-700">
            <input type="checkbox" className="h-4 w-4" />
            I&rsquo;m interested in pay-at-closing or staged billing.
          </label>
          <button
            type="submit"
            className="md:col-span-2 rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800"
          >
            Sign Up &amp; Submit Commercial Request
          </button>
        </form>

        <div className="mt-8">
          <h3 className="text-[24px] leading-[30px] font-avenir_lt_w01_85_heavy1475544 text-slate-900 mb-4">
            Commercial Portfolio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_595d6b1343e44795bdd31080d9dbc86a~mv2_d_1993_1362_s_2.jpg"
              alt="Commercial portfolio one"
              className="h-[220px] w-full object-cover rounded-xl"
            />
            <img
              src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_0f405304931447f596d1a7cd179d1e4c~mv2.jpg"
              alt="Commercial portfolio two"
              className="h-[220px] w-full object-cover rounded-xl"
            />
            <img
              src="https://c.animaapp.com/Md3O0W-i1zJ4gC0H8Hka0g/assets/360fdc_63073c5fd8d14c58b5e09134779da8f1~mv2.jpg"
              alt="Commercial portfolio three"
              className="h-[220px] w-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
