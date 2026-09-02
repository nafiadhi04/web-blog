---
title: "Membuat Blog dengan Markdown"
date: "2026-08-25"
author: "Nafi"
category: "Web Development"
slug: "/membuat-blog-markdown/"
description: "Cara sederhana menggunakan Markdown sebagai sumber konten sebuah blog."
---

# Membuat Blog dengan Markdown

Markdown merupakan format penulisan yang sederhana dan banyak digunakan untuk dokumentasi serta website berbasis konten.

## Mengapa Markdown?

Markdown memiliki beberapa kelebihan.

Pertama, formatnya mudah dibaca bahkan tanpa aplikasi khusus.

Kedua, Markdown dapat dengan mudah dikonversi menjadi HTML.

Ketiga, file Markdown dapat disimpan menggunakan version control seperti Git.

## Markdown pada Gatsby

Gatsby dapat membaca file Markdown menggunakan plugin `gatsby-source-filesystem`.

Setelah itu `gatsby-transformer-remark` akan memproses file Markdown menjadi data yang dapat digunakan melalui GraphQL.

Contoh struktur file:

```text
content/
└── posts/
    ├── artikel-1.md
    ├── artikel-2.md
    └── artikel-3.md