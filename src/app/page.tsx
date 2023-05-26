import Header from '../components/Header';
import SearchBar from '@/components/SearchBar';
import Card from '@/components/Cards';

export default function Home() {
  return (
    <div className=' main-container bg-slate-800 h-screen max-h-screen'>
     <Header />
     <SearchBar/> 
     <Card />
    </div>
  )
};
