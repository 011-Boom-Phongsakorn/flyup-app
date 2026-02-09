import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
            <div className="container px-4 sm:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <a href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-sm">
                                F
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-slate-900">
                                FLY<span className="text-blue-600">UP</span>
                            </span>
                        </a>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-sm">
                            แพลตฟอร์มระดมทุนอันดับ 1 สำหรับนักศึกษา
                            เราเชื่อว่าทุกไอเดียมีค่า พร้อมผลักดันนวัตกรรมสู่อนาคต
                        </p>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h3 className="font-bold text-slate-900 mb-6">แพลตฟอร์ม</h3>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">หน้าแรก</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">ค้นหาโปรเจกต์</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">เริ่มระดมทุน</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">ความสำเร็จ</a></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h3 className="font-bold text-slate-900 mb-6">ช่วยเหลือ</h3>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">ศูนย์ช่วยเหลือ</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">คำถามที่พบบ่อย</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">ติดต่อเรา</a></li>
                            <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">ข้อกำหนดการใช้งาน</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-1">
                        <h3 className="font-bold text-slate-900 mb-6">รับข่าวสาร</h3>
                        <p className="text-slate-500 text-sm mb-4">
                            ไม่พลาดทุกการอัปเดตและโปรเจกต์ใหม่ๆ
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="อีเมลของคุณ"
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                            />
                            <button className="bg-blue-600 text-white rounded-lg px-6 py-2.5 text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap">
                                ติดตาม
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p>© 2026 FLYUP Inc. สงวนลิขสิทธิ์</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-slate-900 transition-colors">นโยบายความเป็นส่วนตัว</a>
                        <a href="#" className="hover:text-slate-900 transition-colors">เงื่อนไขการใช้งาน</a>
                        <a href="#" className="hover:text-slate-900 transition-colors">คุกกี้</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
