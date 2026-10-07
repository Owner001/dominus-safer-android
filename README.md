# Dominus Safer — App Android Oficial

Aplicativo mobile oficial do **Dominus Safer**: o mesmo painel web (login Discord, MFA/Google Authenticator, servidores, Defender, Premium, Owner) em experiência nativa Android.

## Funcionalidades

| Recurso | Status |
|---------|--------|
| Login Discord (OAuth) | mesmo fluxo do site |
| Google Authenticator / TOTP (admin) | via painel web |
| Splash / carregando | sim |
| Voltar com dois toques para sair | sim |
| Painel completo | WebView do site oficial |

> Empacotado com Capacitor. Atualizacoes do site aparecem no app sem nova versao na loja.

## Build APK

```bash
npm install
npx cap add android
npm run sync
npx cap open android
```

No Android Studio: Build APK. Ou `cd android && ./gradlew assembleDebug`.

Veja `docs/ANDROID_MAINACTIVITY.md` para o double-back nativo.

Application ID: `com.dominussafer.app`

## GitHub Actions

Workflow gera APK debug no push em main (Actions → artifacts).

© Dominus Safer
