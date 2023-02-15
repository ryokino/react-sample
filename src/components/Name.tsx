// 名前を入力するためのテキストボックスを返す
const Name = () => {
	// input要素のonChangeイベントに対するコールバック関数を定義する
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// 入力されたテキストをコンソールに表示する
		console.log('e.target.value :>> ', e.target.value);
	};

	return (
		// styleオブジェクトのキーはキャメルケースになる
		<div style={{ padding: '16px', backgroundColor: 'gray' }}>
			{/* for の代わりにhtmlForを使う */}
			<label htmlFor='name'>名前</label>
			{/* classやonChangeの代わりにclassNameやonChangeを使います */}
			<input id='name' className='input-name' type='text' onChange={onChange} />
		</div>
	);
};

export default Name;
