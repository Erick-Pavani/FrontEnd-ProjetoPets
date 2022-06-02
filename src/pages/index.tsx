import type { NextPage } from 'next'
import Title from '../ui/components/title/Title';
import Lista from '../ui/components/Lista/Lista';

const Home: NextPage = () => {
  return (
    <div>
      <Title
        title=''
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>} />
      <Lista
        pets={[
          {
            id: 1,
            nome: "Lilica",
            historia: 'Lilica foi encontrada no meio de uma tempestade de madrugada e na chuva, muito debilitada, foi cuidada pela instituição Luisa Mel e aguarda ansiosamente por uma nova família desde então.',
            foto: 'https://www.correio24horas.com.br//fileadmin/_processed_/a/f/csm_doguinhodeterno_5a6fca5da3.jpg'
          },
          {
            id: 2,
            nome: "Rex",
            historia: 'Filhotinho de Husky mui fófis cuti cuti',
            foto: 'https://i0.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2021/04/pexels-photo-3726315.jpeg?resize=1000%2C667&ssl=1'
          }
        ]}
      ></Lista>
    </div >
  )
}

export default Home
