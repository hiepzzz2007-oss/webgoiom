"use client";

import { Component, Suspense, useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, Html, OrbitControls, useGLTF } from "@react-three/drei";

class ModelErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) {
      return <Html center><div className="model-missing">Chưa có mô hình<br /><small>Đặt pillow.glb trong public/models/</small></div></Html>;
    }
    return this.props.children;
  }
}

function PillowModel({ color }) {
  const { scene } = useGLTF("/models/pillow.glb");
  const model = useMemo(() => {
    const copy = scene.clone(true);
    const clones = new Map();
    copy.traverse((object) => {
      if (!object.isMesh) return;
      const clone = (material) => {
        if (!clones.has(material)) clones.set(material, material.clone());
        return clones.get(material);
      };
      object.material = Array.isArray(object.material) ? object.material.map(clone) : clone(object.material);
    });
    return copy;
  }, [scene]);

  useEffect(() => {
    model.traverse((object) => {
      if (!object.isMesh) return;
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      materials.forEach((material) => material.color?.set(color));
    });
  }, [model, color]);

  useEffect(() => () => {
    model.traverse((object) => {
      if (!object.isMesh) return;
      (Array.isArray(object.material) ? object.material : [object.material]).forEach((material) => material.dispose());
    });
  }, [model]);

  return <primitive object={model} />;
}

function ViewerFallback() {
  return <div className="viewer-loading"><span className="loading-dot" /> Đang chuẩn bị góc nhìn 3D…</div>;
}

export default function Product3DViewer({ color = "#e8b9b5" }) {
  return (
    <div className="viewer-frame">
      <div className="viewer-caption"><span className="live-dot" /> TRẢI NGHIỆM 3D <span className="viewer-drag">Kéo để xoay · Cuộn để thu phóng</span></div>
      <Canvas camera={{ position: [0, 0, 4.2], fov: 38 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 4, 5]} intensity={2.2} />
        <directionalLight position={[-4, 1, -3]} intensity={0.7} color="#f7d4c8" />
        <Suspense fallback={<Html center><span className="viewer-loading">Đang tải mô hình…</span></Html>}><Environment preset="studio" /><Center><ModelErrorBoundary><PillowModel color={color} /></ModelErrorBoundary></Center></Suspense>
        <OrbitControls enablePan={false} minDistance={2.2} maxDistance={6.5} enableDamping dampingFactor={0.08} />
      </Canvas>
      <div className="viewer-hint">360°</div>
    </div>
  );
}

useGLTF.preload("/models/pillow.glb");
