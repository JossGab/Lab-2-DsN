// Crear el elemento HTML <html> y <body>
document.documentElement.lang = "en"; // Establecer el idioma

// Crear el encabezado <head>
const head = document.head;

// Agregar metadatos
const metaCharset = document.createElement("meta");
metaCharset.setAttribute("charset", "UTF-8");

const metaViewport = document.createElement("meta");
metaViewport.setAttribute("name", "viewport");
metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");

const title = document.createElement("title");
title.textContent = "Proyecto web";

// Agregar elementos al <head>
head.appendChild(metaCharset);
head.appendChild(metaViewport);
head.appendChild(title);

// Crear el contenido del <body>
const body = document.body;

const h1 = document.createElement("h1");
h1.textContent = "Desarrollo de Soluciones en la Nube";

// Agregar el h1 al body
body.appendChild(h1);
