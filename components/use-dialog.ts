"use client";
import { useEffect, useRef } from "react";
export function useDialog(open: boolean, onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  useEffect(() => {
    if (!open || !ref.current) return;
    const dialog = ref.current;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const inerted: {el: HTMLElement; value: boolean}[] = [];
    let current: HTMLElement = dialog;
    while (current.parentElement) {
      for (const sibling of Array.from(current.parentElement.children)) {
        if (sibling !== current && sibling instanceof HTMLElement && !["SCRIPT", "STYLE"].includes(sibling.tagName)) {
          inerted.push({el: sibling, value: sibling.inert}); sibling.inert = true;
        }
      }
      current = current.parentElement;
      if (current === document.body) break;
    }
    const focusable = () => Array.from(dialog.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),input:not([disabled]),textarea,select,[tabindex="0"]')).filter(el => el.getClientRects().length > 0);
    (focusable()[0] ?? dialog).focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); event.stopPropagation(); closeRef.current(); }
      if (event.key === "Tab") {
        const nodes = focusable(); const first = nodes[0]; const last = nodes[nodes.length - 1];
        if (!first) { event.preventDefault(); dialog.focus(); }
        else if (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement))) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => { document.removeEventListener("keydown", onKey, true); document.body.style.overflow = overflow; inerted.forEach(({el,value}) => el.inert = value); if (previous?.isConnected) previous.focus(); };
  }, [open]);
  return ref;
}
