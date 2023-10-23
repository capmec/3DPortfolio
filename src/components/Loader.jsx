import { Html, useProgress } from '@react-three/drei'

const CanvasLoader = () => {
	const { progress } = useProgress()
	return (
		<Html
			as='div'
			center
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}>
			<div class=' flex justify-center items-center'>
				<div class='flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin'>
					<div class='h-9 w-9 rounded-full bg-black'></div>
				</div>
			</div>
		</Html>
	)
}

export default CanvasLoader
