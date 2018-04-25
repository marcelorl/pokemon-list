import createTestContext from 'react-cosmos-test/enzyme'

import fixture from '../TablePagination.fixture'

const { mount, getWrapper, get } = createTestContext({ fixture })

beforeEach(mount)

describe('#TablePagination', () => {
  it('renders component', () => {
    expect(getWrapper()).toMatchSnapshot()
  })

  it('should run prev()', () => {
    getWrapper().find('PaginationLink').first().simulate('click')

    expect(get('props').prev).toBeCalled()
  })

  it('should run next()', () => {
    getWrapper().find('PaginationLink').last().simulate('click')

    expect(get('props').next).toBeCalled()
  })
})
