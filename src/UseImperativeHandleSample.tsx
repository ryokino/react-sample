import React, { useImperativeHandle, useRef } from 'react';
import { useState } from 'react';

const Child = React.forwardRef((props, ref) => {
	const [message, setMessage] = useState<string | null>(null);

	// useImperativeHandle で親の ref から参照できる値を指定
	useImperativeHandle(ref, () => ({
		showMessage: () => {
			const date = new Date();
			const message = `Hello, it's ${date.toLocaleDateString()}`;
			setMessage(message);
		},
	}));
	return <div>{message !== null ? <p>{message}</p> : null}</div>;
});

export const UseImperativeHandleSample = () => {
	const childRef = useRef<{ showMessage: () => void }>(null);
	const onClick = () => {
		if (childRef.current !== null) {
			// 子のuseImperativeHandleで指定した値を参照
			childRef.current.showMessage();
		}
	};

	return (
		<div>
			<button onClick={onClick}>Show Message</button>
			<Child ref={childRef} />
		</div>
	);
};
