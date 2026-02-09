import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-white">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] -z-10"></div>
            </div>

            <div className="container flex flex-col items-center text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-medium text-xs sm:text-sm mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    แพลตฟอร์มระดมทุนเพื่อนักศึกษา
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6 max-w-4xl">
                    เปลี่ยนไอเดียคุณ <br className="hidden sm:block" />
                    <span className="text-blue-600">ให้กลายเป็นธุรกิจจริง</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    พื้นที่ระดมทุนสำหรับ Startup หน้าใหม่จากรั้วมหาวิทยาลัย
                    เปิดโอกาสให้คุณได้แสดงศักยภาพและค้นหาพาร์ทเนอร์
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white text-base font-semibold rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 hover:-translate-y-1">
                        เริ่มต้นสร้างโปรเจกต์
                    </button>
                    <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-600 border border-slate-200 text-base font-semibold rounded-full hover:bg-slate-50 hover:border-slate-300 transition-colors">
                        ดูโปรเจกต์ตัวอย่าง
                    </button>
                </div>

                {/* Hero Image */}
                <div className="w-full max-w-5xl relative">
                    <div className="absolute -inset-1 bg-gradient-to-b from-blue-100 to-transparent rounded-2xl blur-xl opacity-50"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                        <img
                            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                            alt="Platform Preview"
                            className="w-full h-auto object-cover max-h-[500px]"
                        />
                        {/* Overlay Gradient for smooth looking bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
