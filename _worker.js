export default {
  async fetch(request, env) {
    const generated = await env.AI.run('@cf/meta/llama-3-8b-instruct', {
      prompt: "Tuliskan satu kalimat penyemangat singkat dalam Bahasa Indonesia untuk Imey yang sedang belajar koding agar sukses secara halal dan bisa pergi ke Ankara, Turki."
    });

    return new Response(
      `<html>
        <head>
          <title>Imey ke Ankara 2026</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { background: #0f172a; color: white; font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; text-align: center; }
            .card { border: 2px solid #00adb5; padding: 30px; border-radius: 20px; box-shadow: 0 0 20px #00adb5; background: rgba(255,255,255,0.05); max-width: 85%; }
            h1 { color: #00adb5; font-size: 1.5rem; }
            p { font-size: 1.2rem; line-height: 1.6; font-style: italic; color: #e2e8f0; }
            .btn { display: inline-block; margin-top: 20px; padding: 12px 24px; background: #00adb5; color: white; text-decoration: none; border-radius: 8px; font-weight: bold; border: none; cursor: pointer; }
          </style>
        </head>
        <body>
          <div class="card">
            <h1>🇹🇷 Pesan Semangat Ankara 🇹🇷</h1>
            <p>"${generated.response}"</p>
            <button class="btn" onclick="location.reload()">Minta Semangat Lagi!</button>
          </div>
        </body>
      </html>`,
      { headers: { "content-type": "text/html" } }
    );
  },
};
