import createTestContext from 'react-cosmos-test/enzyme'

import fixture from '../Stats.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

describe('#Stats', () => {
  it('renders component', () => {
    expect(getWrapper()).toMatchSnapshot()
  })

  it('should have 3 progress bars', () => {
    expect(getWrapper().find('Progress')).toHaveLength(3)
  })
})
