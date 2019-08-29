import uuid from 'uuid4'
import { getOrderId } from '../../utils/order'

const newCheckoutFrame = () => ({
  type: 'NEW_CHECKOUT_FRAME',
  stackId: uuid(),
})

const setCheckoutFrameQuery = ({ makerToken, takerToken, makerAmount, takerAmount }, { side, specifiedAmount }) => ({
  type: 'SET_CHECKOUT_FRAME_QUERY',
  query: { makerToken, takerToken, makerAmount, takerAmount },
  queryContext: { side, specifiedAmount },
})

const fillFrameBestOrder = () => ({
  type: 'FILL_FRAME_BEST_ORDER',
})

const selectCheckoutFrameOrder = order => ({
  type: 'SELECT_CHECKOUT_FRAME_ORDER',
  orderId: getOrderId(order),
})

export { newCheckoutFrame, setCheckoutFrameQuery, fillFrameBestOrder, selectCheckoutFrameOrder }
