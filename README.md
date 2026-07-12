# DMaledicte Portfolio — v2.0

Portfolio profesional de Matias Martel — ingeniero de automatización e integraciones, arquitectura CRM/ERP, self-hosted tooling y IA.

**URL:** [dmaledicte.cloud](https://dmaledicte.cloud)

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Vue 3 + Vite 5 |
| UI | PrimeVue 4 (unstyled) |
| Estilos | Tailwind CSS 4 |
| Tipografía | IBM Plex Sans + IBM Plex Mono (@fontsource) |
| Iconos | PrimeIcons 7 + simple-icons |
| i18n | vue-i18n 9 (ES / EN) |
| Formulario | Formspree |
| Deploy | Vercel → dmaledicte.cloud |

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Estructura

```
src/
├── assets/          # tokens.css, fuentes, imágenes
├── components/      # BlueprintCard, SectionHeader, NodeConnector
├── composables/     # useTheme.js
├── locales/         # es.json, en.json
├── plugins/         # i18n.js
├── router/          # index.js
└── views/           # HomeView, ProjectsView, AboutView, ContactView
```

## Diseño

Estética **blueprint técnica** — dark mode por defecto, light mode con papel blueprint (`#F4F2EE`).
IBM Plex Mono para labels, eyebrows y código. IBM Plex Sans para body copy.
Tokens centralizados en `src/assets/tokens.css`.

## Casos de estudio

Los casos están genericados — sin nombres de empresa ni lógica de negocio identificable.
Representan patrones de arquitectura: CQRS multi-tenant, migración SaaS → self-hosted, AI tooling interno.
