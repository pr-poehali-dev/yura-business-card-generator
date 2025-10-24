import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Index() {
  const navigate = useNavigate();
  const [artistId, setArtistId] = useState('1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = parseInt(artistId);
    if (id >= 1 && id <= 1000) {
      navigate(`/card/${id}`);
    }
  };

  const handleRandom = () => {
    const randomId = Math.floor(Math.random() * 1000) + 1;
    navigate(`/card/${randomId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-2xl flex items-center justify-center">
              <Icon name="Contact" size={64} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-6xl font-black mb-4 tracking-tight">
            Визитки
          </h1>
          
          <p className="text-xl text-gray-400 mb-2">
            1000 страниц
          </p>
          
          <p className="text-lg text-gray-500">
            С контактами и ссылками
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="artistId" className="block text-sm font-semibold mb-2 text-gray-300">
                Введите номер визитки (1-1000)
              </label>
              <Input
                id="artistId"
                type="number"
                min="1"
                max="1000"
                value={artistId}
                onChange={(e) => setArtistId(e.target.value)}
                className="h-14 text-lg bg-white/5 border-white/20 text-white placeholder:text-gray-500 rounded-xl"
                placeholder="Например: 42"
              />
            </div>

            <Button 
              type="submit"
              className="w-full h-14 text-lg font-bold rounded-xl bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:scale-105"
            >
              <Icon name="Search" size={20} className="mr-2" />
              Открыть визитку
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-transparent text-gray-400">или</span>
            </div>
          </div>

          <Button
            onClick={handleRandom}
            variant="outline"
            className="w-full h-14 text-lg font-bold rounded-xl border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <Icon name="Shuffle" size={20} className="mr-2" />
            Случайная визитка
          </Button>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4">
          <Button
            onClick={() => navigate('/card/1')}
            className="h-20 rounded-2xl bg-black/50 hover:bg-black border border-white/20 backdrop-blur transition-all duration-300 hover:scale-105"
          >
            <div className="text-center">
              <div className="text-2xl font-black">1</div>
              <div className="text-xs text-gray-400">Первый</div>
            </div>
          </Button>

          <Button
            onClick={() => navigate('/card/500')}
            className="h-20 rounded-2xl bg-black/50 hover:bg-black border border-white/20 backdrop-blur transition-all duration-300 hover:scale-105"
          >
            <div className="text-center">
              <div className="text-2xl font-black">500</div>
              <div className="text-xs text-gray-400">Середина</div>
            </div>
          </Button>

          <Button
            onClick={() => navigate('/card/1000')}
            className="h-20 rounded-2xl bg-black/50 hover:bg-black border border-white/20 backdrop-blur transition-all duration-300 hover:scale-105"
          >
            <div className="text-center">
              <div className="text-2xl font-black">1000</div>
              <div className="text-xs text-gray-400">Последний</div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}