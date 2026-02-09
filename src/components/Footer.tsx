import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-slate-200">
            <div className="container px-4 sm:px-6 py-12 md:py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12 text-sm">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <a href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                F
                            </div>
                            <span className="text-xl font-bold tracking-tight text-slate-900">
                                FLY<span className="text-blue-600">UP</span>
                            </span>
                        </a>
                        <p className="text-slate-500 leading-relaxed mb-6">
                            แพลตฟอร์มระดมทุนอันดับ 1 สำหรับนักศึกษา
                            สร้างสรรค์นวัตกรรมสู่อนาคต
                        </p>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h3 className="font-bold text-slate-900 mb-4">แพลตฟอร์ม</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">หน้าแรก</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">ค้นหาโปรเจกต์</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">เริ่มระดมทุน</a></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h3 className="font-bold text-slate-900 mb-4">ช่วยเหลือ</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">ศูนย์ช่วยเหลือ</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">ติดต่อเรา</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">ข้อกำหนด</a></li>
                        </ul>
                    </div>

                    {/* Newsletter (Simplified) */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="font-bold text-slate-900 mb-4">รับข่าวสาร</h3>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="อีเมล"
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-900 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                            <button className="bg-blue-600 text-white rounded-lg px-4 py-2 font-medium hover:bg-blue-700 transition-colors whitespace-nowrap">
                                ติดตาม
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>© 2026 FLYUP Inc.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-slate-900">ความเป็นส่วนตัว</a>
                        <a href="#" className="hover:text-slate-900">เงื่อนไข</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
