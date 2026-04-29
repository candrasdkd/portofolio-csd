"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    gsap.set([cursor, follower], { xPercent: -50, yPercent: -50, opacity: 0 });

    let mouseX = 0;
    let mouseY = 0;
    let isMoving = false;
    let currentMagnetic: HTMLElement | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (!isMoving) {
        gsap.to([cursor, follower], { opacity: 1, duration: 0.3 });
        isMoving = true;
      }

      const target = e.target as HTMLElement;
      const magneticTarget = target.closest('.magnetic') as HTMLElement;

      if (magneticTarget) {
        if (currentMagnetic !== magneticTarget) {
            if (currentMagnetic) {
                gsap.to(currentMagnetic, { x: 0, y: 0, scale: 1, duration: 0.5, ease: "elastic.out(1, 0.3)" });
            }
            currentMagnetic = magneticTarget;
            gsap.to(currentMagnetic, { scale: 1.1, duration: 0.3, ease: "power2.out" });
        }

        const rect = magneticTarget.getBoundingClientRect();
        const relX = mouseX - rect.left - rect.width / 2;
        const relY = mouseY - rect.top - rect.height / 2;

        gsap.to(magneticTarget, {
            x: relX * 0.3,
            y: relY * 0.3,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto"
        });
      } else {
          if (currentMagnetic) {
              gsap.to(currentMagnetic, { x: 0, y: 0, scale: 1, duration: 0.5, ease: "elastic.out(1, 0.3)" });
              currentMagnetic = null;
          }
      }

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const onMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".magnetic")
      ) {
        gsap.to(follower, {
          scale: 1.5,
          backgroundColor: "rgba(126, 34, 206, 0.2)",
          borderColor: "rgba(126, 34, 206, 0.5)",
          duration: 0.3,
        });
        gsap.to(cursor, { scale: 0, duration: 0.2 });
      }
    };

    const onMouseLeave = () => {
      gsap.to(follower, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(255, 255, 255, 0.3)",
        duration: 0.3,
      });
      gsap.to(cursor, { scale: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", onMouseEnter);
    document.addEventListener("mouseout", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", onMouseEnter);
      document.removeEventListener("mouseout", onMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9998] transition-colors mix-blend-screen"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
