import Adapter from 'enzyme-adapter-react-16'
import { configure } from 'enzyme'
import 'jest-enzyme'
import 'jest-localstorage-mock'

configure({ adapter: new Adapter() })
