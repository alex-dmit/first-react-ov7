import './App.css';
import List from './components/List'
import Counter from './components/Counter';
const posts = [
  {
    id: 1,
    title: 'My First Post',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    author: 'John Doe',
    date: '2022-02-19',
    tags: ['coding', 'javascript', 'web development']
  },
  {
    id: 2,
    title: 'Tips for React Development',
    body: 'Here are some tips for developing React applications...',
    author: 'Jane Smith',
    date: '2022-02-18',
    tags: ['react', 'frontend']
  },
  {
    id: 3,
    title: 'Why I Switched to TypeScript',
    body: 'After years of using plain JavaScript, I finally switched to TypeScript...',
    author: 'Bob Johnson',
    date: '2022-02-17',
    tags: ['typescript', 'javascript', 'programming']
  },
];

function App() {
  return (
    <div className="App">
      <h1>Posts</h1>
      {/* <Counter /> */}
      <List list={posts}/>
    </div>
  );
}

export default App;
