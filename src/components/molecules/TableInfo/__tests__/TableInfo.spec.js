import createTestContext from 'react-cosmos-test/enzyme'

import fixture from '../TableInfo.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

describe('#TableInfo', () => {
  it('renders component', () => {
    expect(getWrapper()).toMatchSnapshot()
  })

  it('should have all data', () => {
    expect(getWrapper().find('thead th').text()).toEqual('Title')
    expect(getWrapper().find('tbody tr')).toHaveLength(3)
  })
})
