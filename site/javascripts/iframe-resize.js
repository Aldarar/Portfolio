// Dopasowuje wysokość iframe'a do jego zawartości.

function fitIframe(iframe) {
  const doc = iframe.contentDocument;
  if (!doc) return;
  iframe.style.height = doc.documentElement.scrollHeight + 50 + "px";
}

function initIframes() {
  document.querySelectorAll("iframe.autosize").forEach((iframe) => {
    const resize = () => fitIframe(iframe);
    iframe.addEventListener("load", resize);

    if (iframe.contentDocument && iframe.contentDocument.readyState === "complete") {
      resize();
    }
    window.addEventListener("resize", resize);
  });
}

document.addEventListener("DOMContentLoaded", initIframes);
