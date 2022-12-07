import { Box, SvgIconTypeMap, Typography, Fab } from '@mui/material';
import {
	FC,
	PropsWithChildren,
	ReactElement,
	useCallback,
	useEffect,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { Link } from 'react-scroll';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import StickyBox from 'react-sticky-box';
import { current } from '@reduxjs/toolkit';
import { useScrollPercentage } from 'react-scroll-percentage';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
import PinDropTwoToneIcon from '@mui/icons-material/PinDropTwoTone';

interface Props {
	title: string;
	subtitle: string;
	sectionName: string;
	// footerText: string;
	nextSectionName: string;
	nextSectionButtonLabel: string;
	prevSectionName: string;
	prevSectionButtonLabel: string;
	icon: ReactElement<any, any>;
	backgroundColor?: string;
	backgroundImage: string;
}

const SectionBox: FC<PropsWithChildren<Props>> = ({
	children,
	title,
	subtitle,
	sectionName,
	nextSectionName,
	nextSectionButtonLabel,
	icon,
	backgroundColor = '#E2EFF1',
	prevSectionName,
	prevSectionButtonLabel,
	backgroundImage,
}) => {
	const refDiv = useRef();

	const [ref, percentage] = useScrollPercentage({
		/* Optional options */
		threshold: 0,
	});
	const [showButton, setShowButton] = useState(false);
	const [showTitle, setShowTitle] = useState(true);
	useEffect(() => {
		if (percentage > 0.15) {
			setShowButton(true);
		} else {
			setShowButton(false);
		}
		if (percentage > 0.85) {
			setShowTitle(false);
		} else {
			setShowTitle(true);
		}
		console.log(percentage);
	}, [percentage]);

	return (
		<Box
			ref={ref}
			className='row'
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				minHeight: '90vh',
				// border: 'solid 1px black',
			}}>
			{/* Contact */}
			<Box
				className='titleBox'
				style={{
					marginTop: 0,
					position: 'sticky',
					top: 33,
					zIndex: 2,
					background: `${backgroundColor}`,

					backgroundImage: `url(${backgroundImage})`,
					backgroundPosition: 'center',
					width: '100%',
					transition: 'visibility 1s, opacity 1s',
					visibility: showTitle ? 'visible' : 'hidden',
					opacity: showTitle ? 0.85 : 0,
					// marginBottom: '5em',
				}}>
				<Typography variant='h4' color={'white'}>
					<Box
						style={{
							fontWeight: 'bold',
							stroke: 'black',
							strokeWidth: '2',
							// fontFamily: 'georgia',
						}}>
						{icon}
						{` ${title}`}
					</Box>
				</Typography>
				<Typography
					variant='h6'
					color={'white'}
					style={{ stroke: 'black', strokeWidth: '10', fontWeight: 'bold' }}>
					{subtitle}
				</Typography>
				{/* <p>Odio turpis amet sed consequat eget posuere consequat.</p> */}
			</Box>
			{/* <Box
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '20px',
				}}> */}
			{children}
			{/* </Box> */}

			<Box
				style={{
					transition: 'visibility 1s, opacity 1s',
					visibility: showButton ? 'visible' : 'hidden',
					opacity: showButton ? 1 : 0,
					position: 'sticky',
					marginTop: 'auto',
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					// alignContent: 'center',
					justifyContent: 'center',
					// height: 250,
					bottom: 0,
					//   left: Dimensions.get('window').width - 70,
					// marginTop: 350,
					zIndex: 3,
					// border: 'solid 1px black',
				}}>
				{/* <p>{footerText}</p> */}
				{/* <Link
					to={prevSectionName}
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>
					<Fab variant='extended' color='primary' aria-label='add'>
						{prevSectionButtonLabel}
						<ArrowCircleUpTwoToneIcon />
					</Fab>
				</Link>
				<Link
					to={sectionName}
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>
					<Fab variant='extended' color='primary' aria-label='add'>
						<PinDropTwoToneIcon />
					</Fab>
				</Link> */}
				<Link
					// style={{
					// 	position: 'absolute',
					// 	bottom: 4,
					// }}
					to={nextSectionName}
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}>
					<Fab variant='extended' color='primary' aria-label='add'>
						{nextSectionButtonLabel}
						<ArrowCircleDownTwoToneIcon />
					</Fab>
				</Link>
				{/* <Fab>
					<Fab variant='extended' color='primary' aria-label='add'>
						<NavigationIcon sx={{ mr: 1 }} />
						<Link
							to={nextSectionName}
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}>
							{nextSectionButtonLabel}
							<ArrowDropDownCircleOutlinedIcon fontSize='large' />
						</Link>
					</Fab>
				</Fab> */}
			</Box>

			{/* <footer
				style={{ position: 'sticky', marginTop: 'auto', marginBottom: 60 }}>
				<p>{footerText}</p>
				<Link
					to={nextSectionName}
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
					className='button large scrolly'>
					{nextSectionButtonLabel}
					<ArrowDropDownCircleOutlinedIcon fontSize='large' />
				</Link>
			</footer> */}
		</Box>
	);
};

export default SectionBox;