import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture,
} from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
	const [decal] = useTexture([props.imgUrl]);

	return (
		<Float
			speed={1.75}
			rotationIntensity={1}
			floatIntensity={2}>
			<ambientLight intensity={0.95} />
			<directionalLight position={[0, 0, 0.05]} />
			<mesh
				castShadow
				receiveShadow
				scale={2.75}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color='#fff8eb'
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/>
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					scale={1}
					map={decal}
					flatShading
				/>
			</mesh>
		</Float>
	);
};

const BallCanvas = ({ icon, title }) => {
	return (
		<div className='w-full h-full flex flex-col items-center justify-center'>
			{/* Render title above the ball */}
			<h3 className='mb-2 text-lg font-semibold text-gray-400'>{title}</h3>
			<div className='w-full h-full'>
				<Canvas
					frameloop='demand'
					dpr={[1, 2]}
					gl={{ preserveDrawingBuffer: true }}>
					<Suspense fallback={<CanvasLoader />}>
						<OrbitControls enableZoom={false} />
						<Ball imgUrl={icon} />
					</Suspense>
					<Preload all />
				</Canvas>
			</div>
		</div>
	);
};

export default BallCanvas;
