// Mobile menu functions
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');

    mobileNav.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');

    mobileNav.classList.remove('active');
    menuBtn.classList.remove('active');
}

// Service details data
const serviceDetails = {
    landschaftsgestaltung: {
        title: "Landschaftsgestaltung",
        description: "Wir verwandeln Ihren Außenbereich in eine grüne Oase. Von der ersten Idee bis zur finalen Umsetzung begleiten wir Sie bei der kompletten Neugestaltung oder Überarbeitung Ihres Gartens. Unser erfahrenes Team berücksichtigt dabei sowohl Ihre Wünsche als auch die natürlichen Gegebenheiten vor Ort.",
        details: [
            {
                title: "Gartenplanung & Design",
                description: "Professionelle Planung und 3D-Visualisierung Ihres Traumgartens"
            },
            {
                title: "Terrassen- & Wegebau",
                description: "Gestaltung von Terrassen, Gehwegen und Auffahrten mit hochwertigen Materialien"
            },
            {
                title: "Zäune & Sichtschutz",
                description: "Individuelle Lösungen für Privatsphäre und Abgrenzung"
            },
            {
                title: "Wasserspiele & Teiche",
                description: "Planung und Bau von Gartenteichen, Brunnen und Wasserelementen"
            },
            {
                title: "Beleuchtungskonzepte",
                description: "Stimmungsvolle Gartenbeleuchtung für Tag und Nacht"
            },
            {
                title: "Rasenflächen",
                description: "Neuanlage und Sanierung von Rasenflächen aller Art"
            }
        ]
    },
    gartenpflege: {
        title: "Gartenpflege",
        description: "Regelmäßige, professionelle Gartenpflege sorgt dafür, dass Ihr Garten das ganze Jahr über gepflegt und gesund aussieht. Unser Service umfasst alle Aspekte der Gartenpflege - von der wöchentlichen Grundpflege bis zur saisonalen Intensivpflege.",
        details: [
            {
                title: "Rasenpflege",
                description: "Mähen, Düngen, Vertikutieren und Nachsaat für einen perfekten Rasen"
            },
            {
                title: "Heckenschnitt",
                description: "Fachgerechter Schnitt von Hecken und Sträuchern aller Art"
            },
            {
                title: "Unkrautbekämpfung",
                description: "Umweltschonende Entfernung von Unkraut in Beeten und auf Wegen"
            },
            {
                title: "Bewässerung",
                description: "Professionelle Bewässerungssysteme und regelmäßige Wassergaben"
            },
            {
                title: "Düngung & Pflanzenschutz",
                description: "Bedarfsgerechte Düngung und Schutz vor Schädlingen"
            },
            {
                title: "Laubentsorgung",
                description: "Herbstliche Laubentfernung und fachgerechte Entsorgung"
            }
        ]
    },
    pflanzenservice: {
        title: "Pflanzenservice",
        description: "Wir bieten Ihnen eine große Auswahl an hochwertigen Pflanzen und übernehmen die fachgerechte Pflanzung und Pflege. Von der Beratung über die richtige Pflanzenauswahl bis zur langfristigen Betreuung sind wir Ihr kompetenter Partner.",
        details: [
            {
                title: "Pflanzenberatung",
                description: "Individuelle Beratung für die richtige Pflanzenauswahl je nach Standort"
            },
            {
                title: "Stauden & Blumen",
                description: "Mehrjährige Stauden und saisonale Blumenpflanzungen"
            },
            {
                title: "Gehölze & Sträucher",
                description: "Auswahl und Pflanzung von Ziersträuchern und Nutzgehölzen"
            },
            {
                title: "Bodenvorbereitung",
                description: "Professionelle Bodenanalyse und Vorbereitung für optimales Wachstum"
            },
            {
                title: "Pflanzpflege",
                description: "Langfristige Betreuung und Pflege neu gesetzter Pflanzen"
            },
            {
                title: "Pflanzentausch",
                description: "Austausch von kranken oder nicht gedeihenden Pflanzen"
            }
        ]
    },
    baumfaellung: {
        title: "Baumfällung",
        description: "Professionelle und sichere Baumfällung durch unser erfahrenes Team. Wir verfügen über das notwendige Equipment und die Expertise, um Bäume jeder Größe sicher zu entfernen - auch in schwierigen Situationen und beengten Verhältnissen.",
        details: [
            {
                title: "Begutachtung & Beratung",
                description: "Professionelle Einschätzung des Baumzustands und Fällnotwendigkeit"
            },
            {
                title: "Seilklettertechnik",
                description: "Schonende Fällung mittels Seilklettertechnik in beengten Verhältnissen"
            },
            {
                title: "Schwerfällung",
                description: "Komplettfällung großer Bäume mit schwerem Gerät"
            },
            {
                title: "Genehmigungsservice",
                description: "Unterstützung bei der Beantragung notwendiger Fällgenehmigungen"
            },
            {
                title: "Holzverwertung",
                description: "Fachgerechte Aufarbeitung und Verwertung des Holzes"
            },
            {
                title: "Sicherheitsmaßnahmen",
                description: "Umfassende Absicherung der Baustelle und angrenzender Bereiche"
            }
        ]
    },
    baumstumpf: {
        title: "Baumstumpfentfernung",
        description: "Nach einer Baumfällung bleiben oft störende Baumstümpfe zurück. Mit modernen Stubben-Fräsen entfernen wir diese effizient und schaffen Platz für neue Bepflanzungen oder andere Nutzungen der Fläche.",
        details: [
            {
                title: "Stubbenfräsen",
                description: "Maschinelle Entfernung von Baumstümpfen bis unter die Erdoberfläche"
            },
            {
                title: "Handentfernung",
                description: "Manuelle Entfernung kleinerer Stümpfe und Wurzelreste"
            },
            {
                title: "Flächenvorbereitung",
                description: "Vorbereitung der Fläche für neue Bepflanzung oder Rasen"
            },
            {
                title: "Materialabtransport",
                description: "Fachgerechte Entsorgung von Holzresten und Erdaushub"
            },
            {
                title: "Bodenauffüllung",
                description: "Auffüllung der entstandenen Löcher mit geeignetem Erdmaterial"
            },
            {
                title: "Nachbearbeitung",
                description: "Einebnung und Vorbereitung für die weitere Nutzung"
            }
        ]
    },
    baumpflege: {
        title: "Baumpflege und -beratung",
        description: "Gesunde Bäume sind ein wertvoller Bestandteil jedes Gartens. Unsere zertifizierten Baumpfleger sorgen für die optimale Gesundheit und Sicherheit Ihrer Bäume durch fachgerechte Pflege und kompetente Beratung.",
        details: [
            {
                title: "Baumschnitt",
                description: "Fachgerechter Erziehungs-, Erhaltungs- und Pflegeschnitt"
            },
            {
                title: "Kronenpflege",
                description: "Auslichtung und Formung der Baumkrone für optimales Wachstum"
            },
            {
                title: "Baumsanierung",
                description: "Sanierung geschädigter Bäume und Wundbehandlung"
            },
            {
                title: "Baumdiagnose",
                description: "Professionelle Begutachtung des Baumzustands und Gesundheitschecks"
            },
            {
                title: "Wurzelbehandlung",
                description: "Pflege und Schutz des Wurzelsystems"
            },
            {
                title: "Präventive Maßnahmen",
                description: "Vorsorge gegen Krankheiten und Schädlingsbefall"
            }
        ]
    },
    notfallbaumfaellung: {
        title: "Notfallbaumfällung",
        description: "Bei Sturmschäden oder akuter Gefährdung durch instabile Bäume sind wir rund um die Uhr für Sie da. Unser Notfallservice reagiert schnell und professionell, um Gefahren zu beseitigen und Schäden zu minimieren.",
        details: [
            {
                title: "24/7 Bereitschaft",
                description: "Rund-um-die-Uhr Notfalldienst an 365 Tagen im Jahr"
            },
            {
                title: "Gefahrenbeurteilung",
                description: "Sofortige Einschätzung der Gefährdungslage vor Ort"
            },
            {
                title: "Sofortmaßnahmen",
                description: "Schnelle Sicherung und Absperrung gefährlicher Bereiche"
            },
            {
                title: "Sturmschadenbeseitigung",
                description: "Beseitigung von Sturmschäden an Bäumen und Sträuchern"
            },
            {
                title: "Verkehrssicherung",
                description: "Wiederherstellung der Verkehrssicherheit auf Straßen und Wegen"
            },
            {
                title: "Versicherungsabwicklung",
                description: "Unterstützung bei der Dokumentation für Versicherungen"
            }
        ]
    },
    reinigung: {
        title: "Reinigungsdienstleistungen",
        description: "Professionelle Reinigungsdienstleistungen für Privat- und Geschäftskunden. Wir sorgen für Sauberkeit und Hygiene mit umweltfreundlichen Produkten und modernen Reinigungstechniken in Ihrem Zuhause oder Büro.",
        details: [
            {
                title: "Hausreinigung",
                description: "Regelmäßige oder einmalige Reinigung von Wohnräumen"
            },
            {
                title: "Büroreinigung",
                description: "Professionelle Reinigung von Büros und Geschäftsräumen"
            },
            {
                title: "Fensterreinigung",
                description: "Streifenfreie Reinigung von Fenstern und Glasflächen"
            },
            {
                title: "Grundreinigung",
                description: "Intensive Tiefenreinigung bei Umzug oder nach Renovierung"
            },
            {
                title: "Teppichreinigung",
                description: "Professionelle Reinigung und Pflege von Teppichen"
            },
            {
                title: "Außenreinigung",
                description: "Reinigung von Terrassen, Fassaden und Gehwegen"
            }
        ]
    },
    renovierung: {
        title: "Renovierungs- und Sanierungsarbeiten",
        description: "Von kleineren Reparaturen bis hin zu größeren Renovierungsprojekten - wir sind Ihr zuverlässiger Partner für alle Bau- und Sanierungsarbeiten rund um Ihr Zuhause. Unser Team arbeitet sauber, termingerecht und zu fairen Preisen.",
        details: [
            {
                title: "Innenrenovierung",
                description: "Komplettrenovierung von Wohnräumen, Bädern und Küchen"
            },
            {
                title: "Außensanierung",
                description: "Fassadensanierung, Dacharbeiten und Außenbereich"
            },
            {
                title: "Elektro- & Sanitärarbeiten",
                description: "Installation und Reparatur von Elektro- und Sanitäranlagen"
            },
            {
                title: "Malerarbeiten",
                description: "Professionelle Maler- und Lackierarbeiten innen und außen"
            },
            {
                title: "Bodenverlegung",
                description: "Verlegung von Parkett, Laminat, Fliesen und anderen Bodenbelägen"
            },
            {
                title: "Trockenbau",
                description: "Errichtung von Trennwänden und Deckenverkleidungen"
            }
        ]
    },
    abbruch: {
        title: "Stemmarbeiten und Abbruchdienstleistungen",
        description: "Professionelle Abbruch- und Stemmarbeiten für Renovierungen und Neubauten. Wir arbeiten präzise und sicher mit modernem Equipment, um Ihre Projekte termingerecht und kostengünstig abzuschließen.",
        details: [
            {
                title: "Wanddurchbrüche",
                description: "Präzise Durchbrüche für Türen, Fenster und Durchgänge"
            },
            {
                title: "Teilabbruch",
                description: "Selektiver Abbruch von Bauteilen und Innenausbau"
            },
            {
                title: "Fliesenentfernung",
                description: "Fachgerechte Entfernung von Fliesen und alten Belägen"
            },
            {
                title: "Betonarbeiten",
                description: "Stemmen und Schlitzen in Beton und Mauerwerk"
            },
            {
                title: "Entrümpelung",
                description: "Komplette Entrümpelung und fachgerechte Entsorgung"
            },
            {
                title: "Bauschutt-Entsorgung",
                description: "Umweltgerechte Entsorgung von Bauschutt und Abbruchmaterial"
            }
        ]
    }
};

// DOM elements
const modal = document.getElementById('serviceModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalDetails = document.getElementById('modalDetails');
const closeBtn = document.querySelector('.close');

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceType = this.getAttribute('data-service');
            openModal(serviceType);
        });
    });

    // Close modal when clicking the X button
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // Enhanced form submission with Formspree
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const submitBtn = this.querySelector('.form-submit-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            const formStatus = document.getElementById('formStatus');

            // Show loading state
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline';
            submitBtn.disabled = true;
            formStatus.style.display = 'none';

            try {
                const formData = new FormData(this);
                const response = await fetch(this.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Success
                    formStatus.className = 'form-status success';
                    formStatus.textContent = 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen.';
                    formStatus.style.display = 'block';
                    this.reset();
                } else {
                    throw new Error('Formspree error');
                }
            } catch (error) {
                // Error
                formStatus.className = 'form-status error';
                formStatus.textContent = 'Entschuldigung, beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.';
                formStatus.style.display = 'block';
            } finally {
                // Reset button state
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
                submitBtn.disabled = false;
            }
        });
    }
});

// Function to open modal with service details
function openModal(serviceType) {
    const service = serviceDetails[serviceType];
    if (!service) return;

    // Set modal content
    modalTitle.textContent = service.title;
    modalDescription.textContent = service.description;

    // Clear previous details
    modalDetails.innerHTML = '';

    // Add detail cards
    service.details.forEach(detail => {
        const detailCard = document.createElement('div');
        detailCard.className = 'detail-card';
        detailCard.innerHTML = `
            <h4>${detail.title}</h4>
            <p>${detail.description}</p>
        `;
        modalDetails.appendChild(detailCard);
    });

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent body scroll
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore body scroll
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});