import TableItem from './TableItem'
import image from './1.png'

export default {
  component: TableItem,
  props: {
    image,
    name: 'pikachu'
  },
  url: '/charizard',
  route: '/:pokemon'
}
