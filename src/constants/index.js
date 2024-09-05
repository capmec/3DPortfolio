import {
	BFlix,
	javascript,
	typescript,
	html,
	css,
	expo,
	reactjs,
	reactNative,
	tailwind,
	nodejs,
	mongodb,
	postgres,
	git,
	gitHub,
	figma,
	docker,
	meta,
	vlb,
	cloudhouse,
	amasv,
	tesla,
	shopify,
	carrent,
	chatApp,
	meetApp,
	threejs,
	tshirt,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Web Developer',
		icon: javascript,
	},
	{
		title: 'Frontend Developer',
		icon: reactjs,
	},
	{
		title: 'Backend Developer',
		icon: nodejs,
	},
	{
		title: 'UI/UX Designer',
		icon: figma,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
		title: 'HTML5',
	},
	{
		name: 'CSS3',
		icon: css,
		title: 'CSS',
	},
	{
		name: 'JavaScript',
		icon: javascript,
		title: 'JavaScript',
	},
	{
		name: 'TypeScript',
		icon: typescript,
		title: 'TypeScript',
	},
	{
		name: 'React JS',
		icon: reactjs,
		title: 'React',
	},
	{
		name: 'React Native',
		icon: reactNative,
		title: 'React Native',
	},
	{
		name: 'Expo',
		icon: expo,
		title: 'Expo',
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
		title: 'Tailwind',
	},
	{
		name: 'Node JS',
		icon: nodejs,
		title: 'NodeJS',
	},
	{
		name: 'MongoDB',
		icon: mongodb,
		title: 'MongoDB',
	},
	{
		name: 'PostgresSQL',
		icon: postgres,
		title: 'PostgreSQL',
	},

	{
		name: 'gitHub',
		icon: gitHub,
		title: 'gitHub',
	},
	{
		name: 'figma',
		icon: figma,
		title: 'Figma',
	},
	{
		name: 'docker',
		icon: docker,
		title: 'Docker',
	},
];

const experiences = [
	{
		title: 'Full Stack Developer',
		company_name: 'Versuchs- und Lehranstalt für Brauerei in Berlin (VLB)',
		icon: vlb,
		iconBg: '#383E56',
		date: '2021 - 2024',
		points: [
			'Developing and maintaining web applications using React.js and other related technologies.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
	{
		title: 'Software Developer internship',
		company_name: 'VLB- Berlin',
		icon: vlb,
		iconBg: '#E6DEDD',
		date: '2019 - 2021',
		points: [
			'Developing and maintaining web applications using React.js and other related technologies.',
			'Software architecture design and implementation.',
			'Database design and implementation using MongoDB and PostgreSQL.',
		],
	},
	{
		title: 'General Manager',
		company_name: 'Cloudhouse Flavours',
		icon: cloudhouse,
		iconBg: '#ffffff',
		date: '2015 - 2018',
		points: [
			'E-commerce webmaster management.',
			'Planning and managing logistics, warehouse, transportation and customer services.',
			'Directing, optimizing and coordinating full order cycle.',
		],
	},
	{
		title: 'Digital Media Delivery / Coordination',
		company_name: 'A+V / Zarpa Media',
		icon: amasv,
		iconBg: '#ffffff',
		date: '2012 - 2014',
		points: [
			'Coordinator of the Digital Delivery of advertising films.',
			'Website, Platform of audio and video codecs development.',
			'Management and trade logistics for publishers and TV stations.',
		],
	},
];

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
];

const projects = [
	{
		name: 'AI-Powered 3D Website',
		description:
			'Web-based platform that allows users to Unleash their creativity, where 3D technology meets AI for personalized T-shirt design.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'threejs',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: tshirt,
		source_code_link: 'https://t-shirt-customiser-seven.vercel.app/',
	},
	{
		name: 'Chat Chatting App',
		description:
			'In this project, I developed a chat application that allows users to communicate in real-time.',
		tags: [
			{
				name: 'React-Native',
				color: 'blue-text-gradient',
			},
			{
				name: 'Expo',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
			{
				name: 'Node.js',
				color: 'blue-text-gradient',
			},
		],
		image: chatApp,
		source_code_link: 'https://github.com/capmec/chat-app',
	},
	{
		name: 'Meet-app',
		description:
			'The Meet app is a serverless, React-based PWA developed with TDD techniques. It aims to help users discover and manage upcoming events by integrating with the Google Calendar API, providing a user-friendly interface for schedule management.',
		tags: [
			{
				name: 'React',
				color: 'blue-text-gradient',
			},
			{
				name: 'AWS Lambda',
				color: 'green-text-gradient',
			},
			{
				name: 'css',
				color: 'pink-text-gradient',
			},
		],
		image: meetApp,
		source_code_link: 'https://capmec.github.io/meet-app/',
	},
	{
		name: 'BFlix',
		description:
			'BFlix, a MERN stack application that allows users to explore a collection of movies, manage their favorite movies, and update their user profile.',
		tags: [
			{
				name: 'React',
				color: 'blue-text-gradient',
			},
			{
				name: 'MongoDB',
				color: 'green-text-gradient',
			},
			{
				name: 'Express.js',
				color: 'pink-text-gradient',
			},
		],
		image: BFlix,
		source_code_link: 'https://bflixb.netlify.app/login',
	},
];

export { services, technologies, experiences, testimonials, projects };
