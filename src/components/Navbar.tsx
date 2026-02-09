import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm h-20">
            <div className="container h-full flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 group flex-shrink-0">
                    <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:bg-blue-700 transition-colors">
                        F
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900 font-inter">
                        FLY<span className="text-blue-600">UP</span>
                    </span>
                </a>

                {/* Desktop Navigation - Centered */}
                <div className="hidden md:flex items-center gap-8 bg-slate-50 px-6 py-2 rounded-full border border-slate-200">
                    <a href="#home" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">หน้าแรก</a>
                    <a href="#projects" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">โปรเจกต์</a>
                    <a href="#about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">เกี่ยวกับเรา</a>
                    <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">ติดต่อ</a>
                </div>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center gap-3 flex-shrink-0">
                    <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                        เข้าสู่ระบบ
                    </button>
                    <button className="px-5 py-2 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                        สมัครสมาชิก
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 text-slate-600 hover:text-blue-600 rounded-lg hover:bg-slate-100">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
