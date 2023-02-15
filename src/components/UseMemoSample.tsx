import { useMemo, useState } from 'react';

export const UseMemoSample = () => {
	// textは現在のテキストボックスの中身の値を保持する
	const [text, setText] = useState('');
	// itmesは文字列のリストを保持する
	const [items, setItems] = useState<string[]>([]);

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value);
	};

	// ボタンをクリックした時に呼ばれる関数
	const onClickButton = () => {
		setItems((prevItems) => {
			// 現在の入力値をitemsに追加する、この時新しい配列を作成して保存する
			return [...prevItems, text];
		});
		// テキストボックスの中のあたうウィ空にする
		setText('');
	};

	// numberOfCharacters1は再描画のたびにitems.reduceを実行して結果を得る
	const numberOfCharacters1 = items.reduce(
		(sub, items) => sub + items.length,
		0
	);
	// numberOfCharacters2はuseMemoを使い、itemsが更新されるタイミングでitems.reduceを実行して結果を得る。
	const numberOfCharacters2 = useMemo(() => {
		return items.reduce((sub, item) => sub + item.length, 0);
		// 第二引数の配列の中に items があるので、itemsが新しくなった時だけ関数を実行してメモを更新しています
	}, [items]);

	return (
		<div>
			<p>UseMemoSample</p>
			<div>
				<input value={text} onChange={onChangeInput} />
				<button onClick={onClickButton}>Add</button>
			</div>
			<div>
				{items.map((item, index) => (
					<p key={index}>{item}</p>
				))}
			</div>
			<div>
				<p>Total Number of Character 1: {numberOfCharacters1}</p>
				<p>Total Number of Character 2: {numberOfCharacters2}</p>
			</div>
		</div>
	);
};
