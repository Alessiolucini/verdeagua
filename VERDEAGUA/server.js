const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80;

// Parse JSON body
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'site', 'public')));

// SMTP transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
        user: 'info@verdeaguamallorca.es',
        pass: process.env.SMTP_PASS || 'Sebastian_2210'
    }
});

// Verify SMTP connection on startup
transporter.verify().then(() => {
    console.log('✅ SMTP connection verified');
}).catch(err => {
    console.error('❌ SMTP connection failed:', err.message);
});

// API: Send presupuesto email
app.post('/api/presupuesto', async (req, res) => {
    try {
        const { nombre, telefono, email, servicios, frecuencia, tamano, zona, tipoProp, direccion, notas, disponibilidad } = req.body;

        // Validate required fields
        if (!nombre || !telefono || !email || !servicios) {
            return res.status(400).json({ error: 'Faltan campos obligatorios.' });
        }

        const htmlContent = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f7f4; border-radius: 16px; overflow: hidden;">
            <div style="background: #2d5016; padding: 30px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">🌿 Nueva Solicitud de Presupuesto</h1>
                <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0;">VerdeAgua Premium Property Services</p>
            </div>
            
            <div style="padding: 30px;">
                <div style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; border-left: 4px solid #2d5016;">
                    <h2 style="color: #2d5016; margin: 0 0 12px; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">👤 Datos del Cliente</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td style="padding: 6px 0; color: #888; width: 140px;">Nombre:</td><td style="padding: 6px 0; font-weight: bold; color: #333;">${nombre}</td></tr>
                        <tr><td style="padding: 6px 0; color: #888;">Teléfono:</td><td style="padding: 6px 0; font-weight: bold; color: #333;"><a href="tel:${telefono}" style="color: #2d5016;">${telefono}</a></td></tr>
                        <tr><td style="padding: 6px 0; color: #888;">Email:</td><td style="padding: 6px 0; font-weight: bold; color: #333;"><a href="mailto:${email}" style="color: #2d5016;">${email}</a></td></tr>
                        <tr><td style="padding: 6px 0; color: #888;">Disponibilidad:</td><td style="padding: 6px 0; font-weight: bold; color: #333;">${disponibilidad}</td></tr>
                    </table>
                </div>

                <div style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; border-left: 4px solid #c4841d;">
                    <h2 style="color: #2d5016; margin: 0 0 12px; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">🛠️ Servicios Solicitados</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td style="padding: 6px 0; color: #888; width: 140px;">Servicios:</td><td style="padding: 6px 0; font-weight: bold; color: #333;">${servicios}</td></tr>
                        <tr><td style="padding: 6px 0; color: #888;">Frecuencia:</td><td style="padding: 6px 0; font-weight: bold; color: #333;">${frecuencia}</td></tr>
                        <tr><td style="padding: 6px 0; color: #888;">Tamaño aprox.:</td><td style="padding: 6px 0; font-weight: bold; color: #333;">${tamano}</td></tr>
                    </table>
                </div>

                <div style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; border-left: 4px solid #2d5016;">
                    <h2 style="color: #2d5016; margin: 0 0 12px; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">📍 Ubicación</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td style="padding: 6px 0; color: #888; width: 140px;">Zona:</td><td style="padding: 6px 0; font-weight: bold; color: #333;">${zona}</td></tr>
                        <tr><td style="padding: 6px 0; color: #888;">Tipo propiedad:</td><td style="padding: 6px 0; font-weight: bold; color: #333;">${tipoProp}</td></tr>
                        <tr><td style="padding: 6px 0; color: #888;">Dirección:</td><td style="padding: 6px 0; font-weight: bold; color: #333;">${direccion}</td></tr>
                    </table>
                </div>

                ${notas && notas !== 'Ninguna' ? `
                <div style="background: white; border-radius: 12px; padding: 20px; border-left: 4px solid #c4841d;">
                    <h2 style="color: #2d5016; margin: 0 0 12px; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">📝 Notas Adicionales</h2>
                    <p style="color: #333; margin: 0; line-height: 1.6;">${notas}</p>
                </div>
                ` : ''}
            </div>
            
            <div style="background: #2d5016; padding: 16px; text-align: center;">
                <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 12px;">Enviado desde el formulario de presupuesto de verdeagua.net</p>
            </div>
        </div>`;

        await transporter.sendMail({
            from: '"VerdeAgua Web" <info@verdeaguamallorca.es>',
            to: 'info@verdeaguamallorca.es',
            replyTo: email,
            subject: `🌿 Nuevo Presupuesto: ${servicios} — ${nombre} (${zona})`,
            html: htmlContent
        });

        console.log(`📧 Presupuesto enviado: ${nombre} (${email}) — ${servicios}`);
        res.json({ success: true });

    } catch (error) {
        console.error('❌ Error sending email:', error);
        res.status(500).json({ error: 'Error al enviar el email.' });
    }
});

// API: Contact form from contacto.html
app.post('/api/contacto', async (req, res) => {
    try {
        const { nombre, apellidos, email, telefono, servicio, mensaje } = req.body;

        if (!nombre || !email || !mensaje) {
            return res.status(400).json({ error: 'Faltan campos obligatorios.' });
        }

        const htmlContent = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f7f4; border-radius: 16px; overflow: hidden;">
            <div style="background: #2d5016; padding: 30px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">📩 Nuevo Mensaje de Contacto</h1>
                <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0;">Desde la página de contacto</p>
            </div>
            
            <div style="padding: 30px;">
                <div style="background: white; border-radius: 12px; padding: 20px; margin-bottom: 16px; border-left: 4px solid #2d5016;">
                    <h2 style="color: #2d5016; margin: 0 0 12px; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">👤 Datos del Contacto</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td style="padding: 8px 0; color: #888; width: 120px;">Nombre:</td><td style="padding: 8px 0; font-weight: bold; color: #333; font-size: 16px;">${nombre} ${apellidos || ''}</td></tr>
                        <tr><td style="padding: 8px 0; color: #888;">Email:</td><td style="padding: 8px 0; font-weight: bold; color: #333; font-size: 16px;"><a href="mailto:${email}" style="color: #2d5016; text-decoration: none;">${email}</a></td></tr>
                        ${telefono ? `<tr><td style="padding: 8px 0; color: #888;">Teléfono:</td><td style="padding: 8px 0; font-weight: bold; color: #333; font-size: 16px;"><a href="tel:${telefono}" style="color: #2d5016; text-decoration: none;">${telefono}</a></td></tr>` : ''}
                        ${servicio ? `<tr><td style="padding: 8px 0; color: #888;">Servicio:</td><td style="padding: 8px 0; font-weight: bold; color: #333; font-size: 16px;">${servicio}</td></tr>` : ''}
                    </table>
                </div>

                <div style="background: white; border-radius: 12px; padding: 20px; border-left: 4px solid #c4841d;">
                    <h2 style="color: #c4841d; margin: 0 0 12px; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">💬 Mensaje</h2>
                    <p style="color: #333; margin: 0; line-height: 1.6;">${mensaje}</p>
                </div>
            </div>
            
            <div style="background: #2d5016; padding: 16px; text-align: center;">
                <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 12px;">Enviado desde la página de contacto de verdeaguamallorca.es</p>
            </div>
        </div>`;

        await transporter.sendMail({
            from: '"VerdeAgua Web" <info@verdeaguamallorca.es>',
            to: 'info@verdeaguamallorca.es',
            replyTo: email,
            subject: `📩 Contacto Web: ${nombre} ${apellidos || ''} ${servicio ? '— ' + servicio : ''}`,
            html: htmlContent
        });

        console.log(`📧 Contacto recibido: ${nombre} (${email})`);
        res.json({ success: true });

    } catch (error) {
        console.error('❌ Error sending contact email:', error);
        res.status(500).json({ error: 'Error al enviar el email.' });
    }
});

// API: Plan request from pricing section
app.post('/api/solicitar-plan', async (req, res) => {
    try {
        const { nombre, telefono, email, plan, precio } = req.body;

        if (!nombre || !telefono || !email || !plan) {
            return res.status(400).json({ error: 'Faltan campos obligatorios.' });
        }

        const htmlContent = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f7f4; border-radius: 16px; overflow: hidden;">
            <div style="background: #2d5016; padding: 30px; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 24px;">🌿 Mantenimiento ${plan}</h1>
                <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0;">Nueva solicitud de plan — ${precio}</p>
            </div>
            
            <div style="padding: 30px;">
                <div style="background: white; border-radius: 12px; padding: 20px; border-left: 4px solid #2d5016;">
                    <h2 style="color: #2d5016; margin: 0 0 12px; font-size: 16px; text-transform: uppercase; letter-spacing: 1px;">👤 Datos del Cliente</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td style="padding: 8px 0; color: #888; width: 120px;">Nombre:</td><td style="padding: 8px 0; font-weight: bold; color: #333; font-size: 16px;">${nombre}</td></tr>
                        <tr><td style="padding: 8px 0; color: #888;">Teléfono:</td><td style="padding: 8px 0; font-weight: bold; color: #333; font-size: 16px;"><a href="tel:${telefono}" style="color: #2d5016; text-decoration: none;">${telefono}</a></td></tr>
                        <tr><td style="padding: 8px 0; color: #888;">Email:</td><td style="padding: 8px 0; font-weight: bold; color: #333; font-size: 16px;"><a href="mailto:${email}" style="color: #2d5016; text-decoration: none;">${email}</a></td></tr>
                    </table>
                </div>

                <div style="background: #2d5016; border-radius: 12px; padding: 20px; margin-top: 16px; text-align: center;">
                    <p style="color: rgba(255,255,255,0.7); margin: 0 0 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Plan Solicitado</p>
                    <p style="color: white; margin: 0; font-size: 24px; font-weight: bold;">Mantenimiento ${plan}</p>
                    <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 18px;">${precio}</p>
                </div>
            </div>
            
            <div style="background: #2d5016; padding: 16px; text-align: center;">
                <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 12px;">Enviado desde verdeagua.net</p>
            </div>
        </div>`;

        await transporter.sendMail({
            from: '"VerdeAgua Web" <info@verdeaguamallorca.es>',
            to: 'info@verdeaguamallorca.es',
            replyTo: email,
            subject: `Mantenimiento ${plan} — ${nombre}`,
            html: htmlContent
        });

        console.log(`📧 Plan solicitado: Mantenimiento ${plan} por ${nombre} (${email})`);
        res.json({ success: true });

    } catch (error) {
        console.error('❌ Error sending plan email:', error);
        res.status(500).json({ error: 'Error al enviar el email.' });
    }
});

// Fallback: serve index.html for any unmatched route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'site', 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🌿 VerdeAgua server running on port ${PORT}`);
});
