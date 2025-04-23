---
sidebar_position: 3
id: buena-practica
title: Buenas Prácticas
---

## y Recursos de Seguridad

## 🚀 Buenas prácticas de seguridad web

- Siempre usar HTTPS con redirección automática desde HTTP.
- Configurar HSTS (HTTP Strict Transport Security).
- Usar certificados válidos y actualizados.
- Evitar recursos externos no cifrados.
- Revisar vulnerabilidades con herramientas como Lighthouse o securityheaders.com.

### Ejemplo avanzado: encabezado HSTS en servidor (Nginx)

```
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains" always;
```

### Ejemplo avanzado: análisis con securityheaders.com

1. Ve a: https://securityheaders.com
2. Ingresa tu dominio y analiza los encabezados de seguridad.

---

## Recursos útiles

- [Mixed Content - MDN](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content)
- [HSTS - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)
- [TLS Overview - MDN](https://developer.mozilla.org/en-US/docs/Glossary/TLS)
