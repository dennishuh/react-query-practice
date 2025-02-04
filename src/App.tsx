import './App.css';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';

function App() {
	return (
		<>
			{/* <button onClick={() => setIsMounted((prev) => !prev)}> Toggle</button>
      {isMounted && <Posts />} */}
			{/* <PostById id={3} /> */}
			<CreatePost />
			<Posts />
		</>
	);
}

export default App;
