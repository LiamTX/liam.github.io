# 🔧 Configuração do Netlify - netlify.toml

## ✅ Resposta Rápida

**O Netlify detecta o `netlify.toml` automaticamente!** Não precisa configurar nada manualmente. Mas há algumas verificações importantes.

## 📋 Como Funciona

### 1. Detecção Automática
- O Netlify procura automaticamente por `netlify.toml` na **raiz do seu repositório**
- Quando encontra, **usa as configurações do arquivo** em vez das configurações da interface web
- O arquivo tem **prioridade** sobre as configurações da UI

### 2. Ordem de Prioridade
1. **`netlify.toml`** (maior prioridade) ✅
2. Configurações na interface web do Netlify
3. Configurações padrão do Netlify

## ✅ Verificações Importantes

### 1. Verifique se o arquivo está na raiz

O arquivo deve estar em:
```
liam.github.io/
├── netlify.toml  ← AQUI (na raiz)
├── package.json
├── public/
├── src/
└── ...
```

### 2. Verifique Build Settings no Netlify (Opcional)

Embora não seja necessário, você pode verificar se está alinhado:

1. Acesse **Site settings** → **Build & deploy** → **Build settings**
2. Verifique se está configurado:
   - **Base directory**: (deixe vazio ou `/`)
   - **Build command**: `npm run build` (ou deixe vazio se usar o toml)
   - **Publish directory**: `build` (ou deixe vazio se usar o toml)

**💡 Dica:** Se o `netlify.toml` está configurado, você pode deixar esses campos vazios na interface - o arquivo vai gerenciar tudo.

### 3. Variável de Ambiente (OBRIGATÓRIA para Upwork)

A variável de ambiente precisa ser configurada manualmente na interface:

1. **Site settings** → **Build & deploy** → **Environment**
2. Clique em **Add variable**
3. Adicione:
   ```
   Key: REACT_APP_UPWORK_MODE
   Value: true
   ```
4. Clique em **Save**

**⚠️ Importante:** Variáveis de ambiente NÃO vão no `netlify.toml` para variáveis secretas/sensíveis, mas para variáveis públicas como `REACT_APP_*`, você pode adicionar no toml também (opcional).

## 🔍 Verificando se o netlify.toml está Funcionando

### Método 1: Verificar no Deploy Log

1. Vá em **Deploys** no Netlify
2. Clique no último deploy
3. Procure por mensagens como:
   ```
   Detected netlify.toml
   Building with netlify.toml configuration
   ```

### Método 2: Verificar Headers

Após o deploy, teste os headers:

```bash
curl -I https://liam-port.netlify.app/

# Deve mostrar os headers configurados:
# X-Robots-Tag: index, follow
# X-Frame-Options: SAMEORIGIN
# etc.
```

### Método 3: Verificar Redirects

Tente acessar uma rota que não existe:
```
https://liam-port.netlify.app/teste-404
```

Deve redirecionar para `/index.html` (graças ao redirect no `netlify.toml`).

## 📝 Seu netlify.toml Atual

Seu arquivo está configurado assim:

```toml
[build]
  publish = "build"           # Pasta de saída do build
  command = "npm run build"   # Comando de build

[[redirects]]
  from = "/*"                 # Todas as rotas
  to = "/index.html"          # Redireciona para index.html
  status = 200                # Status 200 (SPA)

[build.environment]
  NODE_VERSION = "18"         # Versão do Node.js

[[headers]]
  for = "/*"                  # Para todas as rotas
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    X-Robots-Tag = "index, follow"  # Permite bots
```

Está **perfeito** para o que você precisa!

## 🚀 Passo a Passo Completo para Deploy

### 1. Commit e Push do netlify.toml

Certifique-se de que o arquivo está no repositório:

```bash
git add netlify.toml
git commit -m "Add netlify.toml configuration"
git push
```

### 2. Configure a Variável de Ambiente (Upwork)

**Site settings** → **Environment** → Adicione `REACT_APP_UPWORK_MODE = true`

### 3. Trigger Deploy

O Netlify vai detectar automaticamente:
- ✅ O `netlify.toml`
- ✅ As novas configurações
- ✅ A variável de ambiente
- ✅ Os arquivos `_redirects` e `_headers` na pasta `public/`

### 4. Verifique o Deploy Log

No log do deploy, você deve ver:
- Build command sendo executado
- Pasta `build` sendo publicada
- Headers sendo aplicados
- Redirects sendo configurados

## ⚠️ Problemas Comuns

### Problema 1: Configurações conflitantes

**Sintoma:** O `netlify.toml` parece não estar sendo usado.

**Solução:** Limpe as configurações na interface web:
- Deixe os campos de Build command e Publish directory vazios na UI
- Deixe o `netlify.toml` gerenciar tudo

### Problema 2: Arquivo não detectado

**Sintoma:** O Netlify não detecta o `netlify.toml`.

**Solução:**
- Verifique se está na raiz do projeto
- Verifique se está commitado no Git
- Verifique se o nome está correto: `netlify.toml` (não `.netlify.toml`)

### Problema 3: Headers não funcionam

**Sintoma:** Os headers não estão sendo aplicados.

**Solução:**
- Verifique se está na seção `[[headers]]` (com dois colchetes)
- Verifique a sintaxe do TOML
- Faça um novo deploy

## ✅ Checklist Final

- [ ] `netlify.toml` está na raiz do projeto
- [ ] `netlify.toml` está commitado no Git
- [ ] Variável `REACT_APP_UPWORK_MODE=true` configurada no Netlify
- [ ] Arquivo `public/_redirects` existe
- [ ] Arquivo `public/_headers` existe (opcional, pode usar só o toml)
- [ ] Novo deploy feito após todas as mudanças
- [ ] Deploy log mostra que o toml foi detectado
- [ ] Headers estão sendo aplicados (teste com curl)

## 💡 Dica Extra: Habilitar Prerendering (Opcional)

Para melhorar a compatibilidade com bots (incluindo o do Upwork), você pode habilitar prerendering:

1. **Site settings** → **Build & deploy** → **Post processing**
2. Habilite **Prerendering**

Isso gera versões estáticas do seu site, facilitando o acesso por bots que não executam JavaScript.

---

**Resumo:** O Netlify detecta automaticamente o `netlify.toml`. Só precisa garantir que está na raiz, commitado, e fazer um novo deploy! ✅

