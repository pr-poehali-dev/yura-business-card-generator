import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useEffect, useState } from 'react';

const cards = [
  {
    id: 1,
    name: 'Алексей Петров',
    position: 'Frontend разработчик',
    company: 'Tech Solutions',
    image: 'https://cdn.poehali.dev/files/4b4097d8-c84b-417c-a3c3-cf2921ec3f6c.jpeg',
    email: 'alexey@example.com',
    phone: '+7 (999) 123-45-67',
    telegram: 'https://t.me/alexey',
    github: 'https://github.com/alexey'
  }
];

const generateCards = () => {
  const names = ['Алексей Петров', 'Мария Иванова', 'Дмитрий Смирнов', 'Елена Козлова', 'Иван Соколов', 'Анна Морозова', 'Павел Новиков', 'Ольга Волкова', 'Сергей Лебедев', 'Наталья Егорова'];
  const positions = ['Frontend разработчик', 'Backend разработчик', 'UI/UX дизайнер', 'Project Manager', 'DevOps инженер', 'Product Owner', 'QA инженер', 'Data Scientist', 'Mobile разработчик', 'Team Lead'];
  const companies = ['Tech Solutions', 'Digital Agency', 'Startup Hub', 'Innovation Labs', 'Code Factory', 'Web Studio', 'IT Company', 'Software House', 'Dev Team', 'Creative Agency'];
  
  const generated = [];
  for (let i = 1; i <= 1000; i++) {
    if (i === 1) {
      generated.push(cards[0]);
    } else {
      const nameIndex = Math.floor(Math.random() * names.length);
      const positionIndex = Math.floor(Math.random() * positions.length);
      const companyIndex = Math.floor(Math.random() * companies.length);
      generated.push({
        id: i,
        name: names[nameIndex],
        position: positions[positionIndex],
        company: companies[companyIndex],
        image: 'https://cdn.poehali.dev/files/4b4097d8-c84b-417c-a3c3-cf2921ec3f6c.jpeg',
        email: `${names[nameIndex].split(' ')[0].toLowerCase()}@example.com`,
        phone: `+7 (${900 + Math.floor(Math.random() * 100)}) ${100 + Math.floor(Math.random() * 900)}-${10 + Math.floor(Math.random() * 90)}-${10 + Math.floor(Math.random() * 90)}`,
        telegram: `https://t.me/${names[nameIndex].split(' ')[0].toLowerCase()}`,
        github: `https://github.com/${names[nameIndex].split(' ')[0].toLowerCase()}`
      });
    }
  }
  return generated;
};

const allCards = generateCards();

export default function BusinessCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState(allCards[0]);

  useEffect(() => {
    const cardId = parseInt(id || '1');
    if (cardId < 1 || cardId > 1000) {
      navigate('/card/1');
      return;
    }
    setCard(allCards[cardId - 1]);
  }, [id, navigate]);

  const goToNext = () => {
    const nextId = card.id === 1000 ? 1 : card.id + 1;
    navigate(`/card/${nextId}`);
  };

  const goToPrev = () => {
    const prevId = card.id === 1 ? 1000 : card.id - 1;
    navigate(`/card/${prevId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden border border-gray-100">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -mr-20 -mt-20"></div>
          
          <div className="flex flex-col items-center relative z-10">
            <div className="relative mb-6">
              <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-blue-500 shadow-xl">
                <img 
                  src={card.image} 
                  alt={card.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-3xl font-black text-center mb-2 text-gray-900">
              {card.name}
            </h1>
            
            <p className="text-lg text-blue-600 font-semibold mb-1">
              {card.position}
            </p>

            <p className="text-md text-gray-500 mb-8">
              {card.company}
            </p>

            <div className="w-full space-y-3 mb-6">
              <Button 
                className="w-full h-14 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href={`mailto:${card.email}`}>
                  <Icon name="Mail" size={20} className="mr-2" />
                  Написать Email
                </a>
              </Button>

              <Button 
                className="w-full h-14 text-base font-semibold rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href={`tel:${card.phone}`}>
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3 w-full mb-6">
              <Button 
                variant="outline"
                className="h-12 rounded-xl border-2 hover:bg-blue-50 transition-all duration-300"
                asChild
              >
                <a href={card.telegram} target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" size={18} className="mr-2" />
                  Telegram
                </a>
              </Button>

              <Button 
                variant="outline"
                className="h-12 rounded-xl border-2 hover:bg-gray-50 transition-all duration-300"
                asChild
              >
                <a href={card.github} target="_blank" rel="noopener noreferrer">
                  <Icon name="Github" size={18} className="mr-2" />
                  GitHub
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-between w-full pt-6 border-t border-gray-200">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrev}
                className="rounded-full h-12 w-12 border-2 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300"
              >
                <Icon name="ChevronLeft" size={24} />
              </Button>

              <span className="text-sm font-semibold text-gray-500">
                {card.id} / 1000
              </span>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full h-12 w-12 border-2 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300"
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
            className="text-gray-600 hover:text-gray-900"
          >
            <Icon name="Home" size={20} className="mr-2" />
            На главную
          </Button>
        </div>
      </div>
    </div>
  );
}
