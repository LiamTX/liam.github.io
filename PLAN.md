# Cabral Labs — Portfolio → Company Landing Page Refactor

## Contexto

Liam Cabral quer parar de se posicionar como "dev PJ disponível" e reposicionar como empresa (Cabral Labs) oferecendo consultoria técnica especializada em 3 nichos: Fintech/Sistemas Financeiros (principal), Automação Corporativa e AI Engineering. O site atual é um portfólio dark em React com barras de skill, suporte bilíngue e linguagem de "me contrate". Cada seção precisa ser reescrita com copy focado em empresa, em português apenas.

Resultado esperado: landing page dark e polida com estética Linear/Vercel — sofisticada, focada em resultados, sem framing de currículo pessoal.

---

## Stack (sem mudanças)

React 19 + Create React App + Craco, Tailwind CSS 3.4.17, shadcn/ui, Lucide React icons. Hospedado na Netlify.

---

## Ordem de Implementação

### Fase 1 — Fundação (tudo depende disso)

**1. `public/index.html`**
- Novo título: `Cabral Labs | Consultoria em Fintech, Automação e IA`
- Nova meta description: "A Cabral Labs desenvolve sistemas financeiros, automações corporativas e soluções de IA que funcionam em produção. 7+ anos de experiência com PayTech, Globo e Logikee."
- OG tags: `og:title`, `og:description`, `og:type=website`, `og:locale=pt_BR`
- Fontes no `<head>`:
  ```html
  <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,800,900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  ```

**2. `src/index.css`**
- Atualizar variáveis HSL do shadcn/ui para bater com a nova paleta:
  ```css
  :root {
    --background: 240 30% 4%;        /* #0a0a0f */
    --foreground: 240 5% 93%;        /* #e8e8ed */
    --card: 240 25% 8%;              /* #12121a */
    --card-foreground: 240 5% 93%;
    --primary: 217 91% 60%;          /* #3b82f6 */
    --primary-foreground: 0 0% 100%;
    --muted: 240 25% 8%;
    --muted-foreground: 240 10% 57%; /* #8888a0 */
    --border: 237 24% 14%;           /* #1e1e2e */
    --input: 237 24% 14%;
    --ring: 217 91% 60%;
    --radius: 0.75rem;
  }
  ```
- Adicionar variáveis hex para uso direto nos componentes:
  ```css
  :root {
    --cl-bg: #0a0a0f;
    --cl-bg-secondary: #12121a;
    --cl-bg-elevated: #1a1a2e;
    --cl-text: #e8e8ed;
    --cl-text-muted: #8888a0;
    --cl-accent: #3b82f6;
    --cl-accent-glow: #60a5fa;
    --cl-accent-secondary: #06b6d4;
    --cl-success: #22c55e;
  }
  ```
- Tipografia:
  ```css
  html { scroll-behavior: smooth; }
  body { font-family: 'Plus Jakarta Sans', sans-serif; }
  h1, h2, h3, h4, h5, h6 { font-family: 'Satoshi', 'Plus Jakarta Sans', sans-serif; }
  ```
- Classes de animação scroll:
  ```css
  .fade-up { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
  .fade-up.visible { opacity: 1; transform: translateY(0); }
  ```

**3. `tailwind.config.js`**
- Adicionar cores `cl-*` no `extend.colors`
- Adicionar `fontFamily.satoshi` e `fontFamily.jakarta`

### Fase 2 — Remover código morto

**Arquivos a deletar:**
- `src/components/Experience.jsx`
- `src/components/Skills.jsx`
- `src/context/LanguageContext.jsx`
- `src/data/translations.js`
- `src/data/translatedData.js`

**4. `src/data/mock.js`** — reescrever com o novo conteúdo:
- `services[]` — 3 nichos com id, title, badge, description, metric, icon
- `cases[]` — 2 cases reais + 1 placeholder "em breve"
- `processSteps[]` — 4 etapas
- `clientLogos[]` — ['PayTech', 'Globo', 'Logikee', 'ZG Soluções']
- `contact` — email, phone, location, linkedin, github

**5. `src/hooks/useIntersectionObserver.js`** — novo arquivo:
```js
import { useEffect, useRef, useState } from 'react';
export function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, isVisible];
}
```

**6. `src/App.js`** — reescrever:
- Remover: `BrowserRouter`, `Routes`, `Route`, `LanguageProvider`, `Experience`, `Skills`
- Nova ordem: `<Header/>` `<Hero/>` `<Services/>` `<Cases/>` `<Process/>` `<About/>` `<Contact/>` `<Footer/>`
- Sem Router — navegação por âncoras

### Fase 3 — Componentes

**7. `src/components/Header.jsx`** — reescrever como Navbar:
- Fixed top, `backdrop-blur-md`, borda inferior sutil
- Logo: "Cabral Labs" em Satoshi bold
- Links de nav (plain `<a href="#...">` sem React Router): Serviços, Cases, Processo, Sobre, Contato
- CTA: "Solicitar orçamento" → `href="#contato"`, botão azul sólido
- Mobile: hambúrguer com menu slide-down
- Efeito ao scroll: adicionar fundo semi-opaco quando `scrollY > 20`
- Sem toggle de idioma

**8. `src/components/Hero.jsx`** — reescrever:
- `min-h-screen flex items-center`, overflow-hidden
- Background: orb de gradiente radial `blur-[120px] bg-blue-600/10` posicionado absolutamente
- Badge: ponto verde pulsante + "Disponível para novos projetos"
- Headline: Satoshi 800, `text-4xl md:text-6xl lg:text-7xl`, com gradiente em "financeiros, automações e soluções de IA" (`bg-gradient-to-r from-cl-accent to-cl-accent-secondary bg-clip-text text-transparent`)
- Sub: `text-cl-text-muted text-lg md:text-xl max-w-2xl`
- CTAs: "Ver cases" (outline, `href="#cases"`) + "Solicitar orçamento" (sólido, `href="#contato"`)
- Faixa de logos: `clientLogos.map()` em texto, opacidade 40%, separados por `|`

**9. `src/components/Services.jsx`** — reescrever:
- `id="servicos"`
- Grid 3 colunas desktop, 1 coluna mobile
- Card: fundo elevado, borda sutil, hover com glow azul e transição de 300ms
- Ícones Lucide: Shield (fintech), Zap (automação), Brain/Cpu (AI)
- Badge "Especialidade principal" apenas no card Fintech
- Métrica de resultado em `text-cl-success`
- Stagger por index: `style={{ transitionDelay: \`${index * 120}ms\` }}`

**10. `src/components/Projects.jsx`** → deletar e criar `src/components/Cases.jsx`:
- `id="cases"`
- Card normal: título, descrição, stack como pills, grid de resultados (métrica grande + label pequeno/muted)
- Card "em breve": borda tracejada, conteúdo centralizado, `animate-pulse` no dot

**11. `src/components/Process.jsx`** — novo arquivo:
- `id="processo"`
- 4 colunas desktop, vertical mobile
- Número gigante `text-8xl font-black text-cl-accent/15` atrás do título (relative/absolute)
- Linha conectora horizontal entre steps (dashed, visível apenas no desktop)
- Fade-up com stagger por step

**12. `src/components/About.jsx`** — reescrever:
- `id="sobre"`, heading "Quem está por trás"
- Duas colunas: texto à esquerda, card de stats à direita
- Tom de empresa, sem "eu sou", sem barras de skill
- Badge "Disponível para novos projetos" em verde
- Stats: "7+ anos", "3 especializações", "Florianópolis, SC"

**13. `src/components/Contact.jsx`** — reescrever:
- `id="contato"`, heading "Vamos conversar sobre seu projeto?"
- Duas colunas: info à esquerda, formulário à direita
- Campos: nome, email, mensagem (textarea)
- Submit simulado (sem API) — mostrar mensagem de sucesso
- Info: liamcabral88@gmail.com, +55 (48) 98839-6929, Florianópolis SC, links LinkedIn/GitHub
- Inputs estilizados: fundo elevado, foco com borda accent

**14. `src/components/Footer.jsx`** — reescrever:
- Mínimo: `bg-[var(--cl-bg-secondary)]`, borda superior sutil
- Uma linha: logo à esquerda, links de nav ao centro, copyright à direita
- "© 2026 Cabral Labs. Todos os direitos reservados."

---

## Regras

- Todo texto em português brasileiro
- Sem barras de skill, sem timeline de experiência, sem toggle de idioma
- Sem emojis no conteúdo do site
- Formulário de contato simulado (sem backend)
- Componentes shadcn/ui (`Button`, `Card`, `Input`, `Textarea`) — manter e reusar
- Lucide React icons — já instalado, usar em todo o site

---

## Verificação

1. `npm start` — sem erros de import, site carrega
2. Fontes corretas: headings em Satoshi, body em Plus Jakarta Sans (inspecionar DevTools)
3. Scroll em todas as 6 seções — desktop + mobile
4. Testar menu hambúrguer no mobile
5. Testar submit do formulário — mostrar mensagem de sucesso
6. Testar todos os links de âncora da nav
7. Verificar animações fade-up ao fazer scroll
8. `npm run build` — build de produção sem erros
