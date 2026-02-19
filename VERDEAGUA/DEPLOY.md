# Guía de Despliegue en Dokploy 🚀

Para publicar tu web en tu propio dominio usando Dokploy, sigue estos pasos:

## 1. Crear la Aplicación
1. Accede a tu panel de Dokploy.
2. Ve a **Applications** > **New Application**.
3. Ponle nombre: `VerdeAgua`.
4. Selecciona **Git Repository**.

## 2. Configurar el Origen (Git)
- **Repository URL**: `https://github.com/Alessiolucini/verdeagua`
- **Branch**: `main`
- **Authentication**: Si el repo es público, no necesitas nada. Si es privado, configura una clave SSH o Token en la configuración de Git de Dokploy.

## 3. Configuración del Build
- **Build Type**: `Dockerfile`
- **Dockerfile Path**: `./Dockerfile`
- **Context Path**: `./`

## 4. Configuración de Red
- **Internal Port**: `80` (Asegúrate que coincida con el `EXPOSE 80` del Dockerfile).

## 5. Dominio y SSL
1. Ve a la pestaña **Domains**.
2. Añade tu dominio (ej: `verdeagua.com`).
3. Activa **SSL** (Let's Encrypt) para tener HTTPS.

## 6. Desplegar
- Haz clic en **Deploy**.
- En la pestaña **Logs** verás el progreso.
- Debería tardar menos de 1 minuto.

¡Listo! Tu web debería estar visible en tu dominio.
