import Header from '../components/Header';
import Idea from '../components/Idea';
import Save from '../components/Save';
import Search from '../components/Search';

export default function Home() {
    return (
        <div>
            <Header />
            <Search />
            <Idea />
            <Save />
        </div>
    );
}
