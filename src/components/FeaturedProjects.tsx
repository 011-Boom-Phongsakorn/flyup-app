import React from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    fundingGoal: number;
    currentFunding: number;
    daysLeft: number;
    backers: number;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Smart IoT Controller',
        description: 'ระบบควบคุมอุปกรณ์ IoT อัจฉริยะสำหรับบ้านและอาคาร ช่วยประหยัดพลังงานและเพิ่มความสะดวกสบาย',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'IoT',
        fundingGoal: 500000,
        currentFunding: 375000,
        daysLeft: 12,
        backers: 89,
    },
    {
        id: 2,
        title: 'EduTech Platform',
        description: 'แพลตฟอร์มการเรียนรู้ออนไลน์ช่วยสอนด้วย AI ปรับเนื้อหาตามความเข้าใจของผู้เรียน',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'Education',
        fundingGoal: 300000,
        currentFunding: 270000,
        daysLeft: 8,
        backers: 156,
    },
    {
        id: 3,
        title: 'Green Energy Monitor',
        description: 'ระบบติดตามและวิเคราะห์การใช้พลังงานสะอาดแบบเรียลไทม์ สำหรับโรงงานอุตสาหกรรม',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'Energy',
        fundingGoal: 450000,
        currentFunding: 380000,
        daysLeft: 15,
        backers: 124,
    },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const progressPercent = (project.currentFunding / project.fundingGoal) * 100;

    return (
        <div className="flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
            {/* Image Container - Taller */}
            <div className="relative h-72 w-full overflow-hidden bg-slate-100 flex-shrink-0">
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-5 right-5 z-20">
                    <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md text-slate-700 text-xs font-bold rounded-full border border-slate-100 shadow-sm">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content - Maximum Padding */}
            <div className="flex flex-col flex-grow p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4" title={project.title}>
                    {project.title}
                </h3>
                <p className="text-base text-slate-500 mb-10 leading-relaxed line-clamp-3">
                    {project.description}
                </p>

                {/* Progress Section - Spaced out */}
                <div className="mt-auto space-y-8">
                    <div className="space-y-3">
                        <div className="flex justify-between text-sm font-medium">
                            <span className="text-blue-600 font-bold">{Math.round(progressPercent)}% funded</span>
                            <span className="text-slate-400">{project.daysLeft} วันเหลือ</span>
                        </div>
                        <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-blue-600 rounded-full shadow-sm"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>
                    </div>

                    <div className="flex justify-between items-end pt-8 border-t border-slate-50">
                        <div>
                            <p className="text-sm text-slate-400 mb-1">ระดมทุนได้</p>
                            <p className="text-xl font-bold text-slate-900">฿{project.currentFunding.toLocaleString()}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-slate-400 mb-1">ผู้สนับสนุน</p>
                            <p className="text-lg font-semibold text-slate-900">{project.backers} คน</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FeaturedProjects: React.FC = () => {
    return (
        <section id="projects" className="py-24 bg-slate-50 border-y border-slate-100">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header - Absolutely Centered */}
                <div className="flex flex-col items-center text-center mb-16 w-full">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        โปรเจกต์มาแรง
                    </h2>
                    <p className="text-xl text-slate-500 max-w-2xl">
                        ร่วมสนับสนุนความคิดสร้างสรรค์จากนักศึกษาไทย
                    </p>
                    <div className="w-24 h-1.5 bg-blue-600 rounded-full mt-8"></div>
                </div>

                {/* Projects Grid - More Gap */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-20 text-center">
                    <button className="px-10 py-4 bg-white border border-slate-200 text-slate-600 font-semibold rounded-full hover:bg-slate-50 hover:border-blue-200 hover:text-blue-600 transition-all shadow-md text-base">
                        ดูโปรเจกต์ทั้งหมด
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
