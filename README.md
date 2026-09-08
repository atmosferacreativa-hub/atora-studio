# ATORA Studio — sitio oficial (Eleventy)

Base técnica inicial del sitio oficial de **ATORA Studio** con Eleventy. Este repositorio corresponde a la **marca matriz** y prepara una portada provisional de prelanzamiento.

## Requisitos

- Node.js + npm

## Desarrollo

Instalar dependencias:

```bash
npm install
```

Servidor local:

```bash
npm run start
```

Compilación de producción:

```bash
npm run build
```

La salida se genera en `_site/` (no editar manualmente).

## Estructura

- `src/`: código fuente
- `src/_data/site.json`: datos globales del sitio
- `src/_includes/`: layouts y componentes Nunjucks
- `src/assets/`: CSS/JS/imagenes (se copia directo a `_site/assets/`)
- `docs/`: documentación interna

## Prelanzamiento (no indexar)

Por defecto el sitio está configurado para **no indexarse**:

- `src/_includes/layouts/base.njk` incluye `<meta name="robots" content="noindex, nofollow">`.
- `src/robots.txt` bloquea todo:
  - `User-agent: *`
  - `Disallow: /`

### Activar indexación en lanzamiento

1. Editar `src/_includes/layouts/base.njk` y **remover** el meta robots `noindex, nofollow` (o condicionarlo a un flag).
2. Editar `src/robots.txt` para permitir el rastreo (p. ej. remover `Disallow: /` o ajustar reglas).
3. Actualizar `src/_data/site.json` para reflejar el cambio (p. ej. `indexing: true`).

## Arquitectura de marca

Ver `docs/brand-architecture.md` para las reglas de nomenclatura y relación entre:

- ATORA Studio (marca matriz)
- ATORA LMS (producto principal)
- ATORA Theme (tema visual; antes “ATORA Studio”)
