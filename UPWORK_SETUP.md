# Configuração para Upwork

Este projeto foi configurado para ser compatível com as políticas do Upwork, removendo automaticamente formulários de contato e informações de contato direto quando necessário.

## Problema Resolvido

O Upwork rejeita links de portfólio que contêm:
- Formulários de contato funcionais
- Links diretos de email (`mailto:`)
- Links diretos de telefone (`tel:`)
- Informações de contato que permitem comunicação fora da plataforma

## Solução Implementada

Foi criado um sistema de "modo Upwork" que automaticamente oculta essas informações quando ativado.

## Como Ativar o Modo Upwork

### Opção 1: Variável de Ambiente (Recomendado para Deploy)

No Netlify, adicione uma variável de ambiente:

1. Vá em **Site settings** → **Build & deploy** → **Environment**
2. Adicione uma nova variável:
   - **Key**: `REACT_APP_UPWORK_MODE`
   - **Value**: `true`
3. Faça um novo deploy

### Opção 2: Query Parameter (Para Teste)

Adicione `?upwork=true` à URL:

```
https://seu-site.netlify.app/?upwork=true
```

### Opção 3: Duas Versões do Site

Você pode criar dois deploys no Netlify:

1. **Deploy Principal**: Sem a variável de ambiente (com todos os formulários)
2. **Deploy para Upwork**: Com `REACT_APP_UPWORK_MODE=true` (sem formulários)

## O que é Removido no Modo Upwork

Quando o modo Upwork está ativo, o site automaticamente:

- ✅ Remove o formulário de contato completo
- ✅ Remove links `mailto:` de email
- ✅ Remove links `tel:` de telefone
- ✅ Mantém apenas links para LinkedIn e GitHub
- ✅ Mostra mensagem orientando contato via Upwork
- ✅ Mantém informações profissionais (localização, etc.)

## Arquivos de Configuração Criados

1. **`public/_redirects`**: Configura redirecionamentos para SPA do React
2. **`netlify.toml`**: Configuração do build e deploy no Netlify
3. **`src/utils/upworkMode.js`**: Lógica para detectar modo Upwork

## Testando Localmente

Para testar o modo Upwork localmente:

```bash
# Adicione ao arquivo .env.local
REACT_APP_UPWORK_MODE=true

# Ou teste com query parameter
npm start
# Acesse: http://localhost:3000/?upwork=true
```

## Verificação

Após o deploy, verifique:

1. ✅ O site está acessível publicamente
2. ✅ Não há erros 404 ao navegar
3. ✅ Formulário de contato está oculto (no modo Upwork)
4. ✅ Links mailto/tel estão removidos (no modo Upwork)
5. ✅ Preview aparece corretamente no Upwork

## Deploy no Netlify

1. Conecte seu repositório ao Netlify
2. Configure as variáveis de ambiente conforme necessário
3. Build command: `npm run build`
4. Publish directory: `build`
5. Faça o deploy

## Links Úteis

- [Documentação Netlify](https://docs.netlify.com/)
- [Netlify Redirects](https://docs.netlify.com/routing/redirects/)
- [React Router Deployment](https://reactrouter.com/en/main/start/overview)

