"use client";

import React from 'react';
import { portfolioRepository } from '@/data/portfolio.repository';
import i18n from '@/infrastructure/i18n';

interface CVTemplateProps {
    photoSrc?: string; // Kept for compatibility but not used in ATS version
}

const heroData = portfolioRepository.getHeroData();
const skills = portfolioRepository.getSkills();
const experience = portfolioRepository.getExperience();
const education = portfolioRepository.getEducation();
const languages = portfolioRepository.getLanguages();

// ── Reusable sub-components ────────────────────────────────────
const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div style={{
        marginTop: '24px',
        marginBottom: '12px',
        borderBottom: '1px solid #111827',
        paddingBottom: '4px',
    }}>
        <h3 style={{
            fontSize: '13px',
            fontWeight: 700,
            textTransform: 'uppercase',
            color: '#111827',
            letterSpacing: '0.05em',
            margin: 0,
        }}>{children}</h3>
    </div>
);

const ExperienceItem: React.FC<{
    role: string;
    company: string;
    period: string;
    type: string;
    description: string | string[];
    techStack: string[];
}> = ({ role, company, period, type, description, techStack }) => {
    const descArray = Array.isArray(description) ? description : [description];

    return (
        <div style={{ marginBottom: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div style={{ fontWeight: 700, fontSize: '12px', color: '#111827' }}>
                    {role} | <span style={{ fontWeight: 600 }}>{company}</span>
                    <span style={{ fontSize: '10px', fontWeight: 500, color: '#6b7280', marginLeft: '8px' }}>({type})</span>
                </div>
                <div style={{ fontSize: '11px', color: '#4b5563', fontWeight: 500 }}>{period}</div>
            </div>
            <div style={{ marginTop: '6px' }}>
                {descArray.map((point, i) => (
                    <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '3px' }}>
                        <span style={{ fontSize: '11px', color: '#111827' }}>•</span>
                        <p style={{ fontSize: '11px', color: '#374151', margin: 0, lineHeight: 1.6, textAlign: 'justify' }}>
                            {point}
                        </p>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '6px', fontSize: '10px', color: '#4b5563' }}>
                <span style={{ fontWeight: 600 }}>Technologies:</span> {techStack.join(', ')}
            </div>
        </div>
    );
};

// ── Main Component ──────────────────────────────────────────────
const CVTemplate: React.FC<CVTemplateProps> = () => {
    return (
        <div
            id="cv-template"
            style={{
                width: '210mm',
                minHeight: '297mm',
                padding: '10mm 20mm 25mm 20mm',
                fontFamily: '"Inter", "Helvetica", Arial, sans-serif',
                backgroundColor: '#ffffff',
                color: '#111827',
                display: 'flex',
                flexDirection: 'column',
                lineHeight: 1.5,
                boxSizing: 'border-box',
            }}
        >
            {/* ── HEADER ── */}
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#111827', margin: '0 0 6px 0', letterSpacing: '-0.02em' }}>
                    {heroData.name.toUpperCase()}
                </h1>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#2563eb', marginBottom: '8px', textTransform: 'uppercase' }}>
                    {i18n.t(heroData.role)}
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '10.5px',
                    color: '#4b5563',
                    flexWrap: 'wrap',
                }}>
                    <span>{heroData.location}</span>
                    <span>•</span>
                    <a href={`tel:${heroData.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>{heroData.phone}</a>
                    <span>•</span>
                    <a href={`mailto:${heroData.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>{heroData.email}</a>
                    <span>•</span>
                    <a href="https://csddev.vercel.app" style={{ color: 'inherit', textDecoration: 'none' }}>csddev.vercel.app</a>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '12px',
                    fontSize: '10.5px',
                    color: '#4b5563',
                    marginTop: '4px',
                }}>
                    <a href={heroData.socials.linkedin} style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn: linkedin.com/in/candrasdk</a>
                    <span>•</span>
                    <a href={heroData.socials.github} style={{ color: 'inherit', textDecoration: 'none' }}>GitHub: github.com/candrasdkd</a>
                </div>
            </div>

            {/* ── SUMMARY ── */}
            <SectionHeader>Professional Summary</SectionHeader>
            <p style={{ fontSize: '11px', color: '#374151', margin: 0, textAlign: 'justify', lineHeight: 1.6 }}>
                {i18n.t(heroData.description)} Specialized in the React ecosystem for web development and React Native for mobile applications. Proven track record in delivering high-quality UI/UX solutions with maintainable architectures, spanning from responsive web applications to cross-platform mobile apps deployed on major app stores.
            </p>

            {/* ── EXPERIENCE ── */}
            <SectionHeader>Work Experience</SectionHeader>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {experience.map(exp => (
                    <ExperienceItem
                        key={exp.id}
                        role={i18n.t(exp.role)}
                        company={exp.company}
                        period={exp.period}
                        type={exp.type}
                        description={i18n.t(exp.description, { returnObjects: true }) as string[]}
                        techStack={exp.techStack}
                    />
                ))}
            </div>

            {/* ── SKILLS ── */}
            <SectionHeader>Technical Skills</SectionHeader>
            <div style={{ fontSize: '11px', color: '#374151' }}>
                <div style={{ marginBottom: '4px' }}>
                    <span style={{ fontWeight: 700 }}>Frameworks & Languages:</span> React, React Native, Next.js, Angular, TypeScript, JavaScript, Swift, Kotlin, Java, Node.js.
                </div>
                <div style={{ marginBottom: '4px' }}>
                    <span style={{ fontWeight: 700 }}>Backend & Databases:</span> GraphQL, Firebase, SQL Server, MongoDB, Redux, REST API.
                </div>
                <div style={{ marginBottom: '4px' }}>
                    <span style={{ fontWeight: 700 }}>Tools & Cloud:</span> Git/GitHub, CI/CD, Figma, PWA, Vercel, App Store & Google Play Publishing.
                </div>
            </div>

            {/* ── PROJECTS ── */}
            <SectionHeader>Selected Projects</SectionHeader>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {portfolioRepository.getProjects().map(project => (
                    <div key={project.id} style={{ marginBottom: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                            <div style={{ fontWeight: 700, fontSize: '12px', color: '#111827' }}>
                                {project.title} | <span style={{ fontWeight: 500, color: '#6b7280' }}>{project.type}</span>
                            </div>
                            <div style={{ fontSize: '10px', color: '#2563eb' }}>
                                {project.demoUrl || project.playStoreUrl || 'Professional Work'}
                            </div>
                        </div>
                        <p style={{ fontSize: '11px', color: '#374151', margin: '2px 0', lineHeight: 1.4, textAlign: 'justify' }}>
                            {i18n.t(project.description)}
                        </p>
                        <div style={{ fontSize: '10px', color: '#4b5563' }}>
                            <span style={{ fontWeight: 600 }}>Technologies:</span> {project.technologies.join(', ')}
                        </div>
                    </div>
                ))}
            </div>

            {/* ── EDUCATION ── */}
            <SectionHeader>Education</SectionHeader>
            {education.map(edu => (
                <div key={edu.id} style={{ marginBottom: '6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <div style={{ fontWeight: 700, fontSize: '12px', color: '#111827' }}>
                            {edu.school}
                        </div>
                        <div style={{ fontSize: '11px', color: '#4b5563', fontWeight: 500 }}>{edu.period}</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1px' }}>
                        <div style={{ fontSize: '11px', color: '#374151' }}>{i18n.t(edu.major)}</div>
                        {edu.gpa && (
                            <div style={{ fontSize: '11px', color: '#111827', fontWeight: 600 }}>GPA: {edu.gpa}</div>
                        )}
                    </div>
                </div>
            ))}

            {/* ── LANGUAGES ── */}
            <SectionHeader>Languages</SectionHeader>
            <div style={{ fontSize: '11px', color: '#374151' }}>
                {languages.map((lang, i) => (
                    <React.Fragment key={lang.name}>
                        <span style={{ fontWeight: 600 }}>{lang.name}</span> ({lang.level})
                        {i < languages.length - 1 && ' • '}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default CVTemplate;
