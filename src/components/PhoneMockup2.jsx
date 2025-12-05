export const PhoneMockup2 = () => {
  return (
    <div className="w-[260px] h-[520px] bg-white rounded-[35px] shadow-xl p-4 border relative">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-black/10 rounded-b-3xl"></div>

      {/* Header */}
      <div className="mt-8 text-center">
        <div className="w-20 h-20 rounded-full bg-purple-300 mx-auto"></div>
        <h3 className="text-lg font-semibold mt-2">Julie Craig</h3>
        <p className="text-sm opacity-70">Investor</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 text-center mt-6">
        <div>
          <h4 className="text-xl font-semibold">66</h4>
          <p className="text-xs opacity-70">Deals</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold">80%</h4>
          <p className="text-xs opacity-70">Match</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold">80B</h4>
          <p className="text-xs opacity-70">Match</p>
        </div>
      </div>

      {/* Finance Card */}
      <div className="bg-white shadow-md rounded-xl p-4 mt-6 border">
        <div className="flex justify-between text-sm mb-2">
          <span>$350,000</span>
          <span className="opacity-70">Borrowed</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span>$184,000</span>
          <span className="opacity-70">Paid</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>$166,000</span>
          <span className="opacity-70">Earned</span>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex justify-between mt-6 text-gray-400">
        <div className="w-6 h-6 bg-gray-300 rounded"></div>
        <div className="w-6 h-6 bg-[#7E5CC1] rounded"></div>
        <div className="w-6 h-6 bg-gray-300 rounded"></div>
        <div className="w-6 h-6 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};
