import React, { useState } from 'react';

const ColorfullMessage = (props) => {
	const contentStyle = {
		color: props.color,
		fontSize: '20px'
	};


	return (
		<>
			<h1 style={contentStyle}>{ props.children }</h1>
			<h1>こんばんは</h1>
			{/* <button onClick={onClickCountUp}>カウントアップボタン</button> */}
			{/* <p>{ num }</p> */}
			{/* { faceShowFlag && <p>(o^^o)</p> } */}
		</>
	);
}

export default ColorfullMessage;
