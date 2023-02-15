// import { useState } from 'react';

// type CounterProps = {
// 	initialValue: number;
// };

// useStateを使った場合

// カウントを保持する1つの状態をuseState()で宣言します。引数に初期値を指定します
// countが現在の状態、setCountが状態を更新する関数です。

// 	const [count, setCount] = useState(initialValue);

// 	return (
// 		<div>
// 			<p>Count: {count}</p>
// 			{/* setCountを呼ぶことで状態を更新します */}
// 			<button onClick={() => setCount(count - 1)}>-</button>
// 			<button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
// 		</div>
// 	);
// };

// export default Counter;

import { useReducer } from 'react';

// reducerが受け取るactionの型を定義します。
type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET';

// 現在の状態とactionに基づいて次の状態を返します
const reducer = (currentCount: number, action: Action) => {
	switch (action) {
		case 'INCREMENT':
			return currentCount + 1;
		case 'DECREMENT':
			return currentCount - 1;
		case 'DOUBLE':
			return currentCount * 2;
		case 'RESET':
			return 0;
		default:
			return currentCount;
	}
};

type CounterProps = {
	initialValue: number;
};

const Counter = (props: CounterProps) => {
	const { initialValue } = props;
	const [count, dispatch] = useReducer(reducer, initialValue);

	return (
		<div>
			<p>Count: {count}</p>
			{/* dispatch関数にactionを渡して、状態を更新します */}
			<button onClick={() => dispatch('DECREMENT')}>-</button>
			<button onClick={() => dispatch('INCREMENT')}>+</button>
			<button onClick={() => dispatch('DOUBLE')}>x2</button>
			<button onClick={() => dispatch('RESET')}>Reset</button>
		</div>
	);
};

export default Counter;
