"use client";

import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

export default function ZoomableImage(props: ImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Disable scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsZoomed(false); // reset zoom on close
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Add cursor-zoom-in to the trigger image class
  const imageClassName = props.className
    ? `${props.className} cursor-zoom-in`
    : "cursor-zoom-in";

  // Resolve src to string for native img tag
  const imgSrc = typeof props.src === "string" ? props.src : (props.src as any)?.src || "";
  
  // Detect transparent/logo images
  const isTransparent = imgSrc.toLowerCase().includes("logo") || imgSrc.toLowerCase().includes("transparent") || imgSrc.toLowerCase().endsWith(".png");

  return (
    <>
      <Image
        {...props}
        className={imageClassName}
        onClick={() => setIsOpen(true)}
      />

      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lightbox-overlay"
              style={{
                position: "fixed",
                inset: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 99999,
                background: "rgba(3, 10, 20, 0.92)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "32px",
                overflow: "auto"
              }}
              onClick={() => setIsOpen(false)}
            >
              <button
                className="fixed top-4 right-4 md:top-6 md:right-6 z-[10000] text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-2 backdrop-blur-md transition-all cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className={`lightbox-stage ${isTransparent ? "light-bg" : ""} ${isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomed(!isZoomed);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "auto",
                  maxWidth: isZoomed ? "none" : "94vw",
                  maxHeight: isZoomed ? "none" : "90vh",
                  overflow: "visible",
                  background: isTransparent ? "#ffffff" : "transparent",
                  padding: isTransparent ? "32px" : "0",
                  borderRadius: isTransparent ? "22px" : "0",
                  margin: "auto"
                }}
              >
                <img
                  src={imgSrc}
                  alt={props.alt || "Imagen ampliada"}
                  className="lightbox-image transition-all duration-300"
                  onError={() => console.error("Lightbox failed to load image path:", imgSrc)}
                  style={{
                    display: "block",
                    maxWidth: isZoomed ? "none" : (isTransparent ? "calc(94vw - 64px)" : "94vw"),
                    maxHeight: isZoomed ? "none" : (isTransparent ? "calc(90vh - 64px)" : "90vh"),
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "16px",
                    boxShadow: "0 30px 90px rgba(0, 0, 0, 0.45)"
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
