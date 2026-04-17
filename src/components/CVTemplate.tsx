import React from 'react';
import { HERO_DATA, SKILLS, EXPERIENCE, EDUCATION } from '@/constants';

interface CVTemplateProps {
    photoSrc?: string;
}

// ── Reusable sub-components ────────────────────────────────────
const SideHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 style={{
        fontSize: '9.5px', fontWeight: 800, textTransform: 'uppercase',
        color: '#3b82f6', letterSpacing: '0.12em',
        marginBottom: '12px', marginTop: 0, paddingBottom: '4px',
        borderBottom: '1px solid #1e293b',
    }}>{children}</h3>
);

const MainHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 style={{
        fontSize: '12px', fontWeight: 800, textTransform: 'uppercase',
        color: '#0f172a', letterSpacing: '0.07em',
        borderBottom: '1.5px solid #e2e8f0',
        paddingBottom: '6px', marginBottom: '14px', marginTop: 0,
    }}>{children}</h3>
);

// ── Main Component ──────────────────────────────────────────────
const CVTemplate: React.FC<CVTemplateProps> = ({ photoSrc }) => {
    return (
        <div
            id="cv-template"
            style={{
                width: '210mm',
                height: '297mm',
                fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
                backgroundColor: '#ffffff',
                color: '#1f2937',
                display: 'flex',
                flexDirection: 'row',
                lineHeight: 1.4,
                overflow: 'hidden',
            }}
        >
            {/* ═══ LEFT SIDEBAR ═══════════════════════════════════ */}
            <div style={{
                width: '31%',
                backgroundColor: '#0f172a',
                padding: '40px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                color: '#e2e8f0',
                flexShrink: 0,
            }}>
                {/* ── Avatar ── */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    {photoSrc ? (
                        <img
                            src={photoSrc}
                            alt={HERO_DATA.name}
                            style={{
                                width: '84px',
                                height: '84px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                objectPosition: 'center top',
                                display: 'block',
                                flexShrink: 0,
                                outline: '2.5px solid #3b82f6',
                                outlineOffset: '2px',
                                boxShadow: '0 0 0 6px rgba(59,130,246,0.12)',
                            }}
                        />
                    ) : (
                        <div style={{
                            width: '84px', height: '84px', borderRadius: '50%',
                            border: '2.5px solid #3b82f6',
                            boxShadow: '0 0 0 4px rgba(59,130,246,0.15)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            backgroundColor: '#1e3a5f', fontSize: '22px',
                            color: '#3b82f6', fontWeight: 800, flexShrink: 0,
                        }}>CSD</div>
                    )}
                    {/* Name & Role BELOW photo, not overlapping */}
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '13px', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>
                            <span style={{ color: '#3b82f6' }}>
                                {HERO_DATA.name.split(' ')[0]}
                            </span>
                            {' '}
                            <span>{HERO_DATA.name.split(' ').slice(1).join(' ')}</span>
                        </div>
                        <div style={{
                            fontSize: '8px', color: '#64748b', marginTop: '3px',
                            letterSpacing: '0.09em', textTransform: 'uppercase',
                        }}>
                            {HERO_DATA.role}
                        </div>
                    </div>
                </div>

                <Divider />

                {/* ── Personal Info ── */}
                <div>
                    <SideHeading>Personal Info</SideHeading>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', fontSize: '9.5px' }}>
                        <div>
                            <div style={{ color: '#475569', fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Location</div>
                            <div style={{ color: '#93c5fd' }}>{HERO_DATA.location}</div>
                        </div>
                        <div>
                            <div style={{ color: '#475569', fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Date of Birth</div>
                            <div style={{ color: '#93c5fd' }}>
                                Nov 7, 1997 ({Math.floor((new Date().getTime() - new Date(HERO_DATA.birthDate).getTime()) / 3.15576e+10)} y.o)
                            </div>
                        </div>
                    </div>
                </div>

                <Divider />

                {/* ── Contact ── */}
                <div>
                    <SideHeading>Contact</SideHeading>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', fontSize: '9.5px' }}>
                        {[
                            { label: 'Website', value: 'https://csddev.vercel.app', href: 'https://csddev.vercel.app' },
                            { label: 'LinkedIn', value: 'linkedin.com/in/candrasdk', href: HERO_DATA.socials.linkedin },
                            { label: 'GitHub', value: 'github.com/candrasdkd', href: HERO_DATA.socials.github },
                        ].map(item => (
                            <div key={item.label}>
                                <div style={{ color: '#475569', fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{item.label}</div>
                                <a href={item.href} style={{ color: '#93c5fd', textDecoration: 'none', wordBreak: 'break-all' }}>{item.value}</a>
                            </div>
                        ))}
                    </div>
                </div>

                <Divider />

                {/* ── Skills ── */}
                <div>
                    <SideHeading>Technical Skills</SideHeading>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {SKILLS.map(skill => (
                            <span key={skill.name} style={{
                                fontSize: '8.5px', fontWeight: 600,
                                color: '#bfdbfe', backgroundColor: 'rgba(37,99,235,0.15)',
                                border: '1px solid rgba(59,130,246,0.3)',
                                padding: '2.5px 6px', borderRadius: '4px',
                                whiteSpace: 'nowrap',
                            }}>
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>

                <Divider />

                {/* ── Languages ── */}
                <div>
                    <SideHeading>Languages</SideHeading>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {[
                            { lang: 'Indonesian', level: 'Native', pct: 100 },
                            { lang: 'English', level: 'Professional', pct: 70 },
                        ].map(item => (
                            <div key={item.lang}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9.5px', marginBottom: '3px' }}>
                                    <span style={{ color: '#e2e8f0', fontWeight: 600 }}>{item.lang}</span>
                                    <span style={{ color: '#64748b' }}>{item.level}</span>
                                </div>
                                <div style={{ width: '100%', height: '4px', backgroundColor: '#1e293b', borderRadius: '2px', overflow: 'hidden' }}>
                                    <div style={{ width: `${item.pct}%`, height: '100%', backgroundColor: '#3b82f6', borderRadius: '2px' }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Divider />

                {/* ── Education ── */}
                <div>
                    <SideHeading>Education</SideHeading>
                    {EDUCATION.map(edu => (
                        <div key={edu.id}>
                            <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#ffffff' }}>{edu.school}</div>
                            <div style={{ fontSize: '9.5px', color: '#93c5fd', marginTop: '1px' }}>{edu.major}</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3px' }}>
                                <span style={{ fontSize: '9px', color: '#475569' }}>{edu.period}</span>
                                {edu.gpa && (
                                    <span style={{ fontSize: '9px', color: '#3b82f6', fontWeight: 700 }}>GPA {edu.gpa}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>


            </div>

            {/* ═══ RIGHT MAIN CONTENT ═══════════════════════════ */}
            <div style={{
                width: '69%',
                padding: '40px 32px',
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                gap: '22px',
                overflow: 'hidden',
            }}>
                {/* ── Header ── */}
                <div>
                    <h1 style={{ fontSize: '28px', fontWeight: 900, color: '#0f172a', margin: 0, letterSpacing: '-0.5px', lineHeight: 1.1 }}>
                        {HERO_DATA.name}
                    </h1>
                    <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#3b82f6', marginTop: '4px' }}>
                        {HERO_DATA.role}
                    </div>
                    {/* Blue accent line */}
                    <div style={{ height: '2px', background: 'linear-gradient(to right, #3b82f6, transparent)', marginTop: '8px', borderRadius: '1px' }} />
                </div>

                {/* ── Key Stats Strip ── */}
                <div style={{
                    display: 'flex', gap: '0',
                    backgroundColor: '#f8fafc',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    overflow: 'hidden',
                }}>
                    {[
                        { value: '4+', label: 'Years Experience' },
                        { value: '5+', label: 'Companies' },
                        { value: '3+', label: 'Apps on Stores' },
                        { value: '10+', label: 'Projects Shipped' },
                    ].map((stat, i, arr) => (
                        <div key={stat.label} style={{
                            flex: 1, padding: '12px 6px', textAlign: 'center',
                            borderRight: i < arr.length - 1 ? '1px solid #e2e8f0' : 'none',
                        }}>
                            <div style={{ fontSize: '18px', fontWeight: 900, color: '#3b82f6', lineHeight: 1 }}>{stat.value}</div>
                            <div style={{ fontSize: '9px', color: '#64748b', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* ── Professional Profile ── */}
                <div>
                    <MainHeading>Professional Profile</MainHeading>
                    <p style={{ fontSize: '11px', color: '#475569', lineHeight: 1.7, margin: 0, textAlign: 'justify' }}>
                        {HERO_DATA.description} Specializing in the React ecosystem for web and React Native for mobile, I deliver modern UI/UX-driven solutions with clean, maintainable architectures — from responsive landing pages and PWAs to cross-platform mobile apps published on the App Store and Google Play.
                    </p>
                </div>

                {/* ── Work Experience ── */}
                <div style={{ flex: 1 }}>
                    <MainHeading>Work Experience</MainHeading>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {EXPERIENCE.map(exp => (
                            <div key={exp.id} style={{
                                paddingLeft: '9px',
                                borderLeft: `2px solid ${exp.type === 'Freelance' ? '#f97316' : '#3b82f6'}`,
                            }}>
                                {/* Role row */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'nowrap', gap: '6px' }}>
                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px', flexWrap: 'wrap', flex: 1 }}>
                                        <span style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a', whiteSpace: 'nowrap' }}>{exp.role}</span>
                                        <span style={{ fontSize: '10.5px', color: '#3b82f6', fontWeight: 600, whiteSpace: 'nowrap' }}>@ {exp.company}</span>
                                        <span style={{
                                            fontSize: '9px', fontWeight: 700,
                                            padding: '1px 5px', borderRadius: '3px',
                                            whiteSpace: 'nowrap',
                                            ...(exp.type === 'Freelance'
                                                ? { color: '#ea580c', backgroundColor: '#fff7ed', border: '1px solid #fed7aa' }
                                                : { color: '#2563eb', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe' })
                                        }}>
                                            {exp.type}
                                        </span>
                                    </div>
                                    <span style={{ fontSize: '9.5px', color: '#94a3b8', whiteSpace: 'nowrap', fontWeight: 600 }}>
                                        {exp.period}
                                    </span>
                                </div>

                                {/* Description */}
                                {Array.isArray(exp.description) ? (
                                    <div style={{ margin: '3px 0 4px' }}>
                                        {exp.description.slice(0, 4).map((point, i, arr) => (
                                            <div key={i} style={{
                                                display: 'flex',
                                                gap: '4px',
                                                alignItems: 'flex-start',
                                                marginBottom: i < arr.length - 1 ? '3.5px' : '0',
                                            }}>
                                                <span style={{ flexShrink: 0, color: '#3b82f6', fontSize: '9px', lineHeight: 1.5 }}>▸</span>
                                                <span style={{ fontSize: '9.5px', color: '#64748b', lineHeight: 1.5 }}>{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p style={{ fontSize: '9.5px', color: '#64748b', lineHeight: 1.5, margin: '3px 0 4px', textAlign: 'justify' }}>
                                        {exp.description}
                                    </p>
                                )}

                                {/* Tech chips */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px' }}>
                                    {exp.techStack.map(tech => (
                                        <span key={tech} style={{
                                            fontSize: '8.5px', fontWeight: 500,
                                            color: '#475569', backgroundColor: '#f8fafc',
                                            padding: '1.5px 5px', borderRadius: '3px',
                                            border: '1px solid #e2e8f0',
                                            whiteSpace: 'nowrap',
                                        }}>
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

const Divider = () => (
    <div style={{ height: '1px', backgroundColor: '#1e293b', flexShrink: 0 }} />
);

export default CVTemplate;
