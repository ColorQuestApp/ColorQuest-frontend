# ColorQuest

React + TypeScript + Vite + Tailwind CSS. The app runs fully locally, with no backend.

## Getting started

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`, `npm run lint:fix`.

## Structure (`src/`)

| Folder | Contents |
| --- | --- |
| `app` | App root: all routes (`App.tsx`) and app-wide providers |
| `assets` | Images and other static assets |
| `components` | Components shared across features |
| `constants` | Shared constants |
| `data` | Static local data |
| `features` | One folder per feature, with its own `components`, `hooks` and `lib` |
| `hooks` | Hooks shared across features |
| `pages` | One component per screen |
| `styles` | Global styles |
| `utils` | Shared helper functions |

## Naming (enforced by ESLint)

- Component and page files: `PascalCase.tsx`
- Hook files: `useSomething.ts`
- Other files: `camelCase.ts`
- Variables and functions: `camelCase`; components: `PascalCase`; constants may be `UPPER_CASE`
- Types, interfaces, enums and enum members: `PascalCase`, with no `I` prefix on interfaces

## Pre-push check

`npm install` sets up a Git hook that runs `npm run lint` before each push. The push is stopped if ESLint reports errors.
