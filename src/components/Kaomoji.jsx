import { useEffect, useState } from "react"

const Kaomoji = () => {
	const [num, setNum] = useState(0);
	const [faceShowFlag, setFaceShowFlag] = useState(true)

	const onClickVisibleButton = () => {
		setFaceShowFlag(!faceShowFlag)
	}

	const onClickCountUp = () => {
		setNum(num + 1);
		console.log(num);
	};

	useEffect(() => {
		console.log("user Effect!!!")
		if (num % 3 === 0) {
			faceShowFlag || setFaceShowFlag(true);
		} else {
			faceShowFlag && setFaceShowFlag(false);
		};
	}, [num])

	return (
		<>
			<button onClick={onClickCountUp}>カウントアップ</button>
			<p>{num}</p>
			<button onClick={onClickVisibleButton}>非表示ボタン</button>
			{ faceShowFlag && <p>(o^^o)</p> }
		</>
	)
}

export default Kaomoji;