# Alan Camargo — site profissional

Site público de Alan Camargo Alves, com jornadas separadas para Psicoterapia e Nutrição.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Vitest
- Vercel

## Executar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Qualidade

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Conteúdo

As informações editáveis estão centralizadas em `src/data/site.ts`. Dados profissionais, contatos, serviços, valores, perguntas frequentes e política de agendamento devem ser atualizados nesse arquivo.

O certificado da formação em Psicanálise ainda está pendente e não é apresentado como credencial concluída. O site não usa os títulos “psicólogo”, “CRP” ou “especialista em emagrecimento”.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` quando necessário:

- `NEXT_PUBLIC_SITE_URL`: URL canônica da produção.
- `NEXT_PUBLIC_GA_ID`: identificador opcional do Google Analytics.

## Imagens e marca

Fotografias, imagens geradas e identidade visual são autorizadas exclusivamente para este projeto. O repositório não possui licença aberta; a ausência de licença não concede permissão de reutilização.

## Deploy

A branch `main` é conectada à Vercel e publica automaticamente em produção. Branches adicionais geram URLs de preview.
