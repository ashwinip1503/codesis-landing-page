export const PhoneMockup1 = () => {
return (
<div className="w-[260px] h-[520px] bg-white rounded-[35px] shadow-xl p-4 border relative">
{/* Notch */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-black/10 rounded-b-3xl"></div>


{/* Screen */}
<div className="mt-8">
<h2 className="text-xl font-semibold mb-3">Investments</h2>


{/* Investment Card */}
<div className="bg-white shadow-md rounded-xl p-3 mb-3 border">
<div className="flex gap-3">
<div className="w-14 h-14 bg-gray-300 rounded-lg"></div>
<div>
<h3 className="font-semibold">Aurora</h3>
<p className="text-xs opacity-60 leading-tight">1845 cotton court.</p>
<p className="text-green-600 text-xs font-medium mt-1">+ 3.5% Yield</p>
</div>
</div>
<div className="flex justify-between text-xs mt-2">
<span>$19,973</span>
<span>$79,648</span>
</div>
</div>


{/* Card 2 */}
<div className="bg-white shadow-md rounded-xl p-3 mb-3 border">
<div className="flex gap-3">
<div className="w-14 h-14 bg-gray-300 rounded-lg"></div>
<div>
<h3 className="font-semibold">Gemini Apartment</h3>
<p className="text-xs opacity-60 leading-tight">Newport month VA</p>
<p className="text-green-600 text-xs font-medium mt-1">+ 3.5% Yield</p>
</div>
</div>
<div className="flex justify-between text-xs mt-2">
<span>$109,555</span>
<span>$472,685</span>
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
</div>
);
};