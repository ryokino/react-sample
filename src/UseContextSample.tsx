import React from 'react';
import { useContext } from 'react';

type User = {
	id: number;
	name: string;
};

// ユーザーデータを保持する Context を作成する
const UserContext = React.createContext<User | null>(null);

const GrandChild = () => {
	// useContext に Context を渡すことで、 Context から値を取得する

	const user = useContext(UserContext);

	return user !== null ? <p>Hello, {user.name}</p> : null;
};

const Child = () => {
	const now = new Date();

	return (
		<div>
			<p>Current: {now.toLocaleString()}</p>
			<GrandChild />
		</div>
	);
};

export const UseContextSample = () => {
	const user: User = {
		id: 1,
		name: 'Ryo',
	};

	return (
		// Context に値を渡す
		<UserContext.Provider value={user}>
			<Child />
		</UserContext.Provider>
	);
};
