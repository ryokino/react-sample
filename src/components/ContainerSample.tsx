// Containerは赤背景のボックスの中にタイトルと子要素を表示します

// Containerのpropsの型を定義します
type ContainerProps = {
	title: string;
	children: React.ReactNode;
};

const Container = (props: ContainerProps): JSX.Element => {
	const { title, children } = props;
	return (
		<div style={{ background: 'red' }}>
			<span>{title}</span>
			{/* propsのchildernを埋め込むと、このコンポーネントの開始タグと閉じタグで囲んだ要素を表示する */}
			<div>{children}</div>
		</div>
	);
};

const Parent = (): JSX.Element => {
	return (
		// Container を使用する際に他の要素を囲って使用する
		<Container title='Hello'>
			<p>ここの部分が背景色で囲まれます</p>
		</Container>
	);
};

export default Parent;
