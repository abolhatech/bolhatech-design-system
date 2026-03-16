# bolhatech-design-system

Design system React do ecossistema AbolhaTech, extraído da linguagem visual inicial do produto principal.

## O que o pacote entrega

- tokens de cor, tipografia, raio, sombra e espaçamento
- tema light e dark com persistência opcional
- componentes base para layout, superfícies, branding e navegação
- stylesheet distribuível para reaproveitar o visual em outros projetos

## Instalação

```bash
npm install bolhatech-design-system
```

## Uso

```tsx
import {
  BolhaThemeProvider,
  BrandLockup,
  Button,
  Container,
  Eyebrow,
  Pagination,
  SectionHeading,
  Surface,
  ThemeToggle,
} from 'bolhatech-design-system';
import 'bolhatech-design-system/styles.css';

export function App() {
  return (
    <BolhaThemeProvider>
      <Container>
        <BrandLockup subtitle="As principais notícias de tecnologia do dia" />
        <ThemeToggle />

        <Surface>
          <Eyebrow>Open source • leitura limpa • tecnologia</Eyebrow>
          <SectionHeading
            title="Notícias de tecnologia sem excesso de interface."
            description="Um feed direto ao ponto, com foco em leitura confortável, curadoria e navegação simples."
          />
          <Button variant="ghost">Ver notícias</Button>
        </Surface>

        <Pagination
          currentPage={1}
          totalPages={3}
          onPageChange={(page) => console.log(page)}
        />
      </Container>
    </BolhaThemeProvider>
  );
}
```

## Storybook

```bash
npm install
npm run storybook
```

O explorer visual sobe em `http://localhost:6006/`.

## Publicação no npm

1. Crie o repositório `bolhatech-design-system`.
2. Adicione o secret `NPM_TOKEN` nas Actions do GitHub.
3. Faça merge na `main` depois de atualizar a versão em `package.json`.
4. O workflow em `.github/workflows/publish.yml` publica automaticamente no npm.
5. Se a versão já existir no npm, o workflow faz skip em vez de falhar.

## Observação sobre nome

O pacote está configurado como `bolhatech-design-system`, mas a disponibilidade real desse nome no npm precisa ser confirmada antes da primeira publicação.
