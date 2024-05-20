import { useState, useRef, useEffect } from "react";
import Arrow from "../../Assets/arrow.png";

export default function Collapse(props) {
	const [toggle, setToggle] = useState(false); 
	const [maxHeight, setMaxHeight] = useState("0px"); 
	const toggleState = () => {
		setToggle(!toggle);
	};

	const refHeight = useRef(); 
	useEffect(() => {
		if (refHeight.current) {
			setMaxHeight(`${refHeight.current.scrollHeight}px`);
		}
	}, [toggle, refHeight.current ? refHeight.current.scrollHeight : 0]);

	return (
		<div className={`collapse ${props.aproposStyle}`}>
			<div onClick={toggleState} className="collapse_visible">
				<h2>{props.aproposTitle}</h2>
				<img
					className={toggle ? "chevron rotated" : "chevron"}
					src={Arrow}
					alt="chevron"
				/>
			</div>
			<div
				ref={refHeight}
				className="collapse_toggle animated"
				style={{ maxHeight: toggle ? maxHeight : "0px" }}
			>
				<div className="collapse_text" aria-hidden={toggle ? "false" : "true"}>
					{props.aproposText}
				</div>
			</div>
		</div>
	);
}


