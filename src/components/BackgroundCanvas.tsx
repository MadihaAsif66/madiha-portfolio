import React, { useEffect, useRef } from 'react';

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle particles
    const particleCount = prefersReducedMotion ? 0 : Math.min(width > 768 ? 45 : 22, 50);
    const particles: {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      alpha: number;
      color: string;
    }[] = [];

    const colors = [
      'rgba(233, 213, 255, ', // lavender
      'rgba(251, 207, 232, ', // pink
      'rgba(192, 132, 252, ', // purple
      'rgba(224, 231, 255, ', // soft indigo
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: (Math.random() - 0.5) * 0.35,
        alpha: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Floating glowing orbs
    const orbs = [
      { x: width * 0.15, y: height * 0.2, r: 260, color: 'rgba(168, 85, 247, 0.16)', vx: 0.2, vy: 0.15 },
      { x: width * 0.85, y: height * 0.35, r: 300, color: 'rgba(236, 72, 153, 0.14)', vx: -0.18, vy: 0.22 },
      { x: width * 0.45, y: height * 0.75, r: 320, color: 'rgba(139, 92, 246, 0.13)', vx: 0.15, vy: -0.16 },
    ];

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    if (!prefersReducedMotion) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      // Draw glowing orbs
      orbs.forEach((orb) => {
        if (!prefersReducedMotion) {
          orb.x += orb.vx;
          orb.y += orb.vy;

          if (orb.x < -orb.r || orb.x > width + orb.r) orb.vx *= -1;
          if (orb.y < -orb.r || orb.y > height + orb.r) orb.vy *= -1;
        }

        // Parallax offset
        const parallaxX = (mouseX - width / 2) * 0.03;
        const parallaxY = (mouseY - height / 2) * 0.03;

        const grad = ctx.createRadialGradient(
          orb.x + parallaxX,
          orb.y + parallaxY,
          0,
          orb.x + parallaxX,
          orb.y + parallaxY,
          orb.r
        );
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, 'rgba(13, 6, 26, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x + parallaxX, orb.y + parallaxY, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw and update subtle particles
      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.x += p.speedX;
          p.y += p.speedY;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep purple / navy aesthetic base background with soft radial mesh */}
      <div className="absolute inset-0 bg-[#0c051a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2a1147]/50 via-[#0d061a]/90 to-[#080312]" />
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full opacity-80" />
      {/* Subtle fine dot matrix pattern for modern depth */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
};
