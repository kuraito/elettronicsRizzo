# Configurazione cron job per tenere sveglio Supabase

Il piano gratuito di Supabase mette il progetto in pausa dopo 7 giorni di inattività.
Questo cron job chiama `/api/ping` ogni 4 giorni per evitarlo.

## Endpoint ping

`GET https://tuodominio.com/api/ping`

Risposta attesa:
```json
{ "ok": true, "timestamp": "2026-01-01T00:00:00.000Z" }
```

---

## Configurazione su cron-job.org (gratuito)

### 1. Registrarsi
1. Vai su https://cron-job.org
2. Clicca **Sign up** e crea un account gratuito
3. Conferma l'email e accedi

### 2. Creare il job
1. Nella dashboard clicca **Create cronjob**
2. Compila i campi:
   - **Title**: `Supabase ping - Electronics Rizzo`
   - **URL**: `https://tuodominio.com/api/ping`
   - **Request method**: `GET`
3. Nella sezione **Schedule** seleziona **Every N days** e imposta **4**
4. Clicca **Save**

### 3. Abilitare le notifiche email
1. Apri il job appena creato
2. Vai nella sezione **Notifications**
3. Spunta **Notify me on failure**
4. Inserisci la tua email e salva

### 4. Verificare che il ping funzioni
1. Apri il job dalla dashboard
2. Clicca **Run now** per eseguirlo manualmente
3. Vai nella tab **Logs** del job
4. Controlla che la risposta mostri HTTP 200 e il body `{"ok":true,...}`
5. Se vedi errori 503/544, il progetto Supabase è in pausa — vai sulla dashboard Supabase e clicca **Restore project**

---

## Note
- Ricordati di sostituire `tuodominio.com` con il dominio reale del sito
- Il piano gratuito di cron-job.org supporta fino a 5 job e 1 richiesta ogni 5 minuti
- Ogni 4 giorni è abbondantemente dentro il limite dei 7 giorni di inattività di Supabase
