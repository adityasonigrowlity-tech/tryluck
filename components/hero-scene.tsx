"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroScene() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.z = 8;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(host.clientWidth, host.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);
    const geometry = new THREE.TorusKnotGeometry(1.45, 0.27, 220, 24, 2, 5);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x8b73ff,
      metalness: 0.72,
      roughness: 0.19,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      emissive: 0x261a67,
      emissiveIntensity: 0.45,
    });
    const knot = new THREE.Mesh(geometry, material);
    group.add(knot);
    const wire = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.49, 0.018, 220, 6, 2, 5),
      new THREE.MeshBasicMaterial({ color: 0xb6aaff, transparent: true, opacity: 0.7, wireframe: true }),
    );
    group.add(wire);
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.15, 0.008, 8, 160),
      new THREE.MeshBasicMaterial({ color: 0x8871ff, transparent: true, opacity: 0.38 }),
    );
    ring.rotation.set(1.03, 0.2, -0.3);
    group.add(ring);

    scene.add(new THREE.AmbientLight(0xd9d2ff, 1.7));
    const key = new THREE.PointLight(0xffffff, 46, 20);
    key.position.set(3, 4, 5);
    scene.add(key);
    const violet = new THREE.PointLight(0x7a4dff, 22, 14);
    violet.position.set(-3, -1, 2);
    scene.add(violet);
    const mint = new THREE.PointLight(0x63e4c3, 8, 12);
    mint.position.set(2, -3, 1);
    scene.add(mint);

    const starGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(140 * 3);
    for (let i = 0; i < 140; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 9;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 7;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4 - 1;
    }
    starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const stars = new THREE.Points(starGeometry, new THREE.PointsMaterial({ color: 0xcac2ff, size: 0.022, transparent: true, opacity: 0.65 }));
    scene.add(stars);

    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    const onPointerMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.3;
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.24;
    };
    host.addEventListener("pointermove", onPointerMove);
    const resize = new ResizeObserver(() => {
      if (!host.clientWidth || !host.clientHeight) return;
      camera.aspect = host.clientWidth / host.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(host.clientWidth, host.clientHeight);
    });
    resize.observe(host);

    const animate = () => {
      frame = requestAnimationFrame(animate);
      group.rotation.y += 0.0024;
      group.rotation.x += (pointerY - group.rotation.x) * 0.018;
      group.rotation.z += (pointerX - group.rotation.z) * 0.018;
      stars.rotation.y -= 0.0003;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      host.removeEventListener("pointermove", onPointerMove);
      geometry.dispose();
      wire.geometry.dispose();
      ring.geometry.dispose();
      starGeometry.dispose();
      material.dispose();
      (wire.material as THREE.Material).dispose();
      (ring.material as THREE.Material).dispose();
      (stars.material as THREE.Material).dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div className="three-scene" ref={hostRef} aria-hidden="true" />;
}
