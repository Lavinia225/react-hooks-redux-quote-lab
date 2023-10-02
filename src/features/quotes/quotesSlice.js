// Action Creators
// TODO: Create action creators as defined in tests

// Reducer
const initialState = [];

export function addQuote(quote){
  return {
    type: "quotes/add",
    payload: quote
  }
}

export function removeQuote(quoteId){
  return {
    type: "quotes/remove",
    payload: quoteId
  }
}

export function upvoteQuote(quoteId){
  return {
    type: "quotes/upvote",
    payload: quoteId
  }
}

export function downvoteQuote(quoteId){
  return {
    type: "quotes/downvote",
    payload: quoteId
  }
}

export default function quotesReducer(state = initialState, action) {
  switch (action.type){
    case 'quotes/add':
      return [...state, action.payload]
    case 'quotes/remove':
      return state.filter(quote => quote.id !== action.payload)
    case 'quotes/upvote':
      return state.map(incrementVote)
    case 'quotes/downvote':
      return state.map(decrementVote)
    default:
      return state;
  }

  function incrementVote(quote){
    if (quote.id === action.payload){
      quote.votes += 1
      return quote
    }
    else{
      return quote
    }
  }

  function decrementVote(quote){
    if (quote.id === action.payload){
      if (quote.votes !== 0){
        quote.votes -= 1
      }
      return quote
    }
  }
}
