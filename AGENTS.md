# AGENTS.md — bolhatech-design-system

> Documento de contexto para agentes de IA (Claude, Codex, Cursor, etc.) que trabalharem neste repositório.
> Leia este arquivo inteiro antes de qualquer implementação.

---

## O que é este projeto

Pacote npm público **`bolhatech-design-system`** — biblioteca de componentes React + tokens de design para toda a plataforma A Bolha Tech.

**Repositório:** `github.com/abolhatech/bolhatech-design-system`
**npm:** `npm install bolhatech-design-system`
**Stack:** React · TypeScript · tsup · Storybook 8
**Versão atual:** 0.2.1

---

## Linguagem visual (não negocie esses valores)

| Atributo | Valor |
|----------|-------|
| Fonte | **Inter** (Regular, Medium, Semi Bold, Bold) |
| Fundo de página | `#F4F4F5` — cinza neutro |
| Surfaces | `#FFFFFF` — branco sólido |
| Bordas | `#E4E4E7` |
| Texto principal | `#18181B` |
| Texto muted | `#71717A` |
| Accent | `#FFBC2D` — amarelo BolhaTech |
| Glassmorphism | ❌ **Removido. Jamais adicione `backdrop-filter: blur`** |
| Fontes display antigas | ❌ **Sora e Instrument Sans foram removidas** |

---

## Estrutura do pacote

```
src/
├── index.ts         # Export completo (use com bundlers que tree-shake)
├── server.ts        # ✅ Componentes server-safe (RSC / SSR)
├── client.ts        # ✅ Componentes 'use client' (VoteBar, ThemeToggle, tema)
├── tokens.ts        # Tokens JS/TS + helpers getCommunityColor/getCommunityBg
├── styles.css       # Variáveis CSS + classes globais (deve ser importado 1x)
├── theme.tsx        # BolhaThemeProvider + useBolhaTheme
├── lib/cx.ts        # Utilitário classnames
└── components/
    ├── AgentCard/
    ├── ArticleHeader/
    ├── Badge/
    ├── BrandLockup/
    ├── BrandMark/
    ├── Button/
    ├── CommentCard/
    ├── Container/
    ├── Eyebrow/
    ├── Input/
    ├── NewsCard/
    ├── Pagination/
    ├── SectionHeading/
    ├── SidebarNav/
    ├── SiteHeader/
    ├── Skeleton/
    ├── Surface/
    ├── Text/
    ├── ThemeToggle/  ← 'use client'
    └── VoteBar/      ← 'use client'
```

---

## Entry points — qual usar

| Entry point | Quando usar |
|-------------|-------------|
| `bolhatech-design-system/server` | Next.js Server Components (RSC), SSR puro |
| `bolhatech-design-system/client` | Componentes interativos com `'use client'` |
| `bolhatech-design-system/tokens` | Só tokens JS/TS sem importar componentes |
| `bolhatech-design-system/styles.css` | CSS global — importar **uma única vez** no layout raiz |

---

## Regra crítica — `'use client'` e `export *`

**O Next.js App Router não suporta `export *` em arquivos com `'use client'`.**

O arquivo raiz `client.js` (gerado por tsup ou mantido manualmente) **deve sempre usar named exports explícitos**:

```js
// ✅ CORRETO
'use client';
export { BolhaThemeProvider, useBolhaTheme, ThemeToggle, VoteBar } from './dist/client.js';

// ❌ ERRADO — quebra Next.js RSC
'use client';
export * from './dist/client.js';
```

**Toda vez que adicionar um novo componente client ao `src/client.ts`, atualize também o `client.js` raiz com o nome explícito.**

---

## Adicionando um novo componente

### Checklist obrigatório

1. **Crie o diretório:** `src/components/NomeComponente/NomeComponente.tsx`
2. **Decida o entry point:**
   - É interativo (hooks, eventos)? → adicione a `src/client.ts` **e** ao `client.js` raiz
   - É server-safe? → adicione a `src/server.ts`
   - Ambos? → exporte dos dois
3. **Adicione ao barrel:** `src/components/index.ts`
4. **Siga as convenções de naming:**
   - Classe CSS: `bolha-nome-componente`
   - Props: tipo React explícito exportado como `NomeComponenteProps`
5. **Use variáveis CSS** — nunca valores hardcoded
6. **Crie uma Story** se o componente tiver variações visuais

### Template de componente server-safe

```tsx
import React from 'react';
import { cx } from '../../lib/cx';

export type MeuComponenteProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'default' | 'accent';
};

export function MeuComponente({ variant = 'default', className, ...props }: MeuComponenteProps) {
  return (
    <div
      className={cx('bolha-meu-componente', `bolha-meu-componente--${variant}`, className)}
      {...props}
    />
  );
}
```

### Template de componente client

```tsx
'use client';
import React, { useState } from 'react';
import { cx } from '../../lib/cx';

export type MeuComponenteClientProps = { /* ... */ };

export function MeuComponenteClient({ className, ...props }: MeuComponenteClientProps) {
  const [state, setState] = useState(false);
  return <div className={cx('bolha-meu-componente-client', className)} {...props} />;
}
```

---

## Tokens de cor — variáveis CSS

```css
/* Fundo e surfaces */
--bolha-bg             /* #F4F4F5 */
--bolha-surface        /* #FFFFFF */
--bolha-surface-hover

/* Bordas */
--bolha-line           /* #E4E4E7 */
--bolha-line-subtle

/* Texto */
--bolha-text           /* #18181B */
--bolha-muted          /* #71717A */
--bolha-subtle         /* #A1A1AA */

/* Accent */
--bolha-accent         /* #FFBC2D */
--bolha-accent-bg
--bolha-accent-text    /* #92400E */

/* Votos */
--bolha-up             /* #16A34A */
--bolha-up-bg
--bolha-down           /* #DC2626 */
--bolha-down-bg

/* Comunidades (também disponíveis em dark mode) */
--bolha-community-ia               /* #7C3AED */
--bolha-community-ia-bg
--bolha-community-frontend         /* #0284C7 */
--bolha-community-frontend-bg
--bolha-community-backend          /* #059669 */
--bolha-community-backend-bg
--bolha-community-devops           /* #D97706 */
--bolha-community-devops-bg
```

Todos têm equivalentes para dark mode definidos em `:root[data-theme='dark']`.

---

## Classes CSS utilitárias disponíveis

```css
/* Layout */
.bolha-container       /* max-width 1200px centrado */
.bolha-layout          /* grid 3 colunas: 220px 1fr 300px */
.bolha-feed            /* flex-direction: column, gap 8px */

/* Componentes base */
.bolha-surface         /* card branco com borda e sombra sutil */
.bolha-button          /* base de botão */
.bolha-button--primary /* fundo accent (#FFBC2D) */
.bolha-button--ghost   /* transparente */
.bolha-button--outline /* borda sutil */
.bolha-button--sm      /* tamanho pequeno */
.bolha-input           /* campo de texto */
.bolha-badge           /* tag/pill */
.bolha-badge--ia/frontend/backend/devops/accent/default
```

---

## Build e publicação

```bash
npm run build        # compila src/ → dist/ via tsup
npm run storybook    # Storybook em http://localhost:6006
npm publish          # publica no npm (prepublishOnly roda build)
```

**Após o build, verifique `client.js` raiz** — se tsup não o atualiza (é mantido manualmente), adicione os novos exports client manualmente.

---

## Changelog de quebras (breaking changes)

Sempre que alterar o comportamento de um componente existente, documente no `README.md` em `### Changelog` com:
- Versão semântica (bump correta: `major` para breaking, `minor` para additive, `patch` para bugfix)
- Descrição do que mudou
- Exemplo de migração se necessário

---

## Padrões proibidos

```tsx
// ❌ backdrop-filter, blur, glassmorphism
style={{ backdropFilter: 'blur(16px)' }}

// ❌ Fontes hardcoded diferentes de Inter
fontFamily: '"Sora", ...'

// ❌ Cores hardcoded sem usar variáveis CSS
color: '#5c5a56'  // use var(--bolha-muted)

// ❌ export * em arquivos com 'use client'
'use client'; export * from './dist/client.js';

// ❌ Componentes sem tipo exportado
export function Foo(props) { ... }  // falta FooProps

// ❌ Estilos em linha extensos — crie uma classe CSS bolha-*
style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 12, ... }}
```

---

## Integração com outros projetos

| Projeto | Relação |
|---------|---------|
| `bolhatech-frontend` | Consome como `"bolhatech-design-system": "^0.2.x"` |
| Qualquer app futura | Pode instalar o mesmo pacote npm |

Quando publicar nova versão, atualize a dependência no frontend manualmente ou via `npm update`.
