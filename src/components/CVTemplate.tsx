import React from 'react';
import { HERO_DATA, SKILLS, EXPERIENCE, PROJECTS } from '@/constants';
import { ProjectCategory } from '@/types';

// This component is explicitly designed for A4 size rendering (approx 794x1123 px at 96 DPI)
const CVTemplate: React.FC = () => {
    return (
        <div
            id="cv-template"
            className="box-border"
            style={{
                width: '210mm',
                minHeight: '297mm',
                fontFamily: '"Inter", sans-serif',
                backgroundColor: '#ffffff',
                color: '#1f2937',
                display: 'flex',
                flexDirection: 'row',
                lineHeight: 1.6
            }}
        >
            {/* Left Sidebar */}
            <div style={{ width: '32%', backgroundColor: '#f8fafc', padding: '40px 30px', borderRight: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}>
                    {/* Profile Picture */}
                    <div style={{ width: '130px', height: '130px', borderRadius: '50%', overflow: 'hidden', border: '4px solid #ffffff', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', marginBottom: '15px' }}>
                        <img
                            src="/assets/profile.png"
                            alt={HERO_DATA.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement!.style.display = 'flex';
                                e.currentTarget.parentElement!.style.alignItems = 'center';
                                e.currentTarget.parentElement!.style.justifyContent = 'center';
                                e.currentTarget.parentElement!.innerText = 'CSD';
                                e.currentTarget.parentElement!.style.fontSize = '32px';
                                e.currentTarget.parentElement!.style.color = '#9ca3af';
                                e.currentTarget.parentElement!.style.fontWeight = 'bold';
                                e.currentTarget.parentElement!.style.backgroundColor = '#e5e7eb';
                            }}
                        />
                    </div>
                    <h2 style={{ fontSize: '18px', fontWeight: 800, textAlign: 'center', color: '#0f172a', margin: 0, lineHeight: 1.2 }}>
                        {HERO_DATA.name.split(' ').map((n, i) => i === 0 ? <span key={n} style={{ color: '#3b82f6' }}>{n} </span> : <span key={n}>{n} </span>)}
                    </h2>
                </div>

                <div style={{ marginBottom: '35px' }}>
                    <h3 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', color: '#0f172a', borderBottom: '2px solid #cbd5e1', paddingBottom: '5px', marginBottom: '15px', letterSpacing: '0.05em' }}>Contact</h3>
                    <div style={{ fontSize: '12px', color: '#475569', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div>
                            <strong style={{ display: 'block', color: '#1e293b', marginBottom: '2px' }}>Website</strong>
                            <a href="https://csddev.vercel.app" style={{ color: '#3b82f6', textDecoration: 'none', wordBreak: 'break-all' }}>csddev.vercel.app</a>
                        </div>
                        <div>
                            <strong style={{ display: 'block', color: '#1e293b', marginBottom: '2px' }}>LinkedIn</strong>
                            <a href={HERO_DATA.socials.linkedin} style={{ color: '#3b82f6', textDecoration: 'none', wordBreak: 'break-all' }}>{HERO_DATA.socials.linkedin.replace('https://www.', '')}</a>
                        </div>
                        <div>
                            <strong style={{ display: 'block', color: '#1e293b', marginBottom: '2px' }}>GitHub</strong>
                            <a href={HERO_DATA.socials.github} style={{ color: '#3b82f6', textDecoration: 'none', wordBreak: 'break-all' }}>{HERO_DATA.socials.github.replace('https://', '')}</a>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', color: '#0f172a', borderBottom: '2px solid #cbd5e1', paddingBottom: '5px', marginBottom: '15px', letterSpacing: '0.05em' }}>Skills</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {SKILLS.map(skill => (
                            <div key={skill.name}>
                                <div style={{ fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '4px', display: 'flex', justifyContent: 'space-between' }}>
                                    <span>{skill.name}</span>
                                </div>
                                <div style={{ width: '100%', backgroundColor: '#e2e8f0', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                                    <div style={{ width: `${skill.level}%`, backgroundColor: '#3b82f6', height: '100%', borderRadius: '3px' }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Main Content */}
            <div style={{ width: '68%', padding: '40px 45px', backgroundColor: '#ffffff' }}>
                <div style={{ marginBottom: '35px' }}>
                    <h1 style={{ fontSize: '42px', fontWeight: 800, color: '#0f172a', margin: '0 0 5px 0', letterSpacing: '-1px', lineHeight: 1.1 }}>
                        {HERO_DATA.name}
                    </h1>
                    <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#3b82f6', margin: 0, letterSpacing: '0.5px' }}>
                        {HERO_DATA.role}
                    </h2>
                </div>

                <div style={{ marginBottom: '35px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 800, textTransform: 'uppercase', color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '6px', marginBottom: '15px', letterSpacing: '0.05em' }}>
                        Professional Profile
                    </h3>
                    <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.7, margin: 0, textAlign: 'justify' }}>
                        {HERO_DATA.description} I specialize in building responsive web applications and high-performance mobile apps, focusing heavily on modern UI/UX principles and clean, maintainable code architectures that deliver exceptional user experiences.
                    </p>
                </div>

                <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 800, textTransform: 'uppercase', color: '#0f172a', borderBottom: '2px solid #e2e8f0', paddingBottom: '6px', marginBottom: '20px', letterSpacing: '0.05em' }}>
                        Work Experience
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                        {EXPERIENCE.map(exp => (
                            <div key={exp.id}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                                    <div>
                                        <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: 0 }}>{exp.role}</h4>
                                        <div style={{ fontSize: '14px', fontWeight: 600, color: '#3b82f6', marginTop: '2px' }}>{exp.company} <span style={{ color: '#94a3b8', fontWeight: 400 }}>• {exp.type}</span></div>
                                    </div>
                                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#64748b', backgroundColor: '#f1f5f9', padding: '4px 10px', borderRadius: '4px', border: '1px solid #e2e8f0', whiteSpace: 'nowrap', display: 'inline-block', boxSizing: 'border-box', verticalAlign: 'middle' }}>
                                        {exp.period}
                                    </div>
                                </div>
                                <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6, margin: '10px 0', textAlign: 'justify' }}>
                                    {exp.description}
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                                    {exp.techStack.map(tech => (
                                        <span key={tech} style={{ fontSize: '11px', fontWeight: 500, color: '#334155', backgroundColor: '#f8fafc', padding: '4px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', display: 'inline-block', whiteSpace: 'nowrap', boxSizing: 'border-box', verticalAlign: 'middle' }}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CVTemplate;
