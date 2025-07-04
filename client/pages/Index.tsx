import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Settings,
  Beaker,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-50 py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F341de0278bc9410785e95edc71a80dc6%2F80083eb9cf564a55b2810d1c6ca49c65?format=webp&width=800"
                alt="Логотип МЧС России"
                className="w-20 h-20 object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-800 uppercase">
                ИСПЫТАТЕЛЬНАЯ ПОЖАРНАЯ ЛАБОРАТОРИЯ
              </h1>
              <p className="text-xs text-slate-600 uppercase">
                ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div className="text-right">
              <div className="flex items-center space-x-2 text-slate-800 font-bold">
                <Phone className="w-4 h-4" />
                <span>(812) 498-08-30</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-800 font-bold mt-1">
                <Mail className="w-4 h-4" />
                <span>ipl.spb@ipl.78.mchs.gov.ru</span>
              </div>
            </div>
            <Button variant="white" size="lg">
              Задать вопрос
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-darkest sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex space-x-8">
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                Жалобы и предложения
              </a>
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                Контакты
              </a>
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                Вакансии
              </a>
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                О лаборатории
              </a>
            </div>
          </div>
        </div>
        <div className="h-1 bg-orange-500"></div>
      </nav>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Service Card */}
            <div className="md:col-span-2 lg:col-span-1 lg:row-span-2">
              <div className="bg-blue-medium text-white p-8 rounded-lg h-full flex flex-col justify-between min-h-[400px]">
                <div>
                  <div className="w-32 h-40 mx-auto mb-6 bg-white/20 rounded-lg flex items-center justify-center">
                    <Beaker className="w-16 h-16" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">
                    Экспертная оценка автоматических систем противопожарной
                    защиты
                  </h3>
                </div>
                <div className="text-center">
                  <ArrowRight className="w-6 h-6 mx-auto" />
                </div>
              </div>
            </div>

            {/* Service Cards */}
            <div className="bg-white border-2 border-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="text-center">
                <div className="w-20 h-24 mx-auto mb-4 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Users className="w-10 h-10 text-blue-darkest" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-4">
                  Экспертиза пожаров
                </h3>
                <ArrowRight className="w-4 h-4 mx-auto text-slate-500 group-hover:text-blue-darkest transition-colors" />
              </div>
            </div>

            <div className="bg-white border-2 border-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="text-center">
                <div className="w-20 h-24 mx-auto mb-4 bg-slate-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-blue-darkest" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-4">
                  Оснащение
                </h3>
                <ArrowRight className="w-4 h-4 mx-auto text-slate-500 group-hover:text-blue-darkest transition-colors" />
              </div>
            </div>

            <div className="bg-white border-2 border-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="text-center">
                <div className="w-20 h-24 mx-auto mb-4 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-10 h-10 text-blue-darkest" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-4">
                  Экспертная оценка огнезащиты строительных конструкций
                </h3>
                <ArrowRight className="w-4 h-4 mx-auto text-slate-500 group-hover:text-blue-darkest transition-colors" />
              </div>
            </div>

            <div className="bg-white border-2 border-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="text-center">
                <div className="w-20 h-24 mx-auto mb-4 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Award className="w-10 h-10 text-blue-darkest" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-4">
                  Полезная информация
                </h3>
                <ArrowRight className="w-4 h-4 mx-auto text-slate-500 group-hover:text-blue-darkest transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Этапы работы
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { number: 1, title: "Письмо-заявка" },
              { number: 2, title: "Регистрация" },
              { number: 3, title: "Заключение договора" },
              { number: 4, title: "Проведение работ" },
              { number: 5, title: "Оформление протокола" },
              { number: 6, title: "Подписание акта" },
            ].map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                    <span className="text-2xl font-bold text-blue-darkest">
                      {step.number}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-600 max-w-24">
                    {step.title}
                  </p>
                </div>
                {index < 5 && (
                  <ArrowRight className="w-6 h-6 text-slate-500 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-r from-blue-darkest to-blue-medium">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Свяжитесь с нами
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Ваше имя"
              className="h-15 px-4 rounded-lg border-0 bg-white text-slate-800 placeholder-slate-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="(999) 999-99-99"
              className="h-15 px-4 rounded-lg border-0 bg-white text-slate-800 placeholder-slate-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Ваш вопрос"
              className="h-15 px-4 rounded-lg border-0 bg-white text-slate-800 placeholder-slate-500 focus:ring-2 focus:ring-orange-500 focus:outline-none"
            />
            <div className="md:col-span-3 text-center">
              <Button variant="orange" size="lg" className="px-12">
                ОТПРАВИТЬ
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Как нас найти
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-slate-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Контактная информация
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-darkest" />
                    <span className="font-semibold text-slate-800">
                      (812) 498-08-30
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-darkest" />
                    <span className="font-semibold text-slate-800">
                      ipl.spb@ipl.78.mchs.gov.ru
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4">
                  Для отправки документов и запросов
                </p>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400">
                <h4 className="font-bold text-slate-800 mb-2">Время работы</h4>
                <p className="text-slate-600">
                  Понедельник - Пятница: 9:00 - 18:00
                  <br />
                  Суббота - Воскресенье: выходной
                </p>
              </div>
            </div>

            <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center border-2 border-orange-500">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-darkest rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-2xl">📍</div>
                </div>
                <p className="text-slate-600 font-semibold">
                  Интерактивная карта
                </p>
                <p className="text-sm text-slate-600 mt-2">
                  Санкт-Петербург
                  <br />
                  Испытательна�� Пожарная Лаборатория
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="h-1 bg-orange-500"></div>
        <div className="bg-blue-darkest py-8">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div className="flex space-x-8">
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                Жалобы и предложения
              </a>
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                Контакты
              </a>
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                Вакансии
              </a>
              <a
                href="#"
                className="text-white font-bold hover:text-gray-200 transition-colors"
              >
                О лаборатории
              </a>
            </div>
            <div className="text-white/70 text-sm">
              © 2024 ФГБУ СЭУФПС ИПЛ по СПб
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
