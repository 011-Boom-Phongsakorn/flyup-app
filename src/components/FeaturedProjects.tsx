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
        description: 'ระบบควบคุมอุปกรณ์ IoT อัจฉริยะสำหรับบ้านและอาคาร',
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
        description: 'แพลตฟอร์มการเรียนรู้ออนไลน์ด้วย AI',
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
        description: 'ระบบติดตามและวิเคราะห์การใช้พลังงานสะอาด',
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
        <div className="flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
            {/* Image Container - Fixed aspect ratio */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 z-10">
                    <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md text-slate-700 text-xs font-semibold rounded-md border border-slate-100 shadow-sm">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-1">
                    {project.title}
                </h3>
                <p className="text-sm text-slate-500 mb-6 line-clamp-2 min-h-[2.5rem]">
                    {project.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-auto space-y-3">
                    <div className="flex justify-between text-xs font-medium">
                        <span className="text-blue-600">{Math.round(progressPercent)}%</span>
                        <span className="text-slate-400">{project.daysLeft} วันเหลือ</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blue-600 rounded-full"
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>

                    <div className="flex justify-between items-center text-sm pt-2">
                        <span className="font-bold text-slate-900">฿{project.currentFunding.toLocaleString()}</span>
                        <span className="text-slate-500 text-xs">{project.backers} ผู้สนับสนุน</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FeaturedProjects: React.FC = () => {
    return (
        <section id="projects" className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="container px-4 sm:px-6">
                {/* Section Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        โปรเจกต์มาแรง
                    </h2>
                    <p className="text-lg text-slate-500">
                        ร่วมสนับสนุนความคิดสร้างสรรค์จากนักศึกษาไทย
                    </p>
                </div>

                {/* Projects Grid - Explicit Grid Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-12 text-center">
                    <button className="px-6 py-2.5 bg-white border border-slate-200 text-slate-600 text-sm font-semibold rounded-full hover:bg-slate-50 hover:border-blue-200 hover:text-blue-600 transition-all">
                        ดูโปรเจกต์ทั้งหมด
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
