// VerdeAgua Sub-Pages Multi-Language Support
// Languages: es (default), en, de, fr, it

const pageTranslations = {
    // ── Shared across subpages ──
    "back": { es: "Volver al inicio", en: "Back to home", de: "Zurück zur Startseite", fr: "Retour à l'accueil", it: "Torna alla home" },
    "footer.rights": { es: "© 2026 VerdeAgua Luxury Property Services. Todos los derechos reservados.", en: "© 2026 VerdeAgua Luxury Property Services. All rights reserved.", de: "© 2026 VerdeAgua Luxury Property Services. Alle Rechte vorbehalten.", fr: "© 2026 VerdeAgua Luxury Property Services. Tous droits réservés.", it: "© 2026 VerdeAgua Luxury Property Services. Tutti i diritti riservati." },
    "footer.legal": { es: "Aviso Legal", en: "Legal Notice", de: "Impressum", fr: "Mentions Légales", it: "Avviso Legale" },
    "footer.privacy": { es: "Privacidad", en: "Privacy", de: "Datenschutz", fr: "Confidentialité", it: "Privacy" },
    "footer.madeby": { es: "Página web realizada por:", en: "Website made by:", de: "Website erstellt von:", fr: "Site web réalisé par :", it: "Sito web realizzato da:" },
    "cookie.title": { es: "Utilizamos cookies 🍪", en: "We use cookies 🍪", de: "Wir verwenden Cookies 🍪", fr: "Nous utilisons des cookies 🍪", it: "Utilizziamo i cookie 🍪" },
    "cookie.desc": { es: "Usamos cookies para mejorar tu experiencia.", en: "We use cookies to improve your experience.", de: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern.", fr: "Nous utilisons des cookies pour améliorer votre expérience.", it: "Usiamo i cookie per migliorare la tua esperienza." },
    "cookie.more": { es: "Más información", en: "More info", de: "Mehr Infos", fr: "Plus d'infos", it: "Maggiori informazioni" },
    "cookie.reject": { es: "Rechazar", en: "Reject", de: "Ablehnen", fr: "Refuser", it: "Rifiuta" },
    "cookie.accept": { es: "Aceptar todo", en: "Accept all", de: "Alle akzeptieren", fr: "Tout accepter", it: "Accetta tutto" },
    "footer.terms": { es: "Términos", en: "Terms", de: "AGB", fr: "Conditions", it: "Termini" },

    // ── Presupuesto page ──
    "pres.nav.inicio": { es: "Inicio", en: "Home", de: "Startseite", fr: "Accueil", it: "Home" },
    "pres.nav.servicios": { es: "Servicios", en: "Services", de: "Dienste", fr: "Services", it: "Servizi" },
    "pres.nav.proyectos": { es: "Proyectos", en: "Projects", de: "Projekte", fr: "Projets", it: "Progetti" },
    "pres.title": { es: "Solicita tu Presupuesto Gratuito", en: "Request Your Free Quote", de: "Kostenloses Angebot Anfordern", fr: "Demandez Votre Devis Gratuit", it: "Richiedi il Tuo Preventivo Gratuito" },
    "pres.subtitle": { es: "Descubre la excelencia en el cuidado de propiedades en Mallorca. Completa los detalles a continuación y recibe una propuesta personalizada.", en: "Discover excellence in Mallorca property care. Complete the details below and receive a personalized proposal.", de: "Entdecken Sie Exzellenz in der Immobilienpflege auf Mallorca. Füllen Sie die Details aus und erhalten Sie ein individuelles Angebot.", fr: "Découvrez l'excellence dans l'entretien de propriétés à Majorque. Complétez les détails ci-dessous pour recevoir une proposition personnalisée.", it: "Scopri l'eccellenza nella cura delle proprietà a Maiorca. Compila i dettagli qui sotto e ricevi una proposta personalizzata." },
    "pres.step.1": { es: "Servicio", en: "Service", de: "Dienst", fr: "Service", it: "Servizio" },
    "pres.step.2": { es: "Detalles", en: "Details", de: "Details", fr: "Détails", it: "Dettagli" },
    "pres.step.3": { es: "Ubicación", en: "Location", de: "Standort", fr: "Emplacement", it: "Posizione" },
    "pres.step.4": { es: "Contacto", en: "Contact", de: "Kontakt", fr: "Contact", it: "Contatto" },
    "pres.s1.title": { es: "¿Qué servicio necesitas hoy?", en: "What service do you need today?", de: "Welchen Service benötigen Sie heute?", fr: "De quel service avez-vous besoin aujourd'hui ?", it: "Di quale servizio hai bisogno oggi?" },
    "pres.svc.jardineria": { es: "Jardinería", en: "Gardening", de: "Gartenpflege", fr: "Jardinage", it: "Giardinaggio" },
    "pres.svc.jardineria.desc": { es: "Jardinería y mantenimiento experto", en: "Expert gardening and maintenance", de: "Professionelle Gartenpflege und Wartung", fr: "Jardinage et entretien expert", it: "Giardinaggio e manutenzione esperta" },
    "pres.svc.piscinas": { es: "Piscinas", en: "Pools", de: "Pools", fr: "Piscines", it: "Piscine" },
    "pres.svc.piscinas.desc": { es: "Limpieza, cloro y sistemas técnicos", en: "Cleaning, chlorine and technical systems", de: "Reinigung, Chlor und technische Systeme", fr: "Nettoyage, chlore et systèmes techniques", it: "Pulizia, cloro e sistemi tecnici" },
    "pres.svc.reformas": { es: "Reformas", en: "Renovations", de: "Renovierungen", fr: "Rénovations", it: "Ristrutturazioni" },
    "pres.svc.reformas.desc": { es: "Renovaciones y mejoras de exterior", en: "Exterior renovations and improvements", de: "Außenrenovierungen und Verbesserungen", fr: "Rénovations et améliorations extérieures", it: "Ristrutturazioni e migliorie esterne" },
    "pres.svc.mantenimiento": { es: "Mantenimiento", en: "Maintenance", de: "Wartung", fr: "Maintenance", it: "Manutenzione" },
    "pres.svc.mantenimiento.desc": { es: "Cuidado integral 365 días al año", en: "Comprehensive care 365 days a year", de: "Ganzjährige Rundum-Pflege", fr: "Entretien intégral 365 jours par an", it: "Cura integrale 365 giorni all'anno" },
    "pres.s2.title": { es: "Detalles de la Propiedad", en: "Property Details", de: "Immobiliendetails", fr: "Détails de la Propriété", it: "Dettagli della Proprietà" },
    "pres.freq.label": { es: "Frecuencia deseada", en: "Desired frequency", de: "Gewünschte Häufigkeit", fr: "Fréquence souhaitée", it: "Frequenza desiderata" },
    "pres.freq.once": { es: "Puntual (Una sola vez)", en: "One-time", de: "Einmalig", fr: "Ponctuel (Une seule fois)", it: "Una tantum" },
    "pres.freq.weekly": { es: "Semanal (Recomendado)", en: "Weekly (Recommended)", de: "Wöchentlich (Empfohlen)", fr: "Hebdomadaire (Recommandé)", it: "Settimanale (Consigliato)" },
    "pres.freq.biweekly": { es: "Quincenal", en: "Biweekly", de: "Zweiwöchentlich", fr: "Bimensuel", it: "Quindicinale" },
    "pres.freq.monthly": { es: "Mensual", en: "Monthly", de: "Monatlich", fr: "Mensuel", it: "Mensile" },
    "pres.size.label": { es: "Tamaño aproximado", en: "Approximate size", de: "Ungefähre Größe", fr: "Taille approximative", it: "Dimensione approssimativa" },
    "pres.photos.label": { es: "Fotos de la propiedad (Opcional)", en: "Property photos (Optional)", de: "Fotos der Immobilie (Optional)", fr: "Photos de la propriété (Optionnel)", it: "Foto della proprietà (Opzionale)" },
    "pres.photos.upload": { es: "Sube tus fotos aquí", en: "Upload your photos here", de: "Laden Sie hier Ihre Fotos hoch", fr: "Téléchargez vos photos ici", it: "Carica le tue foto qui" },
    "pres.photos.hint": { es: "JPG, PNG hasta 10MB cada una", en: "JPG, PNG up to 10MB each", de: "JPG, PNG bis zu 10MB pro Datei", fr: "JPG, PNG jusqu'à 10 Mo chacun", it: "JPG, PNG fino a 10MB ciascuno" },
    "pres.s3.title": { es: "Ubicación de la Propiedad", en: "Property Location", de: "Standort der Immobilie", fr: "Emplacement de la Propriété", it: "Posizione della Proprietà" },
    "pres.zone.label": { es: "Municipio / Zona", en: "Municipality / Area", de: "Gemeinde / Gebiet", fr: "Commune / Zone", it: "Comune / Zona" },
    "pres.zone.placeholder": { es: "Selecciona una zona...", en: "Select an area...", de: "Wählen Sie ein Gebiet...", fr: "Sélectionnez une zone...", it: "Seleziona una zona..." },
    "pres.zone.other": { es: "Otra zona", en: "Other area", de: "Anderes Gebiet", fr: "Autre zone", it: "Altra zona" },
    "pres.type.label": { es: "Tipo de propiedad", en: "Property type", de: "Immobilientyp", fr: "Type de propriété", it: "Tipo di proprietà" },
    "pres.type.placeholder": { es: "Selecciona tipo...", en: "Select type...", de: "Typ wählen...", fr: "Sélectionnez le type...", it: "Seleziona tipo..." },
    "pres.type.villa": { es: "Villa / Chalet", en: "Villa / Chalet", de: "Villa / Chalet", fr: "Villa / Chalet", it: "Villa / Chalet" },
    "pres.type.finca": { es: "Finca rústica", en: "Country estate", de: "Landgut", fr: "Propriété rurale", it: "Tenuta rustica" },
    "pres.type.apt": { es: "Apartamento con jardín", en: "Apartment with garden", de: "Wohnung mit Garten", fr: "Appartement avec jardin", it: "Appartamento con giardino" },
    "pres.type.hotel": { es: "Hotel / Agroturismo", en: "Hotel / Agritourism", de: "Hotel / Agrotourismus", fr: "Hôtel / Agrotourisme", it: "Hotel / Agriturismo" },
    "pres.type.community": { es: "Comunidad de vecinos", en: "Residential community", de: "Wohnanlage", fr: "Copropriété", it: "Condominio" },
    "pres.type.commercial": { es: "Local comercial", en: "Commercial property", de: "Gewerbeimmobilie", fr: "Local commercial", it: "Locale commerciale" },
    "pres.address.label": { es: "Dirección o referencia (Opcional)", en: "Address or reference (Optional)", de: "Adresse oder Referenz (Optional)", fr: "Adresse ou référence (Optionnel)", it: "Indirizzo o riferimento (Opzionale)" },
    "pres.address.placeholder": { es: "Ej: Calle Son Vida, cerca del campo de golf...", en: "E.g.: Son Vida street, near the golf course...", de: "Z.B.: Son Vida Straße, in der Nähe des Golfplatzes...", fr: "Ex : Rue Son Vida, près du terrain de golf...", it: "Es: Via Son Vida, vicino al campo da golf..." },
    "pres.notes.label": { es: "Notas adicionales (Opcional)", en: "Additional notes (Optional)", de: "Zusätzliche Anmerkungen (Optional)", fr: "Notes supplémentaires (Optionnel)", it: "Note aggiuntive (Opzionale)" },
    "pres.notes.placeholder": { es: "Describe cualquier detalle relevante sobre la propiedad o el acceso...", en: "Describe any relevant details about the property or access...", de: "Beschreiben Sie relevante Details zur Immobilie oder zum Zugang...", fr: "Décrivez tout détail pertinent sur la propriété ou l'accès...", it: "Descrivi qualsiasi dettaglio rilevante sulla proprietà o l'accesso..." },
    "pres.s4.title": { es: "Tus Datos de Contacto", en: "Your Contact Details", de: "Ihre Kontaktdaten", fr: "Vos Coordonnées", it: "I Tuoi Dati di Contatto" },
    "pres.name.label": { es: "Nombre completo *", en: "Full name *", de: "Vollständiger Name *", fr: "Nom complet *", it: "Nome completo *" },
    "pres.name.placeholder": { es: "Tu nombre y apellidos", en: "Your full name", de: "Ihr vollständiger Name", fr: "Votre nom complet", it: "Il tuo nome completo" },
    "pres.phone.label": { es: "Teléfono *", en: "Phone *", de: "Telefon *", fr: "Téléphone *", it: "Telefono *" },
    "pres.email.label": { es: "Email *", en: "Email *", de: "E-Mail *", fr: "E-mail *", it: "Email *" },
    "pres.when.label": { es: "¿Cuándo te viene mejor?", en: "When is best for you?", de: "Wann passt es Ihnen am besten?", fr: "Quel moment vous convient le mieux ?", it: "Quando ti va meglio?" },
    "pres.when.asap": { es: "Lo antes posible", en: "As soon as possible", de: "So schnell wie möglich", fr: "Dès que possible", it: "Il prima possibile" },
    "pres.when.thisweek": { es: "Esta semana", en: "This week", de: "Diese Woche", fr: "Cette semaine", it: "Questa settimana" },
    "pres.when.nextweek": { es: "La próxima semana", en: "Next week", de: "Nächste Woche", fr: "La semaine prochaine", it: "La prossima settimana" },
    "pres.when.norush": { es: "Sin prisa, quiero información", en: "No rush, I want information", de: "Keine Eile, ich möchte Informationen", fr: "Pas pressé, je veux des informations", it: "Senza fretta, voglio informazioni" },
    "pres.privacy": { es: "Tus datos están protegidos y solo se usarán para preparar tu presupuesto personalizado. No compartimos tu información con terceros.", en: "Your data is protected and will only be used to prepare your personalized quote. We do not share your information with third parties.", de: "Ihre Daten sind geschützt und werden nur zur Erstellung Ihres individuellen Angebots verwendet. Wir teilen Ihre Informationen nicht mit Dritten.", fr: "Vos données sont protégées et ne seront utilisées que pour préparer votre devis personnalisé. Nous ne partageons pas vos informations avec des tiers.", it: "I tuoi dati sono protetti e saranno utilizzati solo per preparare il tuo preventivo personalizzato. Non condividiamo le tue informazioni con terzi." },
    "pres.prev": { es: "Anterior", en: "Previous", de: "Zurück", fr: "Précédent", it: "Precedente" },
    "pres.next": { es: "Siguiente paso", en: "Next step", de: "Nächster Schritt", fr: "Étape suivante", it: "Passo successivo" },
    "pres.submit": { es: "Enviar solicitud", en: "Submit request", de: "Anfrage senden", fr: "Envoyer la demande", it: "Invia richiesta" },
    "pres.sidebar.title": { es: "Tu Solicitud", en: "Your Request", de: "Ihre Anfrage", fr: "Votre Demande", it: "La Tua Richiesta" },
    "pres.sidebar.subtitle": { es: "Resumen del presupuesto", en: "Quote summary", de: "Angebotsübersicht", fr: "Résumé du devis", it: "Riepilogo preventivo" },
    "pres.sidebar.services": { es: "Servicios seleccionados", en: "Selected services", de: "Ausgewählte Dienste", fr: "Services sélectionnés", it: "Servizi selezionati" },
    "pres.sidebar.freq": { es: "Frecuencia", en: "Frequency", de: "Häufigkeit", fr: "Fréquence", it: "Frequenza" },
    "pres.sidebar.response": { es: "Respuesta en menos de 24h", en: "Response within 24h", de: "Antwort innerhalb von 24 Std.", fr: "Réponse sous 24h", it: "Risposta entro 24h" },
    "pres.sidebar.nocommit": { es: "Presupuesto sin compromiso", en: "No obligation quote", de: "Angebot ohne Verpflichtung", fr: "Devis sans engagement", it: "Preventivo senza impegno" },
    "pres.sidebar.quality": { es: "Calidad Garantizada", en: "Quality Guaranteed", de: "Qualität garantiert", fr: "Qualité Garantie", it: "Qualità Garantita" },
    "pres.sidebar.advisor": { es: "Asesor Personal", en: "Personal Advisor", de: "Persönlicher Berater", fr: "Conseiller Personnel", it: "Consulente Personale" },
    "pres.help.title": { es: "¿Necesitas ayuda inmediata?", en: "Need immediate help?", de: "Brauchen Sie sofortige Hilfe?", fr: "Besoin d'aide immédiate ?", it: "Hai bisogno di aiuto immediato?" },
    "pres.help.desc": { es: "Nuestro equipo en Palma está disponible para resolver tus dudas.", en: "Our team in Palma is available to answer your questions.", de: "Unser Team in Palma beantwortet gerne Ihre Fragen.", fr: "Notre équipe à Palma est disponible pour répondre à vos questions.", it: "Il nostro team a Palma è disponibile per risolvere i tuoi dubbi." },
    "pres.map.label": { es: "Base de Operaciones", en: "Operations Base", de: "Operationsbasis", fr: "Base d'Opérations", it: "Base Operativa" },

    // ── Aviso Legal page ──
    "legal.title": { es: "Aviso Legal", en: "Legal Notice", de: "Impressum", fr: "Mentions Légales", it: "Avviso Legale" },
    "legal.updated": { es: "Última actualización: Febrero 2026", en: "Last updated: February 2026", de: "Letzte Aktualisierung: Februar 2026", fr: "Dernière mise à jour : Février 2026", it: "Ultimo aggiornamento: Febbraio 2026" },
    "legal.s1": { es: "1. Datos identificativos", en: "1. Identification data", de: "1. Identifikationsdaten", fr: "1. Données d'identification", it: "1. Dati identificativi" },
    "legal.s1.name": { es: "Denominación social:", en: "Company name:", de: "Firmenname:", fr: "Dénomination sociale :", it: "Denominazione sociale:" },
    "legal.s1.address": { es: "Domicilio:", en: "Address:", de: "Adresse:", fr: "Adresse :", it: "Indirizzo:" },
    "legal.s1.addressVal": { es: "Mallorca, Islas Baleares, España", en: "Mallorca, Balearic Islands, Spain", de: "Mallorca, Balearen, Spanien", fr: "Majorque, Îles Baléares, Espagne", it: "Maiorca, Isole Baleari, Spagna" },
    "legal.s1.phone": { es: "Teléfono:", en: "Phone:", de: "Telefon:", fr: "Téléphone :", it: "Telefono:" },
    "legal.s1.web": { es: "Sitio web:", en: "Website:", de: "Webseite:", fr: "Site web :", it: "Sito web:" },
    "legal.s2": { es: "2. Objeto", en: "2. Purpose", de: "2. Zweck", fr: "2. Objet", it: "2. Oggetto" },
    "legal.s2.p1": { es: "El presente aviso legal regula el uso del sitio web <strong>verdeagua.net</strong> (en adelante, el \"Sitio Web\"), del que es titular VerdeAgua Property Services (en adelante, \"VerdeAgua\").", en: "This legal notice governs the use of the website <strong>verdeagua.net</strong> (hereinafter, the \"Website\"), owned by VerdeAgua Property Services (hereinafter, \"VerdeAgua\").", de: "Dieses Impressum regelt die Nutzung der Website <strong>verdeagua.net</strong> (nachfolgend die \"Website\"), deren Eigentümer VerdeAgua Property Services (nachfolgend \"VerdeAgua\") ist.", fr: "Le présent avis juridique régit l'utilisation du site web <strong>verdeagua.net</strong> (ci-après, le \"Site Web\"), dont le propriétaire est VerdeAgua Property Services (ci-après, \"VerdeAgua\").", it: "Il presente avviso legale regola l'uso del sito web <strong>verdeagua.net</strong> (di seguito, il \"Sito Web\"), di proprietà di VerdeAgua Property Services (di seguito, \"VerdeAgua\")." },
    "legal.s2.p2": { es: "La navegación por el Sitio Web atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.", en: "Browsing the Website confers user status and implies full and unreserved acceptance of all provisions included in this Legal Notice.", de: "Das Surfen auf der Website verleiht den Benutzerstatus und bedeutet die vollständige und vorbehaltlose Annahme aller in diesem Impressum enthaltenen Bestimmungen.", fr: "La navigation sur le Site Web confère le statut d'utilisateur et implique l'acceptation pleine et entière de toutes les dispositions incluses dans le présent Avis Juridique.", it: "La navigazione sul Sito Web conferisce la condizione di utente e implica l'accettazione piena e senza riserve di tutte le disposizioni incluse nel presente Avviso Legale." },
    "legal.s3": { es: "3. Condiciones de uso", en: "3. Terms of use", de: "3. Nutzungsbedingungen", fr: "3. Conditions d'utilisation", it: "3. Condizioni d'uso" },
    "legal.s3.p1": { es: "El usuario se compromete a utilizar el Sitio Web de conformidad con la ley, el presente Aviso Legal, las buenas costumbres y el orden público. El usuario se obliga a abstenerse de utilizar el Sitio Web con fines ilícitos o contrarios a lo establecido en el presente Aviso Legal, lesivos de los derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar o deteriorar el Sitio Web o impedir un normal disfrute del mismo.", en: "The user agrees to use the Website in accordance with the law, this Legal Notice, good customs and public order. The user undertakes not to use the Website for unlawful purposes or contrary to the provisions of this Legal Notice, harmful to the rights and interests of third parties, or that could in any way damage, disable or impair the Website or prevent its normal use.", de: "Der Nutzer verpflichtet sich, die Website in Übereinstimmung mit dem Gesetz, diesem Impressum, den guten Sitten und der öffentlichen Ordnung zu nutzen. Der Nutzer verpflichtet sich, die Website nicht für rechtswidrige Zwecke zu nutzen, die den Bestimmungen dieses Impressums zuwiderlaufen.", fr: "L'utilisateur s'engage à utiliser le Site Web conformément à la loi, au présent Avis Juridique, aux bonnes mœurs et à l'ordre public.", it: "L'utente si impegna a utilizzare il Sito Web in conformità con la legge, il presente Avviso Legale, i buoni costumi e l'ordine pubblico." },
    "legal.s4": { es: "4. Propiedad intelectual e industrial", en: "4. Intellectual and industrial property", de: "4. Geistiges und gewerbliches Eigentum", fr: "4. Propriété intellectuelle et industrielle", it: "4. Proprietà intellettuale e industriale" },
    "legal.s4.p1": { es: "Todos los contenidos del Sitio Web, incluyendo sin limitación, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de VerdeAgua o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso del Sitio Web.", en: "All content on the Website, including but not limited to texts, photographs, graphics, images, icons, technology, software, links and other audiovisual or sound content, as well as its graphic design and source codes, are the intellectual property of VerdeAgua or third parties.", de: "Alle Inhalte der Website, einschließlich, aber nicht beschränkt auf Texte, Fotos, Grafiken, Bilder, Icons, Technologie, Software, Links und andere audiovisuelle Inhalte, sowie das grafische Design und der Quellcode, sind geistiges Eigentum von VerdeAgua oder Dritten.", fr: "Tous les contenus du Site Web, y compris mais sans s'y limiter, les textes, photographies, graphiques, images, icônes, technologies, logiciels, liens et autres contenus audiovisuels ou sonores, ainsi que leur conception graphique et codes sources, sont la propriété intellectuelle de VerdeAgua ou de tiers.", it: "Tutti i contenuti del Sito Web, inclusi senza limitazione testi, fotografie, grafici, immagini, icone, tecnologia, software, link e altri contenuti audiovisivi o sonori, nonché il design grafico e i codici sorgente, sono proprietà intellettuale di VerdeAgua o di terzi." },
    "legal.s4.p2": { es: "La reproducción, distribución, comunicación pública, transformación o cualquier otra actividad similar o análoga sobre los contenidos del Sitio Web queda totalmente prohibida salvo que medie expresa autorización de VerdeAgua.", en: "The reproduction, distribution, public communication, transformation or any other similar activity regarding the content of the Website is totally prohibited without the express authorization of VerdeAgua.", de: "Die Vervielfältigung, Verbreitung, öffentliche Mitteilung, Umgestaltung oder jede andere ähnliche Tätigkeit in Bezug auf die Inhalte der Website ist ohne die ausdrückliche Genehmigung von VerdeAgua vollständig untersagt.", fr: "La reproduction, distribution, communication publique, transformation ou toute autre activité similaire concernant le contenu du Site Web est totalement interdite sans l'autorisation expresse de VerdeAgua.", it: "La riproduzione, distribuzione, comunicazione pubblica, trasformazione o qualsiasi altra attività simile riguardante i contenuti del Sito Web è totalmente vietata senza l'espressa autorizzazione di VerdeAgua." },
    "legal.s5": { es: "5. Exclusión de responsabilidad", en: "5. Exclusion of liability", de: "5. Haftungsausschluss", fr: "5. Exclusion de responsabilité", it: "5. Esclusione di responsabilità" },
    "legal.s5.p1": { es: "VerdeAgua no se hace responsable de los daños y perjuicios de cualquier naturaleza que puedan ocasionarse por la falta de disponibilidad, mantenimiento o efectivo funcionamiento del Sitio Web, así como de los errores en los contenidos. VerdeAgua no se responsabiliza del uso que el usuario pueda hacer de los contenidos del Sitio Web.", en: "VerdeAgua is not responsible for damages of any nature that may be caused by the lack of availability, maintenance or effective functioning of the Website, as well as errors in the content.", de: "VerdeAgua übernimmt keine Haftung für Schäden jeglicher Art, die durch mangelnde Verfügbarkeit, Wartung oder effektives Funktionieren der Website sowie durch Fehler in den Inhalten entstehen können.", fr: "VerdeAgua n'est pas responsable des dommages de quelque nature que ce soit pouvant résulter du manque de disponibilité, de maintenance ou de fonctionnement effectif du Site Web, ainsi que des erreurs dans les contenus.", it: "VerdeAgua non è responsabile dei danni di qualsiasi natura che possano derivare dalla mancanza di disponibilità, manutenzione o funzionamento effettivo del Sito Web, nonché degli errori nei contenuti." },
    "legal.s6": { es: "6. Enlaces de terceros", en: "6. Third-party links", de: "6. Links zu Dritten", fr: "6. Liens de tiers", it: "6. Link di terzi" },
    "legal.s6.p1": { es: "En el caso de que en el Sitio Web se dispusiesen enlaces o hipervínculos hacia otros sitios de Internet, VerdeAgua no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso VerdeAgua asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.", en: "If the Website contains links or hyperlinks to other Internet sites, VerdeAgua will not exercise any type of control over such sites and content. In no case will VerdeAgua assume any responsibility for the content of any link belonging to a third-party website.", de: "Sollte die Website Links oder Hyperlinks zu anderen Internetseiten enthalten, übt VerdeAgua keinerlei Kontrolle über solche Seiten und Inhalte aus.", fr: "Dans le cas où le Site Web contiendrait des liens ou hyperliens vers d'autres sites Internet, VerdeAgua n'exercera aucun type de contrôle sur ces sites et contenus.", it: "Nel caso in cui il Sito Web contenga link o collegamenti ipertestuali ad altri siti Internet, VerdeAgua non eserciterà alcun tipo di controllo su tali siti e contenuti." },
    "legal.s7": { es: "7. Legislación aplicable y jurisdicción", en: "7. Applicable law and jurisdiction", de: "7. Anwendbares Recht und Gerichtsstand", fr: "7. Législation applicable et juridiction", it: "7. Legislazione applicabile e giurisdizione" },
    "legal.s7.p1": { es: "La relación entre VerdeAgua y el usuario se regirá por la normativa española vigente. Todas las disputas y reclamaciones derivadas de este aviso legal se resolverán por los juzgados y tribunales de Palma de Mallorca (Islas Baleares), salvo que la normativa aplicable disponga otra cosa.", en: "The relationship between VerdeAgua and the user shall be governed by current Spanish law. All disputes and claims arising from this legal notice shall be resolved by the courts of Palma de Mallorca (Balearic Islands), unless applicable law provides otherwise.", de: "Die Beziehung zwischen VerdeAgua und dem Nutzer unterliegt dem geltenden spanischen Recht. Alle Streitigkeiten werden von den Gerichten in Palma de Mallorca (Balearen) entschieden.", fr: "La relation entre VerdeAgua et l'utilisateur sera régie par la législation espagnole en vigueur. Tous les litiges seront résolus par les tribunaux de Palma de Majorque (Îles Baléares).", it: "Il rapporto tra VerdeAgua e l'utente sarà regolato dalla normativa spagnola vigente. Tutte le controversie saranno risolte dai tribunali di Palma di Maiorca (Isole Baleari)." },

    // ── Privacidad page ──
    "priv.title": { es: "Política de Privacidad", en: "Privacy Policy", de: "Datenschutzrichtlinie", fr: "Politique de Confidentialité", it: "Informativa sulla Privacy" },
    "priv.updated": { es: "Última actualización: Febrero 2026", en: "Last updated: February 2026", de: "Letzte Aktualisierung: Februar 2026", fr: "Dernière mise à jour : Février 2026", it: "Ultimo aggiornamento: Febbraio 2026" },
    "priv.s1": { es: "1. Responsable del tratamiento", en: "1. Data controller", de: "1. Verantwortlicher", fr: "1. Responsable du traitement", it: "1. Titolare del trattamento" },
    "priv.s1.resp": { es: "Responsable:", en: "Controller:", de: "Verantwortlicher:", fr: "Responsable :", it: "Titolare:" },
    "priv.s1.email": { es: "Email de contacto:", en: "Contact email:", de: "Kontakt-E-Mail:", fr: "Email de contact :", it: "Email di contatto:" },
    "priv.s1.purpose": { es: "Finalidad:", en: "Purpose:", de: "Zweck:", fr: "Finalité :", it: "Finalità:" },
    "priv.s1.purposeVal": { es: "Gestión de solicitudes de presupuesto y comunicaciones comerciales.", en: "Management of quote requests and commercial communications.", de: "Verwaltung von Angebotsanfragen und kommerziellen Mitteilungen.", fr: "Gestion des demandes de devis et communications commerciales.", it: "Gestione delle richieste di preventivo e comunicazioni commerciali." },
    "priv.s2": { es: "2. Datos que recopilamos", en: "2. Data we collect", de: "2. Daten, die wir erheben", fr: "2. Données que nous collectons", it: "2. Dati che raccogliamo" },
    "priv.s2.intro": { es: "Recopilamos los datos personales que usted nos proporciona voluntariamente a través de nuestros formularios de contacto y solicitud de presupuesto:", en: "We collect personal data that you voluntarily provide through our contact and quote request forms:", de: "Wir erheben die personenbezogenen Daten, die Sie uns freiwillig über unsere Kontakt- und Angebotsformulare zur Verfügung stellen:", fr: "Nous collectons les données personnelles que vous nous fournissez volontairement via nos formulaires de contact et de demande de devis :", it: "Raccogliamo i dati personali che ci fornisci volontariamente tramite i nostri moduli di contatto e richiesta preventivo:" },
    "priv.s3": { es: "3. Finalidad del tratamiento", en: "3. Purpose of processing", de: "3. Zweck der Verarbeitung", fr: "3. Finalité du traitement", it: "3. Finalità del trattamento" },
    "priv.s3.intro": { es: "Los datos personales facilitados serán tratados con las siguientes finalidades:", en: "Personal data provided will be processed for the following purposes:", de: "Die bereitgestellten personenbezogenen Daten werden zu folgenden Zwecken verarbeitet:", fr: "Les données personnelles fournies seront traitées aux fins suivantes :", it: "I dati personali forniti saranno trattati per le seguenti finalità:" },
    "priv.s4": { es: "4. Base legal", en: "4. Legal basis", de: "4. Rechtsgrundlage", fr: "4. Base juridique", it: "4. Base giuridica" },
    "priv.s5": { es: "5. Conservación de datos", en: "5. Data retention", de: "5. Datenspeicherung", fr: "5. Conservation des données", it: "5. Conservazione dei dati" },
    "priv.s6": { es: "6. Destinatarios", en: "6. Recipients", de: "6. Empfänger", fr: "6. Destinataires", it: "6. Destinatari" },
    "priv.s7": { es: "7. Derechos del interesado", en: "7. Data subject rights", de: "7. Rechte der betroffenen Person", fr: "7. Droits de la personne concernée", it: "7. Diritti dell'interessato" },
    "priv.s7.intro": { es: "Usted tiene derecho a:", en: "You have the right to:", de: "Sie haben das Recht auf:", fr: "Vous avez le droit de :", it: "Hai il diritto di:" },
    "priv.s8": { es: "8. Seguridad", en: "8. Security", de: "8. Sicherheit", fr: "8. Sécurité", it: "8. Sicurezza" },

    // ── Cookies page ──
    "cook.title": { es: "Política de Cookies", en: "Cookie Policy", de: "Cookie-Richtlinie", fr: "Politique de Cookies", it: "Informativa sui Cookie" },
    "cook.updated": { es: "Última actualización: Febrero 2026", en: "Last updated: February 2026", de: "Letzte Aktualisierung: Februar 2026", fr: "Dernière mise à jour : Février 2026", it: "Ultimo aggiornamento: Febbraio 2026" },
    "cook.s1": { es: "1. ¿Qué son las cookies?", en: "1. What are cookies?", de: "1. Was sind Cookies?", fr: "1. Que sont les cookies ?", it: "1. Cosa sono i cookie?" },
    "cook.s2": { es: "2. Tipos de cookies que utilizamos", en: "2. Types of cookies we use", de: "2. Arten von Cookies, die wir verwenden", fr: "2. Types de cookies que nous utilisons", it: "2. Tipi di cookie che utilizziamo" },
    "cook.s2.technical": { es: "Cookies técnicas (necesarias)", en: "Technical cookies (necessary)", de: "Technische Cookies (erforderlich)", fr: "Cookies techniques (nécessaires)", it: "Cookie tecnici (necessari)" },
    "cook.s2.analytics": { es: "Cookies analíticas", en: "Analytics cookies", de: "Analyse-Cookies", fr: "Cookies analytiques", it: "Cookie analitici" },
    "cook.s2.marketing": { es: "Cookies de marketing", en: "Marketing cookies", de: "Marketing-Cookies", fr: "Cookies de marketing", it: "Cookie di marketing" },
    "cook.s3": { es: "3. ¿Cómo gestionar las cookies?", en: "3. How to manage cookies?", de: "3. Wie verwaltet man Cookies?", fr: "3. Comment gérer les cookies ?", it: "3. Come gestire i cookie?" },
    "cook.s4": { es: "4. Actualización de esta política", en: "4. Policy updates", de: "4. Aktualisierung dieser Richtlinie", fr: "4. Mise à jour de cette politique", it: "4. Aggiornamento di questa informativa" },
    "cook.s5": { es: "5. Contacto", en: "5. Contact", de: "5. Kontakt", fr: "5. Contact", it: "5. Contatto" },
    "cook.s5.p1": { es: "Si tiene alguna pregunta sobre nuestra Política de Cookies, puede contactarnos en:", en: "If you have any questions about our Cookie Policy, you can contact us at:", de: "Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns unter:", fr: "Si vous avez des questions sur notre Politique de Cookies, vous pouvez nous contacter à :", it: "Se hai domande sulla nostra Informativa sui Cookie, puoi contattarci a:" },

    // ── Shared Nav (used by contacto.html) ──
    "nav.inicio": { es: "Inicio", en: "Home", de: "Startseite", fr: "Accueil", it: "Home" },
    "nav.servicios": { es: "Servicios", en: "Services", de: "Dienste", fr: "Services", it: "Servizi" },
    "nav.presupuesto": { es: "Presupuesto", en: "Quote", de: "Angebot", fr: "Devis", it: "Preventivo" },
    "nav.cta": { es: "Solicitar Presupuesto", en: "Request Quote", de: "Angebot anfordern", fr: "Demander un Devis", it: "Richiedi Preventivo" },
    "footer.desc": { es: "Excelencia en servicios de propiedad de lujo. Especialistas en el mantenimiento de los jardines y villas más exclusivas de Mallorca.", en: "Excellence in luxury property services. Specialists in maintaining the most exclusive gardens and villas in Mallorca.", de: "Exzellenz in Luxus-Immobiliendienstleistungen. Spezialisten für die Pflege der exklusivsten Gärten und Villen auf Mallorca.", fr: "Excellence dans les services de propriétés de luxe. Spécialistes de l'entretien des jardins et villas les plus exclusifs de Majorque.", it: "Eccellenza nei servizi per proprietà di lusso. Specialisti nella manutenzione dei giardini e ville più esclusivi di Maiorca." },
    "footer.services": { es: "Servicios", en: "Services", de: "Dienste", fr: "Services", it: "Servizi" },
    "footer.svc.1": { es: "Jardinería & Jardín", en: "Gardening & Garden", de: "Gartenpflege & Garten", fr: "Jardinage & Jardin", it: "Giardinaggio & Giardino" },
    "footer.svc.2": { es: "Cuidado de Piscinas", en: "Pool Care", de: "Poolpflege", fr: "Entretien de Piscines", it: "Cura Piscine" },
    "footer.svc.3": { es: "Reformas y Albañilería", en: "Renovations & Masonry", de: "Renovierungen & Mauerwerk", fr: "Rénovations et Maçonnerie", it: "Ristrutturazioni e Muratura" },
    "footer.svc.4": { es: "Gestión de Propiedades", en: "Property Management", de: "Immobilienverwaltung", fr: "Gestion de Propriétés", it: "Gestione Proprietà" },
    "footer.contact": { es: "Contacto Palma", en: "Contact Palma", de: "Kontakt Palma", fr: "Contact Palma", it: "Contatto Palma" },
    "footer.newsletter": { es: "Newsletter", en: "Newsletter", de: "Newsletter", fr: "Newsletter", it: "Newsletter" },
    "footer.newsletter.desc": { es: "Reciba consejos sobre el cuidado del jardín mediterráneo.", en: "Receive tips on Mediterranean garden care.", de: "Erhalten Sie Tipps zur mediterranen Gartenpflege.", fr: "Recevez des conseils sur l'entretien du jardin méditerranéen.", it: "Ricevi consigli sulla cura del giardino mediterraneo." },

    // ── Contacto page ──
    "contact.hero.title": { es: "Hablemos de tu proyecto", en: "Let's talk about your project", de: "Sprechen wir über Ihr Projekt", fr: "Parlons de votre projet", it: "Parliamo del tuo progetto" },
    "contact.hero.subtitle": { es: "Estamos a tu disposición para transformar tu propiedad en el paraíso mediterráneo que imaginas.", en: "We are at your disposal to transform your property into the Mediterranean paradise you imagine.", de: "Wir stehen Ihnen zur Verfügung, um Ihre Immobilie in das mediterrane Paradies zu verwandeln, das Sie sich vorstellen.", fr: "Nous sommes à votre disposition pour transformer votre propriété en le paradis méditerranéen que vous imaginez.", it: "Siamo a tua disposizione per trasformare la tua proprietà nel paradiso mediterraneo che immagini." },
    "contact.info.title": { es: "Información de Contacto", en: "Contact Information", de: "Kontaktinformationen", fr: "Informations de Contact", it: "Informazioni di Contatto" },
    "contact.info.desc": { es: "Puede contactarnos por teléfono, email o a través del formulario. Nos comprometemos a responder en menos de 24 horas.", en: "You can contact us by phone, email or through the form. We commit to responding within 24 hours.", de: "Sie können uns per Telefon, E-Mail oder über das Formular kontaktieren. Wir antworten innerhalb von 24 Stunden.", fr: "Vous pouvez nous contacter par téléphone, email ou via le formulaire. Nous nous engageons à répondre sous 24 heures.", it: "Puoi contattarci per telefono, email o tramite il modulo. Ci impegniamo a rispondere entro 24 ore." },
    "contact.phone.label": { es: "Teléfono", en: "Phone", de: "Telefon", fr: "Téléphone", it: "Telefono" },
    "contact.phone.hours": { es: "Lun – Sáb · 8:00 – 19:00", en: "Mon – Sat · 8:00 AM – 7:00 PM", de: "Mo – Sa · 8:00 – 19:00", fr: "Lun – Sam · 8h00 – 19h00", it: "Lun – Sab · 8:00 – 19:00" },
    "contact.email.response": { es: "Respuesta en menos de 24h", en: "Response within 24h", de: "Antwort innerhalb von 24 Std.", fr: "Réponse sous 24h", it: "Risposta entro 24h" },
    "contact.location.label": { es: "Ubicación", en: "Location", de: "Standort", fr: "Emplacement", it: "Posizione" },
    "contact.location.coverage": { es: "Servicio en toda la isla de Mallorca", en: "Service across the entire island of Mallorca", de: "Service auf der gesamten Insel Mallorca", fr: "Service sur toute l'île de Majorque", it: "Servizio in tutta l'isola di Maiorca" },
    "contact.schedule.label": { es: "Horarios", en: "Hours", de: "Öffnungszeiten", fr: "Horaires", it: "Orari" },
    "contact.schedule.weekdays": { es: "Lunes – Viernes: 8:00 – 19:00", en: "Monday – Friday: 8:00 AM – 7:00 PM", de: "Montag – Freitag: 8:00 – 19:00", fr: "Lundi – Vendredi : 8h00 – 19h00", it: "Lunedì – Venerdì: 8:00 – 19:00" },
    "contact.schedule.saturday": { es: "Sábados: 9:00 – 14:00", en: "Saturdays: 9:00 AM – 2:00 PM", de: "Samstags: 9:00 – 14:00", fr: "Samedis : 9h00 – 14h00", it: "Sabato: 9:00 – 14:00" },
    "contact.schedule.emergency": { es: "Urgencias: 24/7 para clientes con plan", en: "Emergencies: 24/7 for plan clients", de: "Notfälle: 24/7 für Vertragskunden", fr: "Urgences : 24/7 pour clients avec forfait", it: "Urgenze: 24/7 per clienti con piano" },
    "contact.form.title": { es: "Envíanos un mensaje", en: "Send us a message", de: "Senden Sie uns eine Nachricht", fr: "Envoyez-nous un message", it: "Inviaci un messaggio" },
    "contact.form.subtitle": { es: "Cuéntanos tu proyecto y te contactaremos pronto.", en: "Tell us about your project and we'll contact you soon.", de: "Erzählen Sie uns von Ihrem Projekt und wir werden Sie bald kontaktieren.", fr: "Parlez-nous de votre projet et nous vous contacterons bientôt.", it: "Raccontaci il tuo progetto e ti contatteremo presto." },
    "contact.form.name": { es: "Nombre *", en: "First Name *", de: "Vorname *", fr: "Prénom *", it: "Nome *" },
    "contact.form.surname": { es: "Apellidos *", en: "Last Name *", de: "Nachname *", fr: "Nom *", it: "Cognome *" },
    "contact.form.phone": { es: "Teléfono", en: "Phone", de: "Telefon", fr: "Téléphone", it: "Telefono" },
    "contact.form.service": { es: "Servicio de interés", en: "Service of interest", de: "Gewünschter Service", fr: "Service d'intérêt", it: "Servizio di interesse" },
    "contact.form.serviceDefault": { es: "Seleccionar...", en: "Select...", de: "Auswählen...", fr: "Sélectionner...", it: "Seleziona..." },
    "contact.form.svc1": { es: "Jardinería y Mantenimiento", en: "Gardening & Maintenance", de: "Gartenpflege & Wartung", fr: "Jardinage & Entretien", it: "Giardinaggio e Manutenzione" },
    "contact.form.svc2": { es: "Cuidado de Piscinas", en: "Pool Care", de: "Poolpflege", fr: "Entretien de Piscines", it: "Cura Piscine" },
    "contact.form.svc3": { es: "Reformas y Albañilería", en: "Renovations & Masonry", de: "Renovierungen & Mauerwerk", fr: "Rénovations et Maçonnerie", it: "Ristrutturazioni e Muratura" },
    "contact.form.svc4": { es: "Gestión de Propiedades", en: "Property Management", de: "Immobilienverwaltung", fr: "Gestion de Propriétés", it: "Gestione Proprietà" },
    "contact.form.svc5": { es: "Plan de Mantenimiento", en: "Maintenance Plan", de: "Wartungsplan", fr: "Plan de Maintenance", it: "Piano di Manutenzione" },
    "contact.form.svc6": { es: "Otro", en: "Other", de: "Sonstiges", fr: "Autre", it: "Altro" },
    "contact.form.message": { es: "Mensaje *", en: "Message *", de: "Nachricht *", fr: "Message *", it: "Messaggio *" },
    "contact.form.send": { es: "Enviar Mensaje", en: "Send Message", de: "Nachricht senden", fr: "Envoyer le Message", it: "Invia Messaggio" },
    "contact.form.privacy": { es: 'Al enviar aceptas nuestra <a href="privacidad.html" class="text-primary underline">Política de Privacidad</a>.', en: 'By submitting you accept our <a href="privacidad.html" class="text-primary underline">Privacy Policy</a>.', de: 'Mit dem Absenden akzeptieren Sie unsere <a href="privacidad.html" class="text-primary underline">Datenschutzrichtlinie</a>.', fr: 'En envoyant, vous acceptez notre <a href="privacidad.html" class="text-primary underline">Politique de Confidentialité</a>.', it: 'Inviando accetti la nostra <a href="privacidad.html" class="text-primary underline">Informativa sulla Privacy</a>.' },
    "contact.form.success": { es: "¡Mensaje Enviado!", en: "Message Sent!", de: "Nachricht gesendet!", fr: "Message Envoyé !", it: "Messaggio Inviato!" },
    "contact.form.successDesc": { es: "Gracias por contactarnos. Te responderemos en menos de 24 horas.", en: "Thank you for contacting us. We will respond within 24 hours.", de: "Vielen Dank für Ihre Kontaktaufnahme. Wir antworten innerhalb von 24 Stunden.", fr: "Merci de nous avoir contacté. Nous vous répondrons sous 24 heures.", it: "Grazie per averci contattato. Ti risponderemo entro 24 ore." },
    "contact.form.backHome": { es: "Volver al inicio", en: "Back to home", de: "Zurück zur Startseite", fr: "Retour à l'accueil", it: "Torna alla home" },
    "contact.map.title": { es: "Nuestra zona de cobertura", en: "Our coverage area", de: "Unser Versorgungsgebiet", fr: "Notre zone de couverture", it: "La nostra zona di copertura" },
};

// ── Language detection & application (same logic as index) ──
(function () {
    function detectLang() {
        const stored = localStorage.getItem('va_lang');
        if (stored && ['es', 'en', 'de', 'fr', 'it'].includes(stored)) return stored;
        const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
        if (nav.startsWith('de')) return 'de';
        if (nav.startsWith('en')) return 'en';
        if (nav.startsWith('fr')) return 'fr';
        if (nav.startsWith('it')) return 'it';
        return 'es';
    }

    function applyLang(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (pageTranslations[key] && pageTranslations[key][lang]) {
                // Check if the translation contains HTML tags
                const translation = pageTranslations[key][lang];
                if (/<[^>]+>/.test(translation)) {
                    el.innerHTML = translation;
                } else {
                    el.textContent = translation;
                }
            }
        });
        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (pageTranslations[key] && pageTranslations[key][lang]) {
                el.placeholder = pageTranslations[key][lang];
            }
        });
        // Update select options
        document.querySelectorAll('[data-i18n-option]').forEach(el => {
            const key = el.getAttribute('data-i18n-option');
            if (pageTranslations[key] && pageTranslations[key][lang]) {
                el.textContent = pageTranslations[key][lang];
            }
        });
        document.documentElement.lang = lang;
        localStorage.setItem('va_lang', lang);
        // Highlight active flag
        document.querySelectorAll('.lang-flag').forEach(f => {
            f.style.opacity = f.dataset.lang === lang ? '1' : '0.4';
        });
    }

    const lang = detectLang();
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => applyLang(lang));
    } else {
        applyLang(lang);
    }

    // Expose for flag clicks
    window.setPageLang = function (l) {
        applyLang(l);
    };
    // Alias for pages that use switchLanguage (e.g. contacto.html)
    window.switchLanguage = window.setPageLang;
})();
