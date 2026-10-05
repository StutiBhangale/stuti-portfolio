import React, { useState } from 'react';
import { Award, BadgeCheck, ArrowUpRight, X } from "lucide-react";
import "./Achievements.css";
import individual from "../../assets/Individual.jpg";
import dmep from "../../assets/DMEP.jpg";

const Achievements = () => {
    
    const [showCertificate, setShowCertificate] = useState(null);

    const openCertificate = (certificate) => {
        setShowCertificate(certificate);
    };

    const closeCertificate = () => {
        setShowCertificate(null);
    };

    return (
        <section id="achievement" className="achievements-section">
            <h1>Achievements & Certifications</h1>

            <div className="achievements-container">
                <div className="achievement-card">
                    <div className="achievement-icon">
                        <Award size={22} />
                    </div>

                    <div className="achievement-content">
                        <h2>Individual Award for Dedication and Commitment</h2>

                        <p className="achievement-org">
                            Opus Technologies
                        </p>

                        <p>
                            Received in recognition of dedication and commitment
                            to project responsibilities.
                        </p>

                        <button
                            className="view-certificate"
                            onClick={() => openCertificate(individual)}
                        >
                            View Certificate
                            <ArrowUpRight size={14} />
                        </button>
                    </div>
                </div>

                <div className="achievement-card">
                    <div className="achievement-icon">
                        <BadgeCheck size={22} />
                    </div>

                    <div className="achievement-content">
                        <h2>Delivery Excellence Certificate</h2>

                        <p className="achievement-org">
                            Delivery Excellence Program
                        </p>

                        <p>
                            Successfully completed the Delivery Excellence Program
                            and contributed to program content and design.
                        </p>

                        <button
                            className="view-certificate"
                            onClick={() => openCertificate(dmep)}
                        >
                            View Certificate
                            <ArrowUpRight size={14} />
                        </button>
                    </div>
                </div>
            </div>

            {showCertificate && (
                <div
                    className="certificate-modal-overlay"
                    onClick={closeCertificate}
                >
                    <div
                        className="certificate-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="certificate-close"
                            onClick={closeCertificate}
                            aria-label="Close certificate"
                        >
                            <X size={20} />
                        </button>

                        <img
                            src={showCertificate}
                            alt="Certificate"
                            className="certificate-image"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Achievements;