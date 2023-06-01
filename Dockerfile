# Menentukan base image yang akan digunakan untuk menjalankan aplikasi,
# dalam hal ini menggunakan node:18-alpine. Ini artinya,
# Dockerfile akan membuat image baru dengan memulai dari node:18-alpine.
FROM node:18-alpine
# Mengatur direktori kerja pada image yang akan dibuat, dalam hal ini /user/src/app.
WORKDIR /user/src/app
# Menyalin seluruh file dan direktori pada direktori kerja di host (lokal) ke direktori kerja di dalam image.
COPY . .
#  Menjalankan perintah npm install pada direktori kerja image untuk menginstall
# semua dependency yang diperlukan oleh aplikasi.
# --legacy-peer-deps merupakan flag yang digunakan untuk memungkinkan npm menginstall
# dependency yang memiliki versi yang tidak kompatibel dengan dependency lain yang digunakan dalam aplikasi.
RUN npm install --legacy-peer-deps
#  Menjalankan perintah npm run build pada direktori kerja image untuk melakukan proses build aplikasi.
RUN npm run build
# Menentukan user yang akan digunakan ketika menjalankan container. Dalam hal ini, menggunakan user node.
USER node
# Menentukan perintah yang akan dijalankan ketika container dijalankan.
# Dalam hal ini, perintah yang dijalankan adalah npm run start:gcp.
# Perintah CMD hanya dapat dijalankan satu kali pada setiap Dockerfile dan akan menimpa perintah ENTRYPOINT jika ada.
CMD ["npm", "run", "start"]