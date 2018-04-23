import createTestContext from 'react-cosmos-test/enzyme'

import fixture from '../TableItem.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

describe('#TableItem', () =>
  it('renders component -> withImage', () => {
    expect(getWrapper()).toMatchSnapshot()
  })
)
