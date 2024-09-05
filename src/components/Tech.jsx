import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { motion } from 'framer-motion';

const Tech = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} text-center`}>
					What I learned so far
				</p>
				<h2 className={`${styles.sectionHeadText} text-center`}>Tech</h2>
			</motion.div>
			<div className=' mt-20 flex flex-row flex-wrap justify-center gap-10'>
				{technologies.map((technology) => (
					<div
						className='w-32 h-32'
						key={technology.name}>
						{/* Pass the title to BallCanvas */}
						<BallCanvas
							icon={technology.icon}
							title={technology.title}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Tech, '');
