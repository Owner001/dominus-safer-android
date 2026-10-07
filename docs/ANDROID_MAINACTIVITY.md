# Double-back nativo

Apos `npx cap add android`, edite MainActivity.java:

```java
package com.dominussafer.app;

import android.widget.Toast;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
  private long lastBack = 0;

  @Override
  public void onBackPressed() {
    if (getBridge() != null && getBridge().getWebView() != null
        && getBridge().getWebView().canGoBack()) {
      getBridge().getWebView().goBack();
      return;
    }
    long now = System.currentTimeMillis();
    if (now - lastBack < 2000) {
      finish();
    } else {
      lastBack = now;
      Toast.makeText(this, "Pressione voltar novamente para sair", Toast.LENGTH_SHORT).show();
    }
  }
}
```
