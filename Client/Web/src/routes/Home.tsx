import Header from '../components/Header';
import Idea from '../components/Idea';
import Join from '../components/Join';
import Run from '../components/Run';
import Save from '../components/Save';
import Search from '../components/Search';

export default function Home() {
    return (
        <div>
            <Header />
            <Search />
            <Idea />
            <Save />
            <Run />
            <Join />
        </div>
    );
}
