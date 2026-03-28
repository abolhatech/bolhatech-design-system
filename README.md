# bolhatech-design-system

Design system React do ecossistema [A Bolha Tech](https://abolhatech.com) — visual limpo inspirado no estilo editorial de TabNews, Hacker News e Reddit, com foco em legibilidade e conteúdo.

## O que há no pacote

- **Design tokens** — cores, tipografia (Inter), raio, sombras e escala de espaçamento
- **Tema claro/escuro** com persistência via `data-theme` no `<html>`
- **13 componentes** existentes atualizados para o novo visual
- **7 componentes novos** — VoteBar, Badge, CommentCard, AgentCard, SidebarNav, Skeleton, Input
- **Stylesheet distribuível** com todas as classes e variáveis CSS

## Instalação

```bash
npm install bolhatech-design-system
```

A fonte Inter é esperada no projeto consumidor. Recomendamos importar via `next/font` ou Google Fonts:

```tsx
// app/layout.tsx (Next.js)
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
```

## Setup

### 1. Importe o CSS global

```tsx
// app/layout.tsx ou _app.tsx
import 'bolhatech-design-system/styles.css';
```

### 2. Envolva com o provider de tema

```tsx
import { BolhaThemeProvider } from 'bolhatech-design-system/client';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <BolhaThemeProvider>{children}</BolhaThemeProvider>
      </body>
    </html>
  );
}
```

### 3. Next.js — Server vs Client components

O pacote expõe três entry points:

| Entry point                        | Quando usar                                    |
|------------------------------------|------------------------------------------------|
| `bolhatech-design-system`          | Import completo (bundlers que tree-shake bem)  |
| `bolhatech-design-system/server`   | Componentes server-renderable (RSC)            |
| `bolhatech-design-system/client`   | Componentes com `'use client'` (VoteBar, tema) |

```tsx
// Server Component
import { NewsCard, SidebarNav, Badge } from 'bolhatech-design-system/server';

// Client Component
import { VoteBar, ThemeToggle } from 'bolhatech-design-system/client';
```

---

## Componentes

### Layout

#### `<Container>`

Wrapper centralizado com `max-width: 1200px`. A prop `layout` ativa o grid de 3 colunas (sidebar + feed + sidebar direita).

```tsx
<Container layout>
  <SidebarNav sections={[...]} />   {/* coluna esquerda — 220px */}
  <main>...</main>                  {/* coluna central */}
  <aside>...</aside>                {/* coluna direita — 300px */}
</Container>
```

| Prop     | Tipo          | Padrão  | Descrição                         |
|----------|---------------|---------|-----------------------------------|
| `layout` | `boolean`     | `false` | Aplica grid de 3 colunas          |
| `as`     | `ElementType` | `'div'` | Elemento raiz                     |

#### `<Surface>`

Card com fundo branco, borda e sombra sutil.

```tsx
<Surface>conteúdo</Surface>
<Surface as="article">...</Surface>
```

#### `<SiteHeader>`

Header fixo no topo com slots para brand, busca e ações.

```tsx
<SiteHeader
  brand={<BrandLockup />}
  search={<Input placeholder="Buscar..." />}
  actions={<><ThemeToggle /><Button>Entrar</Button></>}
/>
```

---

### Branding

#### `<BrandLockup>`

Logo + nome do produto.

```tsx
<BrandLockup />
<BrandLockup title="abolhatech" subtitle="IA & Programação" />
```

#### `<BrandMark>`

Somente o ícone SVG.

```tsx
<BrandMark width={32} height={32} />
```

---

### Conteúdo

#### `<NewsCard>`

Card de post com slot para `VoteBar`.

```tsx
import { VoteBar } from 'bolhatech-design-system/client';
import { NewsCard, Badge } from 'bolhatech-design-system/server';

<NewsCard
  voteBar={<VoteBar score={42} userVote="up" onUpvote={...} onDownvote={...} />}
  category={<Badge variant="ia" dot>IA</Badge>}
  title="GPT-4o chega ao Brasil com preços reduzidos"
  excerpt="OpenAI anuncia disponibilidade do modelo para desenvolvedores brasileiros..."
  meta={<><span>por @john</span><span>23 comentários</span></>}
/>
```

| Prop        | Tipo        | Descrição                                      |
|-------------|-------------|------------------------------------------------|
| `voteBar`   | `ReactNode` | Slot para `<VoteBar>`                          |
| `category`  | `ReactNode` | Tag/badge de comunidade                        |
| `title`     | `ReactNode` | Título do post                                 |
| `titleSlot` | `ReactNode` | Substitui `title` com JSX livre (ex: `<Link>`) |
| `excerpt`   | `ReactNode` | Resumo (2 linhas com clamp)                    |
| `meta`      | `ReactNode` | Rodapé — autor, comentários, etc.              |
| `readTime`  | `ReactNode` | Tempo de leitura                               |

#### `<VoteBar>` _(client)_

Botões ▲ / ▼ com score e estado visual de voto ativo.

```tsx
import { VoteBar } from 'bolhatech-design-system/client';

<VoteBar
  score={128}
  userVote="up"         // 'up' | 'down' | null
  onUpvote={() => ...}
  onDownvote={() => ...}
  disabled={!isLoggedIn}
/>
```

#### `<CommentCard>`

Comentário com avatar, autor, timestamp e ações. Suporta threading via `depth`.

```tsx
<CommentCard
  author="@marina"
  timestamp="há 2h"
  avatarInitials="MA"
  content="Muito bem explicado! Faz sentido com o que vimos no último episódio."
  actions={
    <>
      <button className="bolha-comment-card__action-btn">▲ 12</button>
      <button className="bolha-comment-card__action-btn">Responder</button>
    </>
  }
/>

{/* Resposta aninhada — recua 20px por nível */}
<CommentCard author="@john" content="Concordo!" depth={1} avatarInitials="JO" />
```

#### `<AgentCard>`

Card para exibir agentes de IA do produto.

```tsx
<AgentCard
  emoji="🤖"
  name="Companion"
  description="Acompanha sua evolução e sugere conteúdos personalizados."
  meta={<><span>Ativo</span><span>12k usuários</span></>}
  actions={<Button size="sm">Ativar</Button>}
/>
```

---

### Navegação

#### `<SidebarNav>`

Navegação lateral com seções, labels e dots coloridos por comunidade.

```tsx
import { getCommunityColor } from 'bolhatech-design-system';

<SidebarNav
  sections={[
    {
      label: 'Feed',
      items: [
        { id: 'home', label: 'Início', href: '/', active: true },
        { id: 'trending', label: 'Em alta', href: '/trending' },
      ],
    },
    {
      label: 'Comunidades',
      items: [
        { id: 'ia', label: 'IA', href: '/c/ia', dot: getCommunityColor('ia') },
        { id: 'frontend', label: 'Frontend', href: '/c/frontend', dot: getCommunityColor('frontend') },
        { id: 'backend', label: 'Backend', href: '/c/backend', dot: getCommunityColor('backend') },
        { id: 'devops', label: 'DevOps', href: '/c/devops', dot: getCommunityColor('devops') },
      ],
    },
  ]}
/>
```

---

### UI Elements

#### `<Badge>`

Tag/pill colorida por comunidade ou estado.

```tsx
<Badge variant="ia">IA</Badge>
<Badge variant="frontend" dot>Frontend</Badge>
<Badge variant="accent">Destaque</Badge>
<Badge variant="default">Geral</Badge>
```

Variantes: `default` · `accent` · `ia` · `frontend` · `backend` · `devops`

Helper para mapear slug de comunidade para variante:

```tsx
import { communityVariant } from 'bolhatech-design-system';

<Badge variant={communityVariant(post.communitySlug)}>{post.communityName}</Badge>
```

#### `<Button>`

```tsx
<Button variant="primary">Publicar</Button>
<Button variant="ghost">Cancelar</Button>
<Button variant="outline" size="sm">Ver mais</Button>
<Button as="a" href="/signup" variant="primary">Criar conta</Button>
```

| Prop      | Tipo                                    | Padrão      |
|-----------|-----------------------------------------|-------------|
| `variant` | `'primary' \| 'ghost' \| 'outline'`    | `'outline'` |
| `size`    | `'sm' \| 'md'`                         | `'md'`      |
| `as`      | `'button' \| 'a'`                      | `'button'`  |
| `href`    | `string`                                | —           |

#### `<Input>`

```tsx
<Input label="E-mail" type="email" placeholder="você@exemplo.com" />
<Input label="Buscar" hint="Pesquise posts, comunidades ou pessoas" />
<Input label="Título" error="Campo obrigatório" />
```

#### `<Skeleton>` e `<PostCardSkeleton>`

```tsx
import { Skeleton, PostCardSkeleton } from 'bolhatech-design-system/server';

// Bloco genérico
<Skeleton width="60%" height={16} />
<Skeleton width={40} height={40} circle />

// Card de post completo com shimmer
<PostCardSkeleton />
```

#### `<ThemeToggle>`

```tsx
import { ThemeToggle } from 'bolhatech-design-system/client';

<ThemeToggle />
<ThemeToggle lightLabel="☀️ Claro" darkLabel="🌙 Escuro" />
```

---

### Tipografia

```tsx
<SectionHeading title="Em alta esta semana" description="Os posts mais votados das últimas 24h" />
<Eyebrow>IA & Machine Learning</Eyebrow>
<Text>Texto de corpo padrão com cor muted.</Text>

<ArticleHeader
  category={<Badge variant="ia">IA</Badge>}
  title="Como o GPT-4o mudou o mercado de trabalho"
  description="Uma análise dos últimos 6 meses de dados..."
  meta={<><span>por @marina</span><span>8 min de leitura</span></>}
/>
```

---

## Tokens

Os tokens ficam expostos como custom properties CSS em `:root`.

### Cores

```css
/* Backgrounds */
--bolha-bg             /* #f4f4f5 — fundo de página */
--bolha-surface        /* #ffffff — cards e painéis */
--bolha-surface-hover

/* Bordas */
--bolha-line           /* #e4e4e7 */
--bolha-line-subtle

/* Texto */
--bolha-text           /* #18181b */
--bolha-muted          /* #71717a */
--bolha-subtle         /* #a1a1aa */

/* Accent */
--bolha-accent         /* #ffbc2d — amarelo BolhaTech */
--bolha-accent-bg
--bolha-accent-text

/* Votos */
--bolha-up             /* #16a34a */
--bolha-up-bg
--bolha-down           /* #dc2626 */
--bolha-down-bg

/* Comunidades */
--bolha-community-ia
--bolha-community-ia-bg
--bolha-community-frontend
--bolha-community-frontend-bg
--bolha-community-backend
--bolha-community-backend-bg
--bolha-community-devops
--bolha-community-devops-bg
```

### Via JavaScript

```ts
import { bolhaTokens, getCommunityColor, getCommunityBg } from 'bolhatech-design-system';

bolhaTokens.color.light.accent  // '#ffbc2d'
bolhaTokens.radius.md           // '8px'
getCommunityColor('ia')         // 'var(--bolha-community-ia)'
getCommunityBg('frontend')      // 'var(--bolha-community-frontend-bg)'
```

---

## Tema programático

```tsx
import { useBolhaTheme } from 'bolhatech-design-system/client';

function MyToggle() {
  const { resolvedTheme, toggleTheme, setTheme } = useBolhaTheme();
  return (
    <button onClick={toggleTheme}>
      {resolvedTheme === 'dark' ? 'Modo claro' : 'Modo escuro'}
    </button>
  );
}
```

---

## Storybook

```bash
npm install
npm run storybook
# → http://localhost:6006
```

---

## Publicação

```bash
npm run build
npm publish
```

O script `prepublishOnly` roda o build automaticamente.

Para CI automático via GitHub Actions, adicione o secret `NPM_TOKEN` e crie o workflow:

```yaml
# .github/workflows/publish.yml
name: Publish

on:
  push:
    tags: ['v*']

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: https://registry.npmjs.org
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

---

## Changelog

### 0.2.0 — Redesign visual completo

**Breaking changes**
- `--bolha-bg` passou de `#f6f1e8` (creme) para `#f4f4f5` (cinza neutro)
- `--bolha-surface` é agora sólido (`#ffffff`) — glassmorphism removido
- `--bolha-font-display` e `--bolha-font-body` substituídos por `--bolha-font` (Inter)
- `NewsCard` não renderiza mais índice numérico; use o slot `voteBar`
- `Button` variante padrão mudou de `primary` para `outline`
- `BrandLockup` sem `subtitle` por padrão

**Novos componentes**
- `VoteBar` — ▲ score ▼ com estados up/down (client)
- `Badge` — tags coloridas por comunidade
- `CommentCard` — comentários com threading por `depth`
- `AgentCard` — card de agente de IA
- `SidebarNav` — navegação lateral com seções e dots
- `Skeleton` + `PostCardSkeleton` — loading states com shimmer
- `Input` — campo com label, hint e erro

**Novos tokens**
- `--bolha-up` / `--bolha-down` e seus `-bg`
- `--bolha-community-*` (cores e backgrounds por comunidade)
- `--bolha-space-*` (escala de espaçamento 4px → 48px)
- `--bolha-line-subtle`
- Helpers `getCommunityColor()` e `getCommunityBg()`

**Atualizados**
- `Container` — prop `layout` para grid 3 colunas
- `SiteHeader` — slot `search`, sem glassmorphism
- `Button` — variante `outline`, `as="a"`, `size="sm"`
- `SectionHeading` — tipografia reduzida para escala editorial

### 0.1.0 — Versão inicial

Primeiro lançamento com componentes base: Container, Surface, Button, SiteHeader, BrandLockup, NewsCard, Pagination, SectionHeading, ArticleHeader, ThemeToggle.

---

## Licença

MIT © A Bolha Tech
