export const BookingForm = () => {
  return (
    <div className="self-start bg-[position:0px_0px] caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[calc(50%_-_490px)] min-h-[auto] min-w-[auto] pointer-events-auto relative no-underline w-[940px] left-5">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6">
          <div className="rounded-lg border border-slate-200 p-3">
            <p className="text-xs text-slate-500">LIST</p>
            <p className="text-sm font-semibold text-slate-800">$249</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-3">
            <p className="text-xs text-slate-500">SHOW</p>
            <p className="text-sm font-semibold text-slate-800">$450</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-3">
            <p className="text-xs text-slate-500">SELL</p>
            <p className="text-sm font-semibold text-slate-800">$535</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-3">
            <p className="text-xs text-slate-500">WIN</p>
            <p className="text-sm font-semibold text-slate-800">$850</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-3">
            <p className="text-xs text-slate-500">STAR</p>
            <p className="text-sm font-semibold text-slate-800">$1,000</p>
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
            placeholder="Property Address"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
          <select className="rounded-lg border border-slate-300 px-3 py-2 text-sm">
            <option>Select Package</option>
            <option>LIST — $249</option>
            <option>SHOW — $450</option>
            <option>SELL — $535</option>
            <option>WIN — $850</option>
            <option>STAR — $1,000</option>
            <option>Photography Only</option>
            <option>Custom Coverage Plan (Flexible Add-Ons)</option>
          </select>
          <input
            type="date"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
          <select className="rounded-lg border border-slate-300 px-3 py-2 text-sm">
            <option>Service Focus</option>
            <option>Photography Only</option>
            <option>Photography + Video + Drone</option>
            <option>Full Residential Package</option>
            <option>Custom Coverage Plan (Flexible Add-Ons)</option>
          </select>
          <textarea
            rows={4}
            placeholder="Services needed, square footage, timeline, notes..."
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm md:col-span-2"
          ></textarea>
          <label className="md:col-span-2 flex items-center gap-2 text-sm text-slate-700">
            <input type="checkbox" className="h-4 w-4" />
            I&rsquo;m interested in Pay at Closing.
          </label>
          <button
            type="submit"
            className="md:col-span-2 rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold hover:bg-slate-800"
          >
            Sign Up &amp; Request Booking
          </button>
        </form>
      </div>
    </div>
  );
};
