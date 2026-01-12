import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    guests: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за подтверждение!",
      description: "Мы получили вашу заявку и свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', guests: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      <section className="min-h-screen flex items-center justify-center px-4 animate-fade-in">
        <div className="text-center max-w-3xl">
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center animate-scale-in">
              <Icon name="Heart" size={32} className="text-primary" />
            </div>
            <h1 className="text-6xl md:text-8xl font-cormorant font-light mb-4">
              Анна & Михаил
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light mb-8">
              Приглашаем вас разделить с нами<br />самый важный день нашей жизни
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-lg">
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={20} className="text-primary" />
              <span>15 июня 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={20} className="text-primary" />
              <span>16:00</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 shadow-lg animate-fade-in">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-cormorant mb-4">Детали торжества</h2>
                <p className="text-muted-foreground">Все важные подробности в одном месте</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <Icon name="Church" size={24} className="text-secondary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-cormorant text-2xl mb-2">Церемония</h3>
                      <p className="text-muted-foreground">16:00 - 17:00</p>
                      <p className="text-sm mt-1">Парк Сокольники, Павильон "Ротонда"</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <Icon name="Camera" size={24} className="text-secondary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-cormorant text-2xl mb-2">Фотосессия</h3>
                      <p className="text-muted-foreground">17:30 - 18:30</p>
                      <p className="text-sm mt-1">Аллея парка</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <Icon name="UtensilsCrossed" size={24} className="text-secondary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-cormorant text-2xl mb-2">Банкет</h3>
                      <p className="text-muted-foreground">19:00 - 23:00</p>
                      <p className="text-sm mt-1">Ресторан "Бельканто", ул. Тверская, 15</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <Icon name="Music" size={24} className="text-secondary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-cormorant text-2xl mb-2">Танцы</h3>
                      <p className="text-muted-foreground">23:00 - 02:00</p>
                      <p className="text-sm mt-1">После торжественной части</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-transparent to-purple-50/50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-cormorant mb-4">Подтверждение присутствия</h2>
            <p className="text-muted-foreground">
              Пожалуйста, подтвердите свое участие до 1 июня
            </p>
          </div>

          <Card className="shadow-lg animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Петров"
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Количество гостей</label>
                  <Input
                    type="number"
                    min="1"
                    max="5"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    placeholder="2"
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Пожелания и комментарии</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Есть ли у вас особые пожелания или ограничения в питании?"
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full h-12 text-base">
                  Подтвердить участие
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-cormorant mb-4">Полезная информация</h2>
            <p className="text-muted-foreground">Как добраться и где остановиться</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="font-cormorant text-2xl mb-3">Как добраться</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Парк находится в 5 минутах ходьбы от метро "Сокольники"
                </p>
                <p className="text-sm">
                  <strong>На авто:</strong> координаты для навигатора<br />
                  55.791887, 37.673752
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Icon name="Car" size={24} className="text-primary" />
                </div>
                <h3 className="font-cormorant text-2xl mb-3">Парковка</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Бесплатная парковка для гостей
                </p>
                <p className="text-sm">
                  Парковочные места расположены на территории парка и у ресторана. Вместимость до 50 автомобилей.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Icon name="Hotel" size={24} className="text-primary" />
                </div>
                <h3 className="font-cormorant text-2xl mb-3">Отели</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Рекомендуемые отели поблизости
                </p>
                <div className="text-sm space-y-1">
                  <p><strong>Sokolniki Hotel</strong> - 500м</p>
                  <p><strong>Park Inn</strong> - 1.2км</p>
                  <p><strong>Holiday Inn</strong> - 1.5км</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      <footer className="py-12 text-center px-4">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
            <Icon name="Heart" size={32} className="text-primary" />
          </div>
          <p className="text-lg text-muted-foreground mb-2">
            С нетерпением ждём встречи с вами!
          </p>
          <p className="text-sm text-muted-foreground">
            По всем вопросам: +7 (999) 123-45-67
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
