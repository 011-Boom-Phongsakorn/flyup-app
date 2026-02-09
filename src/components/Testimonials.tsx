import React, { useState } from 'react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    avatar: string;
    content: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'สมชาย กิจการดี',
        role: 'Startup Founder',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        content: 'FLYUP ช่วยให้ผมระดมทุนได้สำเร็จภายใน 2 สัปดาห์ ระบบใช้งานง่ายมาก และทีมงานให้การสนับสนุนดีเยี่ยม',
    },
    {
        id: 2,
        name: 'สุดา เทพนิมิต',
        role: 'App Developer',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        content: 'แพลตฟอร์มที่ดีที่สุดสำหรับนักศึกษาที่อยากเริ่มต้นธุรกิจ ได้พบนักลงทุนที่เข้าใจวิสัยทัศน์ของเรา',
    },
    {
        id: 3,
        name: 'วิชัย นวัตกรรม',
        role: 'Tech Enthusiast',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        content: 'จากโปรเจกต์ในห้องเรียน สู่สตาร์ทอัพที่มีมูลค่า ขอบคุณ FLYUP ที่ทำให้ความฝันเป็นจริง',
    },
];

const Testimonials: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="testimonials" className="py-24 bg-white">
            <div className="container px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Side: Content */}
                    <div className="max-w-xl">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            เสียงยืนยันจาก<br />
                            <span className="text-blue-600">ผู้ใช้งานจริง</span>
                        </h2>
                        <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                            เราภูมิใจที่ได้เป็นส่วนหนึ่งของความสำเร็จ
                            ของนักศึกษาและนักลงทุนรุ่นใหม่ทั่วประเทศไทย
                        </p>

                        <div className="flex gap-10 border-t border-slate-100 pt-8">
                            <div>
                                <p className="text-3xl font-bold text-slate-900">500+</p>
                                <p className="text-sm text-slate-500 mt-1">โปรเจกต์สำเร็จ</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-slate-900">120M+</p>
                                <p className="text-sm text-slate-500 mt-1">เงินระดมทุน (บาท)</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Card */}
                    <div className="relative mt-8 lg:mt-0">
                        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-slate-100">
                            {/* Quote Icon */}
                            <div className="text-blue-100 mb-6">
                                <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 16.6569 20.6739 18 19.017 18H16.017C15.4647 18 15.017 18.4477 15.017 19V21L14.017 21ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166C6.46432 18 6.0166 18.4477 6.0166 19V21L5.0166 21Z" />
                                </svg>
                            </div>

                            <blockquote className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed mb-6">
                                "{testimonials[activeIndex].content}"
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonials[activeIndex].avatar}
                                    alt={testimonials[activeIndex].name}
                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-50"
                                />
                                <div>
                                    <div className="font-bold text-slate-900">{testimonials[activeIndex].name}</div>
                                    <div className="text-sm text-slate-500">{testimonials[activeIndex].role}</div>
                                </div>

                                <div className="ml-auto flex gap-2">
                                    <button
                                        onClick={() => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                                        className="p-2 rounded-full hover:bg-slate-100/80 transition-colors text-slate-400 hover:text-blue-600"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                                        className="p-2 rounded-full hover:bg-slate-100/80 transition-colors text-slate-400 hover:text-blue-600"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Background Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-50/50 blur-3xl -z-10 rounded-full scale-110"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
