#!/bin/sh
set -e

HTML_DIR=/usr/share/nginx/html

echo "🧩 Injetando variáveis de ambiente ..."

cat <<EOF > ${HTML_DIR}/env-config.js
window.__ENV__ = {
  VITE_API_URL: ${VITE_API_URL},
  VITE_MUI_PRO: ${VITE_MUI_PRO},
  VITE_BUSCA_PLACA_API: ${VITE_BUSCA_PLACA_API},
  VITE_AUTH_SECRET: ${VITE_AUTH_SECRET},
  VITE_ENVIRONMENT_NAME: ${VITE_ENVIRONMENT_NAME},
};
EOF

echo "✅ env-config.js criado com sucesso."

exec nginx -g 'daemon off;'
