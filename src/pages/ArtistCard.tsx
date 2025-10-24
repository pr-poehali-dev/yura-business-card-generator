import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useEffect, useState } from 'react';

const artists = [
  {
    id: 1,
    name: 'The Hatters',
    track: 'Важно',
    image: 'https://cdn.poehali.dev/files/4b4097d8-c84b-417c-a3c3-cf2921ec3f6c.jpeg',
    vk: 'https://vk.com/music',
    yandex: 'https://music.yandex.ru',
    mts: 'https://music.mts.ru'
  }
];

const generateArtists = () => {
  const names = ['The Hatters', 'Егор Крид', 'Zivert', 'Монеточка', 'Найтивыход', 'Скриптонит', 'Oxxxymiron', 'Би-2', 'Сплин', 'Кино'];
  const tracks = ['Важно', 'Голос', 'Vinyl #1', 'Раскраски', 'Где', 'Привычка', '2004', 'Нечётный воин', 'Гранатовый альбом', 'Группа крови'];
  
  const generated = [];
  for (let i = 1; i <= 1000; i++) {
    if (i === 1) {
      generated.push(artists[0]);
    } else {
      const nameIndex = Math.floor(Math.random() * names.length);
      const trackIndex = Math.floor(Math.random() * tracks.length);
      generated.push({
        id: i,
        name: names[nameIndex],
        track: tracks[trackIndex],
        image: 'https://cdn.poehali.dev/files/4b4097d8-c84b-417c-a3c3-cf2921ec3f6c.jpeg',
        vk: 'https://vk.com/music',
        yandex: 'https://music.yandex.ru',
        mts: 'https://music.mts.ru'
      });
    }
  }
  return generated;
};

const allArtists = generateArtists();

export default function ArtistCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artist, setArtist] = useState(allArtists[0]);

  useEffect(() => {
    const artistId = parseInt(id || '1');
    if (artistId < 1 || artistId > 1000) {
      navigate('/artist/1');
      return;
    }
    setArtist(allArtists[artistId - 1]);
  }, [id, navigate]);

  const goToNext = () => {
    const nextId = artist.id === 1000 ? 1 : artist.id + 1;
    navigate(`/artist/${nextId}`);
  };

  const goToPrev = () => {
    const prevId = artist.id === 1 ? 1000 : artist.id - 1;
    navigate(`/artist/${prevId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent rounded-full -mr-16 -mt-16 opacity-20"></div>
          
          <div className="flex flex-col items-center relative z-10">
            <div className="relative mb-6">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-black shadow-xl">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12">
                ВАЖНО
              </div>
            </div>

            <h1 className="text-4xl font-black text-center mb-2 tracking-tight">
              {artist.name}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 font-medium">
              {artist.track}
            </p>

            <div className="w-full space-y-3">
              <Button 
                className="w-full h-14 text-lg font-bold rounded-2xl bg-black hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href={artist.yandex} target="_blank" rel="noopener noreferrer">
                  Яндекс.Музыка
                </a>
              </Button>

              <Button 
                className="w-full h-14 text-lg font-bold rounded-2xl bg-black hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href={artist.vk} target="_blank" rel="noopener noreferrer">
                  VK Музыка
                </a>
              </Button>

              <Button 
                className="w-full h-14 text-lg font-bold rounded-2xl bg-black hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href={artist.mts} target="_blank" rel="noopener noreferrer">
                  МТС Музыка
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-between w-full mt-8 pt-6 border-t border-gray-200">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrev}
                className="rounded-full h-12 w-12 border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
              >
                <Icon name="ChevronLeft" size={24} />
              </Button>

              <span className="text-sm font-semibold text-muted-foreground">
                {artist.id} / 1000
              </span>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full h-12 w-12 border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
              >
                <Icon name="ChevronRight" size={24} />
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-muted-foreground hover:text-foreground"
          >
            <Icon name="Home" size={20} className="mr-2" />
            На главную
          </Button>
        </div>
      </div>
    </div>
  );
}