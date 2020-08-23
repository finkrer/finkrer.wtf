import Layout from 'layout/Layout'

const Index = () => (
  <Layout title="finkrer.wtf" description="My cool personal website">
    <article>
      <h2>Это что такое вообще?</h2>
      <p>Мой сайт! Здесь я буду размещать фото своих котов.</p>

      <h2>Зачем тебе сайт?</h2>
      <p>
        Надо же как-то использовать бесплатный сервер. Пусть отдает вот эту
        страничку! Домен тоже бесплатный, кстати. А еще тут я могу
        экспериментировать с новейшими веб-технологиями!
      </p>

      <h2>Какими такими технологиями?</h2>
      <h3>Анальное шифрование</h3>
      <p>
        Используются последние достижения криптографии. Рейтинг SSL Labs &mdash;
        A+! Гугл плачет и завидует такому уровню сесурити со своим B.
        Современный протокол TLSv1.3 защищает сайт не только от атак
        злоумышленников, но и от пользователей IE.
      </p>

      <h3>Темная тема</h3>
      <p>
        Если ваш браузер посылает prefers-color-scheme. На Android 10 точно
        работает.
      </p>

      <h3>Почта</h3>
      <p>Можно посылать сюда почту. Она придет мне. Зачем? Я не знаю.</p>

      <h3>Коты в webp</h3>
      <p>
        Если у вас не Safari. У кого Safari &mdash; будете смотреть в JPEG. Если
        расстроились, вспомните про пользователей IE.
      </p>
    </article>
  </Layout>
)

export default Index
