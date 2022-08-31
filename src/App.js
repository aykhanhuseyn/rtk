import { map } from 'lodash';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	countSelector,
	decrement,
	increment,
	reset,
	setCount,
} from './redux/counterSlice';
import { getUsers, usersSelector } from './redux/userSlice';

function App() {
	const count = useSelector(countSelector);
	const { data, isLoading, isSuccess } = useSelector(usersSelector);
	const dispatch = useDispatch();
	const ref = useRef();

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	return (
		<div>
			<div>
				<h1>INCREMENT</h1>
				<h1>count: {count}</h1>
				<button
					onClick={() => {
						dispatch(increment());
					}}
				>
					increment
				</button>
				<button
					onClick={() => {
						dispatch(decrement());
					}}
				>
					decrement
				</button>
				<button
					onClick={() => {
						dispatch(reset());
					}}
				>
					reset
				</button>
				<div>
					<input type='number' ref={ref} />
					<button
						onClick={() => {
							dispatch(setCount(ref.current.valueAsNumber ?? 0));
							ref.current.value = 0;
						}}
					>
						set
					</button>
				</div>
			</div>
			<br />
			<hr />
			<br />
			<div>
				{isLoading && 'isLoading...'}
				<ul>
					{isSuccess &&
						map(data, ({ id, name, phone, email }) => {
							return (
								<li key={id}>
									<h2>{name}</h2>
									<a href={`tel:${phone}`}>{phone}</a>
									<br />
									<a href={`mailto:${email}`}>{email}</a>
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
}

export default App;
